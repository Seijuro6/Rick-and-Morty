import '../Form/Form.module.css' 

const Form = () => {

    return(
    <>
    <div className='detail'>
        <form action="">
            <label htmlFor="username">username</label>
            <input type="text" />

            <label htmlFor="password">password</label>
            <input type="text" />

            <button>Login</button>
        </form>
    </div>
    </>
    )
}

export default Form;
