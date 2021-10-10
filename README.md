### Scenario
Rollup treeshake is not working, when a `plugin.resolveId` return with `moduleSideEffects: false`.

### Expected
```sh
$ env WORKAROUND_ROLLUP_4239=1 rollup -c

index.js → stdout...
{
  console.log(true);
}
```

### Actual
```sh
$ env rollup -c

index.js → stdout...
const isNode = true;

if (isNode) {
  console.log(true);
} else {
  console.log(false);
}
```
