import {ADMIN,MEMBER,STUDENT,MANAGER} from './roles'

const ROLES = [ADMIN,MEMBER,STUDENT,MANAGER]

const navigate = (router, authDetails) => {
    router.push('/dashboard');
}

export {navigate}