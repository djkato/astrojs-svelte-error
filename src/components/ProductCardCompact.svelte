<script lang="ts">
    type Props = { product: any }
    let { product }: Props = $props()
</script>

<div>
    <div>
        <a href={`/place`}>
            {#if product}
                something is here
            {/if}
        </a>
        <div>
            <a href={`/place`}>
                {name}
            </a>
            {#if product?.variants}
                <div></div>
            {:else}
                <div>
                    <span>Produkt nedostupný</span>
                </div>
            {/if}
        </div>
    </div>
    <div></div>
</div>
