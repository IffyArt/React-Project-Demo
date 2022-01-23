import { useForm } from 'react-hook-form';

const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='email'
        {...register('email', { required: '帳號為必填欄位', maxLength: 80 })}
      />
      {/* 錯誤訊息可使用短路求值的方式顯示  */}
      {errors.email && errors.email.message}
      <input
        type='password'
        placeholder='password'
        {...register('password', {
          required: '密碼為必填欄位',
          min: 8,
          maxLength: 100,
        })}
      />
      {/* 錯誤訊息可使用短路求值的方式顯示  */}
      {errors.password && errors.password.message}

      <input type='submit' />
    </form>
  );
};

export default BasicForm;