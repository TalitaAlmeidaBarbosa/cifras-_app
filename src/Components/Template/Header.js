import './Header.css';

export default function Header(props)
{
    return(
        <header className="header">
            <h2>{props.children}</h2>
        </header>
    )
}