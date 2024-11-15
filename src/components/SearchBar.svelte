<script lang="ts">
    import type { ProductCountableEdge, SearchProductsQuery, SearchProductsQueryVariables } from "#generated/graphql"
    import { SearchIcon, XIcon } from "svelte-feather-icons"
    import { TextLine } from "./universal/TextLine.svelte"
    import { ProductCardCompact } from "./ProductCardCompact.svelte"

    let _search_text = $state("")

    let products = $state([])
    let timeout_handle: any

    $effect(() => {
        !_search_text
        if (timeout_handle) clearTimeout(timeout_handle)
        timeout_handle = setTimeout(() => search(), 200)
    })

    async function search() {
        if (_search_text.length < 4) {
            products = []
            return
        }
        products.push("hihi")
    }
</script>

<div>
    <XIcon />
    <div class="relative">
        <TextLine value={_search_text} type={"text"} title={"Čo hľadáte?"} name={"productSearch"} />
        <SearchIcon />
    </div>
    {#if products}
        <div>
            <div>
                {#each products as product}
                    <ProductCardCompact></ProductCardCompact>
                {/each}
                {#if products.length == 0}
                    <div>
                        <span>Nič sa nenašlo...</span>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>
