import json
from bs4 import BeautifulSoup
import requests

url = "https://www.russianfood.com/recipes/recipe.php?rid=174470"
response = requests.get(url)

if response.status_code == 200:
        # Создаем объект BeautifulSoup для парсинга HTML
        soup = BeautifulSoup(response.text, 'lxml')
        image = soup.find('div',class_='step_images_n').find_all('img')
        p = soup.find('div',class_='step_images_n').find_all('p')
        image_links = []
        text_text = []
        for img in image:
            if 'src' in img.attrs:
                image_links.append("https:"+img['src'])
               
        for text in p:
            text_text.append(text.text)
        for link in image_links:
            print(link)
       # for text in text_text:
      #      print(text)


        list = {
            "text":text_text,
            "img":image_links
        }
        with open("data.json","w",encoding = "utf-8") as json_file:
            json.dump(list,json_file,ensure_ascii=False,indent=4)
