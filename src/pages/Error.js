import classes from "./Error.module.css";

const Error = () => {
    return (
        <div className={classes.error}>
            <h1>Page Not Found</h1>
            <p>This page does not exist</p>
        </div>
    );
}

export default Error;