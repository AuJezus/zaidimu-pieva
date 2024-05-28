import { createClient } from 'contentful';
import { env } from '~/env';


export const client = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_DELIVERY_TOKEN,
}).withoutUnresolvableLinks;