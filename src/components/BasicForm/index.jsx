import { useForm } from 'react-hook-form';

const BasicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // 可以使用 register 所註冊的名字確認數值

  return (
    /* "handleSubmit" 會在 onSubmit 之前確認是否有錯誤訊息" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 透過 "register" 加上對應名稱，將欄位註冊到 useForm 當中 */}
      <input defaultValue='test' {...register('example')} />

      {/* 若需要設定為必填或要添加 「正規表達式」等，需在後方新增內容 */}
      <input {...register('exampleRequired', { required: true })} />

      {/* 錯誤訊息可使用短路求值的方式顯示  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
};

export default BasicForm;
