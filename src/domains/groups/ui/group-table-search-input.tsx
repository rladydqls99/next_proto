import { Input } from "@/shared";

type PropsType = {
  value: string;
  onChange: (value: string) => void;
};
const GroupTableSearchInput = ({ value, onChange }: PropsType) => {
  return (
    <Input
      type="text"
      placeholder="검색어를 입력해주세요."
      className="w-full max-w-200"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default GroupTableSearchInput;
