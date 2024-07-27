const Title = (props: {text: string}) => {
    return (
        <h1 className='text-center text-xl font-bold text-slate-500'>
            {props.text}
        </h1>
    );
};

export default Title;