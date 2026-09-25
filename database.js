const databaseVODs = [
{games:[{id:"Spyro2Reignited",start:"2023-04-02T11:51Z"},{id:"Spyro3Reignited",start:"2023-04-02T13:28Z"}],end:"2023-04-02T14:16Z",duration:144,hertz:30,lines:810,bitrate:4360},
{games:[{id:"Spyro3Reignited",start:"2023-04-09T11:30Z"}],end:"2023-04-09T15:07Z",duration:216,hertz:30,lines:810,bitrate:2380},
{games:[{id:"KuriKuriMix1",start:"2023-04-13T17:40Z"},{id:"Spyro1Reignited",start:"2023-04-13T18:03Z"}],end:"2023-04-13T21:39Z",duration:238,hertz:30,lines:720,bitrate:2380},
{games:[{id:"Spyro2Reignited",start:"2023-04-16T11:35Z"}],end:"2023-04-16T15:16Z",duration:220,hertz:30,lines:720,bitrate:2340},
{games:[{id:"KuriKuriMix1",start:"2023-04-18T13:55Z"}],end:"2023-04-18T17:23Z",duration:207,hertz:30,lines:720,bitrate:2420},
{games:[{id:"Spyro2Reignited",start:"2023-04-20T17:41Z"}],end:"2023-04-20T20:40Z",duration:178,hertz:30,lines:720,bitrate:2350},
{games:[{id:"Spyro3Reignited",start:"2023-04-23T11:55Z"}],end:"2023-04-23T15:04Z",duration:188,hertz:30,lines:720,bitrate:2420},
{games:[{id:"C3Racing",start:"2023-04-24T07:50Z"}],end:"2023-04-24T11:06Z",duration:195,hertz:25,lines:720,bitrate:2360},
{games:[{id:"KuriKuriMix1",start:"2023-04-25T13:51Z"}],end:"2023-04-25T16:49Z",duration:177,hertz:25,lines:720,bitrate:2400},
{games:[{id:"KulaWorld",start:"2023-04-26T06:52Z"}],end:"2023-04-26T10:00Z",duration:187,hertz:25,lines:720,bitrate:2390},
{games:[{id:"Spyro3Reignited",start:"2023-04-27T17:50Z"}],end:"2023-04-27T21:33Z",duration:222,hertz:30,lines:720,bitrate:2420},
{games:[{id:"Spyro3Reignited",start:"2023-04-29T09:50Z"}],end:"2023-04-29T12:01Z",duration:130,hertz:30,lines:720,bitrate:2430},
{games:[{id:"KulaWorld",start:"2023-04-30T11:50Z"}],end:"2023-04-30T14:09Z",duration:138,hertz:25,lines:720,bitrate:2410},
{games:[{id:"C3Racing",start:"2023-05-01T08:50Z"}],end:"2023-05-01T12:06Z",duration:195,hertz:25,lines:720,bitrate:2410},
{games:[{id:"C3Racing",start:"2023-05-02T08:51Z"}],end:"2023-05-02T11:55Z",duration:183,hertz:25,lines:720,bitrate:2400},
{games:[{id:"Spyro4ETD",start:"2023-05-04T17:56Z"},{id:"Spyro1",start:"2023-05-04T18:57Z"}],end:"2023-05-04T22:21Z",duration:264,hertz:25,lines:720,bitrate:2380},
{games:[{id:"Spyro1",start:"2023-05-05T17:50Z"}],end:"2023-05-05T20:32Z",duration:161,hertz:25,lines:720,bitrate:2380},
{games:[{id:"PonPonsBirthday",start:"2023-05-06T09:50Z"}],end:"2023-05-06T20:59Z",duration:668,hertz:25,lines:720,bitrate:3870},
{games:[{id:"NFS4RC",start:"2023-05-08T13:51Z"}],end:"2023-05-08T17:05Z",duration:193,hertz:25,lines:720,bitrate:4140},
{games:[{id:"NFS4RC",start:"2023-05-09T13:50Z"}],end:"2023-05-09T17:07Z",duration:196,hertz:30,lines:720,bitrate:4470},
{games:[{id:"TLOS1AMB",start:"2023-05-11T17:51Z"}],end:"2023-05-11T21:06Z",duration:194,hertz:30,lines:720,bitrate:4440},
{games:[{id:"TLOS1AMB",start:"2023-05-12T17:50Z"},{id:"HamsterBall",start:"2023-05-12T20:05Z"}],end:"2023-05-12T20:54Z",duration:183,hertz:30,lines:720,bitrate:4420},
{games:[{id:"TLOS1AMB",start:"2023-05-13T12:24Z"}],end:"2023-05-13T15:51Z",duration:206,hertz:25,lines:720,bitrate:4420},
{games:[{id:"DogsLife",start:"2023-05-14T11:55Z"}],end:"2023-05-14T16:51Z",duration:295,hertz:25,lines:720,bitrate:4430},
{games:[{id:"NFS4RC",start:"2023-05-15T13:50Z"}],end:"2023-05-15T17:14Z",duration:203,hertz:30,lines:720,bitrate:3900},
{games:[{id:"NFS4RC",start:"2023-05-16T13:50Z"}],end:"2023-05-16T17:20Z",duration:209,hertz:30,lines:720,bitrate:3820},
{games:[{id:"TLOS1AMB",start:"2023-05-18T16:01Z"}],end:"2023-05-18T20:00Z",duration:238,hertz:30,lines:720,bitrate:3940},
{games:[{id:"TLOS2TEN",start:"2023-05-19T15:50Z"}],end:"2023-05-19T18:32Z",duration:161,hertz:25,lines:720,bitrate:3900},
{games:[{id:"DogsLife",start:"2023-05-20T11:56Z"}],end:"2023-05-20T15:01Z",duration:184,hertz:25,lines:720,bitrate:3890},
{games:[{id:"DogsLife",start:"2023-05-21T14:05Z"},{id:"IAmFish",start:"2023-05-21T15:25Z"}],end:"2023-05-21T16:52Z",duration:166,hertz:30,lines:720,bitrate:3850},
{games:[{id:"NFS4RC",start:"2023-05-22T13:52Z"}],end:"2023-05-22T17:36Z",duration:223,hertz:30,lines:720,bitrate:3910},
{games:[{id:"NFS4RC",start:"2023-05-23T13:50Z"}],end:"2023-05-23T17:22Z",duration:211,hertz:30,lines:720,bitrate:3920},
{games:[{id:"TLOS2TEN",start:"2023-05-25T15:50Z"}],end:"2023-05-25T20:08Z",duration:257,hertz:30,lines:720,bitrate:3910},
{games:[{id:"TLOS2TEN",start:"2023-05-26T15:54Z"}],end:"2023-05-26T19:21Z",duration:206,hertz:30,lines:720,bitrate:3890},
{games:[{id:"IAmFish",start:"2023-05-27T12:03Z"}],end:"2023-05-27T15:00Z",duration:176,hertz:30,lines:720,bitrate:3160},
{games:[{id:"drawing",start:"2023-05-28T16:39Z"},{id:"Sporcle",start:"2023-05-28T19:11Z"},{id:"drawing",start:"2023-05-28T19:51Z"}],end:"2023-05-28T21:10Z",duration:270,hertz:30,lines:720,bitrate:2890},
{games:[{id:"NFS4RC",start:"2023-05-29T13:54Z"}],end:"2023-05-29T17:10Z",duration:195,hertz:30,lines:720,bitrate:2890},
{games:[{id:"NFS4RC",start:"2023-05-30T13:53Z"}],end:"2023-05-30T16:13Z",duration:139,hertz:30,lines:720,bitrate:2880},
{games:[{id:"drawing",start:"2023-05-31T11:50Z"}],end:"2023-05-31T18:31Z",duration:400,hertz:30,lines:720,bitrate:2880},
{games:[{id:"TLOS2TEN",start:"2023-06-01T15:56Z"}],end:"2023-06-01T18:13Z",duration:136,hertz:25,lines:720,bitrate:2870},
{games:[{id:"TLOS3DOTD",start:"2023-06-02T16:43Z"}],end:"2023-06-02T19:36Z",duration:172,hertz:30,lines:720,bitrate:2880},
{games:[{id:"Crash1NST",start:"2023-06-03T11:58Z"}],end:"2023-06-03T16:09Z",duration:250,hertz:30,lines:720,bitrate:2890},
{games:[{id:"Crash1NST",start:"2023-06-04T11:57Z"}],end:"2023-06-04T15:16Z",duration:198,hertz:30,lines:720,bitrate:2900},
{games:[{id:"drawing",start:"2023-06-05T11:50Z"}],end:"2023-06-05T18:09Z",duration:378,hertz:30,lines:720,bitrate:2880},
{games:[{id:"drawing",start:"2023-06-06T11:50Z"}],end:"2023-06-06T17:27Z",duration:336,hertz:30,lines:720,bitrate:2880},
{games:[{id:"TLOS3DOTD",start:"2023-06-08T15:53Z"}],end:"2023-06-08T19:08Z",duration:194,hertz:30,lines:720,bitrate:2910},
{games:[{id:"TLOS3DOTD",start:"2023-06-09T15:50Z"}],end:"2023-06-09T19:17Z",duration:206,hertz:30,lines:720,bitrate:3930},
{games:[{id:"Crash2NST",start:"2023-06-10T11:50Z"}],end:"2023-06-10T15:03Z",duration:192,hertz:30,lines:720,bitrate:3280},
{games:[{id:"Crash2CSB",start:"2023-06-11T11:54Z"}],end:"2023-06-11T15:23Z",duration:208,hertz:30,lines:720,bitrate:3880},
{games:[{id:"drawing",start:"2023-06-12T11:50Z"}],end:"2023-06-12T19:52Z",duration:481,hertz:30,lines:720,bitrate:4810},
{games:[{id:"drawing",start:"2023-06-13T11:50Z"}],end:"2023-06-13T17:05Z",duration:314,hertz:30,lines:720,bitrate:4920},
{games:[{id:"Crash2CSB",start:"2023-06-14T11:50Z"}],end:"2023-06-14T14:04Z",duration:133,hertz:30,lines:720,bitrate:2910},
{games:[{id:"TLOS3DOTD",start:"2023-06-15T15:54Z"}],end:"2023-06-15T17:55Z",duration:120,hertz:30,lines:720,bitrate:2920},
{games:[{id:"Spyro4ETD",start:"2023-06-16T13:50Z"},{id:"Spyro5AHT",start:"2023-06-16T14:18Z"}],end:"2023-06-16T17:33Z",duration:222,hertz:25,lines:720,bitrate:2880},
{games:[{id:"drawing",start:"2023-06-17T11:53Z"}],end:"2023-06-17T17:14Z",duration:320,hertz:25,lines:720,bitrate:2880},
{games:[{id:"drawing",start:"2023-06-18T11:52Z"}],end:"2023-06-18T17:33Z",duration:340,hertz:25,lines:720,bitrate:2880},
{games:[{id:"Crash3W",start:"2023-06-19T11:56Z"}],end:"2023-06-19T16:07Z",duration:250,hertz:30,lines:720,bitrate:3940},
{games:[{id:"Crash3W",start:"2023-06-20T11:52Z"}],end:"2023-06-20T15:58Z",duration:245,hertz:30,lines:720,bitrate:3910},
{games:[{id:"Crash3W",start:"2023-06-21T11:50Z"}],end:"2023-06-21T14:03Z",duration:132,hertz:30,lines:720,bitrate:3920},
{games:[{id:"Crash3W",start:"2023-06-21T17:45Z"}],end:"2023-06-21T17:51Z",duration:5,hertz:30,lines:720,bitrate:3700},
{games:[{id:"Spyro5AHT",start:"2023-06-22T13:53Z"}],end:"2023-06-22T17:07Z",duration:193,hertz:25,lines:720,bitrate:3910},
{games:[{id:"Spyro5AHT",start:"2023-06-23T13:56Z"}],end:"2023-06-23T17:08Z",duration:191,hertz:25,lines:720,bitrate:3890},
{games:[{id:"drawing",start:"2023-06-24T11:52Z"}],end:"2023-06-24T15:58Z",duration:245,hertz:25,lines:720,bitrate:3880},
{games:[{id:"drawing",start:"2023-06-25T11:53Z"}],end:"2023-06-25T14:14Z",duration:140,hertz:30,lines:720,bitrate:3910},
{games:[{id:"Crash4TWOC",start:"2023-06-26T11:50Z"}],end:"2023-06-26T15:09Z",duration:198,hertz:25,lines:720,bitrate:3900},
{games:[{id:"Crash4TWOC",start:"2023-06-27T11:51Z"}],end:"2023-06-27T15:17Z",duration:205,hertz:25,lines:720,bitrate:3900},
{games:[{id:"Spyro5AHT",start:"2023-06-29T13:54Z"}],end:"2023-06-29T17:06Z",duration:191,hertz:25,lines:720,bitrate:3870},
{games:[{id:"Spyro5AHT",start:"2023-06-30T13:55Z"}],end:"2023-06-30T17:19Z",duration:203,hertz:25,lines:720,bitrate:3920},
{games:[{id:"drawing",start:"2023-07-01T11:51Z"}],end:"2023-07-01T16:11Z",duration:259,hertz:30,lines:720,bitrate:3920},
{games:[{id:"drawing",start:"2023-07-02T11:55Z"}],end:"2023-07-02T14:51Z",duration:175,hertz:30,lines:720,bitrate:3900},
{games:[{id:"Crash4TWOC",start:"2023-07-03T12:07Z"}],end:"2023-07-03T16:38Z",duration:270,hertz:25,lines:720,bitrate:3910},
{games:[{id:"unknown",start:"2023-07-04T10:14Z"}],end:"2023-07-04T10:36Z",duration:21,hertz:25,lines:720,bitrate:3920},
{games:[{id:"Crash4TWOC",start:"2023-07-04T11:50Z"}],end:"2023-07-04T15:35Z",duration:224,hertz:25,lines:720,bitrate:3940},
{games:[{id:"Crash4TWOC",start:"2023-07-05T11:53Z"},{id:"Spyro5AHT",start:"2023-07-05T13:49Z"}],end:"2023-07-05T16:06Z",duration:252,hertz:25,lines:720,bitrate:3900},
{games:[{id:"Spyro1SOI",start:"2023-07-06T13:54Z"}],end:"2023-07-06T17:05Z",duration:190,hertz:30,lines:720,bitrate:3910},
{games:[{id:"Spyro1SOI",start:"2023-07-07T13:53Z"}],end:"2023-07-07T17:30Z",duration:216,hertz:30,lines:720,bitrate:3890},
{games:[{id:"EscapeSim",start:"2023-07-08T16:00Z"}],end:"2023-07-08T20:06Z",duration:245,hertz:30,lines:720,bitrate:3940},
{games:[{id:"CTR1",start:"2023-07-10T12:24Z"}],end:"2023-07-10T15:53Z",duration:208,hertz:25,lines:720,bitrate:3400},
{games:[{id:"CTR1",start:"2023-07-11T11:50Z"}],end:"2023-07-11T15:35Z",duration:224,hertz:25,lines:720,bitrate:2880},
{games:[{id:"Spyro1SOI",start:"2023-07-13T13:52Z"}],end:"2023-07-13T17:03Z",duration:190,hertz:30,lines:720,bitrate:3880},
{games:[{id:"Spyro1SOI",start:"2023-07-14T13:54Z"},{id:"Spyro2SOF",start:"2023-07-14T15:30Z"}],end:"2023-07-14T17:26Z",duration:211,hertz:30,lines:720,bitrate:3870},
{games:[{id:"drawing",start:"2023-07-16T12:05Z"}],end:"2023-07-16T13:33Z",duration:87,hertz:30,lines:720,bitrate:3910},
{games:[{id:"CTR1",start:"2023-07-17T11:51Z"}],end:"2023-07-17T15:07Z",duration:195,hertz:25,lines:720,bitrate:3900},
{games:[{id:"CTR1",start:"2023-07-18T11:52Z"}],end:"2023-07-18T15:04Z",duration:191,hertz:25,lines:720,bitrate:3880},
{games:[{id:"Spyro2SOF",start:"2023-07-20T13:57Z"}],end:"2023-07-20T17:08Z",duration:190,hertz:30,lines:720,bitrate:3900},
{games:[{id:"Spyro2SOF",start:"2023-07-21T13:52Z"}],end:"2023-07-21T15:14Z",duration:81,hertz:30,lines:720,bitrate:3940},
{games:[{id:"3Dmodelling",start:"2023-07-22T11:50Z"}],end:"2023-07-22T16:04Z",duration:253,hertz:30,lines:720,bitrate:3920},
{games:[{id:"3Dmodelling",start:"2023-07-23T11:52Z"}],end:"2023-07-23T15:32Z",duration:219,hertz:30,lines:720,bitrate:3290},
{games:[{id:"CTR1",start:"2023-07-24T11:50Z"}],end:"2023-07-24T14:11Z",duration:140,hertz:25,lines:720,bitrate:2890},
{games:[{id:"CrashBash",start:"2023-07-25T11:50Z"}],end:"2023-07-25T15:06Z",duration:195,hertz:25,lines:720,bitrate:2900},
{games:[{id:"karaoke",start:"2023-07-27T14:50Z"}],end:"2023-07-27T15:58Z",duration:67,hertz:25,lines:720,bitrate:3930},
{games:[{id:"Spyro2SOF",start:"2023-07-28T13:50Z"}],end:"2023-07-28T17:35Z",duration:224,hertz:30,lines:720,bitrate:3890},
{games:[{id:"3Dmodelling",start:"2023-07-29T11:51Z"}],end:"2023-07-29T18:00Z",duration:368,hertz:30,lines:720,bitrate:3900},
{games:[{id:"3Dmodelling",start:"2023-07-30T11:52Z"}],end:"2023-07-30T18:14Z",duration:381,hertz:30,lines:720,bitrate:3910},
{games:[{id:"CrashBash",start:"2023-07-31T11:50Z"}],end:"2023-07-31T15:09Z",duration:198,hertz:25,lines:720,bitrate:3930},
{games:[{id:"CrashFusion",start:"2023-08-01T11:51Z"}],end:"2023-08-01T15:31Z",duration:219,hertz:30,lines:720,bitrate:3920},
{games:[{id:"SpyroFusion",start:"2023-08-03T13:50Z"}],end:"2023-08-03T17:06Z",duration:195,hertz:30,lines:720,bitrate:3860},
{games:[{id:"SpyroFusion",start:"2023-08-04T13:50Z"}],end:"2023-08-04T17:08Z",duration:197,hertz:30,lines:720,bitrate:3880},
{games:[{id:"3Dmodelling",start:"2023-08-05T11:50Z"}],end:"2023-08-05T18:20Z",duration:389,hertz:30,lines:720,bitrate:3900},
{games:[{id:"3Dmodelling",start:"2023-08-06T11:51Z"}],end:"2023-08-06T18:31Z",duration:399,hertz:30,lines:720,bitrate:3910},
{games:[{id:"CrashFusion",start:"2023-08-07T14:50Z"}],end:"2023-08-07T17:30Z",duration:159,hertz:30,lines:720,bitrate:3880},
{games:[{id:"SpyroFusion",start:"2023-08-08T11:51Z"},{id:"CrashFusion",start:"2023-08-08T14:43Z"},{id:"SpyroFusion",start:"2023-08-08T14:53Z"}],end:"2023-08-08T15:08Z",duration:196,hertz:30,lines:720,bitrate:3920},
{games:[{id:"Spyro3Adventure",start:"2023-08-10T13:50Z"}],end:"2023-08-10T17:18Z",duration:207,hertz:30,lines:720,bitrate:3880},
{games:[{id:"Spyro3Adventure",start:"2023-08-11T13:50Z"}],end:"2023-08-11T17:05Z",duration:194,hertz:30,lines:720,bitrate:3890},
{games:[{id:"3Dmodelling",start:"2023-08-12T11:50Z"}],end:"2023-08-12T18:11Z",duration:380,hertz:30,lines:720,bitrate:3910},
{games:[{id:"3Dmodelling",start:"2023-08-13T11:50Z"}],end:"2023-08-13T18:12Z",duration:381,hertz:30,lines:720,bitrate:3910},
{games:[{id:"Crash1XS",start:"2023-08-14T11:52Z"}],end:"2023-08-14T15:13Z",duration:200,hertz:30,lines:720,bitrate:3900},
{games:[{id:"Crash1XS",start:"2023-08-15T11:50Z"}],end:"2023-08-15T15:34Z",duration:223,hertz:30,lines:720,bitrate:3910},
{games:[{id:"Spyro3Adventure",start:"2023-08-17T13:53Z"}],end:"2023-08-17T17:11Z",duration:197,hertz:30,lines:720,bitrate:3890},
{games:[{id:"Spyro3Adventure",start:"2023-08-18T13:50Z"}],end:"2023-08-18T16:51Z",duration:180,hertz:30,lines:720,bitrate:3880},
{games:[{id:"3Dmodelling",start:"2023-08-19T11:50Z"}],end:"2023-08-19T18:55Z",duration:424,hertz:30,lines:720,bitrate:3920},
{games:[{id:"3Dmodelling",start:"2023-08-20T11:53Z"}],end:"2023-08-20T18:29Z",duration:395,hertz:30,lines:720,bitrate:3920},
{games:[{id:"Crash1XS",start:"2023-08-21T13:07Z"}],end:"2023-08-21T16:25Z",duration:197,hertz:30,lines:720,bitrate:3900},
{games:[{id:"Crash2NTranced",start:"2023-08-22T11:50Z"}],end:"2023-08-22T16:11Z",duration:260,hertz:30,lines:720,bitrate:3900},
{games:[{id:"Spyro2GTG",start:"2023-08-24T13:50Z"}],end:"2023-08-24T18:19Z",duration:268,hertz:30,lines:720,bitrate:3200},
{games:[{id:"Spyro2GTG",start:"2023-08-25T13:50Z"}],end:"2023-08-25T17:26Z",duration:215,hertz:25,lines:720,bitrate:2880},
{games:[{id:"3Dmodelling",start:"2023-08-26T11:51Z"}],end:"2023-08-26T19:07Z",duration:435,hertz:30,lines:720,bitrate:3910},
{games:[{id:"3Dmodelling",start:"2023-08-27T11:52Z"}],end:"2023-08-27T19:51Z",duration:478,hertz:30,lines:720,bitrate:3900},
{games:[{id:"Crash2NTranced",start:"2023-08-28T11:50Z"},{id:"Crash1",start:"2023-08-28T12:59Z"}],end:"2023-08-28T15:04Z",duration:193,hertz:30,lines:720,bitrate:3900},
{games:[{id:"Crash1",start:"2023-08-29T11:50Z"}],end:"2023-08-29T15:22Z",duration:211,hertz:25,lines:720,bitrate:3890},
{games:[{id:"Spyro3Reignited",start:"2023-08-31T13:50Z"},{id:"Spyro3Reignited",start:"2023-08-31T16:12Z"}],end:"2023-08-31T17:17Z",duration:206,hertz:25,lines:720,bitrate:3860},
{games:[{id:"Spyro3YOTD",start:"2023-09-01T13:50Z"}],end:"2023-09-01T17:10Z",duration:199,hertz:25,lines:720,bitrate:3860},
{games:[{id:"3Dmodelling",start:"2023-09-02T11:50Z"}],end:"2023-09-02T20:33Z",duration:522,hertz:30,lines:720,bitrate:3910},
{games:[{id:"Klonoa1DTP",start:"2023-09-04T11:50Z"}],end:"2023-09-04T16:55Z",duration:304,hertz:25,lines:720,bitrate:3920},
{games:[{id:"Klonoa1DTP",start:"2023-09-05T11:50Z"}],end:"2023-09-05T15:12Z",duration:201,hertz:25,lines:720,bitrate:3930},
{games:[{id:"Spyro3YOTD",start:"2023-09-07T13:50Z"}],end:"2023-09-07T17:44Z",duration:233,hertz:25,lines:720,bitrate:3870},
{games:[{id:"Spyro3YOTD",start:"2023-09-08T13:50Z"}],end:"2023-09-08T18:06Z",duration:255,hertz:25,lines:720,bitrate:3880},
{games:[{id:"3Dmodelling",start:"2023-09-09T11:52Z"}],end:"2023-09-09T20:08Z",duration:495,hertz:15,lines:720,bitrate:3880},
{games:[{id:"3Dmodelling",start:"2023-09-10T11:50Z"}],end:"2023-09-10T18:21Z",duration:390,hertz:15,lines:720,bitrate:3870},
{games:[{id:"Klonoa1DTP",start:"2023-09-11T11:51Z"},{id:"Tombi1",start:"2023-09-11T13:45Z"}],end:"2023-09-11T15:20Z",duration:208,hertz:25,lines:720,bitrate:3920},
{games:[{id:"Tombi1",start:"2023-09-12T11:50Z"}],end:"2023-09-12T15:19Z",duration:208,hertz:25,lines:720,bitrate:3880},
{games:[{id:"Spyro3YOTD",start:"2023-09-14T13:50Z"},{id:"Spyro2GTG",start:"2023-09-14T15:04Z"}],end:"2023-09-14T17:28Z",duration:217,hertz:25,lines:720,bitrate:3890},
{games:[{id:"ReturnFire1",start:"2023-09-15T13:50Z"}],end:"2023-09-15T17:11Z",duration:200,hertz:25,lines:720,bitrate:3880},
{games:[{id:"3Dmodelling",start:"2023-09-17T11:50Z"}],end:"2023-09-17T19:14Z",duration:443,hertz:15,lines:720,bitrate:3880},
{games:[{id:"Tombi1",start:"2023-09-18T11:50Z"}],end:"2023-09-18T15:32Z",duration:221,hertz:25,lines:720,bitrate:3890},
{games:[{id:"Tombi1",start:"2023-09-19T12:20Z"}],end:"2023-09-19T15:43Z",duration:202,hertz:25,lines:720,bitrate:3930},
{games:[{id:"ReturnFire1",start:"2023-09-21T13:53Z"}],end:"2023-09-21T17:20Z",duration:206,hertz:25,lines:720,bitrate:3910},
{games:[{id:"ReturnFire1",start:"2023-09-22T13:50Z"}],end:"2023-09-22T19:00Z",duration:309,hertz:25,lines:720,bitrate:3930},
{games:[{id:"3Dmodelling",start:"2023-09-23T11:50Z"}],end:"2023-09-23T17:57Z",duration:366,hertz:15,lines:720,bitrate:3900},
{games:[{id:"3Dmodelling",start:"2023-09-24T11:50Z"}],end:"2023-09-24T18:12Z",duration:381,hertz:15,lines:720,bitrate:3870},
{games:[{id:"Tombi1",start:"2023-09-25T11:50Z"}],end:"2023-09-25T14:40Z",duration:169,hertz:25,lines:720,bitrate:3860},
{games:[{id:"Spyro1Reignited",start:"2023-09-26T16:55Z"},{id:"Crash3NST",start:"2023-09-26T17:47Z"}],end:"2023-09-26T22:24Z",duration:328,hertz:30,lines:720,bitrate:2910},
{games:[{id:"ReturnFire1",start:"2023-09-28T13:52Z"}],end:"2023-09-28T17:29Z",duration:216,hertz:25,lines:720,bitrate:3930},
{games:[{id:"ReturnFire1",start:"2023-09-29T13:50Z"}],end:"2023-09-29T17:47Z",duration:236,hertz:25,lines:720,bitrate:3910},
{games:[{id:"3Dmodelling",start:"2023-10-01T11:50Z"}],end:"2023-10-01T20:38Z",duration:527,hertz:15,lines:720,bitrate:3890},
{games:[{id:"Crash2CSB",start:"2023-10-03T11:50Z"}],end:"2023-10-03T18:10Z",duration:379,hertz:25,lines:720,bitrate:3910},
{games:[{id:"ReturnFire1",start:"2023-10-05T13:50Z"}],end:"2023-10-05T18:31Z",duration:280,hertz:25,lines:720,bitrate:3940},
{games:[{id:"ReturnFire1",start:"2023-10-06T13:49Z"}],end:"2023-10-06T16:55Z",duration:185,hertz:25,lines:720,bitrate:3910},
{games:[{id:"3Dmodelling",start:"2023-10-07T11:54Z"}],end:"2023-10-07T21:52Z",duration:597,hertz:15,lines:720,bitrate:3880},
{games:[{id:"3Dmodelling",start:"2023-10-08T11:49Z"}],end:"2023-10-08T16:37Z",duration:287,hertz:15,lines:720,bitrate:3890},
{games:[{id:"Crash2CSB",start:"2023-10-09T11:49Z"}],end:"2023-10-09T15:15Z",duration:205,hertz:25,lines:720,bitrate:3950},
{games:[{id:"Crash2CSB",start:"2023-10-10T11:50Z"}],end:"2023-10-10T14:41Z",duration:170,hertz:25,lines:720,bitrate:3930},
{games:[{id:"ReturnFire1",start:"2023-10-12T13:50Z"}],end:"2023-10-12T17:07Z",duration:196,hertz:25,lines:720,bitrate:3930},
{games:[{id:"ReturnFire1",start:"2023-10-13T13:50Z"}],end:"2023-10-13T17:03Z",duration:192,hertz:25,lines:720,bitrate:3970},
{games:[{id:"3Dmodelling",start:"2023-10-15T11:50Z"}],end:"2023-10-15T17:56Z",duration:365,hertz:15,lines:720,bitrate:3880},
{games:[{id:"Crash3W",start:"2023-10-16T11:49Z"}],end:"2023-10-16T15:20Z",duration:210,hertz:25,lines:720,bitrate:3920},
{games:[{id:"Crash3W",start:"2023-10-17T11:49Z"}],end:"2023-10-17T15:52Z",duration:242,hertz:25,lines:720,bitrate:3910},
{games:[{id:"ReturnFire1",start:"2023-10-19T13:49Z"}],end:"2023-10-19T17:13Z",duration:203,hertz:25,lines:720,bitrate:3920},
{games:[{id:"ReturnFire1",start:"2023-10-20T13:50Z"}],end:"2023-10-20T17:28Z",duration:217,hertz:25,lines:720,bitrate:3910},
{games:[{id:"Crash3W",start:"2023-10-23T11:49Z"}],end:"2023-10-23T15:06Z",duration:196,hertz:25,lines:720,bitrate:3890},
{games:[{id:"VibRibbon",start:"2023-10-24T11:50Z"},{id:"Kurushi2Final",start:"2023-10-24T12:30Z"},{id:"ReturnFire1",start:"2023-10-24T13:52Z"}],end:"2023-10-24T16:29Z",duration:278,hertz:25,lines:720,bitrate:3900},
{games:[{id:"ReturnFire1",start:"2023-10-26T13:50Z"}],end:"2023-10-26T17:15Z",duration:204,hertz:25,lines:720,bitrate:3940},
{games:[{id:"ReturnFire1",start:"2023-10-27T14:19Z"}],end:"2023-10-27T17:31Z",duration:191,hertz:25,lines:720,bitrate:3910},
{games:[{id:"MotoRacer1",start:"2023-10-30T12:50Z"}],end:"2023-10-30T15:56Z",duration:185,hertz:25,lines:720,bitrate:3910},
{games:[{id:"MotoRacer2",start:"2023-10-31T12:50Z"}],end:"2023-10-31T17:43Z",duration:292,hertz:25,lines:720,bitrate:3930},
{games:[{id:"ReturnFire1",start:"2023-11-02T14:50Z"}],end:"2023-11-02T17:53Z",duration:182,hertz:25,lines:720,bitrate:3890},
{games:[{id:"ReturnFire1",start:"2023-11-03T14:49Z"}],end:"2023-11-03T19:16Z",duration:266,hertz:25,lines:720,bitrate:3910},
{games:[{id:"MotoRacerWT",start:"2023-11-06T12:50Z"},{id:"MotoRacer3",start:"2023-11-06T15:16Z"}],end:"2023-11-06T16:39Z",duration:228,hertz:25,lines:720,bitrate:3890},
{games:[{id:"JetRider1",start:"2023-11-07T12:50Z"},{id:"KlonoaBeach",start:"2023-11-07T13:55Z"}],end:"2023-11-07T16:16Z",duration:205,hertz:25,lines:720,bitrate:3920},
{games:[{id:"ReturnFire1",start:"2023-11-09T14:50Z"}],end:"2023-11-09T19:45Z",duration:294,hertz:25,lines:720,bitrate:3900},
{games:[{id:"ReturnFire1",start:"2023-11-10T14:50Z"}],end:"2023-11-10T17:52Z",duration:181,hertz:25,lines:720,bitrate:3910},
{games:[{id:"SeppuKuties",start:"2023-11-15T18:50Z"}],end:"2023-11-15T20:05Z",duration:74,hertz:30,lines:720,bitrate:3910},
{games:[{id:"ReturnFire1",start:"2023-11-18T17:50Z"},{id:"ReturnFire1",start:"2023-11-18T18:50Z"}],end:"2023-11-18T20:04Z",duration:133,hertz:30,lines:720,bitrate:3890},
{games:[{id:"Crash1",start:"2023-11-22T16:50Z"},{id:"Crash3W",start:"2023-11-22T18:59Z"}],end:"2023-11-22T20:11Z",duration:200,hertz:25,lines:720,bitrate:3850},
{games:[{id:"Spyro1",start:"2023-12-01T19:50Z"},{id:"Crash3W",start:"2023-12-01T21:03Z"}],end:"2023-12-01T23:58Z",duration:247,hertz:25,lines:720,bitrate:3860},
{games:[{id:"Spyro1",start:"2023-12-04T16:50Z"}],end:"2023-12-04T22:28Z",duration:337,hertz:25,lines:720,bitrate:3860},
{games:[{id:"Crash1",start:"2023-12-05T19:50Z"}],end:"2023-12-05T23:12Z",duration:201,hertz:25,lines:720,bitrate:3900},
{games:[{id:"Spyro1SOI",start:"2023-12-06T19:49Z"},{id:"C3Racing",start:"2023-12-06T21:06Z"}],end:"2023-12-07T00:07Z",duration:257,hertz:30,lines:720,bitrate:3900},
{games:[{id:"C3Racing",start:"2023-12-07T15:20Z"}],end:"2023-12-07T20:13Z",duration:292,hertz:25,lines:720,bitrate:3920},
{games:[{id:"CrashBash",start:"2023-12-15T11:50Z"}],end:"2023-12-15T19:57Z",duration:486,hertz:25,lines:720,bitrate:3920},
{games:[{id:"CrashBash",start:"2023-12-17T13:52Z"}],end:"2023-12-17T18:39Z",duration:286,hertz:25,lines:720,bitrate:3930},
{games:[{id:"DigimonArena1",start:"2023-12-19T15:20Z"}],end:"2023-12-19T20:24Z",duration:303,hertz:30,lines:720,bitrate:3910},
{games:[{id:"DigimonArena1",start:"2023-12-23T11:50Z"}],end:"2023-12-23T16:15Z",duration:264,hertz:30,lines:720,bitrate:3940},
{games:[{id:"DigimonArena1",start:"2024-01-02T11:50Z"}],end:"2024-01-02T15:14Z",duration:203,hertz:30,lines:1080,bitrate:2360},
{games:[{id:"DigimonArena1",start:"2024-01-04T12:50Z"}],end:"2024-01-04T14:39Z",duration:108,hertz:30,lines:1080,bitrate:2360},
{games:[{id:"Spyro4ETD",start:"2024-01-07T12:51Z"}],end:"2024-01-07T16:03Z",duration:191,hertz:25,lines:1080,bitrate:2360},
{games:[{id:"Spyro4ETD",start:"2024-01-08T12:50Z"}],end:"2024-01-08T16:06Z",duration:195,hertz:60,lines:1080,bitrate:2410},
{games:[{id:"CrashTwinsanity",start:"2024-01-10T13:20Z"}],end:"2024-01-10T16:42Z",duration:201,hertz:25,lines:1080,bitrate:2360},
{games:[{id:"CrashTwinsanity",start:"2024-01-11T12:49Z"}],end:"2024-01-11T16:00Z",duration:190,hertz:25,lines:1080,bitrate:3360},
{games:[{id:"DigimonArena2",start:"2024-01-12T12:52Z"}],end:"2024-01-12T16:27Z",duration:214,hertz:25,lines:1080,bitrate:3300},
{games:[{id:"DigimonArena2",start:"2024-01-13T12:50Z"}],end:"2024-01-13T14:43Z",duration:112,hertz:25,lines:1080,bitrate:3360},
{games:[{id:"Spyro4ETD",start:"2024-01-14T12:52Z"}],end:"2024-01-14T16:18Z",duration:205,hertz:25,lines:1080,bitrate:3360},
{games:[{id:"Spyro4ETD",start:"2024-01-15T12:50Z"}],end:"2024-01-15T15:21Z",duration:150,hertz:25,lines:1080,bitrate:3380},
{games:[{id:"CrashTwinsanity",start:"2024-01-17T12:50Z"}],end:"2024-01-17T16:06Z",duration:195,hertz:25,lines:1080,bitrate:2820},
{games:[{id:"CrashTwinsanity",start:"2024-01-18T12:55Z"},{id:"drawing",start:"2024-01-18T14:47Z"}],end:"2024-01-18T16:14Z",duration:198,hertz:25,lines:1080,bitrate:2370},
{games:[{id:"drawing",start:"2024-01-19T12:50Z"}],end:"2024-01-19T16:28Z",duration:217,hertz:30,lines:1080,bitrate:2360},
{games:[{id:"drawing",start:"2024-01-20T12:50Z"}],end:"2024-01-20T15:58Z",duration:187,hertz:30,lines:1080,bitrate:2370},
{games:[{id:"Spyro6SL",start:"2024-01-21T12:54Z"}],end:"2024-01-21T16:14Z",duration:199,hertz:30,lines:1080,bitrate:2840},
{games:[{id:"Spyro6SL",start:"2024-01-22T13:20Z"}],end:"2024-01-22T17:03Z",duration:222,hertz:30,lines:1080,bitrate:1340},
{games:[{id:"CRASHTitans",start:"2024-01-24T12:55Z"}],end:"2024-01-24T16:03Z",duration:187,hertz:25,lines:1080,bitrate:3300},
{games:[{id:"CRASHTitans",start:"2024-01-25T12:50Z"}],end:"2024-01-25T16:07Z",duration:196,hertz:25,lines:1080,bitrate:2400},
{games:[{id:"drawing",start:"2024-01-26T12:55Z"}],end:"2024-01-26T16:31Z",duration:215,hertz:30,lines:1080,bitrate:1850},
{games:[{id:"drawing",start:"2024-01-27T12:50Z"}],end:"2024-01-27T16:31Z",duration:220,hertz:30,lines:1080,bitrate:2870},
{games:[{id:"Spyro6SL",start:"2024-01-28T12:54Z"}],end:"2024-01-28T16:21Z",duration:206,hertz:30,lines:1080,bitrate:2860},
{games:[{id:"Spyro6SL",start:"2024-01-29T13:35Z"}],end:"2024-01-29T16:55Z",duration:199,hertz:30,lines:1080,bitrate:1860},
{games:[{id:"CRASHTitans",start:"2024-01-31T12:50Z"}],end:"2024-01-31T16:10Z",duration:199,hertz:25,lines:1080,bitrate:1840},
{games:[{id:"CRASHTitans",start:"2024-02-01T12:50Z"}],end:"2024-02-01T16:27Z",duration:216,hertz:25,lines:1080,bitrate:2760},
{games:[{id:"3Dmodelling",start:"2024-02-02T12:50Z"}],end:"2024-02-02T16:39Z",duration:228,hertz:30,lines:1080,bitrate:2810},
{games:[{id:"3Dmodelling",start:"2024-02-03T12:51Z"}],end:"2024-02-03T16:24Z",duration:212,hertz:30,lines:1080,bitrate:2870},
{games:[{id:"TLOS1AMBNDS",start:"2024-02-04T12:50Z"}],end:"2024-02-04T16:15Z",duration:204,hertz:30,lines:1080,bitrate:2890},
{games:[{id:"TLOS1AMBNDS",start:"2024-02-05T12:50Z"}],end:"2024-02-05T16:02Z",duration:191,hertz:30,lines:1080,bitrate:2870},
{games:[{id:"CRASHTitans",start:"2024-02-07T12:50Z"}],end:"2024-02-07T16:03Z",duration:192,hertz:25,lines:1080,bitrate:2850},
{games:[{id:"CRASHTitans",start:"2024-02-08T12:52Z"}],end:"2024-02-08T16:06Z",duration:193,hertz:25,lines:1080,bitrate:2880},
{games:[{id:"3Dmodelling",start:"2024-02-09T12:50Z"}],end:"2024-02-09T16:31Z",duration:220,hertz:30,lines:1080,bitrate:2870},
{games:[{id:"3Dmodelling",start:"2024-02-10T12:50Z"}],end:"2024-02-10T17:29Z",duration:278,hertz:30,lines:1080,bitrate:2870},
{games:[{id:"TLOS1AMBNDS",start:"2024-02-11T12:49Z"},{id:"TLOS2TENNDS",start:"2024-02-11T15:03Z"}],end:"2024-02-11T16:07Z",duration:197,hertz:30,lines:1080,bitrate:2870},
{games:[{id:"TLOS2TENNDS",start:"2024-02-12T12:50Z"}],end:"2024-02-12T16:08Z",duration:197,hertz:30,lines:1080,bitrate:2880},
{games:[{id:"CRASHTitans",start:"2024-02-14T12:51Z"}],end:"2024-02-14T16:29Z",duration:217,hertz:25,lines:1080,bitrate:2860},
{games:[{id:"CrashMindMutant",start:"2024-02-15T12:55Z"}],end:"2024-02-15T16:03Z",duration:187,hertz:25,lines:1080,bitrate:2890},
{games:[{id:"3Dmodelling",start:"2024-02-16T13:00Z"}],end:"2024-02-16T16:10Z",duration:189,hertz:30,lines:1080,bitrate:1340},
{games:[{id:"3Dmodelling",start:"2024-02-17T12:52Z"}],end:"2024-02-17T16:34Z",duration:221,hertz:30,lines:1080,bitrate:1340},
{games:[{id:"TLOS2TENNDS",start:"2024-02-18T12:49Z"},{id:"TLOS3DOTDNDS",start:"2024-02-18T14:44Z"}],end:"2024-02-18T16:06Z",duration:196,hertz:30,lines:1080,bitrate:1360},
{games:[{id:"TLOS3DOTDNDS",start:"2024-02-19T12:52Z"}],end:"2024-02-19T15:36Z",duration:163,hertz:30,lines:1080,bitrate:1280},
{games:[{id:"CrashMindMutant",start:"2024-02-21T13:50Z"}],end:"2024-02-21T17:04Z",duration:193,hertz:25,lines:1080,bitrate:1060},
{games:[{id:"CrashMindMutant",start:"2024-02-22T12:50Z"}],end:"2024-02-22T16:16Z",duration:205,hertz:25,lines:1080,bitrate:1210},
{games:[{id:"IAmFish",start:"2024-02-23T12:51Z"}],end:"2024-02-23T16:00Z",duration:188,hertz:30,lines:1080,bitrate:2710},
{games:[{id:"IAmFish",start:"2024-02-24T12:50Z"}],end:"2024-02-24T16:24Z",duration:213,hertz:30,lines:1080,bitrate:2580},
{games:[{id:"TLOS1AMBGBA",start:"2024-02-25T12:50Z"}],end:"2024-02-25T15:35Z",duration:164,hertz:30,lines:1080,bitrate:2740},
{games:[{id:"TLOS2TENGBA",start:"2024-02-26T13:35Z"}],end:"2024-02-26T16:52Z",duration:196,hertz:30,lines:1080,bitrate:2870},
{games:[{id:"CTR2Nitro",start:"2024-02-28T12:50Z"}],end:"2024-02-28T16:20Z",duration:209,hertz:25,lines:1080,bitrate:1770},
{games:[{id:"CTR2Nitro",start:"2024-02-29T12:50Z"}],end:"2024-02-29T15:57Z",duration:186,hertz:25,lines:1080,bitrate:1310},
{games:[{id:"IAmFish",start:"2024-03-01T12:51Z"}],end:"2024-03-01T16:07Z",duration:195,hertz:30,lines:1080,bitrate:2860},
{games:[{id:"IAmFish",start:"2024-03-02T12:50Z"}],end:"2024-03-02T16:15Z",duration:204,hertz:30,lines:1080,bitrate:1800},
{games:[{id:"IAmFish",start:"2024-03-03T12:51Z"}],end:"2024-03-03T16:09Z",duration:197,hertz:30,lines:1080,bitrate:2840},
{games:[{id:"IAmFish",start:"2024-03-08T12:50Z"}],end:"2024-03-08T16:03Z",duration:192,hertz:30,lines:1080,bitrate:2230},
{games:[{id:"IAmFish",start:"2024-03-09T12:49Z"}],end:"2024-03-09T16:23Z",duration:213,hertz:30,lines:1080,bitrate:2200},
{games:[{id:"ZapperOWC",start:"2024-03-10T12:48Z"}],end:"2024-03-10T16:01Z",duration:192,hertz:25,lines:1080,bitrate:2230},
{games:[{id:"TLOS2TENGBA",start:"2024-03-11T12:50Z"}],end:"2024-03-11T16:05Z",duration:194,hertz:30,lines:1080,bitrate:2250},
{games:[{id:"CTR2Nitro",start:"2024-03-13T12:49Z"}],end:"2024-03-13T16:10Z",duration:200,hertz:25,lines:1080,bitrate:1750},
{games:[{id:"CTR2Nitro",start:"2024-03-14T12:50Z"}],end:"2024-03-14T16:34Z",duration:223,hertz:25,lines:1080,bitrate:1180},
{games:[{id:"IAmFish",start:"2024-03-15T12:50Z"}],end:"2024-03-15T17:05Z",duration:254,hertz:30,lines:1080,bitrate:2520},
{games:[{id:"IAmFish",start:"2024-03-16T12:49Z"}],end:"2024-03-16T17:30Z",duration:280,hertz:30,lines:1080,bitrate:2490},
{games:[{id:"SpyroRQ",start:"2024-03-17T12:48Z"},{id:"Spyro2005",start:"2024-03-17T14:04Z"},{id:"TLOS1AMBJME",start:"2024-03-17T15:15Z"}],end:"2024-03-17T16:05Z",duration:196,hertz:30,lines:1080,bitrate:1820},
{games:[{id:"TLOS1AMBJME",start:"2024-03-18T12:49Z"}],end:"2024-03-18T16:09Z",duration:199,hertz:30,lines:1080,bitrate:1830},
{games:[{id:"CTR2Nitro",start:"2024-03-20T12:51Z"}],end:"2024-03-20T16:14Z",duration:202,hertz:25,lines:1080,bitrate:2100},
{games:[{id:"CTR2Nitro",start:"2024-03-21T12:51Z"}],end:"2024-03-21T16:23Z",duration:211,hertz:25,lines:1080,bitrate:2670},
{games:[{id:"ZapperOWC",start:"2024-03-22T12:50Z"}],end:"2024-03-22T16:00Z",duration:189,hertz:25,lines:1080,bitrate:2410},
{games:[{id:"ZapperOWC",start:"2024-03-23T12:49Z"},{id:"drawing",start:"2024-03-23T14:55Z"}],end:"2024-03-23T16:06Z",duration:196,hertz:25,lines:1080,bitrate:2460},
{games:[{id:"TLOS3DOTD",start:"2024-03-24T12:50Z"},{id:"drawing",start:"2024-03-24T14:58Z"}],end:"2024-03-24T16:13Z",duration:202,hertz:30,lines:1080,bitrate:1810},
{games:[{id:"3Dmodelling",start:"2024-03-25T12:52Z"}],end:"2024-03-25T16:06Z",duration:193,hertz:30,lines:1080,bitrate:1850},
{games:[{id:"CrashBoomBang",start:"2024-03-27T12:50Z"}],end:"2024-03-27T16:04Z",duration:193,hertz:30,lines:1080,bitrate:2800},
{games:[{id:"3Dmodelling",start:"2024-03-28T12:53Z"},{id:"drawing",start:"2024-03-28T15:29Z"}],end:"2024-03-28T16:29Z",duration:215,hertz:25,lines:1080,bitrate:580},
{games:[{id:"NeopetsTDF",start:"2024-03-29T12:50Z"}],end:"2024-03-29T16:29Z",duration:218,hertz:25,lines:1080,bitrate:1850},
{games:[{id:"NeopetsTDF",start:"2024-03-30T12:50Z"}],end:"2024-03-30T16:07Z",duration:196,hertz:30,lines:1080,bitrate:1400},
{games:[{id:"Klonoa2LV",start:"2024-03-31T11:50Z"}],end:"2024-03-31T15:05Z",duration:194,hertz:30,lines:1080,bitrate:2530},
{games:[{id:"Klonoa2LV",start:"2024-04-01T11:55Z"}],end:"2024-04-01T15:21Z",duration:205,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"CTR3TagTeam",start:"2024-04-03T11:49Z"}],end:"2024-04-03T15:11Z",duration:201,hertz:25,lines:1080,bitrate:2080},
{games:[{id:"CTR3TagTeam",start:"2024-04-04T11:49Z"}],end:"2024-04-04T15:35Z",duration:225,hertz:25,lines:1080,bitrate:2130},
{games:[{id:"NeopetsTDF",start:"2024-04-05T11:54Z"}],end:"2024-04-05T15:47Z",duration:232,hertz:30,lines:1080,bitrate:1570},
{games:[{id:"NeopetsTDF",start:"2024-04-06T11:52Z"}],end:"2024-04-06T16:41Z",duration:288,hertz:30,lines:1080,bitrate:2010},
{games:[{id:"Klonoa2LV",start:"2024-04-07T11:50Z"}],end:"2024-04-07T15:36Z",duration:225,hertz:30,lines:1080,bitrate:1230},
{games:[{id:"Klonoa2LV",start:"2024-04-08T11:50Z"}],end:"2024-04-08T15:31Z",duration:220,hertz:30,lines:1080,bitrate:1410},
{games:[{id:"CTR3TagTeam",start:"2024-04-10T11:50Z"}],end:"2024-04-10T14:57Z",duration:186,hertz:25,lines:1080,bitrate:1490},
{games:[{id:"CTR3TagTeam",start:"2024-04-11T11:50Z"}],end:"2024-04-11T15:48Z",duration:237,hertz:25,lines:1080,bitrate:1590},
{games:[{id:"NeopetsTDF",start:"2024-04-12T11:50Z"}],end:"2024-04-12T15:40Z",duration:229,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"NeopetsTDF",start:"2024-04-13T11:51Z"}],end:"2024-04-13T15:49Z",duration:237,hertz:30,lines:1080,bitrate:2020},
{games:[{id:"CTR3TagTeam",start:"2024-04-17T11:48Z"}],end:"2024-04-17T15:43Z",duration:234,hertz:25,lines:1080,bitrate:1340},
{games:[{id:"CTR3TagTeam",start:"2024-04-18T11:50Z"}],end:"2024-04-18T16:07Z",duration:256,hertz:25,lines:1080,bitrate:1480},
{games:[{id:"NeopetsTDF",start:"2024-04-20T11:51Z"}],end:"2024-04-20T16:06Z",duration:254,hertz:30,lines:1080,bitrate:2030},
{games:[{id:"Klonoa2LV",start:"2024-04-21T11:50Z"}],end:"2024-04-21T15:29Z",duration:218,hertz:30,lines:1080,bitrate:1090},
{games:[{id:"drawing",start:"2024-04-22T11:50Z"},{id:"drawing",start:"2024-04-22T13:56Z"}],end:"2024-04-22T15:47Z",duration:236,hertz:30,lines:1080,bitrate:2440},
{games:[{id:"Tombi2",start:"2024-04-24T11:52Z"}],end:"2024-04-24T15:54Z",duration:241,hertz:25,lines:1080,bitrate:2030},
{games:[{id:"Tombi2",start:"2024-04-25T11:48Z"}],end:"2024-04-25T15:56Z",duration:247,hertz:25,lines:1080,bitrate:1880},
{games:[{id:"NeopetsTDF",start:"2024-04-26T11:50Z"}],end:"2024-04-26T16:03Z",duration:252,hertz:30,lines:1080,bitrate:1960},
{games:[{id:"NeopetsTDF",start:"2024-04-27T11:50Z"}],end:"2024-04-27T15:52Z",duration:241,hertz:30,lines:1080,bitrate:2630},
{games:[{id:"KlonoaMM",start:"2024-04-28T11:52Z"}],end:"2024-04-28T15:21Z",duration:208,hertz:25,lines:1080,bitrate:1430},
{games:[{id:"KlonoaMM",start:"2024-04-29T11:53Z"}],end:"2024-04-29T16:00Z",duration:246,hertz:25,lines:1080,bitrate:1710},
{games:[{id:"Tombi2",start:"2024-05-01T11:49Z"}],end:"2024-05-01T15:37Z",duration:227,hertz:25,lines:1080,bitrate:1790},
{games:[{id:"Tombi2",start:"2024-05-02T11:50Z"}],end:"2024-05-02T14:53Z",duration:182,hertz:25,lines:1080,bitrate:1090},
{games:[{id:"Lunistice",start:"2024-05-03T11:50Z"}],end:"2024-05-03T15:13Z",duration:202,hertz:25,lines:1080,bitrate:1960},
{games:[{id:"Lunistice",start:"2024-05-04T11:50Z"}],end:"2024-05-04T15:09Z",duration:198,hertz:30,lines:1080,bitrate:1910},
{games:[{id:"Klonoa1EOD",start:"2024-05-05T11:51Z"}],end:"2024-05-05T15:45Z",duration:233,hertz:30,lines:1080,bitrate:1520},
{games:[{id:"Klonoa1EOD",start:"2024-05-06T11:48Z"}],end:"2024-05-06T16:52Z",duration:303,hertz:30,lines:1080,bitrate:2030},
{games:[{id:"Tombi2",start:"2024-05-08T11:52Z"}],end:"2024-05-08T14:47Z",duration:174,hertz:25,lines:1080,bitrate:1530},
{games:[{id:"Tombi2",start:"2024-05-09T11:50Z"}],end:"2024-05-09T14:39Z",duration:168,hertz:25,lines:1080,bitrate:1980},
{games:[{id:"karaoke",start:"2024-05-10T11:46Z"},{id:"Lunistice",start:"2024-05-10T13:08Z"}],end:"2024-05-10T16:40Z",duration:293,hertz:25,lines:1080,bitrate:2070},
{games:[{id:"Lunistice",start:"2024-05-11T11:50Z"}],end:"2024-05-11T15:49Z",duration:238,hertz:30,lines:1080,bitrate:1870},
{games:[{id:"Lunistice",start:"2024-05-12T11:50Z"}],end:"2024-05-12T15:58Z",duration:247,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"3Dmodelling",start:"2024-05-15T11:54Z"}],end:"2024-05-15T16:20Z",duration:265,hertz:30,lines:1080,bitrate:2040},
{games:[{id:"drawing",start:"2024-05-16T11:50Z"}],end:"2024-05-16T16:27Z",duration:276,hertz:30,lines:1080,bitrate:1740},
{games:[{id:"Lunistice",start:"2024-05-17T11:54Z"}],end:"2024-05-17T14:25Z",duration:150,hertz:30,lines:1080,bitrate:1650},
{games:[{id:"Klonoa2DCP",start:"2024-05-18T11:51Z"}],end:"2024-05-18T14:45Z",duration:173,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"Klonoa2DCP",start:"2024-05-20T11:50Z"}],end:"2024-05-20T15:51Z",duration:240,hertz:30,lines:1080,bitrate:2030},
{games:[{id:"GeneRally",start:"2024-05-22T11:52Z"},{id:"3Dmodelling",start:"2024-05-22T13:30Z"}],end:"2024-05-22T16:06Z",duration:253,hertz:30,lines:1080,bitrate:2010},
{games:[{id:"3Dmodelling",start:"2024-05-23T11:50Z"}],end:"2024-05-23T16:21Z",duration:270,hertz:30,lines:1080,bitrate:1890},
{games:[{id:"TIR",start:"2024-05-24T12:06Z"},{id:"3Dmodelling",start:"2024-05-24T13:28Z"}],end:"2024-05-24T16:07Z",duration:240,hertz:25,lines:1080,bitrate:1860},
{games:[{id:"3Dmodelling",start:"2024-05-25T11:50Z"}],end:"2024-05-25T16:48Z",duration:297,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"Klonoa2DCP",start:"2024-05-26T11:51Z"}],end:"2024-05-26T15:29Z",duration:217,hertz:30,lines:1080,bitrate:2010},
{games:[{id:"Klonoa2DCP",start:"2024-05-27T11:50Z"},{id:"3Dmodelling",start:"2024-05-27T14:08Z"}],end:"2024-05-27T16:15Z",duration:264,hertz:30,lines:1080,bitrate:1580},
{games:[{id:"KingsleysAdv",start:"2024-05-29T11:51Z"}],end:"2024-05-29T14:44Z",duration:172,hertz:25,lines:1080,bitrate:1990},
{games:[{id:"Portal1",start:"2024-05-31T11:49Z"}],end:"2024-05-31T16:14Z",duration:264,hertz:30,lines:1080,bitrate:1630},
{games:[{id:"Portal2",start:"2024-06-01T11:50Z"}],end:"2024-06-01T15:41Z",duration:230,hertz:30,lines:1080,bitrate:1500},
{games:[{id:"KlonoaLSM",start:"2024-06-02T11:49Z"}],end:"2024-06-02T14:50Z",duration:180,hertz:30,lines:1080,bitrate:1110},
{games:[{id:"KlonoaLSM",start:"2024-06-03T12:25Z"},{id:"3Dmodelling",start:"2024-06-03T12:34Z"}],end:"2024-06-03T17:26Z",duration:300,hertz:30,lines:1080,bitrate:1050},
{games:[{id:"KingsleysAdv",start:"2024-06-05T11:50Z"}],end:"2024-06-05T15:27Z",duration:216,hertz:25,lines:1080,bitrate:1720},
{games:[{id:"drawing",start:"2024-06-06T08:29Z"},{id:"KingsleysAdv",start:"2024-06-06T12:15Z"},{id:"drawing",start:"2024-06-06T13:07Z"},{id:"3Dmodelling",start:"2024-06-06T13:38Z"}],end:"2024-06-06T23:14Z",duration:884,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"drawing",start:"2024-06-07T09:00Z"},{id:"Portal2",start:"2024-06-07T11:54Z"},{id:"3Dmodelling",start:"2024-06-07T15:57Z"},{id:"drawing",start:"2024-06-07T16:06Z"},{id:"3Dmodelling",start:"2024-06-07T16:57Z"}],end:"2024-06-07T22:03Z",duration:782,hertz:30,lines:1080,bitrate:1960},
{games:[{id:"Portal2",start:"2024-06-08T11:52Z"},{id:"3Dmodelling",start:"2024-06-08T16:52Z"}],end:"2024-06-08T22:32Z",duration:639,hertz:30,lines:1080,bitrate:2050},
{games:[{id:"Rayman1",start:"2024-06-09T09:50Z"},{id:"3Dmodelling",start:"2024-06-09T15:13Z"}],end:"2024-06-09T21:30Z",duration:699,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"3Dmodelling",start:"2024-06-10T11:00Z"},{id:"Rayman1",start:"2024-06-10T11:55Z"},{id:"3Dmodelling",start:"2024-06-10T15:26Z"}],end:"2024-06-10T23:35Z",duration:754,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Croc1LOTG",start:"2024-06-12T12:16Z"}],end:"2024-06-12T16:14Z",duration:237,hertz:30,lines:1080,bitrate:2030},
{games:[{id:"Croc1LOTG",start:"2024-06-13T11:53Z"}],end:"2024-06-13T16:39Z",duration:285,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Croc1LOTG",start:"2024-06-14T11:56Z"}],end:"2024-06-14T15:41Z",duration:224,hertz:30,lines:1080,bitrate:1240},
{games:[{id:"QuantConund",start:"2024-06-15T11:50Z"}],end:"2024-06-15T16:02Z",duration:251,hertz:30,lines:1080,bitrate:1810},
{games:[{id:"Rayman1",start:"2024-06-16T11:53Z"}],end:"2024-06-16T15:49Z",duration:235,hertz:30,lines:1080,bitrate:2110},
{games:[{id:"Rayman1",start:"2024-06-17T11:49Z"}],end:"2024-06-17T16:42Z",duration:292,hertz:30,lines:1080,bitrate:1640},
{games:[{id:"Croc1LOTG",start:"2024-06-19T11:49Z"}],end:"2024-06-19T14:15Z",duration:145,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Croc1LOTG",start:"2024-06-20T11:49Z"}],end:"2024-06-20T15:45Z",duration:235,hertz:30,lines:1080,bitrate:1610},
{games:[{id:"QuantConund",start:"2024-06-21T11:48Z"}],end:"2024-06-21T16:07Z",duration:258,hertz:30,lines:1080,bitrate:900},
{games:[{id:"QuantConund",start:"2024-06-22T11:53Z"}],end:"2024-06-22T16:16Z",duration:262,hertz:30,lines:1080,bitrate:2080},
{games:[{id:"Rayman1",start:"2024-06-23T11:50Z"}],end:"2024-06-23T16:01Z",duration:250,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"Rayman1",start:"2024-06-24T11:52Z"}],end:"2024-06-24T15:37Z",duration:224,hertz:30,lines:1080,bitrate:2050},
{games:[{id:"Croc2",start:"2024-06-26T12:05Z"}],end:"2024-06-26T15:52Z",duration:226,hertz:30,lines:1080,bitrate:2000},
{games:[{id:"Croc2",start:"2024-06-27T11:49Z"}],end:"2024-06-27T15:13Z",duration:203,hertz:30,lines:1080,bitrate:1640},
{games:[{id:"QuantConund",start:"2024-06-28T11:54Z"}],end:"2024-06-28T15:20Z",duration:205,hertz:30,lines:1080,bitrate:1600},
{games:[{id:"QuantConund",start:"2024-06-29T11:50Z"},{id:"Rayman1",start:"2024-06-29T12:48Z"},{id:"Wordle",start:"2024-06-29T13:49Z"}],end:"2024-06-29T18:12Z",duration:381,hertz:30,lines:1080,bitrate:1560},
{games:[{id:"Rayman2R",start:"2024-06-30T11:52Z"}],end:"2024-06-30T16:12Z",duration:259,hertz:25,lines:1080,bitrate:1770},
{games:[{id:"Rayman2R",start:"2024-07-01T11:49Z"}],end:"2024-07-01T16:26Z",duration:276,hertz:25,lines:1080,bitrate:2090},
{games:[{id:"Croc2",start:"2024-07-03T11:51Z"}],end:"2024-07-03T15:42Z",duration:230,hertz:30,lines:1080,bitrate:1210},
{games:[{id:"Croc2",start:"2024-07-04T11:50Z"}],end:"2024-07-04T16:16Z",duration:265,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"Celeste",start:"2024-07-05T11:51Z"}],end:"2024-07-05T15:32Z",duration:220,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Celeste",start:"2024-07-06T11:50Z"}],end:"2024-07-06T16:05Z",duration:254,hertz:30,lines:1080,bitrate:1780},
{games:[{id:"Rayman2R",start:"2024-07-07T11:52Z"}],end:"2024-07-07T16:38Z",duration:285,hertz:30,lines:1080,bitrate:1990},
{games:[{id:"Rayman2R",start:"2024-07-08T11:50Z"},{id:"MiniMetro",start:"2024-07-08T13:26Z"}],end:"2024-07-08T15:59Z",duration:248,hertz:25,lines:1080,bitrate:1950},
{games:[{id:"Croc1",start:"2024-07-10T11:51Z"},{id:"MiniMetro",start:"2024-07-10T13:43Z"}],end:"2024-07-10T16:39Z",duration:287,hertz:30,lines:1080,bitrate:2040},
{games:[{id:"MiniMetro",start:"2024-07-11T11:48Z"}],end:"2024-07-11T15:52Z",duration:243,hertz:30,lines:1080,bitrate:2040},
{games:[{id:"Celeste",start:"2024-07-12T11:53Z"}],end:"2024-07-12T15:55Z",duration:241,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"Celeste",start:"2024-07-13T11:53Z"}],end:"2024-07-13T15:26Z",duration:212,hertz:30,lines:1080,bitrate:2050},
{games:[{id:"Rayman3HH",start:"2024-07-14T12:21Z"}],end:"2024-07-14T15:18Z",duration:176,hertz:25,lines:1080,bitrate:2000},
{games:[{id:"Rayman3HH",start:"2024-07-15T11:53Z"}],end:"2024-07-15T14:54Z",duration:180,hertz:25,lines:1080,bitrate:1900},
{games:[{id:"MiniMetro",start:"2024-07-17T11:51Z"}],end:"2024-07-17T15:10Z",duration:198,hertz:30,lines:1080,bitrate:1770},
{games:[{id:"MiniMetro",start:"2024-07-18T11:51Z"}],end:"2024-07-18T15:09Z",duration:197,hertz:30,lines:1080,bitrate:1300},
{games:[{id:"Celeste",start:"2024-07-19T11:55Z"}],end:"2024-07-19T15:22Z",duration:206,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"Celeste",start:"2024-07-20T11:50Z"}],end:"2024-07-20T15:04Z",duration:193,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Celeste",start:"2024-07-21T11:51Z"}],end:"2024-07-21T15:41Z",duration:229,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"Celeste",start:"2024-07-22T11:52Z"}],end:"2024-07-22T15:31Z",duration:218,hertz:30,lines:1080,bitrate:2050},
{games:[{id:"MiniMetro",start:"2024-07-24T11:50Z"}],end:"2024-07-24T14:57Z",duration:186,hertz:30,lines:1080,bitrate:1090},
{games:[{id:"Celeste",start:"2024-07-25T11:50Z"}],end:"2024-07-25T17:56Z",duration:365,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"Rayman3HH",start:"2024-07-26T11:49Z"}],end:"2024-07-26T15:54Z",duration:244,hertz:25,lines:1080,bitrate:2040},
{games:[{id:"Crash3W",start:"2024-07-27T11:48Z"},{id:"drawing",start:"2024-07-27T14:40Z"},{id:"karaoke",start:"2024-07-27T15:01Z"},{id:"Crash3W",start:"2024-07-27T15:15Z"},{id:"drawing",start:"2024-07-27T19:18Z"},{id:"Crash3W",start:"2024-07-27T19:34Z"}],end:"2024-07-27T20:14Z",duration:505,hertz:30,lines:1080,bitrate:2080},
{games:[{id:"Crash4IAT",start:"2024-07-28T11:48Z"},{id:"karaoke",start:"2024-07-28T12:55Z"},{id:"drawing",start:"2024-07-28T13:17Z"},{id:"Crash4IAT",start:"2024-07-28T13:29Z"}],end:"2024-07-28T20:00Z",duration:491,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"Crash3W",start:"2024-07-29T11:51Z"}],end:"2024-07-29T19:57Z",duration:485,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"Crash4IAT",start:"2024-07-30T11:50Z"}],end:"2024-07-30T17:37Z",duration:346,hertz:30,lines:1080,bitrate:2020},
{games:[{id:"Crash4IAT",start:"2024-07-31T11:52Z"},{id:"drawing",start:"2024-07-31T14:18Z"},{id:"Crash4IAT",start:"2024-07-31T14:36Z"},{id:"drawing",start:"2024-07-31T18:48Z"}],end:"2024-07-31T19:04Z",duration:431,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"drawing",start:"2024-08-02T11:51Z"}],end:"2024-08-02T16:06Z",duration:254,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"drawing",start:"2024-08-03T07:45Z"}],end:"2024-08-03T09:59Z",duration:133,hertz:30,lines:1080,bitrate:1960},
{games:[{id:"drawing",start:"2024-08-03T11:50Z"}],end:"2024-08-03T17:35Z",duration:344,hertz:30,lines:1080,bitrate:1700},
{games:[{id:"drawing",start:"2024-08-04T11:53Z"}],end:"2024-08-04T16:05Z",duration:251,hertz:30,lines:1080,bitrate:2020},
{games:[{id:"drawing",start:"2024-08-05T11:54Z"}],end:"2024-08-05T19:42Z",duration:467,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"Crash4IAT",start:"2024-08-07T11:50Z"}],end:"2024-08-07T14:35Z",duration:164,hertz:30,lines:1080,bitrate:1900},
{games:[{id:"Crash4IAT",start:"2024-08-08T11:51Z"}],end:"2024-08-08T15:45Z",duration:233,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"RaymanM",start:"2024-08-09T11:51Z"}],end:"2024-08-09T15:22Z",duration:210,hertz:25,lines:1080,bitrate:2030},
{games:[{id:"RaymanM",start:"2024-08-10T11:51Z"}],end:"2024-08-10T15:26Z",duration:214,hertz:25,lines:1080,bitrate:1220},
{games:[{id:"drawing",start:"2024-08-12T07:50Z"}],end:"2024-08-12T17:00Z",duration:549,hertz:30,lines:1080,bitrate:2000},
{games:[{id:"Crash4IAT",start:"2024-08-14T11:50Z"}],end:"2024-08-14T16:05Z",duration:254,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"drawing",start:"2024-08-15T10:42Z"},{id:"Crash4IAT",start:"2024-08-15T11:47Z"},{id:"drawing",start:"2024-08-15T15:37Z"}],end:"2024-08-15T18:06Z",duration:443,hertz:30,lines:1080,bitrate:2010},
{games:[{id:"RaymanM",start:"2024-08-16T11:51Z"},{id:"drawing",start:"2024-08-16T14:16Z"}],end:"2024-08-16T15:19Z",duration:207,hertz:30,lines:1080,bitrate:2020},
{games:[{id:"drawing",start:"2024-08-18T11:52Z"}],end:"2024-08-18T15:38Z",duration:225,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"Crash4IAT",start:"2024-08-19T11:49Z"}],end:"2024-08-19T16:57Z",duration:307,hertz:30,lines:1080,bitrate:2080},
{games:[{id:"drawing",start:"2024-08-20T12:50Z"}],end:"2024-08-20T18:22Z",duration:331,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Crash4IAT",start:"2024-08-21T11:53Z"}],end:"2024-08-21T15:18Z",duration:204,hertz:30,lines:1080,bitrate:2040},
{games:[{id:"Crash4IAT",start:"2024-08-22T11:48Z"}],end:"2024-08-22T16:44Z",duration:295,hertz:30,lines:1080,bitrate:2110},
{games:[{id:"RaymanOrigins",start:"2024-08-23T11:51Z"}],end:"2024-08-23T15:28Z",duration:216,hertz:30,lines:1080,bitrate:2110},
{games:[{id:"RaymanOrigins",start:"2024-08-24T11:50Z"}],end:"2024-08-24T15:32Z",duration:221,hertz:30,lines:1080,bitrate:2110},
{games:[{id:"drawing",start:"2024-08-25T11:49Z"}],end:"2024-08-25T16:33Z",duration:283,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"MiniMetro",start:"2024-08-26T11:52Z"}],end:"2024-08-26T15:34Z",duration:221,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"Crash4IAT",start:"2024-08-28T11:51Z"}],end:"2024-08-28T15:48Z",duration:236,hertz:30,lines:1080,bitrate:2110},
{games:[{id:"Crash4IAT",start:"2024-08-29T11:52Z"}],end:"2024-08-29T16:02Z",duration:249,hertz:30,lines:1080,bitrate:2080},
{games:[{id:"RaymanOrigins",start:"2024-08-30T11:53Z"}],end:"2024-08-30T15:41Z",duration:227,hertz:30,lines:1080,bitrate:2030},
{games:[{id:"RaymanOrigins",start:"2024-08-31T11:51Z"}],end:"2024-08-31T15:35Z",duration:223,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"drawing",start:"2024-09-01T11:51Z"}],end:"2024-09-01T15:43Z",duration:231,hertz:30,lines:1080,bitrate:2030},
{games:[{id:"MiniMetro",start:"2024-09-02T11:57Z"},{id:"game-dev",start:"2024-09-02T14:45Z"}],end:"2024-09-02T18:41Z",duration:403,hertz:30,lines:1080,bitrate:2110},
{games:[{id:"Crash4IAT",start:"2024-09-04T11:51Z"}],end:"2024-09-04T16:23Z",duration:271,hertz:30,lines:1080,bitrate:1890},
{games:[{id:"Crash4IAT",start:"2024-09-05T11:53Z"}],end:"2024-09-05T16:12Z",duration:258,hertz:30,lines:1080,bitrate:2110},
{games:[{id:"RaymanOrigins",start:"2024-09-06T11:50Z"}],end:"2024-09-06T15:51Z",duration:240,hertz:30,lines:1080,bitrate:2060},
{games:[{id:"Spyro1",start:"2024-09-07T12:53Z"},{id:"Spyro2GTG",start:"2024-09-07T17:55Z"}],end:"2024-09-07T23:26Z",duration:632,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Spyro2GTG",start:"2024-09-08T11:48Z"},{id:"Spyro3YOTD",start:"2024-09-08T13:33Z"}],end:"2024-09-08T22:43Z",duration:654,hertz:30,lines:1080,bitrate:2080},
{games:[{id:"drawing",start:"2024-09-09T11:50Z"}],end:"2024-09-09T23:01Z",duration:670,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"drawing",start:"2024-09-10T13:51Z"}],end:"2024-09-10T20:09Z",duration:377,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"Crash4IAT",start:"2024-09-11T11:51Z"}],end:"2024-09-11T15:33Z",duration:221,hertz:30,lines:1080,bitrate:1950},
{games:[{id:"Crash4IAT",start:"2024-09-12T11:52Z"}],end:"2024-09-12T16:23Z",duration:270,hertz:30,lines:1080,bitrate:1600},
{games:[{id:"Crash4IAT",start:"2024-09-13T11:51Z"}],end:"2024-09-13T13:55Z",duration:123,hertz:30,lines:1080,bitrate:1220},
{games:[{id:"RaymanOrigins",start:"2024-09-14T11:52Z"},{id:"drawing",start:"2024-09-14T15:41Z"}],end:"2024-09-14T16:54Z",duration:301,hertz:30,lines:1080,bitrate:1850},
{games:[{id:"RaymanOrigins",start:"2024-09-15T11:48Z"},{id:"drawing",start:"2024-09-15T15:22Z"}],end:"2024-09-15T16:13Z",duration:264,hertz:30,lines:1080,bitrate:1630},
{games:[{id:"drawing",start:"2024-09-16T11:53Z"}],end:"2024-09-16T16:14Z",duration:260,hertz:60,lines:1080,bitrate:2080},
{games:[{id:"Celeste",start:"2024-09-18T11:52Z"}],end:"2024-09-18T15:57Z",duration:244,hertz:30,lines:1080,bitrate:1280},
{games:[{id:"Celeste",start:"2024-09-19T11:54Z"}],end:"2024-09-19T15:56Z",duration:241,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"NSLuckysTale",start:"2024-09-20T11:50Z"}],end:"2024-09-20T16:04Z",duration:253,hertz:30,lines:1080,bitrate:2080},
{games:[{id:"NSLuckysTale",start:"2024-09-21T11:50Z"}],end:"2024-09-21T16:31Z",duration:280,hertz:30,lines:1080,bitrate:2070},
{games:[{id:"Pokemon1Blue",start:"2024-09-22T11:50Z"}],end:"2024-09-22T15:55Z",duration:244,hertz:30,lines:1080,bitrate:1670},
{games:[{id:"Pokemon1Blue",start:"2024-09-23T11:55Z"}],end:"2024-09-23T16:31Z",duration:275,hertz:30,lines:1080,bitrate:1180},
{games:[{id:"Celeste",start:"2024-09-25T11:53Z"},{id:"drawing",start:"2024-09-25T12:16Z"}],end:"2024-09-25T20:28Z",duration:514,hertz:30,lines:1080,bitrate:2090},
{games:[{id:"drawing",start:"2024-09-26T11:56Z"},{id:"game-dev",start:"2024-09-26T12:23Z"}],end:"2024-09-26T18:14Z",duration:377,hertz:30,lines:1080,bitrate:1900},
{games:[{id:"NSLuckysTale",start:"2024-09-27T11:47Z"}],end:"2024-09-27T14:01Z",duration:133,hertz:15,lines:1080,bitrate:2070},
{games:[{id:"NSLuckysTale",start:"2024-09-28T11:52Z"}],end:"2024-09-28T12:50Z",duration:57,hertz:30,lines:1080,bitrate:1900},
{games:[{id:"drawing",start:"2024-09-29T11:55Z"}],end:"2024-09-29T23:17Z",duration:681,hertz:30,lines:1080,bitrate:2100},
{games:[{id:"drawing",start:"2024-09-30T11:56Z"}],end:"2024-09-30T21:04Z",duration:547,hertz:30,lines:1080,bitrate:2080},
{games:[{id:"drawing",start:"2024-10-02T11:52Z"}],end:"2024-10-02T12:54Z",duration:61,hertz:30,lines:1080,bitrate:1580},
{games:[{id:"drawing",start:"2024-10-02T16:59Z"}],end:"2024-10-02T20:26Z",duration:206,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"drawing",start:"2024-10-03T12:23Z"}],end:"2024-10-03T17:25Z",duration:301,hertz:30,lines:1080,bitrate:1320},
{games:[{id:"NSLuckysTale",start:"2024-10-04T11:51Z"},{id:"drawing",start:"2024-10-04T15:00Z"}],end:"2024-10-04T18:39Z",duration:407,hertz:30,lines:1080,bitrate:1570},
{games:[{id:"drawing",start:"2024-10-05T11:53Z"}],end:"2024-10-05T17:18Z",duration:324,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"Spyro1Demo",start:"2024-10-06T11:49Z"},{id:"Spyro1Prototype",start:"2024-10-06T13:44Z"},{id:"RegUsersDemo04",start:"2024-10-06T15:35Z"},{id:"Demo1v5",start:"2024-10-06T15:42Z"},{id:"Spyro1Demo",start:"2024-10-06T15:51Z"}],end:"2024-10-06T16:02Z",duration:252,hertz:30,lines:1080,bitrate:1570},
{games:[{id:"Spyro1Prototype",start:"2024-10-07T11:54Z"}],end:"2024-10-07T15:34Z",duration:219,hertz:30,lines:1080,bitrate:1860},
{games:[{id:"Spyro1Prototype",start:"2024-10-09T12:31Z"}],end:"2024-10-09T14:21Z",duration:109,hertz:30,lines:1080,bitrate:1580},
{games:[{id:"drawing",start:"2024-10-10T12:16Z"}],end:"2024-10-10T20:43Z",duration:506,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"drawing",start:"2024-10-11T11:57Z"}],end:"2024-10-11T16:19Z",duration:261,hertz:30,lines:1080,bitrate:1540},
{games:[{id:"drawing",start:"2024-10-12T11:54Z"},{id:"Pokemon1Blue",start:"2024-10-12T13:30Z"}],end:"2024-10-12T16:44Z",duration:289,hertz:30,lines:1080,bitrate:1600},
{games:[{id:"drawing",start:"2024-10-13T11:49Z"}],end:"2024-10-13T16:45Z",duration:295,hertz:30,lines:1080,bitrate:1570},
{games:[{id:"Pokemon1Blue",start:"2024-10-14T11:52Z"}],end:"2024-10-14T16:46Z",duration:293,hertz:30,lines:1080,bitrate:1490},
{games:[{id:"drawing",start:"2024-10-16T10:56Z"},{id:"Jak1TPL",start:"2024-10-16T12:21Z"}],end:"2024-10-16T18:36Z",duration:459,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"Jak1TPL",start:"2024-10-17T11:50Z"}],end:"2024-10-17T16:42Z",duration:291,hertz:30,lines:1080,bitrate:1580},
{games:[{id:"drawing",start:"2024-10-18T11:55Z"}],end:"2024-10-18T16:36Z",duration:280,hertz:30,lines:1080,bitrate:1090},
{games:[{id:"drawing",start:"2024-10-19T11:56Z"}],end:"2024-10-19T17:13Z",duration:316,hertz:30,lines:1080,bitrate:1600},
{games:[{id:"Pokemon1Blue",start:"2024-10-20T11:48Z"}],end:"2024-10-20T16:36Z",duration:287,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"Pokemon1Blue",start:"2024-10-21T11:55Z"}],end:"2024-10-21T15:15Z",duration:199,hertz:30,lines:1080,bitrate:1560},
{games:[{id:"Jak1TPL",start:"2024-10-23T11:52Z"}],end:"2024-10-23T14:57Z",duration:184,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"Jak2R",start:"2024-10-24T11:51Z"}],end:"2024-10-24T16:30Z",duration:278,hertz:30,lines:1080,bitrate:1600},
{games:[{id:"Rabbit&Steel",start:"2024-10-25T11:56Z"}],end:"2024-10-25T16:45Z",duration:288,hertz:30,lines:1080,bitrate:1590},
{games:[{id:"Rabbit&Steel",start:"2024-10-26T11:52Z"}],end:"2024-10-26T16:55Z",duration:302,hertz:30,lines:1080,bitrate:1580},
{games:[{id:"Pokemon1Blue",start:"2024-10-27T12:54Z"},{id:"drawing",start:"2024-10-27T14:18Z"}],end:"2024-10-27T20:35Z",duration:460,hertz:30,lines:1080,bitrate:1600},
{games:[{id:"Pokemon1Blue",start:"2024-10-28T12:52Z"}],end:"2024-10-28T15:45Z",duration:172,hertz:30,lines:1080,bitrate:1570},
{games:[{id:"ReturnFire2",start:"2024-10-30T12:49Z"},{id:"MSSolitaire",start:"2024-10-30T14:05Z"},{id:"MSHearts",start:"2024-10-30T14:11Z"},{id:"MSMinesweeper",start:"2024-10-30T14:26Z"},{id:"MSFreeCell",start:"2024-10-30T14:40Z"},{id:"Rabbit&Steel",start:"2024-10-30T15:04Z"}],end:"2024-10-30T17:32Z",duration:282,hertz:30,lines:1080,bitrate:1560},
{games:[{id:"Greveholm1",start:"2024-10-31T12:51Z"}],end:"2024-10-31T16:21Z",duration:209,hertz:30,lines:1080,bitrate:1580},
];

