type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    textLabel: string;
}

const FormInput = (props: FormInputProps) => {
    const {textLabel, ...defaultProps }= props;
    return (
        <div className='flex flex-col py-2'>
            <label className='font-bold text-left p-2'>{props.textLabel}</label>
            <input className='border rounded-lg p-2 bg-slate-200' {...defaultProps} />
        </div>
    );
};

export default FormInput;
  

  