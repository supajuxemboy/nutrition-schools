/**
 * Esyoh publisher unit for this domain.
 *
 * Widget IDs are scoped to a single domain: a unit created for another site
 * returns no inventory here, verified against the live loader. So this stays
 * empty until a unit is created for nutritionschools.org in the Esyoh publisher
 * dashboard, and every EsyohWidget on the site renders nothing at all while it
 * is empty. That way the markup can ship now and the units go live the moment
 * the real ID is pasted in, with no empty sponsored boxes in the meantime.
 */
export const ESYOH_DOMAIN_ID = 'nutritionschools.org';
export const ESYOH_WIDGET_ID = '';
