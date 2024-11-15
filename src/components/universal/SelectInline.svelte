<script lang="ts">
    import { ChevronRightIcon, ChevronDownIcon } from "svelte-feather-icons"
    type Props = {
        title: string
        data: { value: string | number; display: string }[]
        value: string | number
    }
    let { title = "", data = $bindable(), value = $bindable() }: Props = $props()

    let toggled = $state(false)
</script>

<label>
    <div class={toggled ? "max-w-fit" : " max-w-full"}>
        <div>
            <span>
                <div>
                    <div>Skriť/ukázať všetky výbery</div>
                    <input bind:checked={toggled} type="checkbox" />
                    <ChevronRightIcon />
                    <ChevronDownIcon />
                    <span>
                        {title}:
                    </span>
                </div>
            </span>
            {#if toggled}
                <div>
                    <div>
                        {data.find(e => e.value == value)?.display}
                    </div>
                </div>
            {/if}
            {#if !toggled}
                <div>
                    <div>[Ľavá myš] pre výber</div>
                    <select size={2} bind:value>
                        {#each data || [] as entry}
                            <option value={entry.value}>
                                {entry.display}
                            </option>
                        {/each}
                    </select>
                </div>
            {/if}
        </div>
    </div>
</label>