const databaseGames = {
'3Dmodelling': {'EU':"3D-modelling"},
'C3Racing': {'EU':"C3 Racing [PS1]"},
'Celeste': {'EU':"Celeste [Win]"},
'CODEBunny': {'EU':"CODE Bunny [Win]"},
'Crash1': {'EU':"Crash Bandicoot [PS1]"},
'Crash1NST': {'EU':"Crash Bandicoot [Win]"},
'Crash1XS': {'EU':"Crash Bandicoot XS [GBA]", 'US':"Crash Bandicoot: The Huge Adventure [GBA]", 'JP':"Crash Bandicoot Advance [GBA]"},
'Crash2CSB': {'EU':"Crash Bandicoot 2: Cortex Strikes Back [PS1]"},
'Crash2NST': {'EU':"Crash Bandicoot 2: Cortex Strikes Back [Win]"},
'Crash2NTranced': {'EU':"Crash Bandicoot 2: N-Tranced [GBA]", 'JP':"Crash Bandicoot Advance 2: Spinning Hypnosis Panic!? [GBA]"},
'Crash3NST': {'EU':"Crash Bandicoot: Warped [Win]", 'JP':"Crash Bandicoot 3: Warped! Around the World [Win]"},
'Crash3W': {'EU':"Crash Bandicoot 3: Warped [PS1]", 'US':"Crash Bandicoot: Warped [PS1]", 'JP':"Crash Bandicoot 3: Warped! Around the World [PS1]"},
'Crash4IAT': {'EU':"Crash Bandicoot 4: It's About Time [Win]", 'JP':"Crash Bandicoot 4: The Incredible Multiverse [Win]"},
'Crash4TWOC': {'EU':"Crash Bandicoot: The Wrath of Cortex [PS2]", 'JP':"Crash Bandicoot 4: Unleashed! The Demonic Power [PS2]"},
'CrashBash': {'EU':"Crash Bash [PS1]", 'JP':"Crash Bandicoot Carnival [PS1]"},
'CrashBoomBang': {'EU':"Crash Boom Bang! [DS]", 'JP':"Crash Bandicoot Festival [DS]"},
'CrashFusion': {'EU':"Crash Bandicoot Fusion [GBA]", 'US':"Crash Bandicoot Purple: Ripto's Rampage [GBA]", 'JP':"Crash Bandicoot Advance: The Great Friendship Operation! [GBA]"},
'CrashMindMutant': {'EU':"Crash: Mind Over Mutant [PS2]"},
'CRASHTitans': {'EU':"Crash of the Titans [PS2]"},
'CrashTwinsanity': {'EU':"Crash Twinsanity [PS2]", 'JP':"Crash Bandicoot 5 Huh? The Ambition of Crash and Cortex?!? [PS2]"},
'Croc1': {'EU':"Croc [GBC]"},
'Croc1LOTG': {'EU':"Croc: Legend of the Gobbos [PS1]", 'JP':"Croc! Pau Pau Island [PS1]"},
'Croc2': {'EU':"Croc 2 [PS1]"},
'CTR1': {'EU':"Crash Team Racing [PS1]", 'JP':"Crash Bandicoot Racing [PS1]"},
'CTR2Nitro': {'EU':"Crash Nitro Kart [PS2]"},
'CTR3TagTeam': {'EU':"Crash Tag Team Racing [PS2[", 'JP':"Crash Bandicoot: Gacchanko World [PS2]"},
'Demo1v5': {'EU':"Demo 1 (Version 5)"},
'DigimonArena1': {'EU':"Digimon Rumble Arena [PS1]", 'JP':"Digimon Tamers Battle Evolution  [PS1]"},
'DigimonArena2': {'EU':"Digimon Rumble Arena 2 [PS2]", 'JP':"Digimon Battle Chronicle [PS2]"},
'DigimonArena3': {'EU':"Digimon All-Star Rumble [PS3]"},
'DogsLife': {'EU':"Dog's Life [PS2]"},
'drawing': {'EU':"drawing"},
'EscapeSim': {'EU':"Escape Simulator [Win]", 'JP':"Escape Room Simulator [Win]"},
'EuroTruckSim2': {'EU':"Euro Truck Simulator 2 [Win]"},
'game-dev': {'EU':"game-development"},
'GeneRally': {'EU':"GeneRally [Win]"},
'Greveholm1': {'EU':"The Mystery at Greveholm [Win98]"},
'HamsterBall': {'EU':"HamsterBall [Win]"},
'IAmFish': {'EU':"I Am Fish [Win]"},
'ItadakiStreet6': {'EU':"Boom Street [Wii]", 'US':"Fortune Street [Wii]", 'JP':"Itadaki Street [Wii]"},
'Jak1TPL': {'EU':"Jak and Daxter: The Precursor Legacy [PS2]", 'JP':"Jak & Daxter: Old World Heritage [PS2]"},
'Jak2R': {'EU':"Jak II: Renegade [PS2]", 'US':"Jak II [PS2]", 'JP':"Jak & Daxter 2 [PS2]"},
'JetRider1': {'EU':"Jet Rider [PS1]", 'US':"Jet Moto [PS1]", 'JP':"Jet Moto [PS1]"},
'karaoke': {'EU':"karaoke"},
'KingsleysAdv': {'EU':"Kingsley's Adventure [PS1]"},
'Klonoa1DTP': {'EU':"Klonoa: Door to Phantomile [PS1]", 'JP':"Klonoa of the Wind: Door to Phantomile [PS1]"},
'Klonoa1EOD': {'EU':"Klonoa: Empire of Dreams [GBA]", 'JP':"Klonoa of the Wind: Dreaming Empire [GBA]"},
'Klonoa2DCP': {'EU':"Klonoa 2: Dream Champ Tournament [GBA]", 'JP':"Klonoa of the Wind G2: Dream Champ Tournament [GBA]"},
'Klonoa2LV': {'EU':"Klonoa 2: Lunatea's Veil [PS2]", 'JP':"Klonoa of the Wind 2: The World's Forgotten Wish [PS2]"},
'KlonoaBeach': {'EU':"Klonoa Beach Volleyball [PS1]", 'JP':"Klonoa Beach Volleyball: The Ultimate Team Tournament [PS1]"},
'KlonoaLSM': {'EU':"Klonoa Heroes: Legendary Star Medal [GBA]"},
'KlonoaMM': {'EU':"Klonoa: Moonlight Museum [WS]", 'JP':"Klonoa of the Wind: Moonlight Museum [WS]"},
'KulaWorld': {'EU':"Kula World [PS1]", 'US':"Roll Away [PS1]", 'JP':"KulaQuest [PS1]"},
'KuriKuriMix1': {'EU':"Kuri Kuri Mix [PS2]", 'US':"The Adventures of Cookie & Cream [PS2]"},
'Kurushi2Final': {'EU':"Kurushi Final: Mental Blocks [PS1]", 'JP':"I.Q. Final [PS1]"},
'Lunistice': {'EU':"Lunistice [Win]"},
'MiniMetro': {'EU':"Mini Metro [Win]"},
'MotoRacer1': {'EU':"Moto Racer [PS1]"},
'MotoRacer2': {'EU':"Moto Racer 2 [PS1]"},
'MotoRacer3': {'EU':"Moto Racer 3 [Win]"},
'MotoRacerWT': {'EU':"Moto Racer World Tour [PS1]"},
'MSFreeCell': {'EU':"Microsoft FreeCell [Win98]"},
'MSHearts': {'EU':"Microsoft Hearts [Win98]"},
'MSMinesweeper': {'EU':"Microsoft Minesweeper [Win98]"},
'MSSolitaire': {'EU':"Microsoft Solitaire [Win98]"},
'Mulle1Car': {'EU':"Bygg bilar med Mulle Meck [Win98]"},
'Mulle2Boat': {'EU':"Bygg båtar med Mulle Meck [Win98]"},
'Mulle3Plane': {'EU':"Bygg flygplan med Mulle Meck [Win98]"},
'NeopetsTDF': {'EU':"Neopets: The Darkest Faerie [PS2]"},
'NFS4RC': {'EU':"Need for Speed: Road Challenge [Win]", 'US':"Need for Speed: High Stakes [Win]", 'AU':"Need for Speed: High Stakes [Win]", 'JP':"Overdriving IV [Win]"},
'NSLuckysTale': {'EU':"New Super Lucky's Tale [Win]"},
'OkamiHD': {'EU':"Ōkami HD [Win]", 'JP':"Ōkami HD version [Win]"},
'PoFTrädgård': {'EU':"Pettson o̱ Findus i trädgården [Win98]"},
'Pokemon1Blue': {'EU':"Pokémon Blue [GB]", 'JP':"Pocket Monsters Blue [GB]"},
'Pokemon2Crystal': {'EU':"Pokémon Crystal [GBC]", 'JP':"Pocket Monsters Crystal [GBC]"},
'Pokemon3Clsseum': {'EU':"Pokémon Colosseum [NGC]", 'US':"Pokémon Colosseum [GCN]"},
'Pokemon3Emerald': {'EU':"Pokémon Emerald [GBA]", 'JP':"Pocket Monsters Emerald [GBA]"},
'PonPonsBirthday': {'EU':"Pon Pon's birthday"},
'Portal1': {'EU':"Portal [Win]"},
'Portal2': {'EU':"Portal 2 [Win]"},
'QuantConund': {'EU':"Quantum Conundrum [Win]"},
'Rabbit&Steel': {'EU':"Rabbit & Steel [Win]"},
'Rayman1': {'EU':"Rayman [PS1]"},
'Rayman2R': {'EU':"Rayman 2: Revolution [PS2]", 'JP':"Rayman: Revolution! [PS2]"},
'Rayman3HH': {'EU':"Rayman 3: Hoodlum Havoc [PS2]"},
'RaymanM': {'EU':"Rayman M [PS2]", 'US':"Rayman Arena [PS2]", 'JP':"Rayman Arena [PS2]"},
'RaymanOrigins': {'EU':"Rayman Origins [Win]"},
'RCT1': {'EU':"RollerCoaster Tycoon [Win]"},
'RegUsersDemo04': {'EU':"Registered Users Demo 04 [PS1]"},
'ReturnFire1': {'EU':"Return Fire [PS1]"},
'ReturnFire2': {'EU':"Return Fire 2 [Win98]"},
'SeppuKuties': {'EU':"SeppuKuties [Flash]"},
'Smash1': {'EU':"Super Smash Bros. [N64]", 'JP':"Nintendo All-Stars! Dairantou Smash Brothers [N64]"},
'Smash2Melee': {'EU':"Super Smash Bros. Melee [NGC]", 'US':"Super Smash Bros. Melee [GCN]", 'JP':"Dairantou Smash Bros. DX [NGC]"},
'Smash3Brawl': {'EU':"Super Smash Bros. Brawl [Wii]", 'JP':"Dairantou Smash Bros. X [Wii]"},
'Sporcle': {'EU':"Sporcle [Web]"},
'Spyro1': {'EU':"Spyro the Dragon [PS1]"},
'Spyro1Demo': {'EU':"Spyro the Dragon [PS1, demo]"},
'Spyro1Prototype': {'EU':"Spyro the Dragon [PS1, prototype]"},
'Spyro1Reignited': {'EU':"Spyro the Dragon [Win]"},
'Spyro1SOI': {'EU':"Spyro: Season of Ice [GBA]", 'JP':"Spyro Advance [GBA]"},
'Spyro2005': {'EU':"Spyro the Dragon [JME]", 'US':"", 'AU':"", 'JP':""},
'Spyro2GTG': {'EU':"Spyro 2: Gateway to Glimmer [PS1]", 'US':"Spyro 2: Ripto's Rage! [PS1]", 'JP':"Spyro & Sparx: Tondemo Tours [PS1]"},
'Spyro2Reignited': {'EU':"Spyro 2: Ripto's Rage! [Win]"},
'Spyro2SOF': {'EU':"Spyro 2: Season of Flame [GBA]"},
'Spyro3Adventure': {'EU':"Spyro Adventure [GBA]", 'US':"Spyro: Attack of the Rhynocs [GBA]", 'JP':"Spyro: Attack of the Rhynocs [GBA]"},
'Spyro3Reignited': {'EU':"Spyro: Year of the Dragon [Win]"},
'Spyro3YOTD': {'EU':"Spyro: Year of the Dragon [PS1]"},
'Spyro4ETD': {'EU':"Spyro: Enter the Dragonfly [PS2]"},
'Spyro5AHT': {'EU':"Spyro: A Hero's Tail [PS2]"},
'Spyro6SL': {'EU':"Spyro: Shadow Legacy [DS]"},
'SpyroFusion': {'EU':"Spyro Fusion [GBA]", 'US':"Spyro Orange: The Cortex Conspiracy [GBA]", 'JP':"Spyro Advance: The Great Friendship Operation! [GBA]"},
'SpyroRQ': {'EU':"Spyro: Ripto Quest [JME]"},
'TIR': {'EU':"Total Immersion Racing [PS2]"},
'TLOS1AMB': {'EU':"The Legend of Spyro: A New Beginning [PS2]"},
'TLOS1AMBGBA': {'EU':"The Legend of Spyro: A New Beginning [GBA]"},
'TLOS1AMBJME': {'EU':"The Legend of Spyro: A New Beginning [JME]"},
'TLOS1AMBNDS': {'EU':"The Legend of Spyro: A New Beginning [NDS]"},
'TLOS2TEN': {'EU':"The Legend of Spyro: The Eternal Night [PS2]"},
'TLOS2TENGBA': {'EU':"The Legend of Spyro: The Eternal Night [GBA]"},
'TLOS2TENJME': {'EU':"The Legend of Spyro: The Eternal Night [JME]"},
'TLOS2TENNDS': {'EU':"The Legend of Spyro: The Eternal Night [NDS]"},
'TLOS3DOTD': {'EU':"The Legend of Spyro: Dawn of the Dragon [PS3]"},
'TLOS3DOTDJME': {'EU':"The Legend of Spyro: Dawn of the Dragon [JME]"},
'TLOS3DOTDNDS': {'EU':"The Legend of Spyro: Dawn of the Dragon [NDS]"},
'Tombi1': {'EU':"Tombi! [PS1]", 'US':"Tomba! [PS1]", 'JP':"Ore! Tomba [PS1]"},
'Tombi2': {'EU':"Tombi! 2 [PS1]", 'US':"Tomba! 2: The Evil Swine Return [PS1]", 'JP':"Tomba! The Wild Adventure [PS1]"},
'TyTasmanian1': {'EU':"Ty the Tasmanian Tiger [Win]"},
'TyTasmanian2BR': {'EU':"Ty the Tasmanian Tiger 2: Bush Rescue [Win]"},
'UnderTheSkin': {'EU':"Under the Skin [PS2]", 'JP':"Meiwaku Hoshibito: Panic Maker [PS2]"},
'unknown': {'EU':"unknown"},
'VibRibbon': {'EU':"Vib-Ribbon [PS1]"},
'Wordle': {'EU':"Wordle [Web]"},
'ZapperOWC': {'EU':"Zapper: One Wicked Cricket! [PS2]"},
'ZorroAndZedd': {'EU':"Zorro and Zedd [Win]"},
}

