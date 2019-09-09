# README

A basic vuejs+vuetify application running on rails 5 via webpacker

# Running with docker

* `docker build -t vuejs-votes:latest .`
* `docker run --rm -p 3000:3000 vuejs-votes:latest`

Please note: depending on your local resources it may take a few moments before everything is ready.

When puma is ready you'll see something like:
```
15:20:49 backend.1  | Puma starting in single mode...
15:20:49 backend.1  | * Version 3.12.1 (ruby 2.6.3-p62), codename: Llamas in Pajamas
15:20:49 backend.1  | * Min threads: 5, max threads: 5
15:20:49 backend.1  | * Environment: development
15:20:49 backend.1  | * Listening on tcp://0.0.0.0:3000
```

When the frontend webpack server is ready:
```
15:21:01 frontend.1 | ℹ ｢wdm｣: Hash: 593d34ee762d247130eb
15:21:01 frontend.1 | Version: webpack 4.39.3
15:21:01 frontend.1 | Time: 14384ms
15:21:01 frontend.1 | Built at: 09/09/2019 3:21:01 PM
15:21:01 frontend.1 |                                       Asset      Size        Chunks             Chunk Names
15:21:01 frontend.1 |      js/application-20270f575a448e75e09d.js   505 KiB   application  [emitted]  application
15:21:01 frontend.1 |  js/application-20270f575a448e75e09d.js.map   569 KiB   application  [emitted]  application
15:21:01 frontend.1 |          js/landing-09290a765d091372f1d8.js  4.15 MiB       landing  [emitted]  landing
15:21:01 frontend.1 |      js/landing-09290a765d091372f1d8.js.map     4 MiB       landing  [emitted]  landing
15:21:01 frontend.1 |     js/poll_results-4d53d764fcc9943799a3.js  4.14 MiB  poll_results  [emitted]  poll_results
15:21:01 frontend.1 | js/poll_results-4d53d764fcc9943799a3.js.map  3.99 MiB  poll_results  [emitted]  poll_results
15:21:01 frontend.1 |        js/show_poll-e22a8437df63a75a011e.js  4.14 MiB     show_poll  [emitted]  show_poll
15:21:01 frontend.1 |    js/show_poll-e22a8437df63a75a011e.js.map  3.98 MiB     show_poll  [emitted]  show_poll
15:21:01 frontend.1 |                               manifest.json  1.31 KiB                [emitted]
15:21:01 frontend.1 | ℹ ｢wdm｣: Compiled successfully.
```


Once both processes are ready, you can visit [localhost:3000](http://localhost:3000) to view the app.


# Running outside of docker

If you want to run this outside of a docker environment. You'll need at least ruby 2.6 and rails 5+ installed.

Once those dependencies are met, clone this repository and run the following from the project root:

* `gem install foreman`
* `bundle install`
* `bundle exec rails db:migrate`
* `foreman start`


Then wait for the above output and visit [localhost:3000](http://localhost:3000) to view the app.
