import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

// pages
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/shop.component'

// selectors
import {selectCurrentUser} from './redux/user/user.selectors'

// components
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

const Router = ({currentUser, signOut, getUser}) => (
    <>
        <Header signOut={signOut}/>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={ () => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage getUser={getUser}/> }  />
        </Switch>
    </>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser 
})

export default connect(mapStateToProps)(Router);