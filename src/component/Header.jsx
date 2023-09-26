let loginStatus = (status) => {
    if(status === true){
        return <button>LogOut</button>
    } else {
        return <button>LogIn</button>
    }
}

const Header = () => {
    return(
        <>
            {loginStatus(false)}
        </>
    );
};

export default Header;