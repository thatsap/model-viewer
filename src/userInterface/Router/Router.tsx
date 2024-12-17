import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Developer } from "../../pages/developer";
import { NotFound } from "../../pages/notFound";
import { User } from "../../pages/user";

export const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NotFound />} />
                <Route path="/developer" element={<Developer />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </BrowserRouter>
    )
}
