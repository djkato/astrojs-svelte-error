<script lang="ts">
    import type { HTMLInputTypeAttribute } from "svelte/elements"

    type Props = {
        title?: string
        name?: string
        value?: string | undefined
        required?: boolean
        type?: HTMLInputTypeAttribute
        error?: { field: string; message: string } | undefined
        theme_inverse?: boolean
    }

    let { title = "", name = "", value = $bindable(), required = false, type = "text", error = $bindable(undefined), theme_inverse = false }: Props = $props()

    let is_correct = $state(true)
</script>

<div class={text_theme}>
    <label>
        <input {required} bind:value placeholder=" " {...{ type }} />
        <span>
            {title}{required ? "*" : ""}
        </span>
        <div></div>
    </label>

    {#if !is_correct}
        <span>{error_message}</span>
    {/if}
</div>
