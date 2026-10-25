//const prevents re assigning to the spacing obiect but allows for changing the values of the properties 
export const spacing = { 
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const; 
//as const makes the object readonly and prevents changing the values of the properties