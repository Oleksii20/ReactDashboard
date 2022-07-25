import { useLocation } from "react-router-dom";

function UserPage() {
    const {pathname} = useLocation();

    return (
        <p>{pathname} page</p>
    );
}

export default UserPage;