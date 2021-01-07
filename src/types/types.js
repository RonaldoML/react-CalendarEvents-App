

//1. Crear tipos para los reducers
export const types = {

    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    eventLogout: '[event] Logout event',
    eventSetActive: '[event] Set Active',
    eventSetInactive: '[event] Set Inactive',
    eventAddNew: '[event] Add new',
    eventStartAddNew: '[event] Start Add new',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted',
    eventLoader: '[event] Event loading',

    authCheckingFinish: '[auth] Finish Checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',
}