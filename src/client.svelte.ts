import type { CheckoutLine } from "#generated/graphql"
import { connect } from "#scripts/connect"

export const _gql_client = $state(connect({ cache: true }))
export const _show_added_to_cart_modal = $state(false)
