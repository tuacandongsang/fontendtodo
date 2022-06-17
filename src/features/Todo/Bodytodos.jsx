import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListLeftLearn from "./ListLeftLearn";
import ListRightLearn from "./ListRightLearn";
import styles from './Todo.module.scss'



function Bodytodos(props) {
    const { tittle, Img } = props
    return (
        <>
            <div className={styles.accessory}>
                <div>
                    <div className={styles.accessoryLink}>
                        <Nav.Link className={styles.accessoryLinkItem} as={Link} to="/home">TRANG CHỦ</Nav.Link>
                    </div>
                    <div>
                        <ListLeftLearn tittle={tittle} />
                    </div>
                </div>
                <div>
                    <ListRightLearn Img={Img} />
                </div>
            </div>
        </>
    )
}
export default Bodytodos;
