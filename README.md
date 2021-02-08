
# nuxt-whiterose

Module that automatically runs the [Casio F-91W beep][beep].

The same one used by [White Rose][white-rose] in [Mr. Robot][mr-robot].

![White rose](https://www.magicalquote.com/wp-content/uploads/2015/08/Every-hacker-has-her-fixation.-You-hack-people-I-hack-time.-So-you-should-know-that-when-I-set-a-time-line-theres-a-reason.jpg)

[white-rose]: https://mrrobot.fandom.com/wiki/Whiterose
[mr-robot]: https://en.wikipedia.org/wiki/Mr._Robot
[beep]: https://freesound.org/people/Koyber/sounds/160483/

```bash
npm i nuxt-whiterose --save
```

**Usage**:

```js
export default {
  buildModules: [
    'nuxt-whiterose',
  ],
  whiterose: {
    interval: 1, // 1min - default
    build: true, // run after build/rebuilds - default
  }
}
```