function getGameTitleByMarket(gameId, market) {
	if (databaseGames[gameId] !== undefined) {
		const game = databaseGames[gameId];
		if (game[market] !== undefined) {
			return game[market];
		} else {
			return game['EU'];
		}
	} else {
		return `<span style="font-weight:bold;color:red">${gameId}</span>`;
	}
}

function getTableFromDatabase(datebase, mode) {
	let globalIndex = 0;
	const fragment = document.createDocumentFragment();
	const trH = document.createElement('tr');
	trH.innerHTML = `<tr>
					<th class="column-fit column-index">#</th>
					<th class="column-fit">date</th>
					<th class="column-fit">time</th>
					<th class="column-expand">category</th>
					<th class="column-fit column-length"><span class="text-wide">length</span><span class="text-narrow text-squish">h:mm</span></th>
					<th class="column-fit column-video">video</th>
				</tr>`;
	fragment.appendChild(trH);
	datebase.forEach((entry, index) => {
		const totalGames = entry.games.length;
		const streamStart = new Date(entry.games[0]?.start);
		const streamEnd = new Date(entry.end);
		const streamReference = formatSetting[1]==="30h"? new Date(streamStart) : new Date(new Date(streamStart).getTime() + (new Date(streamEnd).getTime() - new Date(streamStart).getTime()) / 4);
		const streamDuration = Math.round((streamEnd - streamStart) / (1000 * 60));
		const streamDate = streamStart ? getLocaleDate(streamStart, formatSetting[0], getActiveTimezone()) : '-';
		const streamQualityWide = `${entry.lines}p ${entry.hertz} Hz`;
		const streamQualityNarrow = `${entry.lines}p${entry.hertz}`;
		
		if (mode === "all") {
			const rowClass = index % 2 === 0 ? "row-even" : "row-odd";
			const tr = document.createElement('tr');
			tr.classList.add(rowClass, "upper", "lower");
			const timeRangeString = getLocaleTimeRange(streamStart, streamEnd, streamReference, formatSetting[1], getActiveTimezone());
			let gameTitleString = "";
			if (totalGames === 1) {
				gameTitleString = getGameTitleByMarket(entry.games[0]?.id, formatSetting[3]);
			} else {
				gameTitleString = getGameTitleByMarket(entry.games[0]?.id, formatSetting[3]) + ` <i>+${totalGames-1} more</i>`;
			}
			tr.innerHTML = `
					<td class="column-fit column-index">${index + 1}</td>
					<td class="column-fit">${streamDate}</td>
					<td class="column-fit">${timeRangeString}</td>
					<td class="column-expand">${gameTitleString}</td>
					<td class="column-fit column-length"><span class="text-wide">${formatDurationWide(gameDuration)}</span><span class="text-narrow">${formatDurationNarrow(gameDuration)}</span></td>
					<td class="column-fit column-video"><span class="text-wide">${streamQualityWide}</span><span class="text-narrow">${streamQualityNarrow}</span></td>
				`;
			fragment.appendChild(tr);
		} else if (mode === "streams" || mode === "games") {
			const rowClass = index % 2 === 0 ? "row-even" : "row-odd";
			entry.games.forEach((game, gameIndex) => {
				const tr = document.createElement('tr');
				tr.classList.add(rowClass);
				if (gameIndex === 0) {
					tr.classList.add("upper");
				}
				if (gameIndex === totalGames - 1) {
					tr.classList.add("lower");
				}
				const nextGame = entry.games[gameIndex + 1];
				const gameStart = new Date(game.start);
				const gameEnd = nextGame ? new Date(nextGame.start) : new Date(entry.end);
				const gameDuration = Math.round((gameEnd - gameStart) / (1000 * 60));
				
				const timeRangeString = getLocaleTimeRange(gameStart, gameEnd, streamReference, formatSetting[1], getActiveTimezone());
				const gameTitleString = getGameTitleByMarket(game.id, formatSetting[3]);
				
				if (mode === "streams") {
					if (gameIndex === 0) {
						let td_styling = ` class="column-fit%1"`;
						if (totalGames > 1) {
							td_styling = ` class="column-fit tall%1" rowspan="${totalGames}"`;
						}
						tr.innerHTML = `
							<td${td_styling.replace("%1"," column-index")}>${index + 1}</td>
							<td${td_styling.replace("%1","")}>${streamDate}</td>
							<td class="column-fit">${timeRangeString}</td>
							<td class="column-expand">${gameTitleString}</td>
							<td${td_styling.replace("%1"," column-length")}><span class="text-wide">${formatDurationWide(streamDuration)}</span><span class="text-narrow">${formatDurationNarrow(streamDuration)}</span></td>
							<td${td_styling.replace("%1"," column-video")}><span class="text-wide">${streamQualityWide}</span><span class="text-narrow">${streamQualityNarrow}</span></td>
						`;
					} else {
						tr.innerHTML = `
							<td class="column-fit">${timeRangeString}</td>
							<td class="column-expand">${gameTitleString}</td>
						`;
					}
				} else if (mode === "games") {
					tr.innerHTML = `
						<td class="column-fit column-index">${index + 1}</td>
						<td class="column-fit">${streamDate}</td>
						<td class="column-fit">${timeRangeString}</td>
						<td class="column-expand">${gameTitleString}</td>
						<td class="column-fit column-length"><span class="text-wide">${formatDurationWide(gameDuration)}</span><span class="text-narrow">${formatDurationNarrow(gameDuration)}</span></td>
						<td class="column-fit column-video"><span class="text-wide">${streamQualityWide}</span><span class="text-narrow">${streamQualityNarrow}</span></td>
					`;
				}
				
				fragment.appendChild(tr);
			});
		} else if (mode === "none") {
			entry.games.forEach((game, gameIndex) => {
				const rowClass = globalIndex % 2 === 0 ? "row-even" : "row-odd";
				const tr = document.createElement('tr');
				tr.classList.add(rowClass, "upper", "lower");
				const nextGame = entry.games[gameIndex + 1];
				const gameStart = new Date(game.start);
				const gameEnd = nextGame ? new Date(nextGame.start) : new Date(entry.end);
				const gameDuration = Math.round((gameEnd - gameStart) / (1000 * 60));
				
				const gameDate = gameStart ? getLocaleDate(gameStart, formatSetting[0], getActiveTimezone()) : '-';
				const timeRangeString = getLocaleTimeRange(gameStart, gameEnd, gameStart, formatSetting[1], getActiveTimezone());
				const gameTitleString = getGameTitleByMarket(game.id, formatSetting[3]);
				
				tr.innerHTML = `
					<td class="column-fit column-index">${globalIndex + 1}</td>
					<td class="column-fit">${gameDate}</td>
					<td class="column-fit">${timeRangeString}</td>
					<td class="column-expand">${gameTitleString}</td>
					<td class="column-fit column-length"><span class="text-wide">${formatDurationWide(gameDuration)}</span><span class="text-narrow">${formatDurationNarrow(gameDuration)}</span></td>
					<td class="column-fit column-video"><span class="text-wide">${streamQualityWide}</span><span class="text-narrow">${streamQualityNarrow}</span></td>
				`;
				
				fragment.appendChild(tr);
				globalIndex++;
			});
		}
	});
	tableBody.appendChild(fragment);
	return tableBody;
}

function formatDurationWide(minutes) {
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return `${h>0?h+` h `:``}${m<10&&h>0?`0`+m:m} min`;
}
function formatDurationNarrow(minutes) {
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return `${h+`:`}${m<10&&h>0?`0`+m:m}`;
}