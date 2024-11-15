<script lang="ts">
    /* This error seems fine to ignore, it imports still fine
        ts: Module '"./universal/SelectInline.svelte"' has no exported member 'SelectInline'. Did you mean to use 'import SelectInline from "./universal/SelectInline.svelte"' instead?

        TypeScript Error Translation(s):
        • Something went wrong while translating your error. Please file an issue at https://github.com/dmmulroy/ts-error-translator.nvim and an example of the code that caused this error.
        [2614]
    */

    import { SelectInline } from "./universal/SelectInline.svelte"

    const data = [
        { display: "one", value: 1, icon_path: "/logo.svg" },
        { display: "two", value: 2 },
        { display: "three", value: 3 },
        { display: "four", value: 4 },
        { display: "five", value: 5 },
        { display: "six", value: 6 },
        { display: "seven", value: 7 },
        { display: "eight", value: 8 }
    ]

    let value_SelectInline = $state(data[1].value)

    $inspect(value_SelectInline)
</script>

<div>
    <SelectInline bind:value={value_SelectInline} title="Select One" {data} />
</div>
