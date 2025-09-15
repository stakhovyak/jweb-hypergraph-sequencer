# JWeb Hypergraph sequencer

Meant to be used inside of MaxMSP's web/jweb module, though tested inside a
regular browser only so far.

## About nodes

The idea of the sequencer is to get the information from flooding the hypergraph
recursively. Each node of the hypergraph has `delay`, which defines the delay
before the impulse of the flood proceeds to the next node, and `message`
property, which is a text string to be outputted when certain node is active.

## What left unimplemented?

Basically, i haven't added any max api bindings to that to get the messages from
the max, but it can be easilly implemented, there are already an active node
callback present, which, so far, only used for the graph traverse visualization,
but other functionality might be easy to add! You can tweak it on 547 line.

## WARNING!

Although the algorithm and the architecture are made all by myself, i've used
GPT to generate the D3 visualization, sorry for that, i usually struggle to code
frontend and visuals, that's why the code might look a bit fringy and messy,
that's because it is mixed up with some dirty nasty gpt code

## How to use it

I believe you can just click on the HTML file to open it inside your browser, or start it with the bash command

```bash
deno run --allow-net -allow-read --watch serve.ts
```
## How to insert a custom graph?

For that, you must fill up the `rawHypergraph` variable on 227 line
