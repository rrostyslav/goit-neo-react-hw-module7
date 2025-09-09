import css from './ContactForm.module.css';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '@/redux/contactsSlice';
import validationSchema from './validation';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleAddContact}
    >
      {({ handleSubmit, errors, touched }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <Field name="name">
            {({ field }) => (
              <Input
                {...field}
                label="Name"
                placeholder="Enter name"
                error={touched.name && errors.name ? errors.name : ''}
              />
            )}
          </Field>
          <Field name="number">
            {({ field }) => (
              <Input
                {...field}
                label="Number"
                placeholder="Enter number"
                error={touched.number && errors.number ? errors.number : ''}
              />
            )}
          </Field>
          <Button type="submit">Add contact</Button>
        </form>
      )}
    </Formik>
  );
}
