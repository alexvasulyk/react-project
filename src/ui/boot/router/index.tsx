import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../../pages/home/Home';
  import Profile from '../../pages/profile/Profile';

 // Класи потрібно називати з великою букви камелкейсом
 // Краще використовувати функціональні кномпоненти 
export default class index extends Component {
    render() {
        return (
            <div>
                // Router повинен бути на найвищому рівні (бувають вийнятки, але в даному випадку так)
                <Router>
                    <div>
                        // У роутері не потрібно тримати лінки на навігацію
                        // Як правило в тебе має бути якась окрема менюшка в якій є багато кнопочок для навігації і там ти вже юзаєш лінки, В цьогму файлі суто має бути прописаний роутар та роути
                        <nav>
                            <ul>
                                <li><Link to='/Home'>Home</Link></li>
                                <li><Link to='/Profile'>Profile</Link></li>
                            </ul>
                        </nav>
                        // Коли ти винесеш це на найвищий рівень, в тебе мусить бути заданий якийсь дефолтний роут, який буде відображатися під час першого входу на сторінку (як правило шлях до нього це просто /)                        
                        <Switch>
                            <Route path='/Home'>
                                <Home/>
                            </Route>
                            <Route path='/Profile'>
                                <Profile/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

