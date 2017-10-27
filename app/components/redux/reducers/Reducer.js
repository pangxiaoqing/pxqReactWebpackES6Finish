import Account from './src/Account';

const config = {
    'account':Account
}

export default function(name){
    return config[name]['rootReducer']
}