'use client'
import { useState } from 'react';
import { TextField, MenuItem, Button, Stack, Typography, Paper, IconButton } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    theme: '',
    dishName: '',
    shortDescription: '',
    textDescription: '',
    ingredients: '',
    typeOfDish: '',
    nationalCuisine: '',
    purpose: '',
    typeOfPreparation: '',
    occasion: '',
    servings: '',
    caloriesPerServing: '',
    cookingTime: '',
    yourWishes: '',
    steps: [{ description: '', image: null }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (index, e) => {
    const steps = [...formData.steps];
    steps[index].image = e.target.files[0];
    setFormData({ ...formData, steps });
  };

  const handleStepChange = (index, e) => {
    const steps = [...formData.steps];
    steps[index].description = e.target.value;
    setFormData({ ...formData, steps });
  };

  const handleAddStep = () => {
    setFormData({ ...formData, steps: [...formData.steps, { description: '', image: null }] });
  };

  const handleRemoveStep = (index) => {
    const steps = [...formData.steps];
    steps.splice(index, 1);
    setFormData({ ...formData, steps });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Отправить рецепт
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            select
            label="Тема"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Тема 1">Тема 1</MenuItem>
            <MenuItem value="Тема 2">Тема 2</MenuItem>
          </TextField>
          <TextField
            label="Название блюда"
            name="dishName"
            value={formData.dishName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Краткое описание блюда"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Текстовое описание"
            name="textDescription"
            value={formData.textDescription}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
          <TextField
            label="Ингредиенты"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
          <TextField
            label="Тип блюда"
            name="typeOfDish"
            value={formData.typeOfDish}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Национальная кухня"
            name="nationalCuisine"
            value={formData.nationalCuisine}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Предназначение"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Тип приготовления"
            name="typeOfPreparation"
            value={formData.typeOfPreparation}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="По поводу"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Количество порций"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Калорийность 1 порции"
            name="caloriesPerServing"
            value={formData.caloriesPerServing}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Время приготовления"
            name="cookingTime"
            value={formData.cookingTime}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Ваши пожелания"
            name="yourWishes"
            value={formData.yourWishes}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
          {formData.steps.map((step, index) => (
            <div key={index}>
              <TextField
                label={`Шаг ${index + 1}`}
                value={step.description}
                onChange={(e) => handleStepChange(index, e)}
                multiline
                rows={2}
                fullWidth
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e)}
                style={{ marginTop: '8px' }}
              />
              <IconButton onClick={() => handleRemoveStep(index)}>
                <RemoveIcon />
              </IconButton>
              {index === formData.steps.length - 1 && (
                <IconButton onClick={handleAddStep}>
                  <AddIcon />
                </IconButton>
              )}
            </div>
          ))}
          <Button variant="contained" color="primary" type="submit">
            Сохранить
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default RecipeForm;
