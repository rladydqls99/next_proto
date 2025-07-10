type PropsType<T> = {
  list: T[];
  label: keyof T;
  value: keyof T;
};
export const useGetSelectOptions = <T>({ list, label, value }: PropsType<T>) => {
  return (
    list?.map(item => ({
      label: String(item[label]),
      value: String(item[value]),
    })) || []
  );
};
