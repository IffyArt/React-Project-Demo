import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';

const MemberCenterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { logout, user, editUserInfo, isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  const onSubmit = (data) => editUserInfo(data);
  if (!isLogin) return '請稍候';
  return (
    <article>
      <h3 className='container__title'>MemberCenterPage</h3>
      <ul>
        <li>
          <h4>使用者信箱：{user.email}</h4>
        </li>
      </ul>
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
        <input type='button' onClick={logout} value='登出按鈕' />
      </form>
    </article>
  );
};

export default MemberCenterPage;
