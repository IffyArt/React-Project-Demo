import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login, isLogin } = useAuth();

  useEffect(() => {
    if (isLogin) {
      navigate('/member-center');
    }
  }, [isLogin, navigate]);

  const onSubmit = (data) => login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='email'
        {...register('email', { required: '帳號為必填欄位', maxLength: 80 })}
      />
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
      {errors.password && errors.password.message}

      <input type='submit' />
    </form>
  );
};

export default LoginPage;
