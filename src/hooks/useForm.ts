import { useState, useCallback } from 'react';

export interface FormErrors {
  [key: string]: string;
}

export interface FormValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface FormField<T> {
  value: T;
  error: string | null;
  touched: boolean;
}

export interface FormState<T> {
  [key: string]: FormField<T>;
}

export interface UseFormReturn<T> {
  formState: FormState<T>;
  handleChange: (field: string, value: T) => void;
  handleBlur: (field: string) => void;
  validateField: (field: string) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  getFieldValue: (field: string) => T;
  getFieldError: (field: string) => string | null;
  isFieldTouched: (field: string) => boolean;
}

export const useForm = <T extends string | number>(
  initialValues: Record<string, T>,
  validations: Record<string, FormValidation>
): UseFormReturn<T> => {
  const [formState, setFormState] = useState<FormState<T>>(
    Object.keys(initialValues).reduce((acc, key) => ({
      ...acc,
      [key]: {
        value: initialValues[key],
        error: null,
        touched: false
      }
    }), {})
  );

  const validateField = useCallback((field: string) => {
    const value = formState[field].value;
    const validation = validations[field];
    let error: string | null = null;

    if (validation) {
      if (validation.required && !value) {
        error = 'Este campo é obrigatório';
      } else if (validation.minLength && String(value).length < validation.minLength) {
        error = `Mínimo de ${validation.minLength} caracteres`;
      } else if (validation.maxLength && String(value).length > validation.maxLength) {
        error = `Máximo de ${validation.maxLength} caracteres`;
      } else if (validation.pattern && !validation.pattern.test(String(value))) {
        error = 'Formato inválido';
      } else if (validation.custom) {
        error = validation.custom(String(value));
      }
    }

    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        error
      }
    }));

    return !error;
  }, [formState, validations]);

  const handleChange = useCallback((field: string, value: T) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
        touched: true
      }
    }));
  }, []);

  const handleBlur = useCallback((field: string) => {
    validateField(field);
  }, [validateField]);

  const validateForm = useCallback(() => {
    return Object.keys(formState).every(field => validateField(field));
  }, [formState, validateField]);

  const resetForm = useCallback(() => {
    setFormState(
      Object.keys(initialValues).reduce((acc, key) => ({
        ...acc,
        [key]: {
          value: initialValues[key],
          error: null,
          touched: false
        }
      }), {})
    );
  }, [initialValues]);

  const getFieldValue = useCallback((field: string) => {
    return formState[field].value;
  }, [formState]);

  const getFieldError = useCallback((field: string) => {
    return formState[field].error;
  }, [formState]);

  const isFieldTouched = useCallback((field: string) => {
    return formState[field].touched;
  }, [formState]);

  return {
    formState,
    handleChange,
    handleBlur,
    validateField,
    validateForm,
    resetForm,
    getFieldValue,
    getFieldError,
    isFieldTouched
  };
}; 