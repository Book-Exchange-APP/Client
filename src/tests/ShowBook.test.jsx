import '@testing-library/jest-dom'
import { render} from "@testing-library/react"
import ShowBook from "../components/ShowBook"
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../auth/AuthContext'



describe('ShowBook Component', () => {    
    let container

    beforeEach(function (){
        container = render(
        <BrowserRouter>
            <AuthContextProvider>
                <ShowBook />
            </AuthContextProvider>
        </BrowserRouter>
        ).container

    })

    it("Shows ", () => {

    })


})