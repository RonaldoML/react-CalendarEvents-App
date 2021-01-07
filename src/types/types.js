

//1. Crear tipos para los reducers
export const types = {

    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    eventSetActive: '[event] Set Active',
    eventSetInactive: '[event] Set Inactive',
    eventAddNew: '[event] Add new',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted',

    authCheckingFinish: '[auth] Finish Checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',
}