import './button.scss';
import Link from 'next/link';
interface ButtonProps {
    children: React.ReactNode;

}

const Button = ({ children}: ButtonProps) => {
    return 
    <button className="btn">{children}</button>
}

export default Button