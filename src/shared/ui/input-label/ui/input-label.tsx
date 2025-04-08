
interface iInputLabel {
  error: string;
  label: string;
}

const InputLabel = (props: iInputLabel) => {
  const { error, label } = props;

  return <label className={"text-white dark:text-additional font-regular text-sm w-fit transition-colors"}>{error ? error : label}</label>;
};

export default InputLabel;
