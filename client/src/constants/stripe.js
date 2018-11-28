const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_live_MY_PUBLISHABLE_KEY'
: '';

export default STRIPE_PUBLISHABLE;