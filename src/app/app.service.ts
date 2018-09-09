import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly data = [{
    'time': 1536401764950,
    'values': {
      'power': 2265610
    }
  },
    {
      'time': 1536401766953,
      'values': {
        'power': 2265710
      }
    },
    {
      'time': 1536401768954,
      'values': {
        'power': 2265010
      }
    },
    {
      'time': 1536401770956,
      'values': {
        'power': 2263980
      }
    },
    {
      'time': 1536401772958,
      'values': {
        'power': 2262390
      }
    },
    {
      'time': 1536401774960,
      'values': {
        'power': 2260710
      }
    },
    {
      'time': 1536401776961,
      'values': {
        'power': 2259870
      }
    },
    {
      'time': 1536401778963,
      'values': {
        'power': 2254870
      }
    },
    {
      'time': 1536401780966,
      'values': {
        'power': 2253560
      }
    },
    {
      'time': 1536401782968,
      'values': {
        'power': 2275420
      }
    },
    {
      'time': 1536401784969,
      'values': {
        'power': 2305580
      }
    },
    {
      'time': 1536401786971,
      'values': {
        'power': 2319110
      }
    },
    {
      'time': 1536401788973,
      'values': {
        'power': 2320690
      }
    },
    {
      'time': 1536401790975,
      'values': {
        'power': 2376750
      }
    },
    {
      'time': 1536401792977,
      'values': {
        'power': 2362600
      }
    },
    {
      'time': 1536401794979,
      'values': {
        'power': 2259170
      }
    },
    {
      'time': 1536401796981,
      'values': {
        'power': 2233470
      }
    },
    {
      'time': 1536401798983,
      'values': {
        'power': 2261180
      }
    },
    {
      'time': 1536401800985,
      'values': {
        'power': 2287900
      }
    },
    {
      'time': 1536401802986,
      'values': {
        'power': 2293480
      }
    },
    {
      'time': 1536401804989,
      'values': {
        'power': 2285630
      }
    },
    {
      'time': 1536401806991,
      'values': {
        'power': 2277970
      }
    },
    {
      'time': 1536401808993,
      'values': {
        'power': 2277630
      }
    },
    {
      'time': 1536401810995,
      'values': {
        'power': 2278770
      }
    },
    {
      'time': 1536401812996,
      'values': {
        'power': 2277870
      }
    },
    {
      'time': 1536401814998,
      'values': {
        'power': 2278810
      }
    },
    {
      'time': 1536401817001,
      'values': {
        'power': 2283850
      }
    },
    {
      'time': 1536401819003,
      'values': {
        'power': 2290200
      }
    },
    {
      'time': 1536401821005,
      'values': {
        'power': 2291990
      }
    },
    {
      'time': 1536401823007,
      'values': {
        'power': 2288470
      }
    },
    {
      'time': 1536401825009,
      'values': {
        'power': 2282520
      }
    },
    {
      'time': 1536401827010,
      'values': {
        'power': 2279000
      }
    },
    {
      'time': 1536401829012,
      'values': {
        'power': 2278950
      }
    },
    {
      'time': 1536401831015,
      'values': {
        'power': 2281190
      }
    },
    {
      'time': 1536401833017,
      'values': {
        'power': 2282780
      }
    },
    {
      'time': 1536401835019,
      'values': {
        'power': 2287200
      }
    },
    {
      'time': 1536401837020,
      'values': {
        'power': 2294760
      }
    },
    {
      'time': 1536401839023,
      'values': {
        'power': 2295550
      }
    },
    {
      'time': 1536401841024,
      'values': {
        'power': 2268840
      }
    },
    {
      'time': 1536401843026,
      'values': {
        'power': 2202230
      }
    },
    {
      'time': 1536401845028,
      'values': {
        'power': 2158860
      }
    },
    {
      'time': 1536401847029,
      'values': {
        'power': 2157910
      }
    },
    {
      'time': 1536401849032,
      'values': {
        'power': 2157530
      }
    },
    {
      'time': 1536401851034,
      'values': {
        'power': 2156940
      }
    },
    {
      'time': 1536401853035,
      'values': {
        'power': 2156190
      }
    },
    {
      'time': 1536401855037,
      'values': {
        'power': 2151390
      }
    },
    {
      'time': 1536401857040,
      'values': {
        'power': 2143940
      }
    },
    {
      'time': 1536401859042,
      'values': {
        'power': 2141220
      }
    },
    {
      'time': 1536401861044,
      'values': {
        'power': 2267750
      }
    },
    {
      'time': 1536401863046,
      'values': {
        'power': 2361430
      }
    },
    {
      'time': 1536401865049,
      'values': {
        'power': 2258130
      }
    },
    {
      'time': 1536401867049,
      'values': {
        'power': 2186410
      }
    },
    {
      'time': 1536401869051,
      'values': {
        'power': 2185260
      }
    },
    {
      'time': 1536401871054,
      'values': {
        'power': 2185250
      }
    },
    {
      'time': 1536401873056,
      'values': {
        'power': 2187180
      }
    },
    {
      'time': 1536401875059,
      'values': {
        'power': 2188890
      }
    },
    {
      'time': 1536401877062,
      'values': {
        'power': 2188570
      }
    },
    {
      'time': 1536401879061,
      'values': {
        'power': 2188290
      }
    },
    {
      'time': 1536401881063,
      'values': {
        'power': 2188600
      }
    },
    {
      'time': 1536401883065,
      'values': {
        'power': 2188540
      }
    },
    {
      'time': 1536401885067,
      'values': {
        'power': 2188540
      }
    },
    {
      'time': 1536401887069,
      'values': {
        'power': 2189850
      }
    },
    {
      'time': 1536401889071,
      'values': {
        'power': 2191300
      }
    },
    {
      'time': 1536401891073,
      'values': {
        'power': 2191040
      }
    },
    {
      'time': 1536401893075,
      'values': {
        'power': 2194420
      }
    },
    {
      'time': 1536401895076,
      'values': {
        'power': 2200920
      }
    },
    {
      'time': 1536401897078,
      'values': {
        'power': 2203720
      }
    },
    {
      'time': 1536401899081,
      'values': {
        'power': 2202770
      }
    },
    {
      'time': 1536401901083,
      'values': {
        'power': 2202120
      }
    },
    {
      'time': 1536401903086,
      'values': {
        'power': 2201380
      }
    },
    {
      'time': 1536401905086,
      'values': {
        'power': 2200520
      }
    },
    {
      'time': 1536401907089,
      'values': {
        'power': 2200200
      }
    },
    {
      'time': 1536401909091,
      'values': {
        'power': 2203520
      }
    },
    {
      'time': 1536401911092,
      'values': {
        'power': 2465360
      }
    },
    {
      'time': 1536401913094,
      'values': {
        'power': 2749000
      }
    },
    {
      'time': 1536401915097,
      'values': {
        'power': 2771630
      }
    },
    {
      'time': 1536401917099,
      'values': {
        'power': 2771750
      }
    },
    {
      'time': 1536401919101,
      'values': {
        'power': 2788180
      }
    },
    {
      'time': 1536401921102,
      'values': {
        'power': 2796810
      }
    },
    {
      'time': 1536401923104,
      'values': {
        'power': 2779880
      }
    },
    {
      'time': 1536401925107,
      'values': {
        'power': 2768790
      }
    },
    {
      'time': 1536401927110,
      'values': {
        'power': 2768710
      }
    },
    {
      'time': 1536401929110,
      'values': {
        'power': 2788050
      }
    },
    {
      'time': 1536401931112,
      'values': {
        'power': 2809620
      }
    },
    {
      'time': 1536401933114,
      'values': {
        'power': 2788920
      }
    },
    {
      'time': 1536401935116,
      'values': {
        'power': 2763340
      }
    },
    {
      'time': 1536401937118,
      'values': {
        'power': 2756840
      }
    },
    {
      'time': 1536401939120,
      'values': {
        'power': 2758990
      }
    },
    {
      'time': 1536401941122,
      'values': {
        'power': 2782990
      }
    },
    {
      'time': 1536401943124,
      'values': {
        'power': 2794520
      }
    },
    {
      'time': 1536401945125,
      'values': {
        'power': 2769100
      }
    },
    {
      'time': 1536401947128,
      'values': {
        'power': 2753800
      }
    },
    {
      'time': 1536401949129,
      'values': {
        'power': 2754960
      }
    },
    {
      'time': 1536401951131,
      'values': {
        'power': 2783150
      }
    },
    {
      'time': 1536401953135,
      'values': {
        'power': 2818400
      }
    },
    {
      'time': 1536401955135,
      'values': {
        'power': 2794660
      }
    },
    {
      'time': 1536401957137,
      'values': {
        'power': 2759420
      }
    },
    {
      'time': 1536401959140,
      'values': {
        'power': 2755030
      }
    },
    {
      'time': 1536401961142,
      'values': {
        'power': 2759010
      }
    },
    {
      'time': 1536401963144,
      'values': {
        'power': 2797760
      }
    },
    {
      'time': 1536401965146,
      'values': {
        'power': 2819440
      }
    },
    {
      'time': 1536401967148,
      'values': {
        'power': 2779860
      }
    },
    {
      'time': 1536401969150,
      'values': {
        'power': 2753410
      }
    },
    {
      'time': 1536401971152,
      'values': {
        'power': 2753770
      }
    },
    {
      'time': 1536401973154,
      'values': {
        'power': 2795080
      }
    },
    {
      'time': 1536401975158,
      'values': {
        'power': 2856860
      }
    },
    {
      'time': 1536401977157,
      'values': {
        'power': 2828820
      }
    },
    {
      'time': 1536401979159,
      'values': {
        'power': 2775540
      }
    },
    {
      'time': 1536401981161,
      'values': {
        'power': 2771130
      }
    },
    {
      'time': 1536401983163,
      'values': {
        'power': 2776640
      }
    },
    {
      'time': 1536401985165,
      'values': {
        'power': 2829790
      }
    },
    {
      'time': 1536401987167,
      'values': {
        'power': 2863140
      }
    },
    {
      'time': 1536401989169,
      'values': {
        'power': 2807580
      }
    },
    {
      'time': 1536401991171,
      'values': {
        'power': 2767850
      }
    },
    {
      'time': 1536401993173,
      'values': {
        'power': 2768440
      }
    },
    {
      'time': 1536401995175,
      'values': {
        'power': 2753850
      }
    },
    {
      'time': 1536401997177,
      'values': {
        'power': 2721820
      }
    },
    {
      'time': 1536401999179,
      'values': {
        'power': 2705100
      }
    },
    {
      'time': 1536402001181,
      'values': {
        'power': 2717870
      }
    },
    {
      'time': 1536402003182,
      'values': {
        'power': 2694310
      }
    },
    {
      'time': 1536402005186,
      'values': {
        'power': 2515770
      }
    },
    {
      'time': 1536402007186,
      'values': {
        'power': 2374870
      }
    },
    {
      'time': 1536402009189,
      'values': {
        'power': 2370770
      }
    },
    {
      'time': 1536402011190,
      'values': {
        'power': 2359950
      }
    },
    {
      'time': 1536402013192,
      'values': {
        'power': 2351110
      }
    },
    {
      'time': 1536402015195,
      'values': {
        'power': 2294440
      }
    },
    {
      'time': 1536402017197,
      'values': {
        'power': 2212420
      }
    },
    {
      'time': 1536402019199,
      'values': {
        'power': 2184960
      }
    },
    {
      'time': 1536402021201,
      'values': {
        'power': 2189680
      }
    },
    {
      'time': 1536402023203,
      'values': {
        'power': 2243020
      }
    },
    {
      'time': 1536402025204,
      'values': {
        'power': 2327440
      }
    },
    {
      'time': 1536402027206,
      'values': {
        'power': 2367260
      }
    },
    {
      'time': 1536402029209,
      'values': {
        'power': 2366570
      }
    },
    {
      'time': 1536402031210,
      'values': {
        'power': 2357100
      }
    },
    {
      'time': 1536402033212,
      'values': {
        'power': 2354710
      }
    },
    {
      'time': 1536402035213,
      'values': {
        'power': 2295170
      }
    },
    {
      'time': 1536402037216,
      'values': {
        'power': 2215790
      }
    },
    {
      'time': 1536402039218,
      'values': {
        'power': 2183900
      }
    },
    {
      'time': 1536402041220,
      'values': {
        'power': 2186820
      }
    },
    {
      'time': 1536402043222,
      'values': {
        'power': 2237090
      }
    },
    {
      'time': 1536402045224,
      'values': {
        'power': 2321260
      }
    },
    {
      'time': 1536402047225,
      'values': {
        'power': 2363060
      }
    },
    {
      'time': 1536402049228,
      'values': {
        'power': 2365640
      }
    },
    {
      'time': 1536402051230,
      'values': {
        'power': 2364640
      }
    },
    {
      'time': 1536402053232,
      'values': {
        'power': 2362410
      }
    },
    {
      'time': 1536402055235,
      'values': {
        'power': 2295960
      }
    },
    {
      'time': 1536402057237,
      'values': {
        'power': 2217510
      }
    },
    {
      'time': 1536402059237,
      'values': {
        'power': 2201610
      }
    },
    {
      'time': 1536402061240,
      'values': {
        'power': 2203940
      }
    },
    {
      'time': 1536402063242,
      'values': {
        'power': 2251520
      }
    },
    {
      'time': 1536402065244,
      'values': {
        'power': 2339190
      }
    },
    {
      'time': 1536402067246,
      'values': {
        'power': 2385680
      }
    },
    {
      'time': 1536402069248,
      'values': {
        'power': 2384440
      }
    },
    {
      'time': 1536402071249,
      'values': {
        'power': 2369260
      }
    },
    {
      'time': 1536402073251,
      'values': {
        'power': 2355000
      }
    },
    {
      'time': 1536402075253,
      'values': {
        'power': 2289670
      }
    },
    {
      'time': 1536402077255,
      'values': {
        'power': 2212990
      }
    },
    {
      'time': 1536402079257,
      'values': {
        'power': 2196560
      }
    },
    {
      'time': 1536402081259,
      'values': {
        'power': 2202630
      }
    },
    {
      'time': 1536402083262,
      'values': {
        'power': 2263010
      }
    },
    {
      'time': 1536402085263,
      'values': {
        'power': 2338730
      }
    },
    {
      'time': 1536402087264,
      'values': {
        'power': 2369110
      }
    },
    {
      'time': 1536402089267,
      'values': {
        'power': 2365480
      }
    },
    {
      'time': 1536402091269,
      'values': {
        'power': 2355780
      }
    },
    {
      'time': 1536402093271,
      'values': {
        'power': 2344250
      }
    },
    {
      'time': 1536402095273,
      'values': {
        'power': 2275380
      }
    },
    {
      'time': 1536402097275,
      'values': {
        'power': 2197360
      }
    },
    {
      'time': 1536402099278,
      'values': {
        'power': 2181700
      }
    },
    {
      'time': 1536402101279,
      'values': {
        'power': 2186090
      }
    },
    {
      'time': 1536402103281,
      'values': {
        'power': 2249230
      }
    },
    {
      'time': 1536402105283,
      'values': {
        'power': 2332970
      }
    },
    {
      'time': 1536402107285,
      'values': {
        'power': 2361180
      }
    },
    {
      'time': 1536402109288,
      'values': {
        'power': 2365110
      }
    },
    {
      'time': 1536402111288,
      'values': {
        'power': 2359250
      }
    },
    {
      'time': 1536402113290,
      'values': {
        'power': 2345260
      }
    },
    {
      'time': 1536402115292,
      'values': {
        'power': 2280630
      }
    },
    {
      'time': 1536402117295,
      'values': {
        'power': 2202580
      }
    },
    {
      'time': 1536402119296,
      'values': {
        'power': 2185520
      }
    },
    {
      'time': 1536402121298,
      'values': {
        'power': 2191160
      }
    },
    {
      'time': 1536402123300,
      'values': {
        'power': 2253680
      }
    },
    {
      'time': 1536402125302,
      'values': {
        'power': 2338460
      }
    },
    {
      'time': 1536402127304,
      'values': {
        'power': 2364100
      }
    },
    {
      'time': 1536402129306,
      'values': {
        'power': 2358950
      }
    },
    {
      'time': 1536402131308,
      'values': {
        'power': 2347770
      }
    },
    {
      'time': 1536402133310,
      'values': {
        'power': 2312120
      }
    },
    {
      'time': 1536402135311,
      'values': {
        'power': 2235840
      }
    },
    {
      'time': 1536402137314,
      'values': {
        'power': 2159350
      }
    },
    {
      'time': 1536402139315,
      'values': {
        'power': 2149290
      }
    },
    {
      'time': 1536402141317,
      'values': {
        'power': 2152060
      }
    },
    {
      'time': 1536402143320,
      'values': {
        'power': 2206470
      }
    },
    {
      'time': 1536402145321,
      'values': {
        'power': 2273290
      }
    },
    {
      'time': 1536402147323,
      'values': {
        'power': 2293020
      }
    },
    {
      'time': 1536402149326,
      'values': {
        'power': 2293810
      }
    },
    {
      'time': 1536402151328,
      'values': {
        'power': 2287450
      }
    },
    {
      'time': 1536402153330,
      'values': {
        'power': 2274740
      }
    },
    {
      'time': 1536402155332,
      'values': {
        'power': 2200620
      }
    },
    {
      'time': 1536402157334,
      'values': {
        'power': 2125710
      }
    },
    {
      'time': 1536402159336,
      'values': {
        'power': 2116440
      }
    },
    {
      'time': 1536402161337,
      'values': {
        'power': 2120800
      }
    },
    {
      'time': 1536402163340,
      'values': {
        'power': 2184910
      }
    },
    {
      'time': 1536402165342,
      'values': {
        'power': 2259980
      }
    },
    {
      'time': 1536402167343,
      'values': {
        'power': 2293270
      }
    },
    {
      'time': 1536402169345,
      'values': {
        'power': 2277040
      }
    },
    {
      'time': 1536402171347,
      'values': {
        'power': 2263450
      }
    },
    {
      'time': 1536402173349,
      'values': {
        'power': 2246410
      }
    },
    {
      'time': 1536402175351,
      'values': {
        'power': 2176390
      }
    },
    {
      'time': 1536402177353,
      'values': {
        'power': 2126650
      }
    },
    {
      'time': 1536402179355,
      'values': {
        'power': 2127330
      }
    },
    {
      'time': 1536402181356,
      'values': {
        'power': 2127240
      }
    },
    {
      'time': 1536402183359,
      'values': {
        'power': 2126380
      }
    },
    {
      'time': 1536402185361,
      'values': {
        'power': 2126930
      }
    },
    {
      'time': 1536402187362,
      'values': {
        'power': 2126380
      }
    },
    {
      'time': 1536402189364,
      'values': {
        'power': 2124590
      }
    },
    {
      'time': 1536402191367,
      'values': {
        'power': 2123290
      }
    },
    {
      'time': 1536402193368,
      'values': {
        'power': 2122010
      }
    },
    {
      'time': 1536402195370,
      'values': {
        'power': 2121880
      }
    },
    {
      'time': 1536402197373,
      'values': {
        'power': 2121400
      }
    },
    {
      'time': 1536402199375,
      'values': {
        'power': 2344290
      }
    },
    {
      'time': 1536402201377,
      'values': {
        'power': 2661120
      }
    },
    {
      'time': 1536402203379,
      'values': {
        'power': 2688250
      }
    },
    {
      'time': 1536402205381,
      'values': {
        'power': 2626160
      }
    },
    {
      'time': 1536402207383,
      'values': {
        'power': 2633300
      }
    },
    {
      'time': 1536402209386,
      'values': {
        'power': 2636040
      }
    },
    {
      'time': 1536402211386,
      'values': {
        'power': 2526100
      }
    },
    {
      'time': 1536402213388,
      'values': {
        'power': 2294140
      }
    },
    {
      'time': 1536402215390,
      'values': {
        'power': 2130250
      }
    },
    {
      'time': 1536402217392,
      'values': {
        'power': 2127130
      }
    },
    {
      'time': 1536402219394,
      'values': {
        'power': 2131090
      }
    },
    {
      'time': 1536402221396,
      'values': {
        'power': 2188680
      }
    },
    {
      'time': 1536402223398,
      'values': {
        'power': 2233740
      }
    },
    {
      'time': 1536402225400,
      'values': {
        'power': 2195010
      }
    },
    {
      'time': 1536402227402,
      'values': {
        'power': 2158500
      }
    },
    {
      'time': 1536402229404,
      'values': {
        'power': 2147350
      }
    },
    {
      'time': 1536402231406,
      'values': {
        'power': 2134660
      }
    },
    {
      'time': 1536402233408,
      'values': {
        'power': 2134130
      }
    },
    {
      'time': 1536402235410,
      'values': {
        'power': 2177470
      }
    },
    {
      'time': 1536402237411,
      'values': {
        'power': 2229380
      }
    },
    {
      'time': 1536402239413,
      'values': {
        'power': 2230760
      }
    },
    {
      'time': 1536402241416,
      'values': {
        'power': 2184850
      }
    },
    {
      'time': 1536402243419,
      'values': {
        'power': 2153940
      }
    },
    {
      'time': 1536402245423,
      'values': {
        'power': 2136190
      }
    },
    {
      'time': 1536402247423,
      'values': {
        'power': 2121620
      }
    },
    {
      'time': 1536402249423,
      'values': {
        'power': 2118380
      }
    },
    {
      'time': 1536402251426,
      'values': {
        'power': 2155280
      }
    },
    {
      'time': 1536402253428,
      'values': {
        'power': 2208420
      }
    },
    {
      'time': 1536402255430,
      'values': {
        'power': 2210790
      }
    },
    {
      'time': 1536402257432,
      'values': {
        'power': 2170810
      }
    },
    {
      'time': 1536402259433,
      'values': {
        'power': 2143830
      }
    },
    {
      'time': 1536402261435,
      'values': {
        'power': 2133590
      }
    },
    {
      'time': 1536402263437,
      'values': {
        'power': 2119870
      }
    },
    {
      'time': 1536402265439,
      'values': {
        'power': 2121390
      }
    },
    {
      'time': 1536402267441,
      'values': {
        'power': 2172830
      }
    },
    {
      'time': 1536402269443,
      'values': {
        'power': 2210920
      }
    },
    {
      'time': 1536402271445,
      'values': {
        'power': 2198740
      }
    },
    {
      'time': 1536402273447,
      'values': {
        'power': 2163080
      }
    },
    {
      'time': 1536402275448,
      'values': {
        'power': 2143120
      }
    },
    {
      'time': 1536402277451,
      'values': {
        'power': 2130690
      }
    },
    {
      'time': 1536402279453,
      'values': {
        'power': 2123230
      }
    },
    {
      'time': 1536402281454,
      'values': {
        'power': 2144140
      }
    },
    {
      'time': 1536402283457,
      'values': {
        'power': 2197880
      }
    },
    {
      'time': 1536402285459,
      'values': {
        'power': 2229530
      }
    },
    {
      'time': 1536402287461,
      'values': {
        'power': 2202980
      }
    },
    {
      'time': 1536402289462,
      'values': {
        'power': 2167340
      }
    },
    {
      'time': 1536402291464,
      'values': {
        'power': 2154130
      }
    },
    {
      'time': 1536402293467,
      'values': {
        'power': 2139870
      }
    },
    {
      'time': 1536402295469,
      'values': {
        'power': 2131900
      }
    },
    {
      'time': 1536402297471,
      'values': {
        'power': 2164560
      }
    },
    {
      'time': 1536402299473,
      'values': {
        'power': 2216500
      }
    },
    {
      'time': 1536402301475,
      'values': {
        'power': 2229910
      }
    },
    {
      'time': 1536402303476,
      'values': {
        'power': 2196440
      }
    },
    {
      'time': 1536402305478,
      'values': {
        'power': 2161830
      }
    },
    {
      'time': 1536402307481,
      'values': {
        'power': 2155780
      }
    },
    {
      'time': 1536402309482,
      'values': {
        'power': 2153150
      }
    },
    {
      'time': 1536402311484,
      'values': {
        'power': 2147680
      }
    },
    {
      'time': 1536402313486,
      'values': {
        'power': 2146910
      }
    },
    {
      'time': 1536402315488,
      'values': {
        'power': 2148050
      }
    },
    {
      'time': 1536402317489,
      'values': {
        'power': 2170600
      }
    },
    {
      'time': 1536402319492,
      'values': {
        'power': 2180160
      }
    },
    {
      'time': 1536402321494,
      'values': {
        'power': 2146690
      }
    },
    {
      'time': 1536402323496,
      'values': {
        'power': 2119710
      }
    },
    {
      'time': 1536402325498,
      'values': {
        'power': 2120700
      }
    },
    {
      'time': 1536402327500,
      'values': {
        'power': 2127610
      }
    },
    {
      'time': 1536402329501,
      'values': {
        'power': 2135650
      }
    },
    {
      'time': 1536402331503,
      'values': {
        'power': 2136700
      }
    },
    {
      'time': 1536402333506,
      'values': {
        'power': 2135070
      }
    },
    {
      'time': 1536402335508,
      'values': {
        'power': 2134470
      }
    },
    {
      'time': 1536402337510,
      'values': {
        'power': 2128600
      }
    },
    {
      'time': 1536402339512,
      'values': {
        'power': 2116900
      }
    },
    {
      'time': 1536402341513,
      'values': {
        'power': 2113900
      }
    },
    {
      'time': 1536402343517,
      'values': {
        'power': 2131410
      }
    },
    {
      'time': 1536402345518,
      'values': {
        'power': 2174220
      }
    },
    {
      'time': 1536402347519,
      'values': {
        'power': 2210420
      }
    },
    {
      'time': 1536402349521,
      'values': {
        'power': 2196670
      }
    },
    {
      'time': 1536402351524,
      'values': {
        'power': 2167730
      }
    },
    {
      'time': 1536402353526,
      'values': {
        'power': 2149690
      }
    },
    {
      'time': 1536402355528,
      'values': {
        'power': 2148400
      }
    },
    {
      'time': 1536402357529,
      'values': {
        'power': 2152090
      }
    },
    {
      'time': 1536402359531,
      'values': {
        'power': 2150760
      }
    },
    {
      'time': 1536402361533,
      'values': {
        'power': 2150930
      }
    },
    {
      'time': 1536402363535,
      'values': {
        'power': 2149470
      }
    },
    {
      'time': 1536402365539,
      'values': {
        'power': 2141060
      }
    },
    {
      'time': 1536402367539,
      'values': {
        'power': 2131700
      }
    },
    {
      'time': 1536402369541,
      'values': {
        'power': 2145580
      }
    },
    {
      'time': 1536402371543,
      'values': {
        'power': 2192650
      }
    },
    {
      'time': 1536402373545,
      'values': {
        'power': 2225960
      }
    },
    {
      'time': 1536402375547,
      'values': {
        'power': 2203910
      }
    },
    {
      'time': 1536402377549,
      'values': {
        'power': 2171520
      }
    },
    {
      'time': 1536402379552,
      'values': {
        'power': 2162150
      }
    },
    {
      'time': 1536402381553,
      'values': {
        'power': 2161040
      }
    },
    {
      'time': 1536402383556,
      'values': {
        'power': 2150910
      }
    },
    {
      'time': 1536402385556,
      'values': {
        'power': 2146590
      }
    },
    {
      'time': 1536402387559,
      'values': {
        'power': 2145470
      }
    },
    {
      'time': 1536402389561,
      'values': {
        'power': 2143510
      }
    },
    {
      'time': 1536402391562,
      'values': {
        'power': 2152240
      }
    },
    {
      'time': 1536402393565,
      'values': {
        'power': 2162790
      }
    },
    {
      'time': 1536402395567,
      'values': {
        'power': 2170060
      }
    },
    {
      'time': 1536402397569,
      'values': {
        'power': 2171640
      }
    },
    {
      'time': 1536402399571,
      'values': {
        'power': 2163790
      }
    },
    {
      'time': 1536402401572,
      'values': {
        'power': 2154380
      }
    },
    {
      'time': 1536402403574,
      'values': {
        'power': 2152290
      }
    },
    {
      'time': 1536402405576,
      'values': {
        'power': 2152820
      }
    },
    {
      'time': 1536402407578,
      'values': {
        'power': 2153330
      }
    },
    {
      'time': 1536402409580,
      'values': {
        'power': 2153440
      }
    },
    {
      'time': 1536402411582,
      'values': {
        'power': 2142520
      }
    },
    {
      'time': 1536402413583,
      'values': {
        'power': 2126870
      }
    },
    {
      'time': 1536402415586,
      'values': {
        'power': 2124590
      }
    },
    {
      'time': 1536402417587,
      'values': {
        'power': 2131470
      }
    },
    {
      'time': 1536402419589,
      'values': {
        'power': 2137220
      }
    },
    {
      'time': 1536402421592,
      'values': {
        'power': 2137620
      }
    },
    {
      'time': 1536402423594,
      'values': {
        'power': 2153810
      }
    },
    {
      'time': 1536402425596,
      'values': {
        'power': 2191880
      }
    },
    {
      'time': 1536402427598,
      'values': {
        'power': 2208340
      }
    },
    {
      'time': 1536402429600,
      'values': {
        'power': 2184210
      }
    },
    {
      'time': 1536402431602,
      'values': {
        'power': 2158360
      }
    },
    {
      'time': 1536402433604,
      'values': {
        'power': 2154770
      }
    },
    {
      'time': 1536402435606,
      'values': {
        'power': 2157720
      }
    },
    {
      'time': 1536402437608,
      'values': {
        'power': 2149660
      }
    },
    {
      'time': 1536402439609,
      'values': {
        'power': 2143020
      }
    },
    {
      'time': 1536402441612,
      'values': {
        'power': 2147880
      }
    },
    {
      'time': 1536402443614,
      'values': {
        'power': 2154840
      }
    },
    {
      'time': 1536402445616,
      'values': {
        'power': 2164110
      }
    },
    {
      'time': 1536402447617,
      'values': {
        'power': 2174470
      }
    },
    {
      'time': 1536402449619,
      'values': {
        'power': 2179130
      }
    },
    {
      'time': 1536402451622,
      'values': {
        'power': 2180170
      }
    },
    {
      'time': 1536402453623,
      'values': {
        'power': 2165160
      }
    },
    {
      'time': 1536402455625,
      'values': {
        'power': 2148250
      }
    },
    {
      'time': 1536402457627,
      'values': {
        'power': 2144510
      }
    },
    {
      'time': 1536402459629,
      'values': {
        'power': 2144920
      }
    },
    {
      'time': 1536402461631,
      'values': {
        'power': 2146250
      }
    },
    {
      'time': 1536402463633,
      'values': {
        'power': 2147520
      }
    },
    {
      'time': 1536402465635,
      'values': {
        'power': 2138780
      }
    },
    {
      'time': 1536402467637,
      'values': {
        'power': 2127340
      }
    },
    {
      'time': 1536402469638,
      'values': {
        'power': 2124680
      }
    },
    {
      'time': 1536402471640,
      'values': {
        'power': 2123230
      }
    },
    {
      'time': 1536402473643,
      'values': {
        'power': 2122620
      }
    },
    {
      'time': 1536402475645,
      'values': {
        'power': 2122490
      }
    },
    {
      'time': 1536402477648,
      'values': {
        'power': 2142740
      }
    },
    {
      'time': 1536402479649,
      'values': {
        'power': 2180270
      }
    },
    {
      'time': 1536402481650,
      'values': {
        'power': 2192970
      }
    },
    {
      'time': 1536402483652,
      'values': {
        'power': 2179380
      }
    },
    {
      'time': 1536402485655,
      'values': {
        'power': 2163000
      }
    },
    {
      'time': 1536402487657,
      'values': {
        'power': 2157310
      }
    },
    {
      'time': 1536402489659,
      'values': {
        'power': 2156780
      }
    },
    {
      'time': 1536402491661,
      'values': {
        'power': 2147820
      }
    },
    {
      'time': 1536402493664,
      'values': {
        'power': 2143900
      }
    },
    {
      'time': 1536402495664,
      'values': {
        'power': 2150560
      }
    },
    {
      'time': 1536402497666,
      'values': {
        'power': 2151600
      }
    },
    {
      'time': 1536402499668,
      'values': {
        'power': 2142460
      }
    },
    {
      'time': 1536402501670,
      'values': {
        'power': 2136450
      }
    },
    {
      'time': 1536402503672,
      'values': {
        'power': 2159300
      }
    },
    {
      'time': 1536402505674,
      'values': {
        'power': 2194710
      }
    },
    {
      'time': 1536402507676,
      'values': {
        'power': 2200240
      }
    },
    {
      'time': 1536402509678,
      'values': {
        'power': 2180270
      }
    },
    {
      'time': 1536402511680,
      'values': {
        'power': 2166220
      }
    },
    {
      'time': 1536402513681,
      'values': {
        'power': 2157350
      }
    },
    {
      'time': 1536402515683,
      'values': {
        'power': 2143960
      }
    },
    {
      'time': 1536402517688,
      'values': {
        'power': 2139520
      }
    },
    {
      'time': 1536402519687,
      'values': {
        'power': 2166990
      }
    },
    {
      'time': 1536402521689,
      'values': {
        'power': 2195500
      }
    },
    {
      'time': 1536402523691,
      'values': {
        'power': 2186530
      }
    },
    {
      'time': 1536402525694,
      'values': {
        'power': 2162270
      }
    },
    {
      'time': 1536402527696,
      'values': {
        'power': 2145290
      }
    },
    {
      'time': 1536402529698,
      'values': {
        'power': 2144340
      }
    },
    {
      'time': 1536402531700,
      'values': {
        'power': 2143900
      }
    },
    {
      'time': 1536402533702,
      'values': {
        'power': 2141010
      }
    },
    {
      'time': 1536402535704,
      'values': {
        'power': 2137490
      }
    },
    {
      'time': 1536402537706,
      'values': {
        'power': 2131780
      }
    },
    {
      'time': 1536402539708,
      'values': {
        'power': 2138050
      }
    },
    {
      'time': 1536402541710,
      'values': {
        'power': 2154080
      }
    },
    {
      'time': 1536402543712,
      'values': {
        'power': 2162040
      }
    },
    {
      'time': 1536402545718,
      'values': {
        'power': 2166160
      }
    },
    {
      'time': 1536402547715,
      'values': {
        'power': 2166540
      }
    },
    {
      'time': 1536402549717,
      'values': {
        'power': 2156240
      }
    },
    {
      'time': 1536402551719,
      'values': {
        'power': 2153670
      }
    },
    {
      'time': 1536402553721,
      'values': {
        'power': 2159190
      }
    },
    {
      'time': 1536402555723,
      'values': {
        'power': 2161810
      }
    },
    {
      'time': 1536402557725,
      'values': {
        'power': 2161630
      }
    },
    {
      'time': 1536402559727,
      'values': {
        'power': 2161500
      }
    },
    {
      'time': 1536402561729,
      'values': {
        'power': 2274390
      }
    },
    {
      'time': 1536402563731,
      'values': {
        'power': 2399010
      }
    },
    {
      'time': 1536402565733,
      'values': {
        'power': 2273530
      }
    },
    {
      'time': 1536402567735,
      'values': {
        'power': 2136770
      }
    },
    {
      'time': 1536402569737,
      'values': {
        'power': 2137440
      }
    },
    {
      'time': 1536402571739,
      'values': {
        'power': 2138080
      }
    },
    {
      'time': 1536402573743,
      'values': {
        'power': 2139300
      }
    },
    {
      'time': 1536402575742,
      'values': {
        'power': 2141020
      }
    },
    {
      'time': 1536402577745,
      'values': {
        'power': 2140880
      }
    },
    {
      'time': 1536402579747,
      'values': {
        'power': 2140310
      }
    },
    {
      'time': 1536402581748,
      'values': {
        'power': 2140220
      }
    },
    {
      'time': 1536402583750,
      'values': {
        'power': 2139210
      }
    },
    {
      'time': 1536402585753,
      'values': {
        'power': 2142770
      }
    },
    {
      'time': 1536402587755,
      'values': {
        'power': 2151180
      }
    },
    {
      'time': 1536402589757,
      'values': {
        'power': 2153840
      }
    },
    {
      'time': 1536402591758,
      'values': {
        'power': 2145530
      }
    },
    {
      'time': 1536402593760,
      'values': {
        'power': 2138810
      }
    },
    {
      'time': 1536402595762,
      'values': {
        'power': 2137420
      }
    },
    {
      'time': 1536402597764,
      'values': {
        'power': 2140290
      }
    },
    {
      'time': 1536402599766,
      'values': {
        'power': 2153100
      }
    },
    {
      'time': 1536402601768,
      'values': {
        'power': 2165390
      }
    },
    {
      'time': 1536402603769,
      'values': {
        'power': 2166450
      }
    },
    {
      'time': 1536402605772,
      'values': {
        'power': 2163540
      }
    },
    {
      'time': 1536402607774,
      'values': {
        'power': 2154120
      }
    },
    {
      'time': 1536402609776,
      'values': {
        'power': 2146880
      }
    },
    {
      'time': 1536402611778,
      'values': {
        'power': 2145950
      }
    },
    {
      'time': 1536402613780,
      'values': {
        'power': 2146310
      }
    },
    {
      'time': 1536402615781,
      'values': {
        'power': 2148940
      }
    },
    {
      'time': 1536402617783,
      'values': {
        'power': 2150450
      }
    },
    {
      'time': 1536402619786,
      'values': {
        'power': 2274380
      }
    },
    {
      'time': 1536402621788,
      'values': {
        'power': 2359660
      }
    },
    {
      'time': 1536402623789,
      'values': {
        'power': 2247960
      }
    },
    {
      'time': 1536402625792,
      'values': {
        'power': 2191060
      }
    },
    {
      'time': 1536402627794,
      'values': {
        'power': 2264550
      }
    },
    {
      'time': 1536402629795,
      'values': {
        'power': 2305060
      }
    },
    {
      'time': 1536402631797,
      'values': {
        'power': 2287250
      }
    },
    {
      'time': 1536402633800,
      'values': {
        'power': 2270920
      }
    },
    {
      'time': 1536402635802,
      'values': {
        'power': 2271200
      }
    },
    {
      'time': 1536402637803,
      'values': {
        'power': 2277660
      }
    },
    {
      'time': 1536402639805,
      'values': {
        'power': 2286110
      }
    },
    {
      'time': 1536402641807,
      'values': {
        'power': 2294380
      }
    },
    {
      'time': 1536402643809,
      'values': {
        'power': 2295780
      }
    },
    {
      'time': 1536402645812,
      'values': {
        'power': 2278310
      }
    },
    {
      'time': 1536402647816,
      'values': {
        'power': 2252020
      }
    },
    {
      'time': 1536402649814,
      'values': {
        'power': 2237700
      }
    },
    {
      'time': 1536402651816,
      'values': {
        'power': 2235290
      }
    },
    {
      'time': 1536402653819,
      'values': {
        'power': 2240160
      }
    },
    {
      'time': 1536402655820,
      'values': {
        'power': 2245220
      }
    },
    {
      'time': 1536402657822,
      'values': {
        'power': 2245930
      }
    },
    {
      'time': 1536402659825,
      'values': {
        'power': 2242180
      }
    },
    {
      'time': 1536402661827,
      'values': {
        'power': 2233360
      }
    },
    {
      'time': 1536402663829,
      'values': {
        'power': 2226180
      }
    },
    {
      'time': 1536402665831,
      'values': {
        'power': 2224370
      }
    },
    {
      'time': 1536402667833,
      'values': {
        'power': 2224880
      }
    },
    {
      'time': 1536402669835,
      'values': {
        'power': 2226060
      }
    },
    {
      'time': 1536402671837,
      'values': {
        'power': 2225120
      }
    },
    {
      'time': 1536402673838,
      'values': {
        'power': 2224340
      }
    },
    {
      'time': 1536402675840,
      'values': {
        'power': 2224230
      }
    },
    {
      'time': 1536402677842,
      'values': {
        'power': 2225210
      }
    },
    {
      'time': 1536402679845,
      'values': {
        'power': 2227110
      }
    },
    {
      'time': 1536402681847,
      'values': {
        'power': 2227650
      }
    },
    {
      'time': 1536402683848,
      'values': {
        'power': 2228050
      }
    },
    {
      'time': 1536402685850,
      'values': {
        'power': 2233210
      }
    },
    {
      'time': 1536402687853,
      'values': {
        'power': 2254790
      }
    },
    {
      'time': 1536402689854,
      'values': {
        'power': 2285600
      }
    },
    {
      'time': 1536402691856,
      'values': {
        'power': 2299840
      }
    },
    {
      'time': 1536402693858,
      'values': {
        'power': 2297780
      }
    },
    {
      'time': 1536402695860,
      'values': {
        'power': 2369160
      }
    },
    {
      'time': 1536402697862,
      'values': {
        'power': 2364980
      }
    },
    {
      'time': 1536402699865,
      'values': {
        'power': 2251470
      }
    },
    {
      'time': 1536402701865,
      'values': {
        'power': 2223110
      }
    },
    {
      'time': 1536402703868,
      'values': {
        'power': 2254050
      }
    },
    {
      'time': 1536402705870,
      'values': {
        'power': 2280200
      }
    },
    {
      'time': 1536402707872,
      'values': {
        'power': 2286750
      }
    },
    {
      'time': 1536402709875,
      'values': {
        'power': 2279930
      }
    },
    {
      'time': 1536402711876,
      'values': {
        'power': 2273240
      }
    },
    {
      'time': 1536402713878,
      'values': {
        'power': 2270130
      }
    },
    {
      'time': 1536402715879,
      'values': {
        'power': 2273600
      }
    },
    {
      'time': 1536402717881,
      'values': {
        'power': 2276120
      }
    },
    {
      'time': 1536402719884,
      'values': {
        'power': 2275350
      }
    },
    {
      'time': 1536402721886,
      'values': {
        'power': 2275890
      }
    },
    {
      'time': 1536402723888,
      'values': {
        'power': 2274890
      }
    },
    {
      'time': 1536402725889,
      'values': {
        'power': 2272180
      }
    },
    {
      'time': 1536402727891,
      'values': {
        'power': 2270750
      }
    },
    {
      'time': 1536402729893,
      'values': {
        'power': 2264040
      }
    },
    {
      'time': 1536402731895,
      'values': {
        'power': 2258090
      }
    },
    {
      'time': 1536402733897,
      'values': {
        'power': 2257120
      }
    },
    {
      'time': 1536402735899,
      'values': {
        'power': 2251800
      }
    },
    {
      'time': 1536402737901,
      'values': {
        'power': 2245720
      }
    },
    {
      'time': 1536402739902,
      'values': {
        'power': 2247150
      }
    },
    {
      'time': 1536402741905,
      'values': {
        'power': 2254180
      }
    },
    {
      'time': 1536402743907,
      'values': {
        'power': 2259930
      }
    },
    {
      'time': 1536402745909,
      'values': {
        'power': 2236520
      }
    },
    {
      'time': 1536402747911,
      'values': {
        'power': 2164470
      }
    },
    {
      'time': 1536402749913,
      'values': {
        'power': 2116200
      }
    },
    {
      'time': 1536402751914,
      'values': {
        'power': 2115350
      }
    },
    {
      'time': 1536402753916,
      'values': {
        'power': 2115190
      }
    },
    {
      'time': 1536402755919,
      'values': {
        'power': 2114980
      }
    },
    {
      'time': 1536402757921,
      'values': {
        'power': 2114110
      }
    },
    {
      'time': 1536402759923,
      'values': {
        'power': 2113140
      }
    },
    {
      'time': 1536402761925,
      'values': {
        'power': 2112240
      }
    },
    {
      'time': 1536402763927,
      'values': {
        'power': 2111300
      }
    },
    {
      'time': 1536402765929,
      'values': {
        'power': 2110420
      }
    },
    {
      'time': 1536402767930,
      'values': {
        'power': 2109830
      }
    },
    {
      'time': 1536402769933,
      'values': {
        'power': 2110950
      }
    },
    {
      'time': 1536402771935,
      'values': {
        'power': 2116330
      }
    },
    {
      'time': 1536402773937,
      'values': {
        'power': 2122650
      }
    },
    {
      'time': 1536402775939,
      'values': {
        'power': 2124900
      }
    },
    {
      'time': 1536402777940,
      'values': {
        'power': 2126180
      }
    },
    {
      'time': 1536402779943,
      'values': {
        'power': 2127540
      }
    },
    {
      'time': 1536402781945,
      'values': {
        'power': 2128320
      }
    },
    {
      'time': 1536402783946,
      'values': {
        'power': 2128610
      }
    },
    {
      'time': 1536402785949,
      'values': {
        'power': 2127870
      }
    },
    {
      'time': 1536402787950,
      'values': {
        'power': 2128360
      }
    },
    {
      'time': 1536402789952,
      'values': {
        'power': 2129280
      }
    },
    {
      'time': 1536402791953,
      'values': {
        'power': 2129750
      }
    },
    {
      'time': 1536402793955,
      'values': {
        'power': 2130360
      }
    },
    {
      'time': 1536402795958,
      'values': {
        'power': 2130650
      }
    },
    {
      'time': 1536402797960,
      'values': {
        'power': 2130780
      }
    },
    {
      'time': 1536402799962,
      'values': {
        'power': 2130260
      }
    },
    {
      'time': 1536402801964,
      'values': {
        'power': 2129490
      }
    },
    {
      'time': 1536402803965,
      'values': {
        'power': 2129370
      }
    },
    {
      'time': 1536402805968,
      'values': {
        'power': 2129390
      }
    },
    {
      'time': 1536402807970,
      'values': {
        'power': 2128910
      }
    },
    {
      'time': 1536402809972,
      'values': {
        'power': 2127730
      }
    },
    {
      'time': 1536402811974,
      'values': {
        'power': 2471230
      }
    },
    {
      'time': 1536402813976,
      'values': {
        'power': 2755320
      }
    },
    {
      'time': 1536402815978,
      'values': {
        'power': 2693500
      }
    },
    {
      'time': 1536402817980,
      'values': {
        'power': 2694950
      }
    },
    {
      'time': 1536402819982,
      'values': {
        'power': 2714840
      }
    },
    {
      'time': 1536402821983,
      'values': {
        'power': 2726340
      }
    },
    {
      'time': 1536402823986,
      'values': {
        'power': 2707920
      }
    },
    {
      'time': 1536402825987,
      'values': {
        'power': 2694610
      }
    },
    {
      'time': 1536402827989,
      'values': {
        'power': 2694850
      }
    },
    {
      'time': 1536402829991,
      'values': {
        'power': 2705980
      }
    },
    {
      'time': 1536402831993,
      'values': {
        'power': 2733780
      }
    },
    {
      'time': 1536402833995,
      'values': {
        'power': 2727570
      }
    },
    {
      'time': 1536402835997,
      'values': {
        'power': 2705080
      }
    },
    {
      'time': 1536402837999,
      'values': {
        'power': 2698610
      }
    },
    {
      'time': 1536402840001,
      'values': {
        'power': 2699870
      }
    },
    {
      'time': 1536402842003,
      'values': {
        'power': 2726940
      }
    },
    {
      'time': 1536402844005,
      'values': {
        'power': 2749360
      }
    },
    {
      'time': 1536402846009,
      'values': {
        'power': 2728830
      }
    },
    {
      'time': 1536402848009,
      'values': {
        'power': 2711310
      }
    },
    {
      'time': 1536402850048,
      'values': {
        'power': 2711000
      }
    },
    {
      'time': 1536402852050,
      'values': {
        'power': 2731990
      }
    },
    {
      'time': 1536402854053,
      'values': {
        'power': 2766890
      }
    },
    {
      'time': 1536402856053,
      'values': {
        'power': 2755610
      }
    },
    {
      'time': 1536402858056,
      'values': {
        'power': 2709380
      }
    },
    {
      'time': 1536402860058,
      'values': {
        'power': 2672170
      }
    },
    {
      'time': 1536402862060,
      'values': {
        'power': 2645930
      }
    },
    {
      'time': 1536402864062,
      'values': {
        'power': 2679310
      }
    },
    {
      'time': 1536402866064,
      'values': {
        'power': 2670480
      }
    },
    {
      'time': 1536402868066,
      'values': {
        'power': 2409700
      }
    },
    {
      'time': 1536402870068,
      'values': {
        'power': 2160600
      }
    },
    {
      'time': 1536402872070,
      'values': {
        'power': 2130460
      }
    },
    {
      'time': 1536402874071,
      'values': {
        'power': 2154250
      }
    },
    {
      'time': 1536402876073,
      'values': {
        'power': 2196440
      }
    },
    {
      'time': 1536402878076,
      'values': {
        'power': 2178600
      }
    },
    {
      'time': 1536402880078,
      'values': {
        'power': 2136000
      }
    },
    {
      'time': 1536402882081,
      'values': {
        'power': 2124700
      }
    },
    {
      'time': 1536402884081,
      'values': {
        'power': 2120360
      }
    },
    {
      'time': 1536402886084,
      'values': {
        'power': 2156330
      }
    },
    {
      'time': 1536402888086,
      'values': {
        'power': 2318750
      }
    },
    {
      'time': 1536402890088,
      'values': {
        'power': 2582730
      }
    },
    {
      'time': 1536402892090,
      'values': {
        'power': 2706120
      }
    },
    {
      'time': 1536402894092,
      'values': {
        'power': 2690960
      }
    },
    {
      'time': 1536402896093,
      'values': {
        'power': 2715810
      }
    },
    {
      'time': 1536402898095,
      'values': {
        'power': 2764740
      }
    },
    {
      'time': 1536402900097,
      'values': {
        'power': 2747330
      }
    },
    {
      'time': 1536402902099,
      'values': {
        'power': 2699280
      }
    },
    {
      'time': 1536402904102,
      'values': {
        'power': 2693040
      }
    },
    {
      'time': 1536402906103,
      'values': {
        'power': 2703180
      }
    },
    {
      'time': 1536402908104,
      'values': {
        'power': 2750830
      }
    },
    {
      'time': 1536402910107,
      'values': {
        'power': 2787040
      }
    },
    {
      'time': 1536402912109,
      'values': {
        'power': 2734710
      }
    },
    {
      'time': 1536402914111,
      'values': {
        'power': 2697770
      }
    },
    {
      'time': 1536402916112,
      'values': {
        'power': 2703650
      }
    },
    {
      'time': 1536402918114,
      'values': {
        'power': 2736660
      }
    },
    {
      'time': 1536402920117,
      'values': {
        'power': 2807220
      }
    },
    {
      'time': 1536402922119,
      'values': {
        'power': 2787010
      }
    },
    {
      'time': 1536402924121,
      'values': {
        'power': 2719120
      }
    },
    {
      'time': 1536402926123,
      'values': {
        'power': 2710330
      }
    },
    {
      'time': 1536402928124,
      'values': {
        'power': 2711510
      }
    },
    {
      'time': 1536402930128,
      'values': {
        'power': 2685620
      }
    },
    {
      'time': 1536402932128,
      'values': {
        'power': 2649930
      }
    },
    {
      'time': 1536402934130,
      'values': {
        'power': 2638380
      }
    },
    {
      'time': 1536402936133,
      'values': {
        'power': 2642410
      }
    },
    {
      'time': 1536402938135,
      'values': {
        'power': 2555330
      }
    },
    {
      'time': 1536402940137,
      'values': {
        'power': 2390720
      }
    },
    {
      'time': 1536402942138,
      'values': {
        'power': 2319480
      }
    },
    {
      'time': 1536402944140,
      'values': {
        'power': 2315530
      }
    },
    {
      'time': 1536402946142,
      'values': {
        'power': 2305430
      }
    },
    {
      'time': 1536402948144,
      'values': {
        'power': 2290580
      }
    },
    {
      'time': 1536402950146,
      'values': {
        'power': 2212140
      }
    },
    {
      'time': 1536402952148,
      'values': {
        'power': 2133850
      }
    },
    {
      'time': 1536402954150,
      'values': {
        'power': 2118970
      }
    },
    {
      'time': 1536402956152,
      'values': {
        'power': 2125980
      }
    },
    {
      'time': 1536402958153,
      'values': {
        'power': 2187490
      }
    },
    {
      'time': 1536402960155,
      'values': {
        'power': 2282810
      }
    },
    {
      'time': 1536402962158,
      'values': {
        'power': 2298800
      }
    },
    {
      'time': 1536402964160,
      'values': {
        'power': 2285300
      }
    },
    {
      'time': 1536402966162,
      'values': {
        'power': 2276140
      }
    },
    {
      'time': 1536402968164,
      'values': {
        'power': 2272600
      }
    },
    {
      'time': 1536402970166,
      'values': {
        'power': 2204080
      }
    },
    {
      'time': 1536402972168,
      'values': {
        'power': 2127170
      }
    },
    {
      'time': 1536402974170,
      'values': {
        'power': 2116670
      }
    },
    {
      'time': 1536402976172,
      'values': {
        'power': 2128990
      }
    },
    {
      'time': 1536402978175,
      'values': {
        'power': 2204070
      }
    },
    {
      'time': 1536402980179,
      'values': {
        'power': 2288450
      }
    },
    {
      'time': 1536402982179,
      'values': {
        'power': 2308410
      }
    },
    {
      'time': 1536402984179,
      'values': {
        'power': 2302510
      }
    },
    {
      'time': 1536402986181,
      'values': {
        'power': 2300710
      }
    },
    {
      'time': 1536402988184,
      'values': {
        'power': 2294280
      }
    },
    {
      'time': 1536402990185,
      'values': {
        'power': 2224500
      }
    },
    {
      'time': 1536402992188,
      'values': {
        'power': 2150250
      }
    },
    {
      'time': 1536402994189,
      'values': {
        'power': 2135640
      }
    },
    {
      'time': 1536402996191,
      'values': {
        'power': 2145910
      }
    },
    {
      'time': 1536402998193,
      'values': {
        'power': 2216940
      }
    },
    {
      'time': 1536403000195,
      'values': {
        'power': 2298190
      }
    },
    {
      'time': 1536403002197,
      'values': {
        'power': 2321240
      }
    },
    {
      'time': 1536403004199,
      'values': {
        'power': 2315940
      }
    },
    {
      'time': 1536403006201,
      'values': {
        'power': 2307500
      }
    },
    {
      'time': 1536403008205,
      'values': {
        'power': 2286180
      }
    },
    {
      'time': 1536403010204,
      'values': {
        'power': 2214810
      }
    },
    {
      'time': 1536403012206,
      'values': {
        'power': 2139130
      }
    },
    {
      'time': 1536403014209,
      'values': {
        'power': 2132780
      }
    },
    {
      'time': 1536403016212,
      'values': {
        'power': 2142570
      }
    },
    {
      'time': 1536403018212,
      'values': {
        'power': 2213230
      }
    },
    {
      'time': 1536403020215,
      'values': {
        'power': 2291490
      }
    },
    {
      'time': 1536403022217,
      'values': {
        'power': 2307460
      }
    },
    {
      'time': 1536403024219,
      'values': {
        'power': 2300330
      }
    },
    {
      'time': 1536403026221,
      'values': {
        'power': 2289150
      }
    },
    {
      'time': 1536403028223,
      'values': {
        'power': 2270690
      }
    },
    {
      'time': 1536403030225,
      'values': {
        'power': 2193960
      }
    },
    {
      'time': 1536403032227,
      'values': {
        'power': 2124990
      }
    },
    {
      'time': 1536403034229,
      'values': {
        'power': 2120870
      }
    },
    {
      'time': 1536403036231,
      'values': {
        'power': 2131790
      }
    },
    {
      'time': 1536403038232,
      'values': {
        'power': 2212990
      }
    },
    {
      'time': 1536403040235,
      'values': {
        'power': 2286480
      }
    },
    {
      'time': 1536403042236,
      'values': {
        'power': 2308990
      }
    },
    {
      'time': 1536403044238,
      'values': {
        'power': 2303350
      }
    },
    {
      'time': 1536403046240,
      'values': {
        'power': 2300860
      }
    },
    {
      'time': 1536403048242,
      'values': {
        'power': 2289000
      }
    },
    {
      'time': 1536403050243,
      'values': {
        'power': 2204100
      }
    },
    {
      'time': 1536403052245,
      'values': {
        'power': 2127930
      }
    },
    {
      'time': 1536403054248,
      'values': {
        'power': 2123260
      }
    },
    {
      'time': 1536403056250,
      'values': {
        'power': 2149480
      }
    },
    {
      'time': 1536403058253,
      'values': {
        'power': 2233020
      }
    },
    {
      'time': 1536403060253,
      'values': {
        'power': 2309770
      }
    },
    {
      'time': 1536403062256,
      'values': {
        'power': 2325130
      }
    },
    {
      'time': 1536403064257,
      'values': {
        'power': 2314340
      }
    },
    {
      'time': 1536403066260,
      'values': {
        'power': 2390560
      }
    },
    {
      'time': 1536403068262,
      'values': {
        'power': 2479030
      }
    },
    {
      'time': 1536403070264,
      'values': {
        'power': 2340080
      }
    },
    {
      'time': 1536403072266,
      'values': {
        'power': 2188630
      }
    },
    {
      'time': 1536403074268,
      'values': {
        'power': 2182560
      }
    },
    {
      'time': 1536403076270,
      'values': {
        'power': 2199810
      }
    },
    {
      'time': 1536403078272,
      'values': {
        'power': 2277400
      }
    },
    {
      'time': 1536403080274,
      'values': {
        'power': 2354100
      }
    },
    {
      'time': 1536403082276,
      'values': {
        'power': 2370950
      }
    },
    {
      'time': 1536403084278,
      'values': {
        'power': 2367330
      }
    },
    {
      'time': 1536403086279,
      'values': {
        'power': 2358140
      }
    },
    {
      'time': 1536403088282,
      'values': {
        'power': 2333800
      }
    },
    {
      'time': 1536403090283,
      'values': {
        'power': 2256220
      }
    },
    {
      'time': 1536403092284,
      'values': {
        'power': 2334280
      }
    },
    {
      'time': 1536403094286,
      'values': {
        'power': 2367590
      }
    },
    {
      'time': 1536403096289,
      'values': {
        'power': 2251410
      }
    },
    {
      'time': 1536403098291,
      'values': {
        'power': 2304970
      }
    },
    {
      'time': 1536403100293,
      'values': {
        'power': 2383670
      }
    },
    {
      'time': 1536403102295,
      'values': {
        'power': 2401950
      }
    },
    {
      'time': 1536403104297,
      'values': {
        'power': 2396540
      }
    },
    {
      'time': 1536403106299,
      'values': {
        'power': 2387660
      }
    },
    {
      'time': 1536403108301,
      'values': {
        'power': 2356680
      }
    },
    {
      'time': 1536403110303,
      'values': {
        'power': 2279570
      }
    },
    {
      'time': 1536403112304,
      'values': {
        'power': 2233040
      }
    },
    {
      'time': 1536403114307,
      'values': {
        'power': 2233850
      }
    },
    {
      'time': 1536403116310,
      'values': {
        'power': 2233020
      }
    },
    {
      'time': 1536403118310,
      'values': {
        'power': 2233570
      }
    },
    {
      'time': 1536403120313,
      'values': {
        'power': 2234880
      }
    },
    {
      'time': 1536403122315,
      'values': {
        'power': 2235570
      }
    },
    {
      'time': 1536403124317,
      'values': {
        'power': 2235590
      }
    },
    {
      'time': 1536403126319,
      'values': {
        'power': 2236610
      }
    },
    {
      'time': 1536403128321,
      'values': {
        'power': 2238760
      }
    },
    {
      'time': 1536403130322,
      'values': {
        'power': 2245210
      }
    },
    {
      'time': 1536403132324,
      'values': {
        'power': 2251390
      }
    },
    {
      'time': 1536403134326,
      'values': {
        'power': 2251920
      }
    },
    {
      'time': 1536403136330,
      'values': {
        'power': 2549500
      }
    },
    {
      'time': 1536403138330,
      'values': {
        'power': 2827550
      }
    },
    {
      'time': 1536403140332,
      'values': {
        'power': 2900800
      }
    },
    {
      'time': 1536403142334,
      'values': {
        'power': 2965650
      }
    },
    {
      'time': 1536403144336,
      'values': {
        'power': 2860010
      }
    },
    {
      'time': 1536403146338,
      'values': {
        'power': 2797160
      }
    },
    {
      'time': 1536403148340,
      'values': {
        'power': 2660030
      }
    },
    {
      'time': 1536403150343,
      'values': {
        'power': 2409470
      }
    },
    {
      'time': 1536403152343,
      'values': {
        'power': 2297480
      }
    },
    {
      'time': 1536403154346,
      'values': {
        'power': 2296080
      }
    },
    {
      'time': 1536403156348,
      'values': {
        'power': 2302370
      }
    },
    {
      'time': 1536403158350,
      'values': {
        'power': 2357860
      }
    },
    {
      'time': 1536403160352,
      'values': {
        'power': 2406830
      }
    },
    {
      'time': 1536403162353,
      'values': {
        'power': 2376020
      }
    },
    {
      'time': 1536403164356,
      'values': {
        'power': 2333440
      }
    },
    {
      'time': 1536403166358,
      'values': {
        'power': 2310940
      }
    },
    {
      'time': 1536403168360,
      'values': {
        'power': 2294070
      }
    },
    {
      'time': 1536403170362,
      'values': {
        'power': 2288920
      }
    },
    {
      'time': 1536403172365,
      'values': {
        'power': 2330340
      }
    },
    {
      'time': 1536403174365,
      'values': {
        'power': 2380240
      }
    },
    {
      'time': 1536403176368,
      'values': {
        'power': 2364030
      }
    },
    {
      'time': 1536403178369,
      'values': {
        'power': 2316970
      }
    },
    {
      'time': 1536403180371,
      'values': {
        'power': 2296890
      }
    },
    {
      'time': 1536403182374,
      'values': {
        'power': 2283700
      }
    },
    {
      'time': 1536403184375,
      'values': {
        'power': 2274530
      }
    },
    {
      'time': 1536403186377,
      'values': {
        'power': 2311580
      }
    },
    {
      'time': 1536403188378,
      'values': {
        'power': 2365730
      }
    },
    {
      'time': 1536403190380,
      'values': {
        'power': 2372370
      }
    },
    {
      'time': 1536403192383,
      'values': {
        'power': 2329930
      }
    },
    {
      'time': 1536403194385,
      'values': {
        'power': 2306010
      }
    },
    {
      'time': 1536403196387,
      'values': {
        'power': 2304610
      }
    },
    {
      'time': 1536403198389,
      'values': {
        'power': 2305200
      }
    },
    {
      'time': 1536403200390,
      'values': {
        'power': 2301160
      }
    },
    {
      'time': 1536403202392,
      'values': {
        'power': 2299550
      }
    },
    {
      'time': 1536403204395,
      'values': {
        'power': 2303660
      }
    },
    {
      'time': 1536403206397,
      'values': {
        'power': 2331790
      }
    },
    {
      'time': 1536403208399,
      'values': {
        'power': 2349560
      }
    },
    {
      'time': 1536403210401,
      'values': {
        'power': 2318610
      }
    },
    {
      'time': 1536403212403,
      'values': {
        'power': 2293650
      }
    },
    {
      'time': 1536403214405,
      'values': {
        'power': 2293610
      }
    },
    {
      'time': 1536403216407,
      'values': {
        'power': 2296800
      }
    },
    {
      'time': 1536403218408,
      'values': {
        'power': 2303820
      }
    },
    {
      'time': 1536403220410,
      'values': {
        'power': 2311400
      }
    },
    {
      'time': 1536403222413,
      'values': {
        'power': 2313490
      }
    },
    {
      'time': 1536403224415,
      'values': {
        'power': 2312140
      }
    },
    {
      'time': 1536403226416,
      'values': {
        'power': 2310890
      }
    },
    {
      'time': 1536403228418,
      'values': {
        'power': 2308290
      }
    },
    {
      'time': 1536403230420,
      'values': {
        'power': 2315810
      }
    },
    {
      'time': 1536403232422,
      'values': {
        'power': 2331850
      }
    },
    {
      'time': 1536403234424,
      'values': {
        'power': 2339480
      }
    },
    {
      'time': 1536403236426,
      'values': {
        'power': 2339190
      }
    },
    {
      'time': 1536403238428,
      'values': {
        'power': 2330210
      }
    },
    {
      'time': 1536403240429,
      'values': {
        'power': 2319440
      }
    },
    {
      'time': 1536403242432,
      'values': {
        'power': 2312760
      }
    },
    {
      'time': 1536403244434,
      'values': {
        'power': 2305150
      }
    },
    {
      'time': 1536403246436,
      'values': {
        'power': 2300410
      }
    },
    {
      'time': 1536403248438,
      'values': {
        'power': 2301340
      }
    },
    {
      'time': 1536403250440,
      'values': {
        'power': 2325970
      }
    },
    {
      'time': 1536403252442,
      'values': {
        'power': 2523220
      }
    },
    {
      'time': 1536403254443,
      'values': {
        'power': 2515450
      }
    },
    {
      'time': 1536403256445,
      'values': {
        'power': 2308870
      }
    },
    {
      'time': 1536403258448,
      'values': {
        'power': 2284400
      }
    },
    {
      'time': 1536403260450,
      'values': {
        'power': 2285890
      }
    },
    {
      'time': 1536403262452,
      'values': {
        'power': 2280150
      }
    },
    {
      'time': 1536403264454,
      'values': {
        'power': 2272510
      }
    },
    {
      'time': 1536403266455,
      'values': {
        'power': 2270550
      }
    },
    {
      'time': 1536403268457,
      'values': {
        'power': 2269000
      }
    },
    {
      'time': 1536403270460,
      'values': {
        'power': 2267810
      }
    },
    {
      'time': 1536403272461,
      'values': {
        'power': 2267760
      }
    },
    {
      'time': 1536403274463,
      'values': {
        'power': 2269240
      }
    },
    {
      'time': 1536403276465,
      'values': {
        'power': 2270460
      }
    },
    {
      'time': 1536403278467,
      'values': {
        'power': 2272450
      }
    },
    {
      'time': 1536403280469,
      'values': {
        'power': 2278760
      }
    },
    {
      'time': 1536403282471,
      'values': {
        'power': 2285950
      }
    },
    {
      'time': 1536403284472,
      'values': {
        'power': 2290740
      }
    },
    {
      'time': 1536403286474,
      'values': {
        'power': 2296020
      }
    },
    {
      'time': 1536403288477,
      'values': {
        'power': 2299670
      }
    },
    {
      'time': 1536403290480,
      'values': {
        'power': 2295410
      }
    },
    {
      'time': 1536403292480,
      'values': {
        'power': 2295430
      }
    },
    {
      'time': 1536403294483,
      'values': {
        'power': 2311970
      }
    },
    {
      'time': 1536403296485,
      'values': {
        'power': 2323420
      }
    },
    {
      'time': 1536403298487,
      'values': {
        'power': 2326870
      }
    },
    {
      'time': 1536403300489,
      'values': {
        'power': 2324010
      }
    },
    {
      'time': 1536403302491,
      'values': {
        'power': 2315210
      }
    },
    {
      'time': 1536403304493,
      'values': {
        'power': 2308520
      }
    },
    {
      'time': 1536403306495,
      'values': {
        'power': 2307810
      }
    },
    {
      'time': 1536403308496,
      'values': {
        'power': 2308210
      }
    },
    {
      'time': 1536403310498,
      'values': {
        'power': 2308410
      }
    },
    {
      'time': 1536403312501,
      'values': {
        'power': 2308900
      }
    },
    {
      'time': 1536403314503,
      'values': {
        'power': 2473420
      }
    },
    {
      'time': 1536403316505,
      'values': {
        'power': 2538580
      }
    },
    {
      'time': 1536403318506,
      'values': {
        'power': 2378670
      }
    },
    {
      'time': 1536403320508,
      'values': {
        'power': 2331410
      }
    },
    {
      'time': 1536403322510,
      'values': {
        'power': 2399520
      }
    },
    {
      'time': 1536403324512,
      'values': {
        'power': 2436520
      }
    },
    {
      'time': 1536403326514,
      'values': {
        'power': 2415960
      }
    },
    {
      'time': 1536403328516,
      'values': {
        'power': 2395330
      }
    },
    {
      'time': 1536403330518,
      'values': {
        'power': 2391680
      }
    },
    {
      'time': 1536403332520,
      'values': {
        'power': 2397780
      }
    },
    {
      'time': 1536403334522,
      'values': {
        'power': 2406910
      }
    },
    {
      'time': 1536403336523,
      'values': {
        'power': 2414750
      }
    },
    {
      'time': 1536403338525,
      'values': {
        'power': 2412420
      }
    },
    {
      'time': 1536403340528,
      'values': {
        'power': 2393200
      }
    },
    {
      'time': 1536403342529,
      'values': {
        'power': 2369070
      }
    },
    {
      'time': 1536403344531,
      'values': {
        'power': 2358400
      }
    },
    {
      'time': 1536403346534,
      'values': {
        'power': 2360800
      }
    },
    {
      'time': 1536403348536,
      'values': {
        'power': 2366090
      }
    },
    {
      'time': 1536403350539,
      'values': {
        'power': 2357080
      }
    },
    {
      'time': 1536403352539,
      'values': {
        'power': 2341690
      }
    },
    {
      'time': 1536403354541,
      'values': {
        'power': 2336410
      }
    },
    {
      'time': 1536403356544,
      'values': {
        'power': 2333940
      }
    },
    {
      'time': 1536403358546,
      'values': {
        'power': 2331350
      }
    },
    {
      'time': 1536403360548,
      'values': {
        'power': 2332320
      }
    },
    {
      'time': 1536403362552,
      'values': {
        'power': 2340020
      }
    },
    {
      'time': 1536403364551,
      'values': {
        'power': 2346240
      }
    },
    {
      'time': 1536403366553,
      'values': {
        'power': 2346820
      }
    },
    {
      'time': 1536403368555,
      'values': {
        'power': 2345900
      }
    },
    {
      'time': 1536403370557,
      'values': {
        'power': 2344590
      }
    },
    {
      'time': 1536403372559,
      'values': {
        'power': 2343680
      }
    },
    {
      'time': 1536403374561,
      'values': {
        'power': 2343130
      }
    },
    {
      'time': 1536403376563,
      'values': {
        'power': 2342710
      }
    },
    {
      'time': 1536403378565,
      'values': {
        'power': 2342430
      }
    },
    {
      'time': 1536403380567,
      'values': {
        'power': 2348280
      }
    },
    {
      'time': 1536403382569,
      'values': {
        'power': 2372580
      }
    },
    {
      'time': 1536403384571,
      'values': {
        'power': 2403080
      }
    },
    {
      'time': 1536403386572,
      'values': {
        'power': 2417590
      }
    },
    {
      'time': 1536403388575,
      'values': {
        'power': 2427290
      }
    },
    {
      'time': 1536403390576,
      'values': {
        'power': 2489750
      }
    },
    {
      'time': 1536403392579,
      'values': {
        'power': 2464250
      }
    },
    {
      'time': 1536403394580,
      'values': {
        'power': 2355930
      }
    },
    {
      'time': 1536403396582,
      'values': {
        'power': 2323890
      }
    },
    {
      'time': 1536403398585,
      'values': {
        'power': 2344340
      }
    },
    {
      'time': 1536403400587,
      'values': {
        'power': 2368590
      }
    },
    {
      'time': 1536403402589,
      'values': {
        'power': 2370990
      }
    },
    {
      'time': 1536403404591,
      'values': {
        'power': 2363050
      }
    },
    {
      'time': 1536403406593,
      'values': {
        'power': 2356200
      }
    },
    {
      'time': 1536403408595,
      'values': {
        'power': 2355280
      }
    },
    {
      'time': 1536403410597,
      'values': {
        'power': 2358680
      }
    },
    {
      'time': 1536403412598,
      'values': {
        'power': 2360410
      }
    },
    {
      'time': 1536403414600,
      'values': {
        'power': 2360350
      }
    },
    {
      'time': 1536403416604,
      'values': {
        'power': 2360730
      }
    },
    {
      'time': 1536403418604,
      'values': {
        'power': 2361510
      }
    },
    {
      'time': 1536403420606,
      'values': {
        'power': 2362020
      }
    },
    {
      'time': 1536403422607,
      'values': {
        'power': 2360280
      }
    },
    {
      'time': 1536403424610,
      'values': {
        'power': 2353180
      }
    },
    {
      'time': 1536403426612,
      'values': {
        'power': 2346730
      }
    },
    {
      'time': 1536403428614,
      'values': {
        'power': 2345910
      }
    },
    {
      'time': 1536403430616,
      'values': {
        'power': 2344970
      }
    },
    {
      'time': 1536403432618,
      'values': {
        'power': 2344370
      }
    },
    {
      'time': 1536403434620,
      'values': {
        'power': 2347410
      }
    },
    {
      'time': 1536403436622,
      'values': {
        'power': 2358050
      }
    },
    {
      'time': 1536403438624,
      'values': {
        'power': 2362150
      }
    },
    {
      'time': 1536403440626,
      'values': {
        'power': 2358120
      }
    },
    {
      'time': 1536403442630,
      'values': {
        'power': 2358080
      }
    },
    {
      'time': 1536403444631,
      'values': {
        'power': 2359320
      }
    },
    {
      'time': 1536403446631,
      'values': {
        'power': 2361130
      }
    },
    {
      'time': 1536403448634,
      'values': {
        'power': 2362670
      }
    },
    {
      'time': 1536403450636,
      'values': {
        'power': 2361600
      }
    },
    {
      'time': 1536403452637,
      'values': {
        'power': 2360410
      }
    },
    {
      'time': 1536403454639,
      'values': {
        'power': 2360300
      }
    },
    {
      'time': 1536403456642,
      'values': {
        'power': 2360610
      }
    },
    {
      'time': 1536403458644,
      'values': {
        'power': 2360110
      }
    },
    {
      'time': 1536403460645,
      'values': {
        'power': 2360260
      }
    },
    {
      'time': 1536403462647,
      'values': {
        'power': 2360750
      }
    },
    {
      'time': 1536403464649,
      'values': {
        'power': 2360250
      }
    },
    {
      'time': 1536403466651,
      'values': {
        'power': 2358950
      }
    },
    {
      'time': 1536403468653,
      'values': {
        'power': 2357530
      }
    },
    {
      'time': 1536403470655,
      'values': {
        'power': 2357090
      }
    },
    {
      'time': 1536403472657,
      'values': {
        'power': 2356650
      }
    },
    {
      'time': 1536403474658,
      'values': {
        'power': 2357340
      }
    },
    {
      'time': 1536403476661,
      'values': {
        'power': 2358130
      }
    },
    {
      'time': 1536403478663,
      'values': {
        'power': 2358310
      }
    },
    {
      'time': 1536403480665,
      'values': {
        'power': 2357160
      }
    },
    {
      'time': 1536403482667,
      'values': {
        'power': 2357660
      }
    },
    {
      'time': 1536403484669,
      'values': {
        'power': 2358430
      }
    },
    {
      'time': 1536403486670,
      'values': {
        'power': 2359410
      }
    },
    {
      'time': 1536403488672,
      'values': {
        'power': 2361350
      }
    },
    {
      'time': 1536403490675,
      'values': {
        'power': 2360310
      }
    },
    {
      'time': 1536403492677,
      'values': {
        'power': 2359940
      }
    },
    {
      'time': 1536403494679,
      'values': {
        'power': 2359090
      }
    },
    {
      'time': 1536403496681,
      'values': {
        'power': 2357790
      }
    },
    {
      'time': 1536403498684,
      'values': {
        'power': 2361860
      }
    },
    {
      'time': 1536403500684,
      'values': {
        'power': 2368400
      }
    },
    {
      'time': 1536403502687,
      'values': {
        'power': 2373090
      }
    },
    {
      'time': 1536403504689,
      'values': {
        'power': 2372480
      }
    },
    {
      'time': 1536403506690,
      'values': {
        'power': 2371670
      }
    },
    {
      'time': 1536403508692,
      'values': {
        'power': 2353580
      }
    },
    {
      'time': 1536403510694,
      'values': {
        'power': 2330300
      }
    },
    {
      'time': 1536403512696,
      'values': {
        'power': 2325570
      }
    },
    {
      'time': 1536403514698,
      'values': {
        'power': 2324370
      }
    },
    {
      'time': 1536403516700,
      'values': {
        'power': 2324270
      }
    },
    {
      'time': 1536403518703,
      'values': {
        'power': 2324230
      }
    },
    {
      'time': 1536403520704,
      'values': {
        'power': 2324070
      }
    },
    {
      'time': 1536403522706,
      'values': {
        'power': 2324580
      }
    },
    {
      'time': 1536403524708,
      'values': {
        'power': 2324510
      }
    },
    {
      'time': 1536403526709,
      'values': {
        'power': 2325340
      }
    },
    {
      'time': 1536403528711,
      'values': {
        'power': 2324620
      }
    },
    {
      'time': 1536403530714,
      'values': {
        'power': 2324520
      }
    },
    {
      'time': 1536403532716,
      'values': {
        'power': 2325020
      }
    },
    {
      'time': 1536403534718,
      'values': {
        'power': 2325990
      }
    },
    {
      'time': 1536403536720,
      'values': {
        'power': 2326490
      }
    },
    {
      'time': 1536403538722,
      'values': {
        'power': 2326430
      }
    },
    {
      'time': 1536403540724,
      'values': {
        'power': 2326940
      }
    },
    {
      'time': 1536403542726,
      'values': {
        'power': 2322880
      }
    },
    {
      'time': 1536403544728,
      'values': {
        'power': 2316600
      }
    },
    {
      'time': 1536403546730,
      'values': {
        'power': 2314400
      }
    },
    {
      'time': 1536403548731,
      'values': {
        'power': 2314860
      }
    },
    {
      'time': 1536403550735,
      'values': {
        'power': 2315700
      }
    },
    {
      'time': 1536403552738,
      'values': {
        'power': 2311570
      }
    },
    {
      'time': 1536403554737,
      'values': {
        'power': 2306500
      }
    },
    {
      'time': 1536403556739,
      'values': {
        'power': 2309670
      }
    },
    {
      'time': 1536403558742,
      'values': {
        'power': 2313400
      }
    },
    {
      'time': 1536403560743,
      'values': {
        'power': 2313470
      }
    },
    {
      'time': 1536403562745,
      'values': {
        'power': 2314540
      }
    },
    {
      'time': 1536403564747,
      'values': {
        'power': 2312390
      }
    },
    {
      'time': 1536403566749,
      'values': {
        'power': 2310510
      }
    },
    {
      'time': 1536403568751,
      'values': {
        'power': 2310900
      }
    },
    {
      'time': 1536403570753,
      'values': {
        'power': 2309790
      }
    },
    {
      'time': 1536403572755,
      'values': {
        'power': 2310360
      }
    },
    {
      'time': 1536403574756,
      'values': {
        'power': 2311460
      }
    },
    {
      'time': 1536403576758,
      'values': {
        'power': 2311100
      }
    },
    {
      'time': 1536403578761,
      'values': {
        'power': 2314750
      }
    },
    {
      'time': 1536403580763,
      'values': {
        'power': 2316840
      }
    },
    {
      'time': 1536403582764,
      'values': {
        'power': 2316630
      }
    },
    {
      'time': 1536403584767,
      'values': {
        'power': 2322580
      }
    },
    {
      'time': 1536403586770,
      'values': {
        'power': 2328170
      }
    },
    {
      'time': 1536403588770,
      'values': {
        'power': 2330380
      }
    },
    {
      'time': 1536403590773,
      'values': {
        'power': 2329680
      }
    },
    {
      'time': 1536403592775,
      'values': {
        'power': 2329950
      }
    },
    {
      'time': 1536403594777,
      'values': {
        'power': 2330850
      }
    },
    {
      'time': 1536403596779,
      'values': {
        'power': 2330750
      }
    },
    {
      'time': 1536403598783,
      'values': {
        'power': 2330380
      }
    },
    {
      'time': 1536403600782,
      'values': {
        'power': 2330670
      }
    },
    {
      'time': 1536403602785,
      'values': {
        'power': 2331330
      }
    },
    {
      'time': 1536403604786,
      'values': {
        'power': 2330720
      }
    },
    {
      'time': 1536403606788,
      'values': {
        'power': 2331750
      }
    },
    {
      'time': 1536403608790,
      'values': {
        'power': 2331730
      }
    },
    {
      'time': 1536403610791,
      'values': {
        'power': 2331450
      }
    },
    {
      'time': 1536403612794,
      'values': {
        'power': 2330920
      }
    },
    {
      'time': 1536403614796,
      'values': {
        'power': 2329970
      }
    },
    {
      'time': 1536403616798,
      'values': {
        'power': 2329770
      }
    },
    {
      'time': 1536403618800,
      'values': {
        'power': 2329480
      }
    },
    {
      'time': 1536403620801,
      'values': {
        'power': 2330170
      }
    },
    {
      'time': 1536403622804,
      'values': {
        'power': 2327340
      }
    },
    {
      'time': 1536403624805,
      'values': {
        'power': 2319800
      }
    },
    {
      'time': 1536403626808,
      'values': {
        'power': 2314870
      }
    },
    {
      'time': 1536403628810,
      'values': {
        'power': 2314750
      }
    },
    {
      'time': 1536403630812,
      'values': {
        'power': 2315960
      }
    },
    {
      'time': 1536403632814,
      'values': {
        'power': 2316260
      }
    },
    {
      'time': 1536403634815,
      'values': {
        'power': 2316650
      }
    },
    {
      'time': 1536403636817,
      'values': {
        'power': 2316610
      }
    },
    {
      'time': 1536403638820,
      'values': {
        'power': 2315080
      }
    },
    {
      'time': 1536403640822,
      'values': {
        'power': 2314340
      }
    },
    {
      'time': 1536403642824,
      'values': {
        'power': 2313090
      }
    },
    {
      'time': 1536403644826,
      'values': {
        'power': 2311660
      }
    },
    {
      'time': 1536403646828,
      'values': {
        'power': 2311020
      }
    },
    {
      'time': 1536403648830,
      'values': {
        'power': 2309740
      }
    },
    {
      'time': 1536403650831,
      'values': {
        'power': 2310740
      }
    },
    {
      'time': 1536403652833,
      'values': {
        'power': 2311310
      }
    },
    {
      'time': 1536403654835,
      'values': {
        'power': 2310370
      }
    },
    {
      'time': 1536403656836,
      'values': {
        'power': 2316250
      }
    },
    {
      'time': 1536403658839,
      'values': {
        'power': 2322470
      }
    },
    {
      'time': 1536403660841,
      'values': {
        'power': 2325460
      }
    },
    {
      'time': 1536403662842,
      'values': {
        'power': 2321880
      }
    },
    {
      'time': 1536403664844,
      'values': {
        'power': 2314470
      }
    },
    {
      'time': 1536403666847,
      'values': {
        'power': 2311270
      }
    },
    {
      'time': 1536403668849,
      'values': {
        'power': 2310400
      }
    },
    {
      'time': 1536403670851,
      'values': {
        'power': 2311160
      }
    },
    {
      'time': 1536403672853,
      'values': {
        'power': 2311940
      }
    },
    {
      'time': 1536403674855,
      'values': {
        'power': 2318390
      }
    },
    {
      'time': 1536403676856,
      'values': {
        'power': 2323660
      }
    },
    {
      'time': 1536403678858,
      'values': {
        'power': 2325570
      }
    },
    {
      'time': 1536403680861,
      'values': {
        'power': 2326700
      }
    },
    {
      'time': 1536403682863,
      'values': {
        'power': 2326150
      }
    },
    {
      'time': 1536403684865,
      'values': {
        'power': 2325220
      }
    },
    {
      'time': 1536403686868,
      'values': {
        'power': 2323610
      }
    },
    {
      'time': 1536403688871,
      'values': {
        'power': 2324750
      }
    },
    {
      'time': 1536403690870,
      'values': {
        'power': 2324320
      }
    },
    {
      'time': 1536403692873,
      'values': {
        'power': 2324030
      }
    },
    {
      'time': 1536403694874,
      'values': {
        'power': 2325270
      }
    },
    {
      'time': 1536403696876,
      'values': {
        'power': 2324620
      }
    },
    {
      'time': 1536403698878,
      'values': {
        'power': 2325210
      }
    },
    {
      'time': 1536403700880,
      'values': {
        'power': 2325070
      }
    },
    {
      'time': 1536403702882,
      'values': {
        'power': 2325540
      }
    },
    {
      'time': 1536403704884,
      'values': {
        'power': 2326610
      }
    },
    {
      'time': 1536403706886,
      'values': {
        'power': 2326500
      }
    },
    {
      'time': 1536403708888,
      'values': {
        'power': 2327680
      }
    },
    {
      'time': 1536403710890,
      'values': {
        'power': 2328810
      }
    },
    {
      'time': 1536403712892,
      'values': {
        'power': 2329390
      }
    },
    {
      'time': 1536403714894,
      'values': {
        'power': 2328570
      }
    },
    {
      'time': 1536403716895,
      'values': {
        'power': 2328600
      }
    },
    {
      'time': 1536403718898,
      'values': {
        'power': 2328020
      }
    },
    {
      'time': 1536403720902,
      'values': {
        'power': 2327360
      }
    },
    {
      'time': 1536403722901,
      'values': {
        'power': 2325340
      }
    },
    {
      'time': 1536403724904,
      'values': {
        'power': 2272730
      }
    },
    {
      'time': 1536403726907,
      'values': {
        'power': 2209700
      }
    },
    {
      'time': 1536403728907,
      'values': {
        'power': 2197350
      }
    },
    {
      'time': 1536403730909,
      'values': {
        'power': 2199030
      }
    },
    {
      'time': 1536403732912,
      'values': {
        'power': 2200250
      }
    },
    {
      'time': 1536403734914,
      'values': {
        'power': 2201550
      }
    },
    {
      'time': 1536403736916,
      'values': {
        'power': 2201480
      }
    },
    {
      'time': 1536403738918,
      'values': {
        'power': 2201150
      }
    },
    {
      'time': 1536403740920,
      'values': {
        'power': 2202410
      }
    },
    {
      'time': 1536403742921,
      'values': {
        'power': 2198600
      }
    },
    {
      'time': 1536403744923,
      'values': {
        'power': 2191610
      }
    },
    {
      'time': 1536403746925,
      'values': {
        'power': 2188130
      }
    },
    {
      'time': 1536403748927,
      'values': {
        'power': 2187040
      }
    },
    {
      'time': 1536403750929,
      'values': {
        'power': 2185680
      }
    },
    {
      'time': 1536403752934,
      'values': {
        'power': 2185280
      }
    },
    {
      'time': 1536403754933,
      'values': {
        'power': 2184900
      }
    },
    {
      'time': 1536403756934,
      'values': {
        'power': 2184340
      }
    },
    {
      'time': 1536403758937,
      'values': {
        'power': 2184160
      }
    },
    {
      'time': 1536403760939,
      'values': {
        'power': 2185950
      }
    },
    {
      'time': 1536403762941,
      'values': {
        'power': 2186490
      }
    },
    {
      'time': 1536403764943,
      'values': {
        'power': 2184720
      }
    },
    {
      'time': 1536403766945,
      'values': {
        'power': 2181740
      }
    },
    {
      'time': 1536403768948,
      'values': {
        'power': 2180280
      }
    },
    {
      'time': 1536403770948,
      'values': {
        'power': 2180560
      }
    },
    {
      'time': 1536403772950,
      'values': {
        'power': 2185760
      }
    },
    {
      'time': 1536403774953,
      'values': {
        'power': 2210980
      }
    },
    {
      'time': 1536403776955,
      'values': {
        'power': 2237010
      }
    },
    {
      'time': 1536403778956,
      'values': {
        'power': 2242810
      }
    },
    {
      'time': 1536403780958,
      'values': {
        'power': 2241740
      }
    },
    {
      'time': 1536403782961,
      'values': {
        'power': 2313980
      }
    },
    {
      'time': 1536403784963,
      'values': {
        'power': 2636640
      }
    },
    {
      'time': 1536403786965,
      'values': {
        'power': 2781800
      }
    },
    {
      'time': 1536403788966,
      'values': {
        'power': 2490820
      }
    },
    {
      'time': 1536403790968,
      'values': {
        'power': 2316450
      }
    },
    {
      'time': 1536403792970,
      'values': {
        'power': 2301550
      }
    },
    {
      'time': 1536403794972,
      'values': {
        'power': 2282390
      }
    },
    {
      'time': 1536403796974,
      'values': {
        'power': 2266430
      }
    },
    {
      'time': 1536403798976,
      'values': {
        'power': 2260240
      }
    },
    {
      'time': 1536403800977,
      'values': {
        'power': 2260010
      }
    },
    {
      'time': 1536403802980,
      'values': {
        'power': 2260440
      }
    },
    {
      'time': 1536403804981,
      'values': {
        'power': 2269790
      }
    },
    {
      'time': 1536403806983,
      'values': {
        'power': 2280710
      }
    },
    {
      'time': 1536403808986,
      'values': {
        'power': 2283010
      }
    },
    {
      'time': 1536403810988,
      'values': {
        'power': 2283340
      }
    },
    {
      'time': 1536403812990,
      'values': {
        'power': 2279590
      }
    },
    {
      'time': 1536403814992,
      'values': {
        'power': 2263330
      }
    },
    {
      'time': 1536403816994,
      'values': {
        'power': 2248250
      }
    },
    {
      'time': 1536403818996,
      'values': {
        'power': 2243490
      }
    },
    {
      'time': 1536403820998,
      'values': {
        'power': 2240760
      }
    },
    {
      'time': 1536403823000,
      'values': {
        'power': 2240170
      }
    },
    {
      'time': 1536403825003,
      'values': {
        'power': 2239610
      }
    },
    {
      'time': 1536403827003,
      'values': {
        'power': 2239860
      }
    },
    {
      'time': 1536403829006,
      'values': {
        'power': 2241560
      }
    },
    {
      'time': 1536403831007,
      'values': {
        'power': 2243770
      }
    },
    {
      'time': 1536403833009,
      'values': {
        'power': 2245620
      }
    },
    {
      'time': 1536403835012,
      'values': {
        'power': 2247290
      }
    },
    {
      'time': 1536403837013,
      'values': {
        'power': 2248390
      }
    },
    {
      'time': 1536403839016,
      'values': {
        'power': 2249260
      }
    },
    {
      'time': 1536403841017,
      'values': {
        'power': 2250290
      }
    },
    {
      'time': 1536403843019,
      'values': {
        'power': 2250580
      }
    },
    {
      'time': 1536403845021,
      'values': {
        'power': 2249890
      }
    },
    {
      'time': 1536403847023,
      'values': {
        'power': 2249300
      }
    },
    {
      'time': 1536403849025,
      'values': {
        'power': 2249110
      }
    },
    {
      'time': 1536403851027,
      'values': {
        'power': 2251140
      }
    },
    {
      'time': 1536403853029,
      'values': {
        'power': 2258050
      }
    },
    {
      'time': 1536403855034,
      'values': {
        'power': 2264120
      }
    },
    {
      'time': 1536403857032,
      'values': {
        'power': 2264530
      }
    },
    {
      'time': 1536403859034,
      'values': {
        'power': 2266480
      }
    },
    {
      'time': 1536403861037,
      'values': {
        'power': 2267800
      }
    },
    {
      'time': 1536403863039,
      'values': {
        'power': 2267870
      }
    },
    {
      'time': 1536403865041,
      'values': {
        'power': 2267860
      }
    },
    {
      'time': 1536403867043,
      'values': {
        'power': 2267760
      }
    },
    {
      'time': 1536403869045,
      'values': {
        'power': 2267960
      }
    },
    {
      'time': 1536403871047,
      'values': {
        'power': 2266810
      }
    },
    {
      'time': 1536403873049,
      'values': {
        'power': 2264620
      }
    },
    {
      'time': 1536403875051,
      'values': {
        'power': 2262800
      }
    },
    {
      'time': 1536403877053,
      'values': {
        'power': 2261840
      }
    },
    {
      'time': 1536403879056,
      'values': {
        'power': 2262390
      }
    },
    {
      'time': 1536403881057,
      'values': {
        'power': 2264090
      }
    },
    {
      'time': 1536403883058,
      'values': {
        'power': 2264400
      }
    },
    {
      'time': 1536403885060,
      'values': {
        'power': 2263550
      }
    },
    {
      'time': 1536403887062,
      'values': {
        'power': 2264280
      }
    },
    {
      'time': 1536403889064,
      'values': {
        'power': 2261260
      }
    },
    {
      'time': 1536403891066,
      'values': {
        'power': 2254560
      }
    },
    {
      'time': 1536403893068,
      'values': {
        'power': 2250840
      }
    },
    {
      'time': 1536403895070,
      'values': {
        'power': 2250440
      }
    },
    {
      'time': 1536403897072,
      'values': {
        'power': 2249320
      }
    },
    {
      'time': 1536403899074,
      'values': {
        'power': 2248640
      }
    },
    {
      'time': 1536403901076,
      'values': {
        'power': 2248370
      }
    },
    {
      'time': 1536403903078,
      'values': {
        'power': 2247840
      }
    },
    {
      'time': 1536403905082,
      'values': {
        'power': 2247660
      }
    },
    {
      'time': 1536403907083,
      'values': {
        'power': 2247390
      }
    },
    {
      'time': 1536403909083,
      'values': {
        'power': 2247840
      }
    },
    {
      'time': 1536403911086,
      'values': {
        'power': 2247980
      }
    },
    {
      'time': 1536403913088,
      'values': {
        'power': 2248500
      }
    },
    {
      'time': 1536403915090,
      'values': {
        'power': 2249720
      }
    },
    {
      'time': 1536403917092,
      'values': {
        'power': 2249410
      }
    },
    {
      'time': 1536403919094,
      'values': {
        'power': 2248310
      }
    },
    {
      'time': 1536403921096,
      'values': {
        'power': 2248840
      }
    },
    {
      'time': 1536403923097,
      'values': {
        'power': 2254720
      }
    },
    {
      'time': 1536403925099,
      'values': {
        'power': 2262170
      }
    },
    {
      'time': 1536403927102,
      'values': {
        'power': 2264200
      }
    },
    {
      'time': 1536403929104,
      'values': {
        'power': 2264640
      }
    },
    {
      'time': 1536403931106,
      'values': {
        'power': 2264940
      }
    },
    {
      'time': 1536403933107,
      'values': {
        'power': 2264580
      }
    },
    {
      'time': 1536403935109,
      'values': {
        'power': 2263790
      }
    },
    {
      'time': 1536403937111,
      'values': {
        'power': 2262180
      }
    },
    {
      'time': 1536403939113,
      'values': {
        'power': 2262200
      }
    },
    {
      'time': 1536403941115,
      'values': {
        'power': 2263000
      }
    },
    {
      'time': 1536403943117,
      'values': {
        'power': 2263590
      }
    },
    {
      'time': 1536403945119,
      'values': {
        'power': 2265130
      }
    },
    {
      'time': 1536403947121,
      'values': {
        'power': 2266210
      }
    },
    {
      'time': 1536403949123,
      'values': {
        'power': 2443490
      }
    },
    {
      'time': 1536403951125,
      'values': {
        'power': 2744040
      }
    },
    {
      'time': 1536403953127,
      'values': {
        'power': 2845310
      }
    },
    {
      'time': 1536403955129,
      'values': {
        'power': 2822940
      }
    },
    {
      'time': 1536403957131,
      'values': {
        'power': 2822970
      }
    },
    {
      'time': 1536403959133,
      'values': {
        'power': 2822310
      }
    },
    {
      'time': 1536403961134,
      'values': {
        'power': 2819550
      }
    },
    {
      'time': 1536403963136,
      'values': {
        'power': 2813430
      }
    },
    {
      'time': 1536403965139,
      'values': {
        'power': 2820530
      }
    },
    {
      'time': 1536403967142,
      'values': {
        'power': 2839640
      }
    },
    {
      'time': 1536403969143,
      'values': {
        'power': 2850320
      }
    },
    {
      'time': 1536403971145,
      'values': {
        'power': 2843140
      }
    },
    {
      'time': 1536403973146,
      'values': {
        'power': 2816120
      }
    },
    {
      'time': 1536403975149,
      'values': {
        'power': 2797300
      }
    },
    {
      'time': 1536403977151,
      'values': {
        'power': 2792400
      }
    },
    {
      'time': 1536403979152,
      'values': {
        'power': 2709110
      }
    },
    {
      'time': 1536403981154,
      'values': {
        'power': 2450920
      }
    },
    {
      'time': 1536403983156,
      'values': {
        'power': 2259970
      }
    },
    {
      'time': 1536403985158,
      'values': {
        'power': 2249410
      }
    },
    {
      'time': 1536403987161,
      'values': {
        'power': 2250740
      }
    },
    {
      'time': 1536403989162,
      'values': {
        'power': 2252230
      }
    },
    {
      'time': 1536403991164,
      'values': {
        'power': 2253030
      }
    },
    {
      'time': 1536403993165,
      'values': {
        'power': 2252630
      }
    },
    {
      'time': 1536403995168,
      'values': {
        'power': 2257820
      }
    },
    {
      'time': 1536403997170,
      'values': {
        'power': 2264660
      }
    },
    {
      'time': 1536403999172,
      'values': {
        'power': 2265370
      }
    },
    {
      'time': 1536404001174,
      'values': {
        'power': 2264930
      }
    },
    {
      'time': 1536404003176,
      'values': {
        'power': 2265230
      }
    },
    {
      'time': 1536404005178,
      'values': {
        'power': 2266690
      }
    },
    {
      'time': 1536404007180,
      'values': {
        'power': 2278190
      }
    },
    {
      'time': 1536404009182,
      'values': {
        'power': 2283600
      }
    },
    {
      'time': 1536404011183,
      'values': {
        'power': 2278990
      }
    },
    {
      'time': 1536404013186,
      'values': {
        'power': 2277050
      }
    },
    {
      'time': 1536404015189,
      'values': {
        'power': 2274090
      }
    },
    {
      'time': 1536404017189,
      'values': {
        'power': 2269580
      }
    },
    {
      'time': 1536404019192,
      'values': {
        'power': 2266090
      }
    },
    {
      'time': 1536404021194,
      'values': {
        'power': 2265840
      }
    },
    {
      'time': 1536404023197,
      'values': {
        'power': 2266130
      }
    },
    {
      'time': 1536404025197,
      'values': {
        'power': 2267080
      }
    },
    {
      'time': 1536404027199,
      'values': {
        'power': 2267960
      }
    },
    {
      'time': 1536404029201,
      'values': {
        'power': 2268850
      }
    },
    {
      'time': 1536404031203,
      'values': {
        'power': 2268900
      }
    },
    {
      'time': 1536404033205,
      'values': {
        'power': 2267540
      }
    },
    {
      'time': 1536404035207,
      'values': {
        'power': 2266650
      }
    },
    {
      'time': 1536404037208,
      'values': {
        'power': 2265630
      }
    },
    {
      'time': 1536404039210,
      'values': {
        'power': 2265610
      }
    },
    {
      'time': 1536404041213,
      'values': {
        'power': 2268630
      }
    },
    {
      'time': 1536404043214,
      'values': {
        'power': 2270890
      }
    },
    {
      'time': 1536404045216,
      'values': {
        'power': 2269840
      }
    },
    {
      'time': 1536404047219,
      'values': {
        'power': 2268410
      }
    },
    {
      'time': 1536404049221,
      'values': {
        'power': 2268100
      }
    },
    {
      'time': 1536404051223,
      'values': {
        'power': 2267410
      }
    },
    {
      'time': 1536404053225,
      'values': {
        'power': 2266670
      }
    },
    {
      'time': 1536404055227,
      'values': {
        'power': 2266880
      }
    },
    {
      'time': 1536404057228,
      'values': {
        'power': 2267840
      }
    },
    {
      'time': 1536404059231,
      'values': {
        'power': 2269070
      }
    },
    {
      'time': 1536404061235,
      'values': {
        'power': 2269300
      }
    },
    {
      'time': 1536404063235,
      'values': {
        'power': 2268830
      }
    },
    {
      'time': 1536404065237,
      'values': {
        'power': 2265500
      }
    },
    {
      'time': 1536404067239,
      'values': {
        'power': 2256590
      }
    },
    {
      'time': 1536404069240,
      'values': {
        'power': 2251070
      }
    },
    {
      'time': 1536404071242,
      'values': {
        'power': 2250950
      }
    },
    {
      'time': 1536404073244,
      'values': {
        'power': 2252070
      }
    },
    {
      'time': 1536404075246,
      'values': {
        'power': 2254600
      }
    },
    {
      'time': 1536404077248,
      'values': {
        'power': 2255740
      }
    },
    {
      'time': 1536404079250,
      'values': {
        'power': 2255520
      }
    },
    {
      'time': 1536404081252,
      'values': {
        'power': 2254420
      }
    },
    {
      'time': 1536404083254,
      'values': {
        'power': 2253090
      }
    },
    {
      'time': 1536404085256,
      'values': {
        'power': 2252450
      }
    },
    {
      'time': 1536404087258,
      'values': {
        'power': 2252500
      }
    },
    {
      'time': 1536404089260,
      'values': {
        'power': 2253510
      }
    },
    {
      'time': 1536404091261,
      'values': {
        'power': 2254040
      }
    },
    {
      'time': 1536404093263,
      'values': {
        'power': 2254060
      }
    },
    {
      'time': 1536404095267,
      'values': {
        'power': 2254450
      }
    },
    {
      'time': 1536404097267,
      'values': {
        'power': 2254150
      }
    },
    {
      'time': 1536404099269,
      'values': {
        'power': 2256900
      }
    },
    {
      'time': 1536404101272,
      'values': {
        'power': 2265770
      }
    },
    {
      'time': 1536404103274,
      'values': {
        'power': 2268720
      }
    },
    {
      'time': 1536404105276,
      'values': {
        'power': 2268750
      }
    },
    {
      'time': 1536404107278,
      'values': {
        'power': 2268620
      }
    },
    {
      'time': 1536404109280,
      'values': {
        'power': 2268510
      }
    },
    {
      'time': 1536404111283,
      'values': {
        'power': 2269020
      }
    },
    {
      'time': 1536404113283,
      'values': {
        'power': 2268290
      }
    },
    {
      'time': 1536404115285,
      'values': {
        'power': 2267170
      }
    },
    {
      'time': 1536404117288,
      'values': {
        'power': 2266080
      }
    },
    {
      'time': 1536404119289,
      'values': {
        'power': 2266050
      }
    },
    {
      'time': 1536404121292,
      'values': {
        'power': 2266760
      }
    },
    {
      'time': 1536404123294,
      'values': {
        'power': 2267440
      }
    },
    {
      'time': 1536404125295,
      'values': {
        'power': 2268490
      }
    },
    {
      'time': 1536404127297,
      'values': {
        'power': 2268230
      }
    },
    {
      'time': 1536404129299,
      'values': {
        'power': 2267760
      }
    },
    {
      'time': 1536404131301,
      'values': {
        'power': 2266840
      }
    },
    {
      'time': 1536404133303,
      'values': {
        'power': 2268670
      }
    },
    {
      'time': 1536404135305,
      'values': {
        'power': 2282760
      }
    },
    {
      'time': 1536404137307,
      'values': {
        'power': 2291560
      }
    },
    {
      'time': 1536404139308,
      'values': {
        'power': 2282310
      }
    },
    {
      'time': 1536404141310,
      'values': {
        'power': 2272470
      }
    },
    {
      'time': 1536404143313,
      'values': {
        'power': 2269380
      }
    },
    {
      'time': 1536404145315,
      'values': {
        'power': 2270810
      }
    },
    {
      'time': 1536404147317,
      'values': {
        'power': 2275330
      }
    },
    {
      'time': 1536404149319,
      'values': {
        'power': 2277120
      }
    },
    {
      'time': 1536404151320,
      'values': {
        'power': 2276810
      }
    },
    {
      'time': 1536404153322,
      'values': {
        'power': 2275430
      }
    },
    {
      'time': 1536404155325,
      'values': {
        'power': 2270990
      }
    },
    {
      'time': 1536404157326,
      'values': {
        'power': 2267280
      }
    },
    {
      'time': 1536404159329,
      'values': {
        'power': 2266670
      }
    },
    {
      'time': 1536404161331,
      'values': {
        'power': 2268810
      }
    },
    {
      'time': 1536404163333,
      'values': {
        'power': 2268550
      }
    },
    {
      'time': 1536404165334,
      'values': {
        'power': 2268020
      }
    },
    {
      'time': 1536404167336,
      'values': {
        'power': 2268770
      }
    },
    {
      'time': 1536404169338,
      'values': {
        'power': 2269010
      }
    },
    {
      'time': 1536404171340,
      'values': {
        'power': 2269750
      }
    },
    {
      'time': 1536404173342,
      'values': {
        'power': 2274760
      }
    },
    {
      'time': 1536404175344,
      'values': {
        'power': 2280590
      }
    },
    {
      'time': 1536404177346,
      'values': {
        'power': 2280990
      }
    },
    {
      'time': 1536404179347,
      'values': {
        'power': 2285240
      }
    },
    {
      'time': 1536404181349,
      'values': {
        'power': 2288400
      }
    },
    {
      'time': 1536404183352,
      'values': {
        'power': 2283860
      }
    },
    {
      'time': 1536404185354,
      'values': {
        'power': 2280530
      }
    },
    {
      'time': 1536404187357,
      'values': {
        'power': 2278700
      }
    },
    {
      'time': 1536404189359,
      'values': {
        'power': 2277980
      }
    },
    {
      'time': 1536404191359,
      'values': {
        'power': 2273660
      }
    },
    {
      'time': 1536404193361,
      'values': {
        'power': 2269300
      }
    },
    {
      'time': 1536404195364,
      'values': {
        'power': 2270160
      }
    },
    {
      'time': 1536404197366,
      'values': {
        'power': 2270980
      }
    },
    {
      'time': 1536404199368,
      'values': {
        'power': 2271160
      }
    },
    {
      'time': 1536404201370,
      'values': {
        'power': 2271050
      }
    },
    {
      'time': 1536404203372,
      'values': {
        'power': 2270580
      }
    },
    {
      'time': 1536404205376,
      'values': {
        'power': 2269300
      }
    },
    {
      'time': 1536404207376,
      'values': {
        'power': 2268290
      }
    },
    {
      'time': 1536404209378,
      'values': {
        'power': 2268080
      }
    },
    {
      'time': 1536404211380,
      'values': {
        'power': 2263720
      }
    },
    {
      'time': 1536404213381,
      'values': {
        'power': 2256140
      }
    },
    {
      'time': 1536404215383,
      'values': {
        'power': 2252530
      }
    },
    {
      'time': 1536404217385,
      'values': {
        'power': 2252490
      }
    },
    {
      'time': 1536404219387,
      'values': {
        'power': 2253440
      }
    },
    {
      'time': 1536404221389,
      'values': {
        'power': 2254610
      }
    },
    {
      'time': 1536404223391,
      'values': {
        'power': 2255830
      }
    },
    {
      'time': 1536404225393,
      'values': {
        'power': 2255470
      }
    },
    {
      'time': 1536404227394,
      'values': {
        'power': 2253720
      }
    },
    {
      'time': 1536404229397,
      'values': {
        'power': 2253410
      }
    },
    {
      'time': 1536404231399,
      'values': {
        'power': 2253090
      }
    },
    {
      'time': 1536404233400,
      'values': {
        'power': 2253040
      }
    },
    {
      'time': 1536404235402,
      'values': {
        'power': 2253630
      }
    },
    {
      'time': 1536404237405,
      'values': {
        'power': 2253750
      }
    },
    {
      'time': 1536404239407,
      'values': {
        'power': 2239940
      }
    },
    {
      'time': 1536404241410,
      'values': {
        'power': 2218010
      }
    },
    {
      'time': 1536404243410,
      'values': {
        'power': 2210940
      }
    },
    {
      'time': 1536404245413,
      'values': {
        'power': 2214900
      }
    },
    {
      'time': 1536404247415,
      'values': {
        'power': 2221900
      }
    },
    {
      'time': 1536404249417,
      'values': {
        'power': 2227320
      }
    },
    {
      'time': 1536404251419,
      'values': {
        'power': 2228180
      }
    },
    {
      'time': 1536404253421,
      'values': {
        'power': 2227240
      }
    },
    {
      'time': 1536404255423,
      'values': {
        'power': 2226560
      }
    },
    {
      'time': 1536404257426,
      'values': {
        'power': 2226390
      }
    },
    {
      'time': 1536404259427,
      'values': {
        'power': 2226050
      }
    },
    {
      'time': 1536404261428,
      'values': {
        'power': 2225090
      }
    },
    {
      'time': 1536404263430,
      'values': {
        'power': 2224180
      }
    },
    {
      'time': 1536404265432,
      'values': {
        'power': 2223410
      }
    },
    {
      'time': 1536404267434,
      'values': {
        'power': 2222830
      }
    },
    {
      'time': 1536404269435,
      'values': {
        'power': 2222930
      }
    },
    {
      'time': 1536404271438,
      'values': {
        'power': 2223610
      }
    },
    {
      'time': 1536404273440,
      'values': {
        'power': 2224080
      }
    },
    {
      'time': 1536404275442,
      'values': {
        'power': 2224060
      }
    },
    {
      'time': 1536404277444,
      'values': {
        'power': 2224210
      }
    },
    {
      'time': 1536404279446,
      'values': {
        'power': 2224370
      }
    },
    {
      'time': 1536404281448,
      'values': {
        'power': 2224640
      }
    },
    {
      'time': 1536404283450,
      'values': {
        'power': 2224050
      }
    },
    {
      'time': 1536404285452,
      'values': {
        'power': 2218100
      }
    },
    {
      'time': 1536404287455,
      'values': {
        'power': 2212580
      }
    },
    {
      'time': 1536404289456,
      'values': {
        'power': 2213360
      }
    },
    {
      'time': 1536404291460,
      'values': {
        'power': 2214620
      }
    },
    {
      'time': 1536404293459,
      'values': {
        'power': 2214930
      }
    },
    {
      'time': 1536404295461,
      'values': {
        'power': 2214460
      }
    },
    {
      'time': 1536404297464,
      'values': {
        'power': 2212080
      }
    },
    {
      'time': 1536404299466,
      'values': {
        'power': 2326120
      }
    },
    {
      'time': 1536404301468,
      'values': {
        'power': 2396260
      }
    },
    {
      'time': 1536404303470,
      'values': {
        'power': 2303690
      }
    },
    {
      'time': 1536404305472,
      'values': {
        'power': 2255920
      }
    },
    {
      'time': 1536404307473,
      'values': {
        'power': 2256350
      }
    },
    {
      'time': 1536404309475,
      'values': {
        'power': 2258090
      }
    },
    {
      'time': 1536404311477,
      'values': {
        'power': 2262130
      }
    },
    {
      'time': 1536404313479,
      'values': {
        'power': 2263040
      }
    },
    {
      'time': 1536404315480,
      'values': {
        'power': 2261490
      }
    },
    {
      'time': 1536404317483,
      'values': {
        'power': 2262860
      }
    },
    {
      'time': 1536404319485,
      'values': {
        'power': 2263380
      }
    },
    {
      'time': 1536404321487,
      'values': {
        'power': 2262710
      }
    },
    {
      'time': 1536404323489,
      'values': {
        'power': 2262330
      }
    },
    {
      'time': 1536404325490,
      'values': {
        'power': 2266110
      }
    },
    {
      'time': 1536404327493,
      'values': {
        'power': 2272460
      }
    },
    {
      'time': 1536404329495,
      'values': {
        'power': 2274770
      }
    },
    {
      'time': 1536404331497,
      'values': {
        'power': 2273540
      }
    },
    {
      'time': 1536404333499,
      'values': {
        'power': 2272770
      }
    },
    {
      'time': 1536404335501,
      'values': {
        'power': 2272860
      }
    },
    {
      'time': 1536404337503,
      'values': {
        'power': 2272410
      }
    },
    {
      'time': 1536404339505,
      'values': {
        'power': 2272040
      }
    },
    {
      'time': 1536404341507,
      'values': {
        'power': 2271820
      }
    },
    {
      'time': 1536404343509,
      'values': {
        'power': 2271520
      }
    },
    {
      'time': 1536404345510,
      'values': {
        'power': 2270960
      }
    },
    {
      'time': 1536404347512,
      'values': {
        'power': 2269500
      }
    },
    {
      'time': 1536404349515,
      'values': {
        'power': 2267660
      }
    },
    {
      'time': 1536404351517,
      'values': {
        'power': 2266240
      }
    },
    {
      'time': 1536404353518,
      'values': {
        'power': 2266020
      }
    },
    {
      'time': 1536404355520,
      'values': {
        'power': 2265720
      }
    },
    {
      'time': 1536404357522,
      'values': {
        'power': 2264920
      }
    },
    {
      'time': 1536404359524,
      'values': {
        'power': 2264110
      }
    },
    {
      'time': 1536404361526,
      'values': {
        'power': 2264020
      }
    },
    {
      'time': 1536404363528,
      'values': {
        'power': 2264310
      }
    },
    {
      'time': 1536404365530,
      'values': {
        'power': 2263750
      }
    },
    {
      'time': 1536404367533,
      'values': {
        'power': 2263320
      }
    },
    {
      'time': 1536404369534,
      'values': {
        'power': 2264570
      }
    },
    {
      'time': 1536404371535,
      'values': {
        'power': 2265280
      }
    },
    {
      'time': 1536404373537,
      'values': {
        'power': 2265460
      }
    },
    {
      'time': 1536404375540,
      'values': {
        'power': 2266160
      }
    },
    {
      'time': 1536404377542,
      'values': {
        'power': 2265420
      }
    },
    {
      'time': 1536404379544,
      'values': {
        'power': 2264170
      }
    },
    {
      'time': 1536404381546,
      'values': {
        'power': 2264140
      }
    },
    {
      'time': 1536404383548,
      'values': {
        'power': 2265620
      }
    },
    {
      'time': 1536404385550,
      'values': {
        'power': 2266190
      }
    },
    {
      'time': 1536404387552,
      'values': {
        'power': 2269170
      }
    },
    {
      'time': 1536404389554,
      'values': {
        'power': 2270250
      }
    },
    {
      'time': 1536404391557,
      'values': {
        'power': 2267110
      }
    },
    {
      'time': 1536404393558,
      'values': {
        'power': 2266400
      }
    },
    {
      'time': 1536404395560,
      'values': {
        'power': 2267240
      }
    },
    {
      'time': 1536404397561,
      'values': {
        'power': 2268100
      }
    },
    {
      'time': 1536404399563,
      'values': {
        'power': 2269050
      }
    },
    {
      'time': 1536404401565,
      'values': {
        'power': 2269060
      }
    },
    {
      'time': 1536404403567,
      'values': {
        'power': 2268190
      }
    },
    {
      'time': 1536404405569,
      'values': {
        'power': 2267360
      }
    },
    {
      'time': 1536404407572,
      'values': {
        'power': 2268750
      }
    },
    {
      'time': 1536404409573,
      'values': {
        'power': 2269990
      }
    },
    {
      'time': 1536404411575,
      'values': {
        'power': 2268690
      }
    },
    {
      'time': 1536404413577,
      'values': {
        'power': 2268340
      }
    },
    {
      'time': 1536404415579,
      'values': {
        'power': 2269160
      }
    },
    {
      'time': 1536404417581,
      'values': {
        'power': 2269370
      }
    },
    {
      'time': 1536404419583,
      'values': {
        'power': 2268630
      }
    },
    {
      'time': 1536404421585,
      'values': {
        'power': 2267710
      }
    },
    {
      'time': 1536404423589,
      'values': {
        'power': 2266940
      }
    },
    {
      'time': 1536404425588,
      'values': {
        'power': 2266450
      }
    },
    {
      'time': 1536404427590,
      'values': {
        'power': 2266530
      }
    },
    {
      'time': 1536404429593,
      'values': {
        'power': 2260000
      }
    },
    {
      'time': 1536404431595,
      'values': {
        'power': 2229330
      }
    },
    {
      'time': 1536404433597,
      'values': {
        'power': 2204850
      }
    },
    {
      'time': 1536404435599,
      'values': {
        'power': 2203610
      }
    },
    {
      'time': 1536404437601,
      'values': {
        'power': 2202960
      }
    },
    {
      'time': 1536404439603,
      'values': {
        'power': 2201810
      }
    },
    {
      'time': 1536404441605,
      'values': {
        'power': 2201450
      }
    },
    {
      'time': 1536404443607,
      'values': {
        'power': 2201360
      }
    },
    {
      'time': 1536404445609,
      'values': {
        'power': 2201260
      }
    },
    {
      'time': 1536404447611,
      'values': {
        'power': 2201970
      }
    },
    {
      'time': 1536404449613,
      'values': {
        'power': 2203140
      }
    },
    {
      'time': 1536404451614,
      'values': {
        'power': 2203470
      }
    },
    {
      'time': 1536404453616,
      'values': {
        'power': 2203600
      }
    },
    {
      'time': 1536404455619,
      'values': {
        'power': 2203080
      }
    },
    {
      'time': 1536404457620,
      'values': {
        'power': 2201700
      }
    },
    {
      'time': 1536404459622,
      'values': {
        'power': 2200840
      }
    },
    {
      'time': 1536404461623,
      'values': {
        'power': 2218120
      }
    },
    {
      'time': 1536404463626,
      'values': {
        'power': 2371650
      }
    },
    {
      'time': 1536404465628,
      'values': {
        'power': 2384770
      }
    },
    {
      'time': 1536404467630,
      'values': {
        'power': 2262830
      }
    },
    {
      'time': 1536404469632,
      'values': {
        'power': 2264780
      }
    },
    {
      'time': 1536404471634,
      'values': {
        'power': 2263770
      }
    },
    {
      'time': 1536404473635,
      'values': {
        'power': 2262050
      }
    },
    {
      'time': 1536404475638,
      'values': {
        'power': 2261980
      }
    },
    {
      'time': 1536404477640,
      'values': {
        'power': 2260790
      }
    },
    {
      'time': 1536404479641,
      'values': {
        'power': 2260470
      }
    },
    {
      'time': 1536404481643,
      'values': {
        'power': 2262550
      }
    },
    {
      'time': 1536404483646,
      'values': {
        'power': 2263610
      }
    },
    {
      'time': 1536404485648,
      'values': {
        'power': 2263210
      }
    },
    {
      'time': 1536404487650,
      'values': {
        'power': 2263090
      }
    },
    {
      'time': 1536404489652,
      'values': {
        'power': 2263280
      }
    },
    {
      'time': 1536404491654,
      'values': {
        'power': 2262820
      }
    },
    {
      'time': 1536404493655,
      'values': {
        'power': 2262560
      }
    },
    {
      'time': 1536404495657,
      'values': {
        'power': 2263570
      }
    },
    {
      'time': 1536404497659,
      'values': {
        'power': 2265820
      }
    },
    {
      'time': 1536404499661,
      'values': {
        'power': 2277440
      }
    },
    {
      'time': 1536404501663,
      'values': {
        'power': 2289630
      }
    },
    {
      'time': 1536404503665,
      'values': {
        'power': 2291770
      }
    },
    {
      'time': 1536404505666,
      'values': {
        'power': 2291170
      }
    },
    {
      'time': 1536404507669,
      'values': {
        'power': 2290500
      }
    },
    {
      'time': 1536404509671,
      'values': {
        'power': 2289360
      }
    },
    {
      'time': 1536404511673,
      'values': {
        'power': 2287190
      }
    },
    {
      'time': 1536404513675,
      'values': {
        'power': 2280460
      }
    },
    {
      'time': 1536404515677,
      'values': {
        'power': 2274290
      }
    },
    {
      'time': 1536404517679,
      'values': {
        'power': 2273900
      }
    },
    {
      'time': 1536404519681,
      'values': {
        'power': 2274550
      }
    },
    {
      'time': 1536404521683,
      'values': {
        'power': 2275250
      }
    },
    {
      'time': 1536404523688,
      'values': {
        'power': 2276310
      }
    },
    {
      'time': 1536404525688,
      'values': {
        'power': 2279610
      }
    },
    {
      'time': 1536404527688,
      'values': {
        'power': 2282690
      }
    },
    {
      'time': 1536404529691,
      'values': {
        'power': 2282460
      }
    },
    {
      'time': 1536404531693,
      'values': {
        'power': 2419720
      }
    },
    {
      'time': 1536404533694,
      'values': {
        'power': 2953070
      }
    },
    {
      'time': 1536404535696,
      'values': {
        'power': 3373080
      }
    },
    {
      'time': 1536404537699,
      'values': {
        'power': 3396260
      }
    },
    {
      'time': 1536404539701,
      'values': {
        'power': 3394930
      }
    },
    {
      'time': 1536404541703,
      'values': {
        'power': 3395800
      }
    },
    {
      'time': 1536404543704,
      'values': {
        'power': 3397550
      }
    },
    {
      'time': 1536404545706,
      'values': {
        'power': 3398330
      }
    },
    {
      'time': 1536404547708,
      'values': {
        'power': 3398790
      }
    },
    {
      'time': 1536404549710,
      'values': {
        'power': 3405630
      }
    },
    {
      'time': 1536404551711,
      'values': {
        'power': 3413750
      }
    },
    {
      'time': 1536404553714,
      'values': {
        'power': 3413830
      }
    },
    {
      'time': 1536404555716,
      'values': {
        'power': 3412440
      }
    },
    {
      'time': 1536404557719,
      'values': {
        'power': 3410760
      }
    },
    {
      'time': 1536404559722,
      'values': {
        'power': 3409280
      }
    },
    {
      'time': 1536404561721,
      'values': {
        'power': 3408960
      }
    },
    {
      'time': 1536404563724,
      'values': {
        'power': 3408650
      }
    },
    {
      'time': 1536404565726,
      'values': {
        'power': 3409430
      }
    },
    {
      'time': 1536404567728,
      'values': {
        'power': 3411390
      }
    },
    {
      'time': 1536404569730,
      'values': {
        'power': 3413420
      }
    },
    {
      'time': 1536404571732,
      'values': {
        'power': 3413440
      }
    },
    {
      'time': 1536404573734,
      'values': {
        'power': 3412790
      }
    },
    {
      'time': 1536404575735,
      'values': {
        'power': 3412630
      }
    },
    {
      'time': 1536404577737,
      'values': {
        'power': 3411340
      }
    },
    {
      'time': 1536404579740,
      'values': {
        'power': 3410130
      }
    },
    {
      'time': 1536404581742,
      'values': {
        'power': 3409590
      }
    },
    {
      'time': 1536404583744,
      'values': {
        'power': 3407920
      }
    },
    {
      'time': 1536404585746,
      'values': {
        'power': 3407700
      }
    },
    {
      'time': 1536404587747,
      'values': {
        'power': 3405950
      }
    },
    {
      'time': 1536404589749,
      'values': {
        'power': 3386900
      }
    },
    {
      'time': 1536404591752,
      'values': {
        'power': 3364950
      }
    },
    {
      'time': 1536404593753,
      'values': {
        'power': 3361030
      }
    },
    {
      'time': 1536404595755,
      'values': {
        'power': 3362900
      }
    },
    {
      'time': 1536404597757,
      'values': {
        'power': 3363820
      }
    },
    {
      'time': 1536404599759,
      'values': {
        'power': 3364390
      }
    },
    {
      'time': 1536404601761,
      'values': {
        'power': 3364460
      }
    },
    {
      'time': 1536404603762,
      'values': {
        'power': 3363580
      }
    },
    {
      'time': 1536404605765,
      'values': {
        'power': 3362750
      }
    },
    {
      'time': 1536404607767,
      'values': {
        'power': 3361210
      }
    },
    {
      'time': 1536404609769,
      'values': {
        'power': 3360370
      }
    },
    {
      'time': 1536404611771,
      'values': {
        'power': 3362090
      }
    },
    {
      'time': 1536404613773,
      'values': {
        'power': 3362600
      }
    },
    {
      'time': 1536404615774,
      'values': {
        'power': 3361830
      }
    },
    {
      'time': 1536404617776,
      'values': {
        'power': 3361490
      }
    },
    {
      'time': 1536404619779,
      'values': {
        'power': 3360560
      }
    },
    {
      'time': 1536404621781,
      'values': {
        'power': 3360000
      }
    },
    {
      'time': 1536404623784,
      'values': {
        'power': 3360280
      }
    },
    {
      'time': 1536404625787,
      'values': {
        'power': 3366050
      }
    },
    {
      'time': 1536404627786,
      'values': {
        'power': 3374230
      }
    },
    {
      'time': 1536404629788,
      'values': {
        'power': 3378150
      }
    },
    {
      'time': 1536404631791,
      'values': {
        'power': 3380280
      }
    },
    {
      'time': 1536404633793,
      'values': {
        'power': 3380470
      }
    },
    {
      'time': 1536404635795,
      'values': {
        'power': 3379510
      }
    },
    {
      'time': 1536404637796,
      'values': {
        'power': 3378990
      }
    },
    {
      'time': 1536404639798,
      'values': {
        'power': 3378110
      }
    },
    {
      'time': 1536404641800,
      'values': {
        'power': 3378310
      }
    },
    {
      'time': 1536404643802,
      'values': {
        'power': 3376030
      }
    },
    {
      'time': 1536404645804,
      'values': {
        'power': 3363620
      }
    },
    {
      'time': 1536404647806,
      'values': {
        'power': 3355260
      }
    },
    {
      'time': 1536404649808,
      'values': {
        'power': 3353680
      }
    },
    {
      'time': 1536404651810,
      'values': {
        'power': 3010700
      }
    },
    {
      'time': 1536404653811,
      'values': {
        'power': 2478900
      }
    },
    {
      'time': 1536404655813,
      'values': {
        'power': 2226970
      }
    },
    {
      'time': 1536404657817,
      'values': {
        'power': 2227070
      }
    },
    {
      'time': 1536404659819,
      'values': {
        'power': 2226170
      }
    },
    {
      'time': 1536404661819,
      'values': {
        'power': 2223260
      }
    },
    {
      'time': 1536404663822,
      'values': {
        'power': 2215550
      }
    },
    {
      'time': 1536404665824,
      'values': {
        'power': 2209180
      }
    },
    {
      'time': 1536404667826,
      'values': {
        'power': 2208490
      }
    },
    {
      'time': 1536404669827,
      'values': {
        'power': 2208480
      }
    },
    {
      'time': 1536404671829,
      'values': {
        'power': 2208170
      }
    },
    {
      'time': 1536404673832,
      'values': {
        'power': 2208280
      }
    },
    {
      'time': 1536404675834,
      'values': {
        'power': 2209030
      }
    },
    {
      'time': 1536404677837,
      'values': {
        'power': 2208910
      }
    },
    {
      'time': 1536404679837,
      'values': {
        'power': 2207970
      }
    },
    {
      'time': 1536404681840,
      'values': {
        'power': 2207430
      }
    },
    {
      'time': 1536404683841,
      'values': {
        'power': 2208320
      }
    },
    {
      'time': 1536404685843,
      'values': {
        'power': 2209170
      }
    },
    {
      'time': 1536404687845,
      'values': {
        'power': 2209830
      }
    },
    {
      'time': 1536404689847,
      'values': {
        'power': 2210030
      }
    },
    {
      'time': 1536404691849,
      'values': {
        'power': 2209230
      }
    },
    {
      'time': 1536404693851,
      'values': {
        'power': 2208120
      }
    },
    {
      'time': 1536404695853,
      'values': {
        'power': 2207710
      }
    },
    {
      'time': 1536404697854,
      'values': {
        'power': 2211560
      }
    },
    {
      'time': 1536404699856,
      'values': {
        'power': 2219730
      }
    },
    {
      'time': 1536404701859,
      'values': {
        'power': 2222230
      }
    },
    {
      'time': 1536404703860,
      'values': {
        'power': 2221880
      }
    },
    {
      'time': 1536404705862,
      'values': {
        'power': 2220850
      }
    },
    {
      'time': 1536404707865,
      'values': {
        'power': 2219900
      }
    },
    {
      'time': 1536404709867,
      'values': {
        'power': 2219220
      }
    },
    {
      'time': 1536404711869,
      'values': {
        'power': 2219070
      }
    },
    {
      'time': 1536404713871,
      'values': {
        'power': 2218810
      }
    },
    {
      'time': 1536404715873,
      'values': {
        'power': 2218320
      }
    },
    {
      'time': 1536404717875,
      'values': {
        'power': 2218240
      }
    },
    {
      'time': 1536404719877,
      'values': {
        'power': 2218350
      }
    },
    {
      'time': 1536404721879,
      'values': {
        'power': 2218860
      }
    },
    {
      'time': 1536404723881,
      'values': {
        'power': 2219770
      }
    },
    {
      'time': 1536404725883,
      'values': {
        'power': 2220500
      }
    },
    {
      'time': 1536404727885,
      'values': {
        'power': 2221270
      }
    },
    {
      'time': 1536404729886,
      'values': {
        'power': 2225130
      }
    },
    {
      'time': 1536404731888,
      'values': {
        'power': 2237970
      }
    },
    {
      'time': 1536404733891,
      'values': {
        'power': 2249280
      }
    },
    {
      'time': 1536404735892,
      'values': {
        'power': 2249860
      }
    },
    {
      'time': 1536404737894,
      'values': {
        'power': 2241210
      }
    },
    {
      'time': 1536404739896,
      'values': {
        'power': 2222830
      }
    },
    {
      'time': 1536404741898,
      'values': {
        'power': 2209880
      }
    },
    {
      'time': 1536404743900,
      'values': {
        'power': 2207020
      }
    },
    {
      'time': 1536404745902,
      'values': {
        'power': 2206070
      }
    },
    {
      'time': 1536404747904,
      'values': {
        'power': 2205660
      }
    },
    {
      'time': 1536404749906,
      'values': {
        'power': 2204670
      }
    },
    {
      'time': 1536404751907,
      'values': {
        'power': 2203210
      }
    },
    {
      'time': 1536404753910,
      'values': {
        'power': 2203320
      }
    },
    {
      'time': 1536404755912,
      'values': {
        'power': 2204010
      }
    },
    {
      'time': 1536404757914,
      'values': {
        'power': 2204540
      }
    },
    {
      'time': 1536404759916,
      'values': {
        'power': 2205370
      }
    },
    {
      'time': 1536404761917,
      'values': {
        'power': 2206000
      }
    },
    {
      'time': 1536404763919,
      'values': {
        'power': 2206260
      }
    },
    {
      'time': 1536404765922,
      'values': {
        'power': 2213330
      }
    },
    {
      'time': 1536404767924,
      'values': {
        'power': 2226500
      }
    },
    {
      'time': 1536404769926,
      'values': {
        'power': 2231030
      }
    },
    {
      'time': 1536404771928,
      'values': {
        'power': 2235680
      }
    },
    {
      'time': 1536404773930,
      'values': {
        'power': 2245940
      }
    },
    {
      'time': 1536404775932,
      'values': {
        'power': 2249510
      }
    },
    {
      'time': 1536404777933,
      'values': {
        'power': 2249060
      }
    },
    {
      'time': 1536404779935,
      'values': {
        'power': 2248090
      }
    },
    {
      'time': 1536404781937,
      'values': {
        'power': 2238500
      }
    },
    {
      'time': 1536404783939,
      'values': {
        'power': 2228200
      }
    },
    {
      'time': 1536404785941,
      'values': {
        'power': 2223820
      }
    },
    {
      'time': 1536404787943,
      'values': {
        'power': 2222760
      }
    },
    {
      'time': 1536404789945,
      'values': {
        'power': 2221320
      }
    },
    {
      'time': 1536404791947,
      'values': {
        'power': 2219380
      }
    },
    {
      'time': 1536404793950,
      'values': {
        'power': 2219040
      }
    },
    {
      'time': 1536404795950,
      'values': {
        'power': 2220040
      }
    },
    {
      'time': 1536404797953,
      'values': {
        'power': 2220520
      }
    },
    {
      'time': 1536404799955,
      'values': {
        'power': 2220680
      }
    },
    {
      'time': 1536404801957,
      'values': {
        'power': 2221040
      }
    },
    {
      'time': 1536404803961,
      'values': {
        'power': 2220770
      }
    },
    {
      'time': 1536404805961,
      'values': {
        'power': 2220490
      }
    },
    {
      'time': 1536404807962,
      'values': {
        'power': 2221150
      }
    },
    {
      'time': 1536404809964,
      'values': {
        'power': 2219440
      }
    },
    {
      'time': 1536404811967,
      'values': {
        'power': 2214420
      }
    },
    {
      'time': 1536404813969,
      'values': {
        'power': 2221840
      }
    },
    {
      'time': 1536404815971,
      'values': {
        'power': 2245110
      }
    },
    {
      'time': 1536404817973,
      'values': {
        'power': 2261140
      }
    },
    {
      'time': 1536404819975,
      'values': {
        'power': 2262500
      }
    },
    {
      'time': 1536404821977,
      'values': {
        'power': 2257800
      }
    },
    {
      'time': 1536404823979,
      'values': {
        'power': 2254420
      }
    },
    {
      'time': 1536404825980,
      'values': {
        'power': 2253730
      }
    },
    {
      'time': 1536404827983,
      'values': {
        'power': 2253970
      }
    },
    {
      'time': 1536404829986,
      'values': {
        'power': 2254340
      }
    },
    {
      'time': 1536404831990,
      'values': {
        'power': 2252600
      }
    },
    {
      'time': 1536404833988,
      'values': {
        'power': 2245770
      }
    },
    {
      'time': 1536404835990,
      'values': {
        'power': 2235090
      }
    },
    {
      'time': 1536404837992,
      'values': {
        'power': 2229830
      }
    },
    {
      'time': 1536404839994,
      'values': {
        'power': 2230380
      }
    },
    {
      'time': 1536404841996,
      'values': {
        'power': 2231880
      }
    },
    {
      'time': 1536404843998,
      'values': {
        'power': 2233490
      }
    },
    {
      'time': 1536404846000,
      'values': {
        'power': 2238790
      }
    },
    {
      'time': 1536404848002,
      'values': {
        'power': 2244490
      }
    },
    {
      'time': 1536404850004,
      'values': {
        'power': 2246120
      }
    },
    {
      'time': 1536404852006,
      'values': {
        'power': 2246720
      }
    },
    {
      'time': 1536404854008,
      'values': {
        'power': 2246680
      }
    },
    {
      'time': 1536404856010,
      'values': {
        'power': 2245560
      }
    },
    {
      'time': 1536404858013,
      'values': {
        'power': 2244610
      }
    },
    {
      'time': 1536404860014,
      'values': {
        'power': 2244350
      }
    },
    {
      'time': 1536404862015,
      'values': {
        'power': 2243730
      }
    },
    {
      'time': 1536404864017,
      'values': {
        'power': 2243320
      }
    },
    {
      'time': 1536404866020,
      'values': {
        'power': 2243500
      }
    },
    {
      'time': 1536404868022,
      'values': {
        'power': 2244360
      }
    },
    {
      'time': 1536404870024,
      'values': {
        'power': 2245020
      }
    },
    {
      'time': 1536404872025,
      'values': {
        'power': 2245320
      }
    },
    {
      'time': 1536404874027,
      'values': {
        'power': 2246570
      }
    },
    {
      'time': 1536404876029,
      'values': {
        'power': 2248470
      }
    },
    {
      'time': 1536404878031,
      'values': {
        'power': 2248680
      }
    },
    {
      'time': 1536404880033,
      'values': {
        'power': 2233450
      }
    },
    {
      'time': 1536404882035,
      'values': {
        'power': 2212910
      }
    },
    {
      'time': 1536404884037,
      'values': {
        'power': 2204140
      }
    },
    {
      'time': 1536404886039,
      'values': {
        'power': 2201600
      }
    },
    {
      'time': 1536404888040,
      'values': {
        'power': 2202790
      }
    },
    {
      'time': 1536404890042,
      'values': {
        'power': 2203520
      }
    },
    {
      'time': 1536404892045,
      'values': {
        'power': 2202740
      }
    },
    {
      'time': 1536404894047,
      'values': {
        'power': 2202080
      }
    },
    {
      'time': 1536404896048,
      'values': {
        'power': 2202130
      }
    },
    {
      'time': 1536404898050,
      'values': {
        'power': 2201340
      }
    },
    {
      'time': 1536404900053,
      'values': {
        'power': 2200620
      }
    },
    {
      'time': 1536404902055,
      'values': {
        'power': 2200010
      }
    },
    {
      'time': 1536404904057,
      'values': {
        'power': 2200290
      }
    },
    {
      'time': 1536404906059,
      'values': {
        'power': 2202250
      }
    },
    {
      'time': 1536404908061,
      'values': {
        'power': 2204100
      }
    },
    {
      'time': 1536404910062,
      'values': {
        'power': 2205350
      }
    },
    {
      'time': 1536404912065,
      'values': {
        'power': 2207680
      }
    },
    {
      'time': 1536404914066,
      'values': {
        'power': 2206680
      }
    },
    {
      'time': 1536404916068,
      'values': {
        'power': 2204010
      }
    },
    {
      'time': 1536404918071,
      'values': {
        'power': 2208640
      }
    },
    {
      'time': 1536404920072,
      'values': {
        'power': 2213680
      }
    },
    {
      'time': 1536404922074,
      'values': {
        'power': 2215130
      }
    },
    {
      'time': 1536404924076,
      'values': {
        'power': 2214470
      }
    },
    {
      'time': 1536404926078,
      'values': {
        'power': 2214180
      }
    },
    {
      'time': 1536404928082,
      'values': {
        'power': 2215000
      }
    },
    {
      'time': 1536404930081,
      'values': {
        'power': 2215930
      }
    },
    {
      'time': 1536404932084,
      'values': {
        'power': 2216220
      }
    },
    {
      'time': 1536404934087,
      'values': {
        'power': 2217070
      }
    },
    {
      'time': 1536404936087,
      'values': {
        'power': 2218540
      }
    },
    {
      'time': 1536404938089,
      'values': {
        'power': 2219800
      }
    },
    {
      'time': 1536404940092,
      'values': {
        'power': 2220380
      }
    },
    {
      'time': 1536404942093,
      'values': {
        'power': 2220290
      }
    },
    {
      'time': 1536404944095,
      'values': {
        'power': 2219040
      }
    },
    {
      'time': 1536404946098,
      'values': {
        'power': 2217350
      }
    },
    {
      'time': 1536404948100,
      'values': {
        'power': 2216660
      }
    },
    {
      'time': 1536404950102,
      'values': {
        'power': 2215980
      }
    },
    {
      'time': 1536404952104,
      'values': {
        'power': 2215020
      }
    },
    {
      'time': 1536404954106,
      'values': {
        'power': 2213980
      }
    },
    {
      'time': 1536404956108,
      'values': {
        'power': 2208360
      }
    },
    {
      'time': 1536404958110,
      'values': {
        'power': 2203050
      }
    },
    {
      'time': 1536404960111,
      'values': {
        'power': 2203400
      }
    },
    {
      'time': 1536404962113,
      'values': {
        'power': 2204550
      }
    },
    {
      'time': 1536404964115,
      'values': {
        'power': 2204670
      }
    },
    {
      'time': 1536404966119,
      'values': {
        'power': 2204970
      }
    },
    {
      'time': 1536404968120,
      'values': {
        'power': 2206250
      }
    },
    {
      'time': 1536404970121,
      'values': {
        'power': 2206430
      }
    },
    {
      'time': 1536404972123,
      'values': {
        'power': 2204010
      }
    },
    {
      'time': 1536404974125,
      'values': {
        'power': 2202220
      }
    },
    {
      'time': 1536404976127,
      'values': {
        'power': 2201840
      }
    },
    {
      'time': 1536404978129,
      'values': {
        'power': 2201420
      }
    },
    {
      'time': 1536404980131,
      'values': {
        'power': 2201240
      }
    },
    {
      'time': 1536404982133,
      'values': {
        'power': 2202280
      }
    },
    {
      'time': 1536404984135,
      'values': {
        'power': 2203660
      }
    },
    {
      'time': 1536404986136,
      'values': {
        'power': 2204370
      }
    },
    {
      'time': 1536404988139,
      'values': {
        'power': 2205680
      }
    },
    {
      'time': 1536404990141,
      'values': {
        'power': 2205730
      }
    },
    {
      'time': 1536404992143,
      'values': {
        'power': 2210020
      }
    },
    {
      'time': 1536404994147,
      'values': {
        'power': 2217300
      }
    },
    {
      'time': 1536404996146,
      'values': {
        'power': 2219890
      }
    },
    {
      'time': 1536404998148,
      'values': {
        'power': 2220450
      }
    },
    {
      'time': 1536405000151,
      'values': {
        'power': 2221660
      }
    },
    {
      'time': 1536405002153,
      'values': {
        'power': 2220890
      }
    },
    {
      'time': 1536405004155,
      'values': {
        'power': 2218520
      }
    },
    {
      'time': 1536405006157,
      'values': {
        'power': 2217290
      }
    },
    {
      'time': 1536405008159,
      'values': {
        'power': 2217030
      }
    },
    {
      'time': 1536405010161,
      'values': {
        'power': 2217810
      }
    },
    {
      'time': 1536405012162,
      'values': {
        'power': 2218740
      }
    },
    {
      'time': 1536405014164,
      'values': {
        'power': 2220430
      }
    },
    {
      'time': 1536405016166,
      'values': {
        'power': 2223440
      }
    },
    {
      'time': 1536405018168,
      'values': {
        'power': 2224340
      }
    },
    {
      'time': 1536405020170,
      'values': {
        'power': 2221860
      }
    },
    {
      'time': 1536405022172,
      'values': {
        'power': 2220930
      }
    },
    {
      'time': 1536405024174,
      'values': {
        'power': 2221290
      }
    },
    {
      'time': 1536405026176,
      'values': {
        'power': 2220330
      }
    },
    {
      'time': 1536405028178,
      'values': {
        'power': 2218870
      }
    },
    {
      'time': 1536405030179,
      'values': {
        'power': 2216880
      }
    },
    {
      'time': 1536405032181,
      'values': {
        'power': 2209230
      }
    },
    {
      'time': 1536405034184,
      'values': {
        'power': 2201810
      }
    },
    {
      'time': 1536405036186,
      'values': {
        'power': 2200570
      }
    },
    {
      'time': 1536405038187,
      'values': {
        'power': 2201010
      }
    },
    {
      'time': 1536405040189,
      'values': {
        'power': 2201650
      }
    },
    {
      'time': 1536405042192,
      'values': {
        'power': 2203160
      }
    },
    {
      'time': 1536405044194,
      'values': {
        'power': 2203820
      }
    },
    {
      'time': 1536405046196,
      'values': {
        'power': 2204160
      }
    },
    {
      'time': 1536405048199,
      'values': {
        'power': 2205550
      }
    },
    {
      'time': 1536405050199,
      'values': {
        'power': 2206380
      }
    },
    {
      'time': 1536405052201,
      'values': {
        'power': 2206300
      }
    },
    {
      'time': 1536405054204,
      'values': {
        'power': 2206050
      }
    },
    {
      'time': 1536405056206,
      'values': {
        'power': 2206030
      }
    },
    {
      'time': 1536405058208,
      'values': {
        'power': 2205650
      }
    },
    {
      'time': 1536405060209,
      'values': {
        'power': 2204790
      }
    },
    {
      'time': 1536405062213,
      'values': {
        'power': 2203170
      }
    },
    {
      'time': 1536405064213,
      'values': {
        'power': 2201660
      }
    },
    {
      'time': 1536405066215,
      'values': {
        'power': 2202480
      }
    },
    {
      'time': 1536405068217,
      'values': {
        'power': 2209380
      }
    },
    {
      'time': 1536405070219,
      'values': {
        'power': 2215340
      }
    },
    {
      'time': 1536405072221,
      'values': {
        'power': 2216210
      }
    },
    {
      'time': 1536405074223,
      'values': {
        'power': 2217730
      }
    },
    {
      'time': 1536405076225,
      'values': {
        'power': 2219010
      }
    },
    {
      'time': 1536405078226,
      'values': {
        'power': 2220340
      }
    },
    {
      'time': 1536405080229,
      'values': {
        'power': 2221600
      }
    },
    {
      'time': 1536405082231,
      'values': {
        'power': 2222980
      }
    },
    {
      'time': 1536405084233,
      'values': {
        'power': 2222570
      }
    },
    {
      'time': 1536405086235,
      'values': {
        'power': 2221140
      }
    },
    {
      'time': 1536405088237,
      'values': {
        'power': 2221030
      }
    },
    {
      'time': 1536405090238,
      'values': {
        'power': 2220740
      }
    },
    {
      'time': 1536405092240,
      'values': {
        'power': 2220210
      }
    },
    {
      'time': 1536405094243,
      'values': {
        'power': 2219790
      }
    },
    {
      'time': 1536405096246,
      'values': {
        'power': 2219210
      }
    },
    {
      'time': 1536405098246,
      'values': {
        'power': 2219190
      }
    },
    {
      'time': 1536405100249,
      'values': {
        'power': 2218140
      }
    },
    {
      'time': 1536405102251,
      'values': {
        'power': 2216810
      }
    },
    {
      'time': 1536405104255,
      'values': {
        'power': 2216240
      }
    },
    {
      'time': 1536405106254,
      'values': {
        'power': 2212810
      }
    },
    {
      'time': 1536405108256,
      'values': {
        'power': 2205540
      }
    },
    {
      'time': 1536405110258,
      'values': {
        'power': 2203160
      }
    },
    {
      'time': 1536405112260,
      'values': {
        'power': 2203460
      }
    },
    {
      'time': 1536405114263,
      'values': {
        'power': 2204420
      }
    },
    {
      'time': 1536405116263,
      'values': {
        'power': 2204950
      }
    },
    {
      'time': 1536405118266,
      'values': {
        'power': 2205930
      }
    },
    {
      'time': 1536405120268,
      'values': {
        'power': 2206840
      }
    },
    {
      'time': 1536405122270,
      'values': {
        'power': 2207090
      }
    },
    {
      'time': 1536405124272,
      'values': {
        'power': 2206790
      }
    },
    {
      'time': 1536405126274,
      'values': {
        'power': 2205990
      }
    },
    {
      'time': 1536405128276,
      'values': {
        'power': 2205930
      }
    },
    {
      'time': 1536405130278,
      'values': {
        'power': 2205850
      }
    },
    {
      'time': 1536405132279,
      'values': {
        'power': 2206050
      }
    },
    {
      'time': 1536405134281,
      'values': {
        'power': 2206250
      }
    },
    {
      'time': 1536405136284,
      'values': {
        'power': 2206230
      }
    },
    {
      'time': 1536405138286,
      'values': {
        'power': 2205620
      }
    },
    {
      'time': 1536405140287,
      'values': {
        'power': 2204240
      }
    },
    {
      'time': 1536405142289,
      'values': {
        'power': 2204310
      }
    },
    {
      'time': 1536405144292,
      'values': {
        'power': 2210320
      }
    },
    {
      'time': 1536405146294,
      'values': {
        'power': 2218890
      }
    },
    {
      'time': 1536405148296,
      'values': {
        'power': 2222060
      }
    },
    {
      'time': 1536405150298,
      'values': {
        'power': 2221530
      }
    },
    {
      'time': 1536405152300,
      'values': {
        'power': 2221430
      }
    },
    {
      'time': 1536405154301,
      'values': {
        'power': 2222270
      }
    },
    {
      'time': 1536405156303,
      'values': {
        'power': 2222330
      }
    },
    {
      'time': 1536405158305,
      'values': {
        'power': 2222110
      }
    },
    {
      'time': 1536405160307,
      'values': {
        'power': 2222290
      }
    },
    {
      'time': 1536405162310,
      'values': {
        'power': 2221720
      }
    },
    {
      'time': 1536405164311,
      'values': {
        'power': 2220390
      }
    },
    {
      'time': 1536405166312,
      'values': {
        'power': 2219280
      }
    },
    {
      'time': 1536405168315,
      'values': {
        'power': 2218780
      }
    },
    {
      'time': 1536405170317,
      'values': {
        'power': 2218540
      }
    },
    {
      'time': 1536405172319,
      'values': {
        'power': 2218530
      }
    },
    {
      'time': 1536405174321,
      'values': {
        'power': 2219350
      }
    },
    {
      'time': 1536405176323,
      'values': {
        'power': 2220810
      }
    },
    {
      'time': 1536405178325,
      'values': {
        'power': 2221680
      }
    },
    {
      'time': 1536405180327,
      'values': {
        'power': 2222410
      }
    },
    {
      'time': 1536405182329,
      'values': {
        'power': 2221010
      }
    },
    {
      'time': 1536405184331,
      'values': {
        'power': 2212830
      }
    },
    {
      'time': 1536405186334,
      'values': {
        'power': 2206100
      }
    },
    {
      'time': 1536405188334,
      'values': {
        'power': 2205130
      }
    },
    {
      'time': 1536405190337,
      'values': {
        'power': 2203760
      }
    },
    {
      'time': 1536405192338,
      'values': {
        'power': 2203410
      }
    },
    {
      'time': 1536405194341,
      'values': {
        'power': 2204470
      }
    },
    {
      'time': 1536405196343,
      'values': {
        'power': 2205400
      }
    },
    {
      'time': 1536405198344,
      'values': {
        'power': 2206700
      }
    },
    {
      'time': 1536405200346,
      'values': {
        'power': 2208140
      }
    },
    {
      'time': 1536405202348,
      'values': {
        'power': 2208580
      }
    },
    {
      'time': 1536405204350,
      'values': {
        'power': 2207930
      }
    },
    {
      'time': 1536405206352,
      'values': {
        'power': 2205860
      }
    },
    {
      'time': 1536405208354,
      'values': {
        'power': 2204650
      }
    },
    {
      'time': 1536405210356,
      'values': {
        'power': 2204310
      }
    },
    {
      'time': 1536405212358,
      'values': {
        'power': 2203670
      }
    },
    {
      'time': 1536405214359,
      'values': {
        'power': 2204220
      }
    },
    {
      'time': 1536405216362,
      'values': {
        'power': 2205220
      }
    },
    {
      'time': 1536405218363,
      'values': {
        'power': 2206060
      }
    },
    {
      'time': 1536405220365,
      'values': {
        'power': 2210140
      }
    },
    {
      'time': 1536405222368,
      'values': {
        'power': 2217410
      }
    },
    {
      'time': 1536405224370,
      'values': {
        'power': 2220970
      }
    },
    {
      'time': 1536405226372,
      'values': {
        'power': 2220410
      }
    },
    {
      'time': 1536405228374,
      'values': {
        'power': 2219940
      }
    },
    {
      'time': 1536405230375,
      'values': {
        'power': 2219590
      }
    },
    {
      'time': 1536405232377,
      'values': {
        'power': 2220440
      }
    },
    {
      'time': 1536405234379,
      'values': {
        'power': 2222590
      }
    },
    {
      'time': 1536405236382,
      'values': {
        'power': 2221610
      }
    },
    {
      'time': 1536405238384,
      'values': {
        'power': 2220780
      }
    },
    {
      'time': 1536405240388,
      'values': {
        'power': 2222070
      }
    },
    {
      'time': 1536405242390,
      'values': {
        'power': 2223410
      }
    },
    {
      'time': 1536405244389,
      'values': {
        'power': 2223360
      }
    },
    {
      'time': 1536405246392,
      'values': {
        'power': 2221670
      }
    },
    {
      'time': 1536405248393,
      'values': {
        'power': 2220600
      }
    },
    {
      'time': 1536405250395,
      'values': {
        'power': 2219890
      }
    },
    {
      'time': 1536405252397,
      'values': {
        'power': 2219120
      }
    },
    {
      'time': 1536405254399,
      'values': {
        'power': 2219290
      }
    },
    {
      'time': 1536405256401,
      'values': {
        'power': 2219490
      }
    },
    {
      'time': 1536405258403,
      'values': {
        'power': 2218150
      }
    },
    {
      'time': 1536405260405,
      'values': {
        'power': 2211370
      }
    },
    {
      'time': 1536405262407,
      'values': {
        'power': 2206260
      }
    },
    {
      'time': 1536405264408,
      'values': {
        'power': 2206690
      }
    },
    {
      'time': 1536405266412,
      'values': {
        'power': 2206870
      }
    },
    {
      'time': 1536405268412,
      'values': {
        'power': 2206980
      }
    },
    {
      'time': 1536405270414,
      'values': {
        'power': 2205640
      }
    },
    {
      'time': 1536405272417,
      'values': {
        'power': 2203980
      }
    },
    {
      'time': 1536405274419,
      'values': {
        'power': 2204490
      }
    },
    {
      'time': 1536405276421,
      'values': {
        'power': 2205780
      }
    },
    {
      'time': 1536405278423,
      'values': {
        'power': 2207130
      }
    },
    {
      'time': 1536405280425,
      'values': {
        'power': 2208790
      }
    },
    {
      'time': 1536405282427,
      'values': {
        'power': 2209380
      }
    },
    {
      'time': 1536405284429,
      'values': {
        'power': 2209260
      }
    },
    {
      'time': 1536405286431,
      'values': {
        'power': 2207940
      }
    },
    {
      'time': 1536405288433,
      'values': {
        'power': 2205890
      }
    },
    {
      'time': 1536405290435,
      'values': {
        'power': 2205330
      }
    },
    {
      'time': 1536405292438,
      'values': {
        'power': 2206180
      }
    },
    {
      'time': 1536405294440,
      'values': {
        'power': 2213580
      }
    },
    {
      'time': 1536405296440,
      'values': {
        'power': 2220800
      }
    },
    {
      'time': 1536405298442,
      'values': {
        'power': 2221760
      }
    },
    {
      'time': 1536405300444,
      'values': {
        'power': 2220840
      }
    },
    {
      'time': 1536405302446,
      'values': {
        'power': 2220440
      }
    },
    {
      'time': 1536405304448,
      'values': {
        'power': 2220490
      }
    },
    {
      'time': 1536405306450,
      'values': {
        'power': 2221140
      }
    },
    {
      'time': 1536405308452,
      'values': {
        'power': 2222620
      }
    },
    {
      'time': 1536405310454,
      'values': {
        'power': 2223390
      }
    },
    {
      'time': 1536405312456,
      'values': {
        'power': 2222050
      }
    },
    {
      'time': 1536405314458,
      'values': {
        'power': 2220050
      }
    },
    {
      'time': 1536405316460,
      'values': {
        'power': 2219000
      }
    },
    {
      'time': 1536405318462,
      'values': {
        'power': 2218980
      }
    },
    {
      'time': 1536405320464,
      'values': {
        'power': 2220000
      }
    },
    {
      'time': 1536405322467,
      'values': {
        'power': 2221230
      }
    },
    {
      'time': 1536405324468,
      'values': {
        'power': 2222620
      }
    },
    {
      'time': 1536405326470,
      'values': {
        'power': 2223000
      }
    },
    {
      'time': 1536405328472,
      'values': {
        'power': 2222580
      }
    },
    {
      'time': 1536405330474,
      'values': {
        'power': 2221780
      }
    },
    {
      'time': 1536405332475,
      'values': {
        'power': 2218680
      }
    },
    {
      'time': 1536405334448,
      'values': {
        'power': 2212560
      }
    },
    {
      'time': 1536405336450,
      'values': {
        'power': 2208500
      }
    },
    {
      'time': 1536405338452,
      'values': {
        'power': 2208820
      }
    },
    {
      'time': 1536405340454,
      'values': {
        'power': 2208750
      }
    },
    {
      'time': 1536405342456,
      'values': {
        'power': 2209170
      }
    },
    {
      'time': 1536405344458,
      'values': {
        'power': 2209380
      }
    },
    {
      'time': 1536405346459,
      'values': {
        'power': 2208600
      }
    },
    {
      'time': 1536405348462,
      'values': {
        'power': 2207540
      }
    },
    {
      'time': 1536405350463,
      'values': {
        'power': 2206360
      }
    },
    {
      'time': 1536405352465,
      'values': {
        'power': 2205750
      }
    },
    {
      'time': 1536405354468,
      'values': {
        'power': 2205760
      }
    },
    {
      'time': 1536405356470,
      'values': {
        'power': 2205990
      }
    },
    {
      'time': 1536405358472,
      'values': {
        'power': 2205970
      }
    },
    {
      'time': 1536405360474,
      'values': {
        'power': 2206020
      }
    },
    {
      'time': 1536405362476,
      'values': {
        'power': 2206850
      }
    },
    {
      'time': 1536405364479,
      'values': {
        'power': 2207600
      }
    },
    {
      'time': 1536405366479,
      'values': {
        'power': 2211000
      }
    },
    {
      'time': 1536405368482,
      'values': {
        'power': 2220640
      }
    },
    {
      'time': 1536405370484,
      'values': {
        'power': 2227230
      }
    },
    {
      'time': 1536405372485,
      'values': {
        'power': 2226330
      }
    },
    {
      'time': 1536405374488,
      'values': {
        'power': 2224440
      }
    },
    {
      'time': 1536405376489,
      'values': {
        'power': 2223240
      }
    },
    {
      'time': 1536405378491,
      'values': {
        'power': 2222350
      }
    },
    {
      'time': 1536405380493,
      'values': {
        'power': 2222110
      }
    },
    {
      'time': 1536405382495,
      'values': {
        'power': 2222370
      }
    },
    {
      'time': 1536405384497,
      'values': {
        'power': 2221380
      }
    },
    {
      'time': 1536405386499,
      'values': {
        'power': 2219550
      }
    },
    {
      'time': 1536405388501,
      'values': {
        'power': 2219140
      }
    },
    {
      'time': 1536405390503,
      'values': {
        'power': 2219250
      }
    },
    {
      'time': 1536405392505,
      'values': {
        'power': 2219090
      }
    },
    {
      'time': 1536405394507,
      'values': {
        'power': 2219570
      }
    },
    {
      'time': 1536405396512,
      'values': {
        'power': 2221030
      }
    },
    {
      'time': 1536405398510,
      'values': {
        'power': 2222940
      }
    },
    {
      'time': 1536405400512,
      'values': {
        'power': 2224010
      }
    },
    {
      'time': 1536405402515,
      'values': {
        'power': 2224960
      }
    },
    {
      'time': 1536405404516,
      'values': {
        'power': 2224650
      }
    },
    {
      'time': 1536405406518,
      'values': {
        'power': 2219850
      }
    },
    {
      'time': 1536405408521,
      'values': {
        'power': 2211960
      }
    },
    {
      'time': 1536405410523,
      'values': {
        'power': 2209290
      }
    },
    {
      'time': 1536405412525,
      'values': {
        'power': 2207340
      }
    },
    {
      'time': 1536405414527,
      'values': {
        'power': 2206890
      }
    },
    {
      'time': 1536405416529,
      'values': {
        'power': 2207480
      }
    },
    {
      'time': 1536405418531,
      'values': {
        'power': 2207770
      }
    },
    {
      'time': 1536405420533,
      'values': {
        'power': 2209050
      }
    },
    {
      'time': 1536405422534,
      'values': {
        'power': 2210800
      }
    },
    {
      'time': 1536405424536,
      'values': {
        'power': 2211930
      }
    },
    {
      'time': 1536405426538,
      'values': {
        'power': 2211240
      }
    },
    {
      'time': 1536405428541,
      'values': {
        'power': 2209790
      }
    },
    {
      'time': 1536405430545,
      'values': {
        'power': 2208700
      }
    },
    {
      'time': 1536405432543,
      'values': {
        'power': 2208500
      }
    },
    {
      'time': 1536405434546,
      'values': {
        'power': 2209610
      }
    },
    {
      'time': 1536405436548,
      'values': {
        'power': 2211650
      }
    },
    {
      'time': 1536405438550,
      'values': {
        'power': 2212780
      }
    },
    {
      'time': 1536405440552,
      'values': {
        'power': 2215930
      }
    },
    {
      'time': 1536405442554,
      'values': {
        'power': 2222450
      }
    },
    {
      'time': 1536405444556,
      'values': {
        'power': 2224630
      }
    },
    {
      'time': 1536405446558,
      'values': {
        'power': 2223940
      }
    },
    {
      'time': 1536405448559,
      'values': {
        'power': 2224250
      }
    },
    {
      'time': 1536405450561,
      'values': {
        'power': 2224890
      }
    },
    {
      'time': 1536405452564,
      'values': {
        'power': 2225520
      }
    },
    {
      'time': 1536405454566,
      'values': {
        'power': 2226080
      }
    },
    {
      'time': 1536405456568,
      'values': {
        'power': 2225410
      }
    },
    {
      'time': 1536405458572,
      'values': {
        'power': 2223820
      }
    },
    {
      'time': 1536405460571,
      'values': {
        'power': 2223530
      }
    },
    {
      'time': 1536405462574,
      'values': {
        'power': 2223900
      }
    },
    {
      'time': 1536405464576,
      'values': {
        'power': 2225070
      }
    },
    {
      'time': 1536405466577,
      'values': {
        'power': 2226070
      }
    },
    {
      'time': 1536405468580,
      'values': {
        'power': 2226660
      }
    },
    {
      'time': 1536405470581,
      'values': {
        'power': 2226280
      }
    },
    {
      'time': 1536405472583,
      'values': {
        'power': 2224400
      }
    },
    {
      'time': 1536405474585,
      'values': {
        'power': 2223470
      }
    },
    {
      'time': 1536405476587,
      'values': {
        'power': 2222480
      }
    },
    {
      'time': 1536405478589,
      'values': {
        'power': 2216540
      }
    },
    {
      'time': 1536405480591,
      'values': {
        'power': 2211090
      }
    },
    {
      'time': 1536405482593,
      'values': {
        'power': 2210390
      }
    },
    {
      'time': 1536405484595,
      'values': {
        'power': 2209470
      }
    },
    {
      'time': 1536405486596,
      'values': {
        'power': 2209530
      }
    },
    {
      'time': 1536405488598,
      'values': {
        'power': 2209590
      }
    },
    {
      'time': 1536405490601,
      'values': {
        'power': 2209210
      }
    },
    {
      'time': 1536405492603,
      'values': {
        'power': 2209950
      }
    },
    {
      'time': 1536405494605,
      'values': {
        'power': 2211420
      }
    },
    {
      'time': 1536405496607,
      'values': {
        'power': 2212090
      }
    },
    {
      'time': 1536405498612,
      'values': {
        'power': 2211740
      }
    },
    {
      'time': 1536405500610,
      'values': {
        'power': 2211790
      }
    },
    {
      'time': 1536405502612,
      'values': {
        'power': 2214070
      }
    },
    {
      'time': 1536405504615,
      'values': {
        'power': 2213940
      }
    },
    {
      'time': 1536405506617,
      'values': {
        'power': 2211380
      }
    },
    {
      'time': 1536405508619,
      'values': {
        'power': 2210220
      }
    },
    {
      'time': 1536405510621,
      'values': {
        'power': 2210850
      }
    },
    {
      'time': 1536405512623,
      'values': {
        'power': 2216170
      }
    },
    {
      'time': 1536405514624,
      'values': {
        'power': 2223480
      }
    },
    {
      'time': 1536405516626,
      'values': {
        'power': 2226990
      }
    },
    {
      'time': 1536405518628,
      'values': {
        'power': 2227080
      }
    },
    {
      'time': 1536405520630,
      'values': {
        'power': 2227330
      }
    },
    {
      'time': 1536405522632,
      'values': {
        'power': 2228370
      }
    },
    {
      'time': 1536405524634,
      'values': {
        'power': 2228220
      }
    },
    {
      'time': 1536405526635,
      'values': {
        'power': 2227130
      }
    },
    {
      'time': 1536405528638,
      'values': {
        'power': 2226000
      }
    },
    {
      'time': 1536405530640,
      'values': {
        'power': 2223720
      }
    },
    {
      'time': 1536405532642,
      'values': {
        'power': 2222100
      }
    },
    {
      'time': 1536405534643,
      'values': {
        'power': 2222530
      }
    },
    {
      'time': 1536405536646,
      'values': {
        'power': 2222870
      }
    },
    {
      'time': 1536405538648,
      'values': {
        'power': 2223640
      }
    },
    {
      'time': 1536405540649,
      'values': {
        'power': 2225630
      }
    },
    {
      'time': 1536405542651,
      'values': {
        'power': 2227640
      }
    },
    {
      'time': 1536405544654,
      'values': {
        'power': 2229980
      }
    },
    {
      'time': 1536405546656,
      'values': {
        'power': 2228510
      }
    },
    {
      'time': 1536405548658,
      'values': {
        'power': 2226760
      }
    },
    {
      'time': 1536405550661,
      'values': {
        'power': 2344790
      }
    },
    {
      'time': 1536405552661,
      'values': {
        'power': 2403020
      }
    },
    {
      'time': 1536405554664,
      'values': {
        'power': 2301150
      }
    },
    {
      'time': 1536405556666,
      'values': {
        'power': 2257550
      }
    },
    {
      'time': 1536405558668,
      'values': {
        'power': 2257380
      }
    },
    {
      'time': 1536405560669,
      'values': {
        'power': 2257270
      }
    },
    {
      'time': 1536405562672,
      'values': {
        'power': 2256790
      }
    },
    {
      'time': 1536405564673,
      'values': {
        'power': 2256540
      }
    },
    {
      'time': 1536405566675,
      'values': {
        'power': 2255920
      }
    },
    {
      'time': 1536405568677,
      'values': {
        'power': 2255890
      }
    },
    {
      'time': 1536405570679,
      'values': {
        'power': 2256570
      }
    },
    {
      'time': 1536405572681,
      'values': {
        'power': 2256930
      }
    },
    {
      'time': 1536405574683,
      'values': {
        'power': 2257280
      }
    },
    {
      'time': 1536405576685,
      'values': {
        'power': 2258080
      }
    },
    {
      'time': 1536405578686,
      'values': {
        'power': 2257740
      }
    },
    {
      'time': 1536405580689,
      'values': {
        'power': 2255570
      }
    },
    {
      'time': 1536405582691,
      'values': {
        'power': 2254140
      }
    },
    {
      'time': 1536405584693,
      'values': {
        'power': 2253260
      }
    },
    {
      'time': 1536405586695,
      'values': {
        'power': 2256270
      }
    },
    {
      'time': 1536405588697,
      'values': {
        'power': 2264830
      }
    },
    {
      'time': 1536405590699,
      'values': {
        'power': 2270530
      }
    },
    {
      'time': 1536405592701,
      'values': {
        'power': 2270750
      }
    },
    {
      'time': 1536405594705,
      'values': {
        'power': 2270690
      }
    },
    {
      'time': 1536405596705,
      'values': {
        'power': 2270590
      }
    },
    {
      'time': 1536405598707,
      'values': {
        'power': 2270130
      }
    },
    {
      'time': 1536405600709,
      'values': {
        'power': 2269580
      }
    },
    {
      'time': 1536405602710,
      'values': {
        'power': 2266750
      }
    },
    {
      'time': 1536405604712,
      'values': {
        'power': 2264210
      }
    },
    {
      'time': 1536405606714,
      'values': {
        'power': 2264140
      }
    },
    {
      'time': 1536405608717,
      'values': {
        'power': 2266840
      }
    },
    {
      'time': 1536405610718,
      'values': {
        'power': 2268530
      }
    },
    {
      'time': 1536405612721,
      'values': {
        'power': 2268620
      }
    },
    {
      'time': 1536405614722,
      'values': {
        'power': 2269210
      }
    },
    {
      'time': 1536405616724,
      'values': {
        'power': 2269700
      }
    },
    {
      'time': 1536405618726,
      'values': {
        'power': 2269720
      }
    },
    {
      'time': 1536405620728,
      'values': {
        'power': 2269690
      }
    },
    {
      'time': 1536405622730,
      'values': {
        'power': 2269490
      }
    },
    {
      'time': 1536405624731,
      'values': {
        'power': 2263480
      }
    },
    {
      'time': 1536405626734,
      'values': {
        'power': 2253460
      }
    },
    {
      'time': 1536405628735,
      'values': {
        'power': 2251040
      }
    },
    {
      'time': 1536405630738,
      'values': {
        'power': 2251490
      }
    },
    {
      'time': 1536405632741,
      'values': {
        'power': 2252300
      }
    },
    {
      'time': 1536405634741,
      'values': {
        'power': 2252640
      }
    },
    {
      'time': 1536405636744,
      'values': {
        'power': 2252560
      }
    },
    {
      'time': 1536405638746,
      'values': {
        'power': 2252130
      }
    },
    {
      'time': 1536405640748,
      'values': {
        'power': 2251330
      }
    },
    {
      'time': 1536405642750,
      'values': {
        'power': 2249930
      }
    },
    {
      'time': 1536405644752,
      'values': {
        'power': 2249080
      }
    },
    {
      'time': 1536405646754,
      'values': {
        'power': 2249910
      }
    },
    {
      'time': 1536405648756,
      'values': {
        'power': 2251330
      }
    },
    {
      'time': 1536405650757,
      'values': {
        'power': 2251750
      }
    },
    {
      'time': 1536405652760,
      'values': {
        'power': 2252700
      }
    },
    {
      'time': 1536405654761,
      'values': {
        'power': 2253790
      }
    },
    {
      'time': 1536405656763,
      'values': {
        'power': 2253020
      }
    },
    {
      'time': 1536405658765,
      'values': {
        'power': 2254870
      }
    },
    {
      'time': 1536405660767,
      'values': {
        'power': 2261220
      }
    },
    {
      'time': 1536405662769,
      'values': {
        'power': 2264570
      }
    },
    {
      'time': 1536405664771,
      'values': {
        'power': 2264120
      }
    },
    {
      'time': 1536405666772,
      'values': {
        'power': 2264340
      }
    },
    {
      'time': 1536405668774,
      'values': {
        'power': 2265600
      }
    },
    {
      'time': 1536405670777,
      'values': {
        'power': 2266930
      }
    },
    {
      'time': 1536405672779,
      'values': {
        'power': 2267190
      }
    },
    {
      'time': 1536405674781,
      'values': {
        'power': 2266600
      }
    },
    {
      'time': 1536405676783,
      'values': {
        'power': 2265500
      }
    },
    {
      'time': 1536405678786,
      'values': {
        'power': 2264740
      }
    },
    {
      'time': 1536405680786,
      'values': {
        'power': 2264150
      }
    },
    {
      'time': 1536405682788,
      'values': {
        'power': 2263880
      }
    },
    {
      'time': 1536405684791,
      'values': {
        'power': 2264690
      }
    },
    {
      'time': 1536405686793,
      'values': {
        'power': 2266220
      }
    },
    {
      'time': 1536405688795,
      'values': {
        'power': 2267880
      }
    },
    {
      'time': 1536405690797,
      'values': {
        'power': 2268690
      }
    },
    {
      'time': 1536405692799,
      'values': {
        'power': 2268550
      }
    },
    {
      'time': 1536405694801,
      'values': {
        'power': 2268660
      }
    },
    {
      'time': 1536405696803,
      'values': {
        'power': 2266990
      }
    },
    {
      'time': 1536405698805,
      'values': {
        'power': 2258790
      }
    },
    {
      'time': 1536405700806,
      'values': {
        'power': 2250050
      }
    },
    {
      'time': 1536405702810,
      'values': {
        'power': 2248540
      }
    },
    {
      'time': 1536405704811,
      'values': {
        'power': 2248910
      }
    },
    {
      'time': 1536405706812,
      'values': {
        'power': 2249450
      }
    },
    {
      'time': 1536405708814,
      'values': {
        'power': 2250940
      }
    },
    {
      'time': 1536405710816,
      'values': {
        'power': 2251970
      }
    },
    {
      'time': 1536405712818,
      'values': {
        'power': 2251680
      }
    },
    {
      'time': 1536405714820,
      'values': {
        'power': 2250960
      }
    },
    {
      'time': 1536405716822,
      'values': {
        'power': 2249990
      }
    },
    {
      'time': 1536405718824,
      'values': {
        'power': 2249210
      }
    },
    {
      'time': 1536405720827,
      'values': {
        'power': 2249670
      }
    },
    {
      'time': 1536405722828,
      'values': {
        'power': 2250200
      }
    },
    {
      'time': 1536405724830,
      'values': {
        'power': 2251080
      }
    },
    {
      'time': 1536405726832,
      'values': {
        'power': 2252010
      }
    },
    {
      'time': 1536405728836,
      'values': {
        'power': 2251570
      }
    },
    {
      'time': 1536405730835,
      'values': {
        'power': 2250020
      }
    },
    {
      'time': 1536405732838,
      'values': {
        'power': 2251940
      }
    },
    {
      'time': 1536405734839,
      'values': {
        'power': 2260130
      }
    },
    {
      'time': 1536405736841,
      'values': {
        'power': 2264490
      }
    },
    {
      'time': 1536405738844,
      'values': {
        'power': 2265500
      }
    },
    {
      'time': 1536405740846,
      'values': {
        'power': 2266090
      }
    },
    {
      'time': 1536405742848,
      'values': {
        'power': 2266030
      }
    },
    {
      'time': 1536405744850,
      'values': {
        'power': 2265920
      }
    },
    {
      'time': 1536405746852,
      'values': {
        'power': 2266060
      }
    },
    {
      'time': 1536405748854,
      'values': {
        'power': 2265440
      }
    },
    {
      'time': 1536405750856,
      'values': {
        'power': 2264770
      }
    },
    {
      'time': 1536405752857,
      'values': {
        'power': 2266640
      }
    },
    {
      'time': 1536405754859,
      'values': {
        'power': 2278860
      }
    },
    {
      'time': 1536405756861,
      'values': {
        'power': 2290610
      }
    },
    {
      'time': 1536405758863,
      'values': {
        'power': 2292130
      }
    },
    {
      'time': 1536405760864,
      'values': {
        'power': 2292180
      }
    },
    {
      'time': 1536405762867,
      'values': {
        'power': 2291440
      }
    },
    {
      'time': 1536405764869,
      'values': {
        'power': 2290160
      }
    },
    {
      'time': 1536405766872,
      'values': {
        'power': 2289920
      }
    },
    {
      'time': 1536405768873,
      'values': {
        'power': 2288310
      }
    },
    {
      'time': 1536405770875,
      'values': {
        'power': 2270620
      }
    },
    {
      'time': 1536405772877,
      'values': {
        'power': 2251150
      }
    },
    {
      'time': 1536405774879,
      'values': {
        'power': 2248900
      }
    },
    {
      'time': 1536405776881,
      'values': {
        'power': 2250950
      }
    },
    {
      'time': 1536405778883,
      'values': {
        'power': 2252010
      }
    },
    {
      'time': 1536405780885,
      'values': {
        'power': 2253010
      }
    },
    {
      'time': 1536405782887,
      'values': {
        'power': 2252590
      }
    },
    {
      'time': 1536405784889,
      'values': {
        'power': 2251180
      }
    },
    {
      'time': 1536405786890,
      'values': {
        'power': 2249420
      }
    },
    {
      'time': 1536405788892,
      'values': {
        'power': 2248790
      }
    },
    {
      'time': 1536405790895,
      'values': {
        'power': 2250690
      }
    },
    {
      'time': 1536405792897,
      'values': {
        'power': 2252410
      }
    },
    {
      'time': 1536405794899,
      'values': {
        'power': 2252870
      }
    },
    {
      'time': 1536405796901,
      'values': {
        'power': 2252430
      }
    },
    {
      'time': 1536405798902,
      'values': {
        'power': 2252040
      }
    },
    {
      'time': 1536405800904,
      'values': {
        'power': 2251400
      }
    },
    {
      'time': 1536405802906,
      'values': {
        'power': 2250370
      }
    },
    {
      'time': 1536405804908,
      'values': {
        'power': 2252890
      }
    },
    {
      'time': 1536405806911,
      'values': {
        'power': 2260560
      }
    },
    {
      'time': 1536405808911,
      'values': {
        'power': 2266220
      }
    },
    {
      'time': 1536405810914,
      'values': {
        'power': 2266440
      }
    },
    {
      'time': 1536405812917,
      'values': {
        'power': 2265930
      }
    },
    {
      'time': 1536405814917,
      'values': {
        'power': 2265030
      }
    },
    {
      'time': 1536405816920,
      'values': {
        'power': 2263490
      }
    },
    {
      'time': 1536405818922,
      'values': {
        'power': 2263040
      }
    },
    {
      'time': 1536405820924,
      'values': {
        'power': 2263920
      }
    },
    {
      'time': 1536405822926,
      'values': {
        'power': 2265930
      }
    },
    {
      'time': 1536405824928,
      'values': {
        'power': 2267860
      }
    },
    {
      'time': 1536405826930,
      'values': {
        'power': 2267260
      }
    },
    {
      'time': 1536405828932,
      'values': {
        'power': 2266610
      }
    },
    {
      'time': 1536405830935,
      'values': {
        'power': 2266440
      }
    },
    {
      'time': 1536405832939,
      'values': {
        'power': 2317700
      }
    },
    {
      'time': 1536405834937,
      'values': {
        'power': 2449550
      }
    },
    {
      'time': 1536405836939,
      'values': {
        'power': 2420760
      }
    },
    {
      'time': 1536405838942,
      'values': {
        'power': 2317280
      }
    },
    {
      'time': 1536405840943,
      'values': {
        'power': 2303120
      }
    },
    {
      'time': 1536405842945,
      'values': {
        'power': 2284630
      }
    },
    {
      'time': 1536405844948,
      'values': {
        'power': 2272340
      }
    },
    {
      'time': 1536405846949,
      'values': {
        'power': 2264490
      }
    },
    {
      'time': 1536405848951,
      'values': {
        'power': 2264290
      }
    },
    {
      'time': 1536405850953,
      'values': {
        'power': 2265270
      }
    },
    {
      'time': 1536405852955,
      'values': {
        'power': 2264910
      }
    },
    {
      'time': 1536405854957,
      'values': {
        'power': 2264080
      }
    },
    {
      'time': 1536405856959,
      'values': {
        'power': 2262840
      }
    },
    {
      'time': 1536405858961,
      'values': {
        'power': 2262850
      }
    },
    {
      'time': 1536405860962,
      'values': {
        'power': 2264010
      }
    },
    {
      'time': 1536405862965,
      'values': {
        'power': 2265820
      }
    },
    {
      'time': 1536405864968,
      'values': {
        'power': 2266640
      }
    },
    {
      'time': 1536405866972,
      'values': {
        'power': 2265760
      }
    },
    {
      'time': 1536405868970,
      'values': {
        'power': 2265060
      }
    },
    {
      'time': 1536405870972,
      'values': {
        'power': 2264310
      }
    },
    {
      'time': 1536405872975,
      'values': {
        'power': 2264390
      }
    },
    {
      'time': 1536405874977,
      'values': {
        'power': 2266060
      }
    },
    {
      'time': 1536405876979,
      'values': {
        'power': 2267840
      }
    },
    {
      'time': 1536405878981,
      'values': {
        'power': 2270420
      }
    },
    {
      'time': 1536405880983,
      'values': {
        'power': 2275870
      }
    },
    {
      'time': 1536405882985,
      'values': {
        'power': 2279770
      }
    },
    {
      'time': 1536405884986,
      'values': {
        'power': 2279420
      }
    },
    {
      'time': 1536405886988,
      'values': {
        'power': 2279170
      }
    },
    {
      'time': 1536405888991,
      'values': {
        'power': 2280290
      }
    },
    {
      'time': 1536405890993,
      'values': {
        'power': 2281480
      }
    },
    {
      'time': 1536405892994,
      'values': {
        'power': 2282480
      }
    },
    {
      'time': 1536405894996,
      'values': {
        'power': 2282450
      }
    },
    {
      'time': 1536405896998,
      'values': {
        'power': 2280060
      }
    },
    {
      'time': 1536405899000,
      'values': {
        'power': 2278910
      }
    },
    {
      'time': 1536405901003,
      'values': {
        'power': 2280410
      }
    },
    {
      'time': 1536405903003,
      'values': {
        'power': 2282540
      }
    },
    {
      'time': 1536405905006,
      'values': {
        'power': 2283740
      }
    },
    {
      'time': 1536405907008,
      'values': {
        'power': 2283270
      }
    },
    {
      'time': 1536405909010,
      'values': {
        'power': 2282070
      }
    },
    {
      'time': 1536405911011,
      'values': {
        'power': 2280290
      }
    },
    {
      'time': 1536405913013,
      'values': {
        'power': 2279100
      }
    },
    {
      'time': 1536405915016,
      'values': {
        'power': 2280140
      }
    },
    {
      'time': 1536405917018,
      'values': {
        'power': 2276360
      }
    },
    {
      'time': 1536405919020,
      'values': {
        'power': 2269480
      }
    },
    {
      'time': 1536405921022,
      'values': {
        'power': 2267320
      }
    },
    {
      'time': 1536405923023,
      'values': {
        'power': 2265990
      }
    },
    {
      'time': 1536405925025,
      'values': {
        'power': 2264120
      }
    },
    {
      'time': 1536405927028,
      'values': {
        'power': 2263790
      }
    },
    {
      'time': 1536405929030,
      'values': {
        'power': 2265090
      }
    },
    {
      'time': 1536405931032,
      'values': {
        'power': 2265920
      }
    },
    {
      'time': 1536405933113,
      'values': {
        'power': 2266620
      }
    },
    {
      'time': 1536405935036,
      'values': {
        'power': 2267770
      }
    },
    {
      'time': 1536405937037,
      'values': {
        'power': 2267460
      }
    },
    {
      'time': 1536405939039,
      'values': {
        'power': 2265620
      }
    },
    {
      'time': 1536405941042,
      'values': {
        'power': 2264760
      }
    },
    {
      'time': 1536405943043,
      'values': {
        'power': 2263690
      }
    },
    {
      'time': 1536405945045,
      'values': {
        'power': 2263240
      }
    },
    {
      'time': 1536405947047,
      'values': {
        'power': 2263730
      }
    },
    {
      'time': 1536405949051,
      'values': {
        'power': 2265480
      }
    },
    {
      'time': 1536405951051,
      'values': {
        'power': 2267140
      }
    },
    {
      'time': 1536405953053,
      'values': {
        'power': 2270280
      }
    },
    {
      'time': 1536405955055,
      'values': {
        'power': 2277440
      }
    },
    {
      'time': 1536405957057,
      'values': {
        'power': 2281350
      }
    },
    {
      'time': 1536405959059,
      'values': {
        'power': 2279860
      }
    },
    {
      'time': 1536405961060,
      'values': {
        'power': 2279190
      }
    },
    {
      'time': 1536405963062,
      'values': {
        'power': 2278700
      }
    },
    {
      'time': 1536405965065,
      'values': {
        'power': 2278560
      }
    },
    {
      'time': 1536405967067,
      'values': {
        'power': 2280100
      }
    },
    {
      'time': 1536405969068,
      'values': {
        'power': 2281670
      }
    },
    {
      'time': 1536405971070,
      'values': {
        'power': 2280740
      }
    },
    {
      'time': 1536405973073,
      'values': {
        'power': 2278910
      }
    },
    {
      'time': 1536405975075,
      'values': {
        'power': 2279760
      }
    },
    {
      'time': 1536405977076,
      'values': {
        'power': 2280660
      }
    },
    {
      'time': 1536405979078,
      'values': {
        'power': 2281040
      }
    },
    {
      'time': 1536405981081,
      'values': {
        'power': 2280880
      }
    },
    {
      'time': 1536405983083,
      'values': {
        'power': 2280990
      }
    },
    {
      'time': 1536405985085,
      'values': {
        'power': 2280950
      }
    },
    {
      'time': 1536405987086,
      'values': {
        'power': 2279450
      }
    },
    {
      'time': 1536405989088,
      'values': {
        'power': 2278910
      }
    },
    {
      'time': 1536405991090,
      'values': {
        'power': 2278860
      }
    },
    {
      'time': 1536405993092,
      'values': {
        'power': 2273520
      }
    },
    {
      'time': 1536405995094,
      'values': {
        'power': 2266770
      }
    },
    {
      'time': 1536405997096,
      'values': {
        'power': 2264790
      }
    },
    {
      'time': 1536405999098,
      'values': {
        'power': 2264910
      }
    },
    {
      'time': 1536406001101,
      'values': {
        'power': 2266060
      }
    },
    {
      'time': 1536406003102,
      'values': {
        'power': 2267010
      }
    },
    {
      'time': 1536406005103,
      'values': {
        'power': 2266900
      }
    },
    {
      'time': 1536406007105,
      'values': {
        'power': 2267460
      }
    },
    {
      'time': 1536406009108,
      'values': {
        'power': 2268050
      }
    },
    {
      'time': 1536406011110,
      'values': {
        'power': 2267720
      }
    },
    {
      'time': 1536406013111,
      'values': {
        'power': 2266640
      }
    },
    {
      'time': 1536406015113,
      'values': {
        'power': 2266440
      }
    },
    {
      'time': 1536406017116,
      'values': {
        'power': 2266240
      }
    },
    {
      'time': 1536406019118,
      'values': {
        'power': 2265490
      }
    },
    {
      'time': 1536406021120,
      'values': {
        'power': 2265980
      }
    },
    {
      'time': 1536406023122,
      'values': {
        'power': 2265720
      }
    },
    {
      'time': 1536406025124,
      'values': {
        'power': 2264740
      }
    },
    {
      'time': 1536406027126,
      'values': {
        'power': 2267870
      }
    },
    {
      'time': 1536406029128,
      'values': {
        'power': 2276420
      }
    },
    {
      'time': 1536406031129,
      'values': {
        'power': 2281980
      }
    },
    {
      'time': 1536406033132,
      'values': {
        'power': 2282660
      }
    },
    {
      'time': 1536406035133,
      'values': {
        'power': 2283080
      }
    },
    {
      'time': 1536406037135,
      'values': {
        'power': 2284010
      }
    },
    {
      'time': 1536406039137,
      'values': {
        'power': 2284500
      }
    },
    {
      'time': 1536406041139,
      'values': {
        'power': 2284350
      }
    },
    {
      'time': 1536406043141,
      'values': {
        'power': 2282890
      }
    },
    {
      'time': 1536406045143,
      'values': {
        'power': 2280920
      }
    },
    {
      'time': 1536406047145,
      'values': {
        'power': 2281380
      }
    },
    {
      'time': 1536406049147,
      'values': {
        'power': 2281870
      }
    },
    {
      'time': 1536406051149,
      'values': {
        'power': 2281130
      }
    },
    {
      'time': 1536406053151,
      'values': {
        'power': 2282030
      }
    },
    {
      'time': 1536406055153,
      'values': {
        'power': 2284440
      }
    },
    {
      'time': 1536406057155,
      'values': {
        'power': 2285220
      }
    },
    {
      'time': 1536406059156,
      'values': {
        'power': 2284400
      }
    },
    {
      'time': 1536406061158,
      'values': {
        'power': 2282820
      }
    },
    {
      'time': 1536406063161,
      'values': {
        'power': 2281780
      }
    },
    {
      'time': 1536406065162,
      'values': {
        'power': 2281940
      }
    },
    {
      'time': 1536406067165,
      'values': {
        'power': 2277270
      }
    },
    {
      'time': 1536406069168,
      'values': {
        'power': 2269410
      }
    },
    {
      'time': 1536406071168,
      'values': {
        'power': 2266020
      }
    },
    {
      'time': 1536406073171,
      'values': {
        'power': 2266440
      }
    },
    {
      'time': 1536406075173,
      'values': {
        'power': 2267730
      }
    },
    {
      'time': 1536406077175,
      'values': {
        'power': 2269050
      }
    },
    {
      'time': 1536406079177,
      'values': {
        'power': 2269950
      }
    },
    {
      'time': 1536406081178,
      'values': {
        'power': 2270200
      }
    },
    {
      'time': 1536406083180,
      'values': {
        'power': 2269490
      }
    },
    {
      'time': 1536406085183,
      'values': {
        'power': 2268020
      }
    },
    {
      'time': 1536406087184,
      'values': {
        'power': 2266860
      }
    },
    {
      'time': 1536406089186,
      'values': {
        'power': 2266390
      }
    },
    {
      'time': 1536406091187,
      'values': {
        'power': 2266620
      }
    },
    {
      'time': 1536406093189,
      'values': {
        'power': 2267830
      }
    },
    {
      'time': 1536406095192,
      'values': {
        'power': 2268980
      }
    },
    {
      'time': 1536406097194,
      'values': {
        'power': 2268700
      }
    },
    {
      'time': 1536406099196,
      'values': {
        'power': 2267710
      }
    },
    {
      'time': 1536406101198,
      'values': {
        'power': 2267260
      }
    },
    {
      'time': 1536406103199,
      'values': {
        'power': 2271690
      }
    },
    {
      'time': 1536406105201,
      'values': {
        'power': 2278330
      }
    },
    {
      'time': 1536406107204,
      'values': {
        'power': 2282140
      }
    },
    {
      'time': 1536406109206,
      'values': {
        'power': 2283590
      }
    },
    {
      'time': 1536406111208,
      'values': {
        'power': 2283190
      }
    },
    {
      'time': 1536406113210,
      'values': {
        'power': 2283000
      }
    },
    {
      'time': 1536406115211,
      'values': {
        'power': 2283160
      }
    },
    {
      'time': 1536406117213,
      'values': {
        'power': 2283530
      }
    },
    {
      'time': 1536406119216,
      'values': {
        'power': 2284440
      }
    },
    {
      'time': 1536406121218,
      'values': {
        'power': 2284940
      }
    },
    {
      'time': 1536406123220,
      'values': {
        'power': 2284200
      }
    },
    {
      'time': 1536406125222,
      'values': {
        'power': 2282550
      }
    },
    {
      'time': 1536406127224,
      'values': {
        'power': 2281680
      }
    },
    {
      'time': 1536406129225,
      'values': {
        'power': 2281700
      }
    },
    {
      'time': 1536406131227,
      'values': {
        'power': 2281180
      }
    },
    {
      'time': 1536406133229,
      'values': {
        'power': 2281590
      }
    },
    {
      'time': 1536406135231,
      'values': {
        'power': 2283500
      }
    },
    {
      'time': 1536406137233,
      'values': {
        'power': 2284310
      }
    },
    {
      'time': 1536406139237,
      'values': {
        'power': 2285040
      }
    },
    {
      'time': 1536406141237,
      'values': {
        'power': 2285290
      }
    },
    {
      'time': 1536406143238,
      'values': {
        'power': 2277290
      }
    },
    {
      'time': 1536406145241,
      'values': {
        'power': 2270140
      }
    },
    {
      'time': 1536406147243,
      'values': {
        'power': 2268490
      }
    },
    {
      'time': 1536406149245,
      'values': {
        'power': 2267850
      }
    },
    {
      'time': 1536406151247,
      'values': {
        'power': 2266580
      }
    },
    {
      'time': 1536406153249,
      'values': {
        'power': 2265730
      }
    },
    {
      'time': 1536406155251,
      'values': {
        'power': 2268100
      }
    },
    {
      'time': 1536406157253,
      'values': {
        'power': 2270730
      }
    },
    {
      'time': 1536406159254,
      'values': {
        'power': 2271020
      }
    },
    {
      'time': 1536406161256,
      'values': {
        'power': 2271680
      }
    },
    {
      'time': 1536406163259,
      'values': {
        'power': 2273110
      }
    },
    {
      'time': 1536406165263,
      'values': {
        'power': 2272060
      }
    },
    {
      'time': 1536406167263,
      'values': {
        'power': 2269960
      }
    },
    {
      'time': 1536406169265,
      'values': {
        'power': 2268710
      }
    },
    {
      'time': 1536406171267,
      'values': {
        'power': 2267440
      }
    },
    {
      'time': 1536406173268,
      'values': {
        'power': 2266360
      }
    },
    {
      'time': 1536406175271,
      'values': {
        'power': 2268240
      }
    },
    {
      'time': 1536406177272,
      'values': {
        'power': 2275920
      }
    },
    {
      'time': 1536406179274,
      'values': {
        'power': 2282910
      }
    },
    {
      'time': 1536406181276,
      'values': {
        'power': 2284470
      }
    },
    {
      'time': 1536406183278,
      'values': {
        'power': 2285840
      }
    },
    {
      'time': 1536406185280,
      'values': {
        'power': 2285980
      }
    },
    {
      'time': 1536406187282,
      'values': {
        'power': 2285610
      }
    },
    {
      'time': 1536406189284,
      'values': {
        'power': 2285890
      }
    },
    {
      'time': 1536406191286,
      'values': {
        'power': 2284810
      }
    },
    {
      'time': 1536406193288,
      'values': {
        'power': 2283480
      }
    },
    {
      'time': 1536406195289,
      'values': {
        'power': 2283800
      }
    },
    {
      'time': 1536406197291,
      'values': {
        'power': 2284420
      }
    },
    {
      'time': 1536406199294,
      'values': {
        'power': 2286110
      }
    },
    {
      'time': 1536406201296,
      'values': {
        'power': 2288250
      }
    },
    {
      'time': 1536406203297,
      'values': {
        'power': 2287030
      }
    },
    {
      'time': 1536406205299,
      'values': {
        'power': 2284700
      }
    },
    {
      'time': 1536406207301,
      'values': {
        'power': 2284130
      }
    },
    {
      'time': 1536406209304,
      'values': {
        'power': 2284750
      }
    },
    {
      'time': 1536406211306,
      'values': {
        'power': 2283850
      }
    },
    {
      'time': 1536406213308,
      'values': {
        'power': 2282460
      }
    },
    {
      'time': 1536406215310,
      'values': {
        'power': 2278760
      }
    },
    {
      'time': 1536406217312,
      'values': {
        'power': 2275300
      }
    },
    {
      'time': 1536406219314,
      'values': {
        'power': 2273190
      }
    },
    {
      'time': 1536406221317,
      'values': {
        'power': 2271690
      }
    },
    {
      'time': 1536406223317,
      'values': {
        'power': 2271120
      }
    },
    {
      'time': 1536406225319,
      'values': {
        'power': 2269890
      }
    },
    {
      'time': 1536406227321,
      'values': {
        'power': 2269480
      }
    },
    {
      'time': 1536406229323,
      'values': {
        'power': 2272970
      }
    },
    {
      'time': 1536406231325,
      'values': {
        'power': 2277640
      }
    },
    {
      'time': 1536406233327,
      'values': {
        'power': 2280000
      }
    },
    {
      'time': 1536406235329,
      'values': {
        'power': 2281860
      }
    },
    {
      'time': 1536406237331,
      'values': {
        'power': 2282350
      }
    },
    {
      'time': 1536406239332,
      'values': {
        'power': 2283090
      }
    },
    {
      'time': 1536406241335,
      'values': {
        'power': 2283910
      }
    },
    {
      'time': 1536406243338,
      'values': {
        'power': 2283720
      }
    },
    {
      'time': 1536406245338,
      'values': {
        'power': 2282930
      }
    },
    {
      'time': 1536406247341,
      'values': {
        'power': 2281590
      }
    },
    {
      'time': 1536406249343,
      'values': {
        'power': 2280980
      }
    },
    {
      'time': 1536406251344,
      'values': {
        'power': 2280620
      }
    },
    {
      'time': 1536406253347,
      'values': {
        'power': 2281590
      }
    },
    {
      'time': 1536406255349,
      'values': {
        'power': 2268370
      }
    },
    {
      'time': 1536406257351,
      'values': {
        'power': 2244610
      }
    },
    {
      'time': 1536406259353,
      'values': {
        'power': 2236050
      }
    },
    {
      'time': 1536406261355,
      'values': {
        'power': 2236290
      }
    },
    {
      'time': 1536406263357,
      'values': {
        'power': 2235670
      }
    },
    {
      'time': 1536406265359,
      'values': {
        'power': 2235770
      }
    },
    {
      'time': 1536406267362,
      'values': {
        'power': 2236250
      }
    },
    {
      'time': 1536406269362,
      'values': {
        'power': 2237320
      }
    },
    {
      'time': 1536406271364,
      'values': {
        'power': 2239410
      }
    },
    {
      'time': 1536406273366,
      'values': {
        'power': 2240580
      }
    },
    {
      'time': 1536406275369,
      'values': {
        'power': 2239590
      }
    },
    {
      'time': 1536406277369,
      'values': {
        'power': 2238070
      }
    },
    {
      'time': 1536406279371,
      'values': {
        'power': 2237060
      }
    },
    {
      'time': 1536406281374,
      'values': {
        'power': 2236710
      }
    },
    {
      'time': 1536406283376,
      'values': {
        'power': 2236310
      }
    },
    {
      'time': 1536406285378,
      'values': {
        'power': 2235770
      }
    },
    {
      'time': 1536406287380,
      'values': {
        'power': 2235110
      }
    },
    {
      'time': 1536406289382,
      'values': {
        'power': 2236150
      }
    },
    {
      'time': 1536406291384,
      'values': {
        'power': 2238440
      }
    },
    {
      'time': 1536406293386,
      'values': {
        'power': 2239170
      }
    },
    {
      'time': 1536406295387,
      'values': {
        'power': 2238930
      }
    },
    {
      'time': 1536406297389,
      'values': {
        'power': 2238490
      }
    },
    {
      'time': 1536406299392,
      'values': {
        'power': 2237940
      }
    },
    {
      'time': 1536406301396,
      'values': {
        'power': 2237500
      }
    },
    {
      'time': 1536406303396,
      'values': {
        'power': 2236900
      }
    },
    {
      'time': 1536406305397,
      'values': {
        'power': 2236650
      }
    },
    {
      'time': 1536406307399,
      'values': {
        'power': 2236450
      }
    },
    {
      'time': 1536406309402,
      'values': {
        'power': 2237110
      }
    },
    {
      'time': 1536406311404,
      'values': {
        'power': 2236810
      }
    },
    {
      'time': 1536406313405,
      'values': {
        'power': 2235820
      }
    },
    {
      'time': 1536406315407,
      'values': {
        'power': 2237050
      }
    },
    {
      'time': 1536406317409,
      'values': {
        'power': 2238690
      }
    },
    {
      'time': 1536406319411,
      'values': {
        'power': 2239100
      }
    },
    {
      'time': 1536406321413,
      'values': {
        'power': 2238690
      }
    },
    {
      'time': 1536406323415,
      'values': {
        'power': 2237560
      }
    },
    {
      'time': 1536406325417,
      'values': {
        'power': 2239410
      }
    },
    {
      'time': 1536406327419,
      'values': {
        'power': 2240310
      }
    },
    {
      'time': 1536406329421,
      'values': {
        'power': 2238160
      }
    },
    {
      'time': 1536406331422,
      'values': {
        'power': 2237350
      }
    },
    {
      'time': 1536406333424,
      'values': {
        'power': 2238070
      }
    },
    {
      'time': 1536406335427,
      'values': {
        'power': 2240030
      }
    },
    {
      'time': 1536406337430,
      'values': {
        'power': 2242530
      }
    },
    {
      'time': 1536406339430,
      'values': {
        'power': 2244550
      }
    },
    {
      'time': 1536406341433,
      'values': {
        'power': 2245270
      }
    },
    {
      'time': 1536406343435,
      'values': {
        'power': 2244130
      }
    },
    {
      'time': 1536406345437,
      'values': {
        'power': 2242430
      }
    },
    {
      'time': 1536406347438,
      'values': {
        'power': 2241540
      }
    },
    {
      'time': 1536406349440,
      'values': {
        'power': 2240510
      }
    },
    {
      'time': 1536406351443,
      'values': {
        'power': 2239120
      }
    },
    {
      'time': 1536406353445,
      'values': {
        'power': 2238990
      }
    },
    {
      'time': 1536406355447,
      'values': {
        'power': 2240110
      }
    },
    {
      'time': 1536406357449,
      'values': {
        'power': 2241220
      }
    },
    {
      'time': 1536406359450,
      'values': {
        'power': 2242070
      }
    },
    {
      'time': 1536406361452,
      'values': {
        'power': 2242900
      }
    },
    {
      'time': 1536406363454,
      'values': {
        'power': 2242540
      }
    },
    {
      'time': 1536406365456,
      'values': {
        'power': 2241100
      }
    },
    {
      'time': 1536406367458,
      'values': {
        'power': 2239750
      }
    },
    {
      'time': 1536406369461,
      'values': {
        'power': 2238990
      }
    },
    {
      'time': 1536406371463,
      'values': {
        'power': 2238960
      }
    },
    {
      'time': 1536406373464,
      'values': {
        'power': 2238830
      }
    },
    {
      'time': 1536406375466,
      'values': {
        'power': 2239790
      }
    },
    {
      'time': 1536406377468,
      'values': {
        'power': 2241590
      }
    },
    {
      'time': 1536406379470,
      'values': {
        'power': 2242990
      }
    },
    {
      'time': 1536406381472,
      'values': {
        'power': 2243920
      }
    },
    {
      'time': 1536406383474,
      'values': {
        'power': 2244050
      }
    },
    {
      'time': 1536406385475,
      'values': {
        'power': 2241950
      }
    },
    {
      'time': 1536406387477,
      'values': {
        'power': 2239310
      }
    },
    {
      'time': 1536406389480,
      'values': {
        'power': 2238560
      }
    },
    {
      'time': 1536406391482,
      'values': {
        'power': 2238340
      }
    },
    {
      'time': 1536406393484,
      'values': {
        'power': 2238040
      }
    },
    {
      'time': 1536406395486,
      'values': {
        'power': 2238550
      }
    },
    {
      'time': 1536406397487,
      'values': {
        'power': 2239790
      }
    },
    {
      'time': 1536406399489,
      'values': {
        'power': 2240190
      }
    },
    {
      'time': 1536406401492,
      'values': {
        'power': 2240760
      }
    },
    {
      'time': 1536406403494,
      'values': {
        'power': 2242290
      }
    },
    {
      'time': 1536406405495,
      'values': {
        'power': 2243900
      }
    },
    {
      'time': 1536406407497,
      'values': {
        'power': 2245120
      }
    },
    {
      'time': 1536406409500,
      'values': {
        'power': 2245950
      }
    },
    {
      'time': 1536406411501,
      'values': {
        'power': 2247980
      }
    },
    {
      'time': 1536406413503,
      'values': {
        'power': 2247740
      }
    },
    {
      'time': 1536406415505,
      'values': {
        'power': 2245800
      }
    },
    {
      'time': 1536406417507,
      'values': {
        'power': 2245170
      }
    },
    {
      'time': 1536406419509,
      'values': {
        'power': 2244320
      }
    },
    {
      'time': 1536406421511,
      'values': {
        'power': 2244430
      }
    },
    {
      'time': 1536406423512,
      'values': {
        'power': 2245370
      }
    },
    {
      'time': 1536406425514,
      'values': {
        'power': 2244990
      }
    },
    {
      'time': 1536406427517,
      'values': {
        'power': 2244340
      }
    },
    {
      'time': 1536406429519,
      'values': {
        'power': 2243600
      }
    },
    {
      'time': 1536406431521,
      'values': {
        'power': 2242770
      }
    },
    {
      'time': 1536406433523,
      'values': {
        'power': 2242680
      }
    },
    {
      'time': 1536406435525,
      'values': {
        'power': 2242360
      }
    },
    {
      'time': 1536406437528,
      'values': {
        'power': 2241970
      }
    },
    {
      'time': 1536406439528,
      'values': {
        'power': 2241770
      }
    },
    {
      'time': 1536406441530,
      'values': {
        'power': 2242690
      }
    },
    {
      'time': 1536406443533,
      'values': {
        'power': 2244020
      }
    },
    {
      'time': 1536406445535,
      'values': {
        'power': 2243920
      }
    },
    {
      'time': 1536406447537,
      'values': {
        'power': 2243440
      }
    },
    {
      'time': 1536406449538,
      'values': {
        'power': 2245220
      }
    },
    {
      'time': 1536406451540,
      'values': {
        'power': 2247030
      }
    },
    {
      'time': 1536406453543,
      'values': {
        'power': 2246720
      }
    },
    {
      'time': 1536406455545,
      'values': {
        'power': 2246910
      }
    },
    {
      'time': 1536406457546,
      'values': {
        'power': 2246780
      }
    },
    {
      'time': 1536406459548,
      'values': {
        'power': 2246650
      }
    },
    {
      'time': 1536406461550,
      'values': {
        'power': 2246790
      }
    },
    {
      'time': 1536406463552,
      'values': {
        'power': 2245980
      }
    },
    {
      'time': 1536406465554,
      'values': {
        'power': 2245230
      }
    },
    {
      'time': 1536406467555,
      'values': {
        'power': 2245500
      }
    },
    {
      'time': 1536406469558,
      'values': {
        'power': 2245510
      }
    },
    {
      'time': 1536406471561,
      'values': {
        'power': 2244740
      }
    },
    {
      'time': 1536406473562,
      'values': {
        'power': 2243320
      }
    },
    {
      'time': 1536406475563,
      'values': {
        'power': 2242660
      }
    },
    {
      'time': 1536406477565,
      'values': {
        'power': 2243240
      }
    },
    {
      'time': 1536406479568,
      'values': {
        'power': 2242800
      }
    },
    {
      'time': 1536406481570,
      'values': {
        'power': 2242190
      }
    },
    {
      'time': 1536406483572,
      'values': {
        'power': 2241740
      }
    },
    {
      'time': 1536406485574,
      'values': {
        'power': 2241930
      }
    },
    {
      'time': 1536406487576,
      'values': {
        'power': 2242670
      }
    },
    {
      'time': 1536406489578,
      'values': {
        'power': 2242980
      }
    },
    {
      'time': 1536406491581,
      'values': {
        'power': 2243790
      }
    },
    {
      'time': 1536406493582,
      'values': {
        'power': 2244830
      }
    },
    {
      'time': 1536406495583,
      'values': {
        'power': 2245410
      }
    },
    {
      'time': 1536406497586,
      'values': {
        'power': 2245390
      }
    },
    {
      'time': 1536406499588,
      'values': {
        'power': 2244650
      }
    },
    {
      'time': 1536406501589,
      'values': {
        'power': 2244420
      }
    },
    {
      'time': 1536406503592,
      'values': {
        'power': 2246210
      }
    },
    {
      'time': 1536406505593,
      'values': {
        'power': 2246480
      }
    },
    {
      'time': 1536406507595,
      'values': {
        'power': 2244900
      }
    },
    {
      'time': 1536406509597,
      'values': {
        'power': 2244490
      }
    },
    {
      'time': 1536406511599,
      'values': {
        'power': 2243170
      }
    },
    {
      'time': 1536406513601,
      'values': {
        'power': 2242670
      }
    },
    {
      'time': 1536406515603,
      'values': {
        'power': 2243410
      }
    },
    {
      'time': 1536406517605,
      'values': {
        'power': 2242810
      }
    },
    {
      'time': 1536406519607,
      'values': {
        'power': 2242040
      }
    },
    {
      'time': 1536406521608,
      'values': {
        'power': 2242090
      }
    },
    {
      'time': 1536406523612,
      'values': {
        'power': 2242050
      }
    },
    {
      'time': 1536406525614,
      'values': {
        'power': 2241460
      }
    },
    {
      'time': 1536406527614,
      'values': {
        'power': 2241540
      }
    },
    {
      'time': 1536406529617,
      'values': {
        'power': 2242330
      }
    },
    {
      'time': 1536406531619,
      'values': {
        'power': 2242700
      }
    },
    {
      'time': 1536406533621,
      'values': {
        'power': 2242060
      }
    },
    {
      'time': 1536406535623,
      'values': {
        'power': 2241340
      }
    },
    {
      'time': 1536406537625,
      'values': {
        'power': 2241190
      }
    },
    {
      'time': 1536406539627,
      'values': {
        'power': 2241540
      }
    },
    {
      'time': 1536406541628,
      'values': {
        'power': 2242740
      }
    },
    {
      'time': 1536406543631,
      'values': {
        'power': 2244640
      }
    },
    {
      'time': 1536406545633,
      'values': {
        'power': 2245240
      }
    },
    {
      'time': 1536406547635,
      'values': {
        'power': 2245770
      }
    },
    {
      'time': 1536406549637,
      'values': {
        'power': 2246300
      }
    },
    {
      'time': 1536406551638,
      'values': {
        'power': 2245740
      }
    },
    {
      'time': 1536406553640,
      'values': {
        'power': 2245290
      }
    },
    {
      'time': 1536406555642,
      'values': {
        'power': 2244680
      }
    },
    {
      'time': 1536406557644,
      'values': {
        'power': 2243640
      }
    },
    {
      'time': 1536406559646,
      'values': {
        'power': 2242950
      }
    },
    {
      'time': 1536406561648,
      'values': {
        'power': 2242770
      }
    },
    {
      'time': 1536406563650,
      'values': {
        'power': 2241770
      }
    },
    {
      'time': 1536406565652,
      'values': {
        'power': 2240790
      }
    },
    {
      'time': 1536406567654,
      'values': {
        'power': 2241070
      }
    },
    {
      'time': 1536406569656,
      'values': {
        'power': 2242080
      }
    },
    {
      'time': 1536406571659,
      'values': {
        'power': 2242970
      }
    },
    {
      'time': 1536406573660,
      'values': {
        'power': 2243650
      }
    },
    {
      'time': 1536406575662,
      'values': {
        'power': 2245760
      }
    },
    {
      'time': 1536406577663,
      'values': {
        'power': 2247280
      }
    },
    {
      'time': 1536406579665,
      'values': {
        'power': 2247550
      }
    },
    {
      'time': 1536406581668,
      'values': {
        'power': 2247810
      }
    },
    {
      'time': 1536406583670,
      'values': {
        'power': 2246990
      }
    },
    {
      'time': 1536406585672,
      'values': {
        'power': 2245310
      }
    },
    {
      'time': 1536406587674,
      'values': {
        'power': 2244830
      }
    },
    {
      'time': 1536406589676,
      'values': {
        'power': 2244910
      }
    },
    {
      'time': 1536406591678,
      'values': {
        'power': 2244110
      }
    },
    {
      'time': 1536406593680,
      'values': {
        'power': 2243130
      }
    },
    {
      'time': 1536406595682,
      'values': {
        'power': 2242800
      }
    },
    {
      'time': 1536406597684,
      'values': {
        'power': 2242290
      }
    },
    {
      'time': 1536406599686,
      'values': {
        'power': 2242190
      }
    },
    {
      'time': 1536406601688,
      'values': {
        'power': 2242570
      }
    },
    {
      'time': 1536406603690,
      'values': {
        'power': 2242880
      }
    },
    {
      'time': 1536406605691,
      'values': {
        'power': 2242850
      }
    },
    {
      'time': 1536406607692,
      'values': {
        'power': 2242640
      }
    },
    {
      'time': 1536406609695,
      'values': {
        'power': 2242860
      }
    },
    {
      'time': 1536406611697,
      'values': {
        'power': 2242900
      }
    },
    {
      'time': 1536406613699,
      'values': {
        'power': 2243050
      }
    },
    {
      'time': 1536406615701,
      'values': {
        'power': 2244080
      }
    },
    {
      'time': 1536406617703,
      'values': {
        'power': 2244820
      }
    },
    {
      'time': 1536406619705,
      'values': {
        'power': 2245510
      }
    },
    {
      'time': 1536406621707,
      'values': {
        'power': 2246930
      }
    },
    {
      'time': 1536406623709,
      'values': {
        'power': 2247990
      }
    },
    {
      'time': 1536406625711,
      'values': {
        'power': 2248760
      }
    },
    {
      'time': 1536406627715,
      'values': {
        'power': 2249380
      }
    },
    {
      'time': 1536406629716,
      'values': {
        'power': 2249610
      }
    },
    {
      'time': 1536406631716,
      'values': {
        'power': 2249150
      }
    },
    {
      'time': 1536406633719,
      'values': {
        'power': 2249030
      }
    },
    {
      'time': 1536406635721,
      'values': {
        'power': 2249600
      }
    },
    {
      'time': 1536406637723,
      'values': {
        'power': 2249320
      }
    },
    {
      'time': 1536406639726,
      'values': {
        'power': 2249440
      }
    },
    {
      'time': 1536406641726,
      'values': {
        'power': 2250000
      }
    },
    {
      'time': 1536406643729,
      'values': {
        'power': 2250360
      }
    },
    {
      'time': 1536406645730,
      'values': {
        'power': 2249810
      }
    },
    {
      'time': 1536406647732,
      'values': {
        'power': 2250130
      }
    },
    {
      'time': 1536406649734,
      'values': {
        'power': 2251730
      }
    },
    {
      'time': 1536406651737,
      'values': {
        'power': 2251740
      }
    },
    {
      'time': 1536406653739,
      'values': {
        'power': 2250890
      }
    },
    {
      'time': 1536406655740,
      'values': {
        'power': 2320810
      }
    },
    {
      'time': 1536406657742,
      'values': {
        'power': 2478270
      }
    },
    {
      'time': 1536406659743,
      'values': {
        'power': 2430830
      }
    },
    {
      'time': 1536406661746,
      'values': {
        'power': 2305720
      }
    },
    {
      'time': 1536406663748,
      'values': {
        'power': 2305080
      }
    },
    {
      'time': 1536406665750,
      'values': {
        'power': 2307560
      }
    },
    {
      'time': 1536406667752,
      'values': {
        'power': 2307710
      }
    },
    {
      'time': 1536406669754,
      'values': {
        'power': 2305560
      }
    },
    {
      'time': 1536406671756,
      'values': {
        'power': 2304970
      }
    },
    {
      'time': 1536406673757,
      'values': {
        'power': 2304530
      }
    },
    {
      'time': 1536406675759,
      'values': {
        'power': 2304210
      }
    },
    {
      'time': 1536406677762,
      'values': {
        'power': 2304330
      }
    },
    {
      'time': 1536406679763,
      'values': {
        'power': 2303980
      }
    },
    {
      'time': 1536406681766,
      'values': {
        'power': 2302650
      }
    },
    {
      'time': 1536406683768,
      'values': {
        'power': 2300220
      }
    },
    {
      'time': 1536406685769,
      'values': {
        'power': 2297650
      }
    },
    {
      'time': 1536406687771,
      'values': {
        'power': 2295580
      }
    },
    {
      'time': 1536406689773,
      'values': {
        'power': 2294830
      }
    },
    {
      'time': 1536406691775,
      'values': {
        'power': 2294230
      }
    },
    {
      'time': 1536406693777,
      'values': {
        'power': 2293850
      }
    },
    {
      'time': 1536406695779,
      'values': {
        'power': 2294110
      }
    },
    {
      'time': 1536406697781,
      'values': {
        'power': 2294940
      }
    },
    {
      'time': 1536406699783,
      'values': {
        'power': 2295230
      }
    },
    {
      'time': 1536406701785,
      'values': {
        'power': 2296360
      }
    },
    {
      'time': 1536406703788,
      'values': {
        'power': 2297770
      }
    },
    {
      'time': 1536406705789,
      'values': {
        'power': 2299620
      }
    },
    {
      'time': 1536406707790,
      'values': {
        'power': 2301000
      }
    },
    {
      'time': 1536406709793,
      'values': {
        'power': 2301000
      }
    },
    {
      'time': 1536406711794,
      'values': {
        'power': 2300240
      }
    },
    {
      'time': 1536406713797,
      'values': {
        'power': 2300330
      }
    },
    {
      'time': 1536406715799,
      'values': {
        'power': 2299440
      }
    },
    {
      'time': 1536406717801,
      'values': {
        'power': 2296750
      }
    },
    {
      'time': 1536406719803,
      'values': {
        'power': 2295850
      }
    },
    {
      'time': 1536406721805,
      'values': {
        'power': 2295560
      }
    },
    {
      'time': 1536406723807,
      'values': {
        'power': 2295050
      }
    },
    {
      'time': 1536406725809,
      'values': {
        'power': 2272370
      }
    },
    {
      'time': 1536406727811,
      'values': {
        'power': 2235020
      }
    },
    {
      'time': 1536406729814,
      'values': {
        'power': 2220810
      }
    },
    {
      'time': 1536406731814,
      'values': {
        'power': 2221520
      }
    },
    {
      'time': 1536406733816,
      'values': {
        'power': 2221820
      }
    },
    {
      'time': 1536406735819,
      'values': {
        'power': 2222820
      }
    },
    {
      'time': 1536406737822,
      'values': {
        'power': 2223880
      }
    },
    {
      'time': 1536406739822,
      'values': {
        'power': 2224390
      }
    },
    {
      'time': 1536406741824,
      'values': {
        'power': 2224040
      }
    },
    {
      'time': 1536406743826,
      'values': {
        'power': 2222520
      }
    },
    {
      'time': 1536406745822,
      'values': {
        'power': 2221380
      }
    },
    {
      'time': 1536406747824,
      'values': {
        'power': 2221620
      }
    },
    {
      'time': 1536406749826,
      'values': {
        'power': 2222130
      }
    },
    {
      'time': 1536406751828,
      'values': {
        'power': 2221210
      }
    },
    {
      'time': 1536406753830,
      'values': {
        'power': 2219100
      }
    },
    {
      'time': 1536406755832,
      'values': {
        'power': 2218410
      }
    },
    {
      'time': 1536406757833,
      'values': {
        'power': 2218900
      }
    },
    {
      'time': 1536406759835,
      'values': {
        'power': 2219370
      }
    },
    {
      'time': 1536406761837,
      'values': {
        'power': 2220680
      }
    },
    {
      'time': 1536406763839,
      'values': {
        'power': 2222100
      }
    },
    {
      'time': 1536406765842,
      'values': {
        'power': 2223140
      }
    },
    {
      'time': 1536406767843,
      'values': {
        'power': 2224270
      }
    },
    {
      'time': 1536406769845,
      'values': {
        'power': 2226010
      }
    },
    {
      'time': 1536406771847,
      'values': {
        'power': 2216690
      }
    },
    {
      'time': 1536406773850,
      'values': {
        'power': 2077740
      }
    },
    {
      'time': 1536406775850,
      'values': {
        'power': 1920020
      }
    },
    {
      'time': 1536406777853,
      'values': {
        'power': 1880780
      }
    },
    {
      'time': 1536406779856,
      'values': {
        'power': 1880740
      }
    },
    {
      'time': 1536406781858,
      'values': {
        'power': 1881180
      }
    },
    {
      'time': 1536406783858,
      'values': {
        'power': 1882710
      }
    },
    {
      'time': 1536406785861,
      'values': {
        'power': 1883600
      }
    },
    {
      'time': 1536406787863,
      'values': {
        'power': 2009110
      }
    },
    {
      'time': 1536406789865,
      'values': {
        'power': 2071460
      }
    },
    {
      'time': 1536406791867,
      'values': {
        'power': 1969300
      }
    },
    {
      'time': 1536406793868,
      'values': {
        'power': 1929970
      }
    },
    {
      'time': 1536406795870,
      'values': {
        'power': 1929420
      }
    },
    {
      'time': 1536406797873,
      'values': {
        'power': 1928950
      }
    },
    {
      'time': 1536406799875,
      'values': {
        'power': 1929260
      }
    },
    {
      'time': 1536406801877,
      'values': {
        'power': 1930010
      }
    },
    {
      'time': 1536406803879,
      'values': {
        'power': 1930430
      }
    },
    {
      'time': 1536406805881,
      'values': {
        'power': 1930310
      }
    },
    {
      'time': 1536406807882,
      'values': {
        'power': 1929350
      }
    },
    {
      'time': 1536406809884,
      'values': {
        'power': 1928380
      }
    },
    {
      'time': 1536406811886,
      'values': {
        'power': 1927380
      }
    },
    {
      'time': 1536406813889,
      'values': {
        'power': 1927880
      }
    },
    {
      'time': 1536406815890,
      'values': {
        'power': 1928730
      }
    },
    {
      'time': 1536406817892,
      'values': {
        'power': 1929120
      }
    },
    {
      'time': 1536406819894,
      'values': {
        'power': 1928540
      }
    },
    {
      'time': 1536406821895,
      'values': {
        'power': 1927430
      }
    },
    {
      'time': 1536406823897,
      'values': {
        'power': 1926010
      }
    },
    {
      'time': 1536406825900,
      'values': {
        'power': 1924480
      }
    },
    {
      'time': 1536406827902,
      'values': {
        'power': 1923810
      }
    },
    {
      'time': 1536406829904,
      'values': {
        'power': 1924320
      }
    },
    {
      'time': 1536406831906,
      'values': {
        'power': 1923970
      }
    },
    {
      'time': 1536406833907,
      'values': {
        'power': 1923190
      }
    },
    {
      'time': 1536406835910,
      'values': {
        'power': 1923560
      }
    },
    {
      'time': 1536406837912,
      'values': {
        'power': 1924190
      }
    },
    {
      'time': 1536406839914,
      'values': {
        'power': 1924470
      }
    },
    {
      'time': 1536406841915,
      'values': {
        'power': 1925230
      }
    },
    {
      'time': 1536406843917,
      'values': {
        'power': 1926510
      }
    },
    {
      'time': 1536406845920,
      'values': {
        'power': 1926710
      }
    },
    {
      'time': 1536406847921,
      'values': {
        'power': 1926720
      }
    },
    {
      'time': 1536406849924,
      'values': {
        'power': 1926390
      }
    },
    {
      'time': 1536406851926,
      'values': {
        'power': 1902050
      }
    },
    {
      'time': 1536406853927,
      'values': {
        'power': 1746780
      }
    },
    {
      'time': 1536406855929,
      'values': {
        'power': 1595720
      }
    },
    {
      'time': 1536406857931,
      'values': {
        'power': 1576120
      }
    },
    {
      'time': 1536406859933,
      'values': {
        'power': 1577400
      }
    },
    {
      'time': 1536406861934,
      'values': {
        'power': 1578820
      }
    },
    {
      'time': 1536406863937,
      'values': {
        'power': 1579420
      }
    },
    {
      'time': 1536406865939,
      'values': {
        'power': 1580630
      }
    },
    {
      'time': 1536406867941,
      'values': {
        'power': 1581810
      }
    },
    {
      'time': 1536406869943,
      'values': {
        'power': 1582870
      }
    },
    {
      'time': 1536406871945,
      'values': {
        'power': 1583830
      }
    },
    {
      'time': 1536406873948,
      'values': {
        'power': 1584770
      }
    },
    {
      'time': 1536406875948,
      'values': {
        'power': 1585240
      }
    },
    {
      'time': 1536406877950,
      'values': {
        'power': 1584830
      }
    },
    {
      'time': 1536406879953,
      'values': {
        'power': 1584380
      }
    },
    {
      'time': 1536406881955,
      'values': {
        'power': 1583310
      }
    },
    {
      'time': 1536406883957,
      'values': {
        'power': 1582630
      }
    },
    {
      'time': 1536406885958,
      'values': {
        'power': 1582060
      }
    },
    {
      'time': 1536406887960,
      'values': {
        'power': 1581210
      }
    },
    {
      'time': 1536406889963,
      'values': {
        'power': 1581680
      }
    },
    {
      'time': 1536406891965,
      'values': {
        'power': 1582820
      }
    },
    {
      'time': 1536406893967,
      'values': {
        'power': 1583430
      }
    },
    {
      'time': 1536406895969,
      'values': {
        'power': 1584600
      }
    },
    {
      'time': 1536406897971,
      'values': {
        'power': 1584330
      }
    },
    {
      'time': 1536406899973,
      'values': {
        'power': 1583070
      }
    },
    {
      'time': 1536406901975,
      'values': {
        'power': 1582790
      }
    },
    {
      'time': 1536406903976,
      'values': {
        'power': 1582340
      }
    },
    {
      'time': 1536406905978,
      'values': {
        'power': 1581840
      }
    },
    {
      'time': 1536406907983,
      'values': {
        'power': 1582600
      }
    },
    {
      'time': 1536406909984,
      'values': {
        'power': 1583350
      }
    },
    {
      'time': 1536406911984,
      'values': {
        'power': 1583570
      }
    },
    {
      'time': 1536406913986,
      'values': {
        'power': 1583990
      }
    },
    {
      'time': 1536406915988,
      'values': {
        'power': 1584780
      }
    },
    {
      'time': 1536406917990,
      'values': {
        'power': 1585570
      }
    },
    {
      'time': 1536406919992,
      'values': {
        'power': 1585840
      }
    },
    {
      'time': 1536406921994,
      'values': {
        'power': 1585640
      }
    },
    {
      'time': 1536406923996,
      'values': {
        'power': 1586430
      }
    },
    {
      'time': 1536406925998,
      'values': {
        'power': 1591280
      }
    },
    {
      'time': 1536406928000,
      'values': {
        'power': 1595880
      }
    },
    {
      'time': 1536406930001,
      'values': {
        'power': 1596240
      }
    },
    {
      'time': 1536406932003,
      'values': {
        'power': 1595520
      }
    },
    {
      'time': 1536406934006,
      'values': {
        'power': 1595140
      }
    },
    {
      'time': 1536406936007,
      'values': {
        'power': 1596170
      }
    },
    {
      'time': 1536406938009,
      'values': {
        'power': 1596680
      }
    },
    {
      'time': 1536406940012,
      'values': {
        'power': 1598790
      }
    },
    {
      'time': 1536406942013,
      'values': {
        'power': 1610710
      }
    },
    {
      'time': 1536406944015,
      'values': {
        'power': 1621560
      }
    },
    {
      'time': 1536406946017,
      'values': {
        'power': 1753240
      }
    },
    {
      'time': 1536406948019,
      'values': {
        'power': 2473150
      }
    },
    {
      'time': 1536406950021,
      'values': {
        'power': 3211080
      }
    },
    {
      'time': 1536406952023,
      'values': {
        'power': 3355900
      }
    },
    {
      'time': 1536406954025,
      'values': {
        'power': 3359400
      }
    },
    {
      'time': 1536406956027,
      'values': {
        'power': 3377520
      }
    },
    {
      'time': 1536406958028,
      'values': {
        'power': 3383940
      }
    },
    {
      'time': 1536406960031,
      'values': {
        'power': 3378400
      }
    },
    {
      'time': 1536406962032,
      'values': {
        'power': 3378740
      }
    },
    {
      'time': 1536406964034,
      'values': {
        'power': 3377690
      }
    },
    {
      'time': 1536406966037,
      'values': {
        'power': 3376560
      }
    },
    {
      'time': 1536406968039,
      'values': {
        'power': 3374760
      }
    },
    {
      'time': 1536406970041,
      'values': {
        'power': 3372150
      }
    },
    {
      'time': 1536406972043,
      'values': {
        'power': 3372170
      }
    },
    {
      'time': 1536406974045,
      'values': {
        'power': 3367060
      }
    },
    {
      'time': 1536406976046,
      'values': {
        'power': 3361120
      }
    },
    {
      'time': 1536406978049,
      'values': {
        'power': 3358340
      }
    },
    {
      'time': 1536406980051,
      'values': {
        'power': 3357800
      }
    },
    {
      'time': 1536406982053,
      'values': {
        'power': 3356910
      }
    },
    {
      'time': 1536406984054,
      'values': {
        'power': 3365980
      }
    },
    {
      'time': 1536406986057,
      'values': {
        'power': 3383230
      }
    },
    {
      'time': 1536406988058,
      'values': {
        'power': 3382620
      }
    },
    {
      'time': 1536406990060,
      'values': {
        'power': 3374440
      }
    },
    {
      'time': 1536406992063,
      'values': {
        'power': 3368310
      }
    },
    {
      'time': 1536406994064,
      'values': {
        'power': 3372020
      }
    },
    {
      'time': 1536406996066,
      'values': {
        'power': 3387370
      }
    },
    {
      'time': 1536406998068,
      'values': {
        'power': 3390860
      }
    },
    {
      'time': 1536407000070,
      'values': {
        'power': 3353040
      }
    },
    {
      'time': 1536407002072,
      'values': {
        'power': 3180850
      }
    },
    {
      'time': 1536407004074,
      'values': {
        'power': 3024340
      }
    },
    {
      'time': 1536407006076,
      'values': {
        'power': 3011870
      }
    },
    {
      'time': 1536407008077,
      'values': {
        'power': 3012710
      }
    },
    {
      'time': 1536407010080,
      'values': {
        'power': 3011660
      }
    },
    {
      'time': 1536407012082,
      'values': {
        'power': 3023560
      }
    },
    {
      'time': 1536407014083,
      'values': {
        'power': 3031100
      }
    },
    {
      'time': 1536407016085,
      'values': {
        'power': 3017390
      }
    },
    {
      'time': 1536407018088,
      'values': {
        'power': 3015470
      }
    },
    {
      'time': 1536407020090,
      'values': {
        'power': 3014370
      }
    },
    {
      'time': 1536407022092,
      'values': {
        'power': 2586820
      }
    },
    {
      'time': 1536407024094,
      'values': {
        'power': 1956550
      }
    },
    {
      'time': 1536407026096,
      'values': {
        'power': 1744140
      }
    },
    {
      'time': 1536407028098,
      'values': {
        'power': 1744470
      }
    },
    {
      'time': 1536407030100,
      'values': {
        'power': 1744790
      }
    },
    {
      'time': 1536407032102,
      'values': {
        'power': 1744490
      }
    },
    {
      'time': 1536407034104,
      'values': {
        'power': 1743410
      }
    },
    {
      'time': 1536407036107,
      'values': {
        'power': 1743970
      }
    },
    {
      'time': 1536407038112,
      'values': {
        'power': 1744930
      }
    },
    {
      'time': 1536407040109,
      'values': {
        'power': 1744490
      }
    },
    {
      'time': 1536407042111,
      'values': {
        'power': 1744510
      }
    },
    {
      'time': 1536407044113,
      'values': {
        'power': 1745130
      }
    },
    {
      'time': 1536407046115,
      'values': {
        'power': 1747360
      }
    },
    {
      'time': 1536407048118,
      'values': {
        'power': 1749420
      }
    },
    {
      'time': 1536407050119,
      'values': {
        'power': 1750260
      }
    },
    {
      'time': 1536407052121,
      'values': {
        'power': 2101680
      }
    },
    {
      'time': 1536407054123,
      'values': {
        'power': 2665500
      }
    },
    {
      'time': 1536407056125,
      'values': {
        'power': 2878030
      }
    },
    {
      'time': 1536407058127,
      'values': {
        'power': 2877440
      }
    },
    {
      'time': 1536407060129,
      'values': {
        'power': 2874930
      }
    },
    {
      'time': 1536407062131,
      'values': {
        'power': 2872110
      }
    },
    {
      'time': 1536407064133,
      'values': {
        'power': 2871790
      }
    },
    {
      'time': 1536407066134,
      'values': {
        'power': 2872430
      }
    },
    {
      'time': 1536407068136,
      'values': {
        'power': 2872440
      }
    },
    {
      'time': 1536407070139,
      'values': {
        'power': 2871190
      }
    },
    {
      'time': 1536407072141,
      'values': {
        'power': 2870080
      }
    },
    {
      'time': 1536407074143,
      'values': {
        'power': 2875960
      }
    },
    {
      'time': 1536407076144,
      'values': {
        'power': 2890080
      }
    },
    {
      'time': 1536407078146,
      'values': {
        'power': 2897640
      }
    },
    {
      'time': 1536407080149,
      'values': {
        'power': 2896840
      }
    },
    {
      'time': 1536407082151,
      'values': {
        'power': 2896220
      }
    },
    {
      'time': 1536407084153,
      'values': {
        'power': 2896000
      }
    },
    {
      'time': 1536407086155,
      'values': {
        'power': 2896790
      }
    },
    {
      'time': 1536407088156,
      'values': {
        'power': 2896920
      }
    },
    {
      'time': 1536407090158,
      'values': {
        'power': 2895970
      }
    },
    {
      'time': 1536407092160,
      'values': {
        'power': 2895030
      }
    },
    {
      'time': 1536407094162,
      'values': {
        'power': 2895490
      }
    },
    {
      'time': 1536407096163,
      'values': {
        'power': 2895480
      }
    },
    {
      'time': 1536407098166,
      'values': {
        'power': 2895310
      }
    },
    {
      'time': 1536407100168,
      'values': {
        'power': 2895480
      }
    },
    {
      'time': 1536407102170,
      'values': {
        'power': 2895680
      }
    },
    {
      'time': 1536407104172,
      'values': {
        'power': 2895630
      }
    },
    {
      'time': 1536407106174,
      'values': {
        'power': 2888950
      }
    },
    {
      'time': 1536407108176,
      'values': {
        'power': 2877500
      }
    },
    {
      'time': 1536407110178,
      'values': {
        'power': 2871980
      }
    },
    {
      'time': 1536407112179,
      'values': {
        'power': 2871390
      }
    },
    {
      'time': 1536407114182,
      'values': {
        'power': 2870150
      }
    },
    {
      'time': 1536407116183,
      'values': {
        'power': 2876730
      }
    },
    {
      'time': 1536407118186,
      'values': {
        'power': 2890520
      }
    },
    {
      'time': 1536407120187,
      'values': {
        'power': 2895120
      }
    },
    {
      'time': 1536407122189,
      'values': {
        'power': 2887350
      }
    },
    {
      'time': 1536407124192,
      'values': {
        'power': 2874240
      }
    },
    {
      'time': 1536407126194,
      'values': {
        'power': 2871450
      }
    },
    {
      'time': 1536407128196,
      'values': {
        'power': 2872180
      }
    },
    {
      'time': 1536407130198,
      'values': {
        'power': 2718070
      }
    },
    {
      'time': 1536407132200,
      'values': {
        'power': 2465750
      }
    },
    {
      'time': 1536407134201,
      'values': {
        'power': 2368510
      }
    },
    {
      'time': 1536407136203,
      'values': {
        'power': 2369020
      }
    },
    {
      'time': 1536407138205,
      'values': {
        'power': 2369200
      }
    },
    {
      'time': 1536407140208,
      'values': {
        'power': 2369230
      }
    },
    {
      'time': 1536407142209,
      'values': {
        'power': 2369880
      }
    },
    {
      'time': 1536407144211,
      'values': {
        'power': 2370900
      }
    },
    {
      'time': 1536407146213,
      'values': {
        'power': 2370990
      }
    },
    {
      'time': 1536407148214,
      'values': {
        'power': 2371140
      }
    },
    {
      'time': 1536407150217,
      'values': {
        'power': 2370260
      }
    },
    {
      'time': 1536407152219,
      'values': {
        'power': 2365990
      }
    },
    {
      'time': 1536407154221,
      'values': {
        'power': 2359380
      }
    },
    {
      'time': 1536407156223,
      'values': {
        'power': 2355720
      }
    },
    {
      'time': 1536407158225,
      'values': {
        'power': 2355940
      }
    },
    {
      'time': 1536407160227,
      'values': {
        'power': 2357120
      }
    },
    {
      'time': 1536407162229,
      'values': {
        'power': 2357810
      }
    },
    {
      'time': 1536407164231,
      'values': {
        'power': 2357900
      }
    },
    {
      'time': 1536407166233,
      'values': {
        'power': 2356470
      }
    },
    {
      'time': 1536407168234,
      'values': {
        'power': 2355500
      }
    },
    {
      'time': 1536407170236,
      'values': {
        'power': 2338650
      }
    },
    {
      'time': 1536407172239,
      'values': {
        'power': 1942380
      }
    },
    {
      'time': 1536407174241,
      'values': {
        'power': 1394930
      }
    },
    {
      'time': 1536407176244,
      'values': {
        'power': 1230420
      }
    },
    {
      'time': 1536407178244,
      'values': {
        'power': 1228940
      }
    },
    {
      'time': 1536407180247,
      'values': {
        'power': 1227420
      }
    },
    {
      'time': 1536407182248,
      'values': {
        'power': 1226440
      }
    },
    {
      'time': 1536407184250,
      'values': {
        'power': 1225240
      }
    },
    {
      'time': 1536407186252,
      'values': {
        'power': 1224330
      }
    },
    {
      'time': 1536407188254,
      'values': {
        'power': 1224470
      }
    },
    {
      'time': 1536407190256,
      'values': {
        'power': 1225270
      }
    },
    {
      'time': 1536407192258,
      'values': {
        'power': 1225240
      }
    },
    {
      'time': 1536407194260,
      'values': {
        'power': 1223780
      }
    },
    {
      'time': 1536407196262,
      'values': {
        'power': 1223320
      }
    },
    {
      'time': 1536407198264,
      'values': {
        'power': 1223920
      }
    },
    {
      'time': 1536407200266,
      'values': {
        'power': 1224120
      }
    },
    {
      'time': 1536407202267,
      'values': {
        'power': 1223980
      }
    },
    {
      'time': 1536407204269,
      'values': {
        'power': 1291070
      }
    },
    {
      'time': 1536407206272,
      'values': {
        'power': 1417350
      }
    },
    {
      'time': 1536407208274,
      'values': {
        'power': 1373130
      }
    },
    {
      'time': 1536407210276,
      'values': {
        'power': 1269450
      }
    },
    {
      'time': 1536407212277,
      'values': {
        'power': 1269150
      }
    },
    {
      'time': 1536407214280,
      'values': {
        'power': 1269320
      }
    },
    {
      'time': 1536407216282,
      'values': {
        'power': 1270990
      }
    },
    {
      'time': 1536407218283,
      'values': {
        'power': 1273640
      }
    },
    {
      'time': 1536407220286,
      'values': {
        'power': 1275430
      }
    },
    {
      'time': 1536407222288,
      'values': {
        'power': 1305180
      }
    },
    {
      'time': 1536407224290,
      'values': {
        'power': 1730480
      }
    },
    {
      'time': 1536407226292,
      'values': {
        'power': 2271020
      }
    },
    {
      'time': 1536407228295,
      'values': {
        'power': 2373740
      }
    },
    {
      'time': 1536407230295,
      'values': {
        'power': 1916450
      }
    },
    {
      'time': 1536407232297,
      'values': {
        'power': 1385940
      }
    },
    {
      'time': 1536407234299,
      'values': {
        'power': 1278690
      }
    },
    {
      'time': 1536407236301,
      'values': {
        'power': 1279440
      }
    },
    {
      'time': 1536407238303,
      'values': {
        'power': 1280040
      }
    },
    {
      'time': 1536407240305,
      'values': {
        'power': 1280400
      }
    },
    {
      'time': 1536407242310,
      'values': {
        'power': 1281750
      }
    },
    {
      'time': 1536407244308,
      'values': {
        'power': 1282410
      }
    },
    {
      'time': 1536407246310,
      'values': {
        'power': 1281690
      }
    },
    {
      'time': 1536407248313,
      'values': {
        'power': 1281250
      }
    },
    {
      'time': 1536407250315,
      'values': {
        'power': 1281120
      }
    },
    {
      'time': 1536407252317,
      'values': {
        'power': 1281990
      }
    },
    {
      'time': 1536407254319,
      'values': {
        'power': 1254540
      }
    },
    {
      'time': 1536407256320,
      'values': {
        'power': 1115550
      }
    },
    {
      'time': 1536407258322,
      'values': {
        'power': 996210
      }
    },
    {
      'time': 1536407260325,
      'values': {
        'power': 987750
      }
    },
    {
      'time': 1536407262327,
      'values': {
        'power': 986890
      }
    },
    {
      'time': 1536407264329,
      'values': {
        'power': 985950
      }
    },
    {
      'time': 1536407266331,
      'values': {
        'power': 984740
      }
    },
    {
      'time': 1536407268333,
      'values': {
        'power': 982340
      }
    },
    {
      'time': 1536407270335,
      'values': {
        'power': 980910
      }
    },
    {
      'time': 1536407272336,
      'values': {
        'power': 981190
      }
    },
    {
      'time': 1536407274339,
      'values': {
        'power': 982070
      }
    },
    {
      'time': 1536407276341,
      'values': {
        'power': 982270
      }
    },
    {
      'time': 1536407278342,
      'values': {
        'power': 982320
      }
    },
    {
      'time': 1536407280344,
      'values': {
        'power': 982310
      }
    },
    {
      'time': 1536407282346,
      'values': {
        'power': 981280
      }
    },
    {
      'time': 1536407284347,
      'values': {
        'power': 980620
      }
    },
    {
      'time': 1536407286349,
      'values': {
        'power': 980960
      }
    },
    {
      'time': 1536407288352,
      'values': {
        'power': 981660
      }
    },
    {
      'time': 1536407290354,
      'values': {
        'power': 982030
      }
    },
    {
      'time': 1536407292356,
      'values': {
        'power': 982700
      }
    },
    {
      'time': 1536407294358,
      'values': {
        'power': 983760
      }
    },
    {
      'time': 1536407296359,
      'values': {
        'power': 984250
      }
    },
    {
      'time': 1536407298361,
      'values': {
        'power': 984200
      }
    },
    {
      'time': 1536407300364,
      'values': {
        'power': 973800
      }
    },
    {
      'time': 1536407302366,
      'values': {
        'power': 956290
      }
    },
    {
      'time': 1536407304368,
      'values': {
        'power': 947950
      }
    },
    {
      'time': 1536407306370,
      'values': {
        'power': 945980
      }
    },
    {
      'time': 1536407308373,
      'values': {
        'power': 945260
      }
    },
    {
      'time': 1536407310374,
      'values': {
        'power': 947010
      }
    },
    {
      'time': 1536407312375,
      'values': {
        'power': 948700
      }
    },
    {
      'time': 1536407314377,
      'values': {
        'power': 947220
      }
    },
    {
      'time': 1536407316380,
      'values': {
        'power': 946110
      }
    },
    {
      'time': 1536407318382,
      'values': {
        'power': 945860
      }
    },
    {
      'time': 1536407320384,
      'values': {
        'power': 946020
      }
    },
    {
      'time': 1536407322385,
      'values': {
        'power': 946960
      }
    },
    {
      'time': 1536407324387,
      'values': {
        'power': 947220
      }
    },
    {
      'time': 1536407326389,
      'values': {
        'power': 946380
      }
    },
    {
      'time': 1536407328391,
      'values': {
        'power': 946280
      }
    },
    {
      'time': 1536407330393,
      'values': {
        'power': 946240
      }
    },
    {
      'time': 1536407332395,
      'values': {
        'power': 945670
      }
    },
    {
      'time': 1536407334397,
      'values': {
        'power': 945490
      }
    },
    {
      'time': 1536407336399,
      'values': {
        'power': 945450
      }
    },
    {
      'time': 1536407338400,
      'values': {
        'power': 945010
      }
    },
    {
      'time': 1536407340402,
      'values': {
        'power': 945300
      }
    },
    {
      'time': 1536407342405,
      'values': {
        'power': 946180
      }
    },
    {
      'time': 1536407344409,
      'values': {
        'power': 946300
      }
    },
    {
      'time': 1536407346408,
      'values': {
        'power': 946260
      }
    },
    {
      'time': 1536407348410,
      'values': {
        'power': 946250
      }
    },
    {
      'time': 1536407350413,
      'values': {
        'power': 945270
      }
    },
    {
      'time': 1536407352415,
      'values': {
        'power': 944160
      }
    },
    {
      'time': 1536407354417,
      'values': {
        'power': 943910
      }
    },
    {
      'time': 1536407356419,
      'values': {
        'power': 944170
      }
    },
    {
      'time': 1536407358421,
      'values': {
        'power': 944150
      }
    },
    {
      'time': 1536407360423,
      'values': {
        'power': 944430
      }
    },
    {
      'time': 1536407362425,
      'values': {
        'power': 944950
      }
    },
    {
      'time': 1536407364428,
      'values': {
        'power': 944930
      }
    },
    {
      'time': 1536407366428,
      'values': {
        'power': 945570
      }
    },
    {
      'time': 1536407368431,
      'values': {
        'power': 946680
      }
    },
    {
      'time': 1536407370432,
      'values': {
        'power': 948110
      }
    },
    {
      'time': 1536407372434,
      'values': {
        'power': 949270
      }
    },
    {
      'time': 1536407374436,
      'values': {
        'power': 949370
      }
    },
    {
      'time': 1536407376438,
      'values': {
        'power': 949670
      }
    },
    {
      'time': 1536407378440,
      'values': {
        'power': 949550
      }
    },
    {
      'time': 1536407380441,
      'values': {
        'power': 949410
      }
    },
    {
      'time': 1536407382444,
      'values': {
        'power': 949720
      }
    },
    {
      'time': 1536407384446,
      'values': {
        'power': 950520
      }
    },
    {
      'time': 1536407386448,
      'values': {
        'power': 951980
      }
    },
    {
      'time': 1536407388450,
      'values': {
        'power': 953000
      }
    },
    {
      'time': 1536407390452,
      'values': {
        'power': 953340
      }
    },
    {
      'time': 1536407392453,
      'values': {
        'power': 953200
      }
    },
    {
      'time': 1536407394455,
      'values': {
        'power': 953490
      }
    },
    {
      'time': 1536407396458,
      'values': {
        'power': 954080
      }
    },
    {
      'time': 1536407398459,
      'values': {
        'power': 953650
      }
    },
    {
      'time': 1536407400461,
      'values': {
        'power': 954720
      }
    },
    {
      'time': 1536407402464,
      'values': {
        'power': 955330
      }
    },
    {
      'time': 1536407404466,
      'values': {
        'power': 954680
      }
    },
    {
      'time': 1536407406468,
      'values': {
        'power': 954930
      }
    },
    {
      'time': 1536407408470,
      'values': {
        'power': 955650
      }
    },
    {
      'time': 1536407410472,
      'values': {
        'power': 955810
      }
    },
    {
      'time': 1536407412473,
      'values': {
        'power': 955950
      }
    },
    {
      'time': 1536407414475,
      'values': {
        'power': 956650
      }
    },
    {
      'time': 1536407416478,
      'values': {
        'power': 957940
      }
    },
    {
      'time': 1536407418479,
      'values': {
        'power': 958700
      }
    },
    {
      'time': 1536407420481,
      'values': {
        'power': 957290
      }
    },
    {
      'time': 1536407422483,
      'values': {
        'power': 956070
      }
    },
    {
      'time': 1536407424485,
      'values': {
        'power': 955670
      }
    },
    {
      'time': 1536407426486,
      'values': {
        'power': 955720
      }
    },
    {
      'time': 1536407428489,
      'values': {
        'power': 956570
      }
    },
    {
      'time': 1536407430491,
      'values': {
        'power': 957210
      }
    },
    {
      'time': 1536407432493,
      'values': {
        'power': 956280
      }
    },
    {
      'time': 1536407434495,
      'values': {
        'power': 955680
      }
    },
    {
      'time': 1536407436497,
      'values': {
        'power': 956010
      }
    },
    {
      'time': 1536407438499,
      'values': {
        'power': 956410
      }
    },
    {
      'time': 1536407440501,
      'values': {
        'power': 957140
      }
    },
    {
      'time': 1536407442503,
      'values': {
        'power': 958120
      }
    },
    {
      'time': 1536407444506,
      'values': {
        'power': 958380
      }
    },
    {
      'time': 1536407446507,
      'values': {
        'power': 957860
      }
    },
    {
      'time': 1536407448508,
      'values': {
        'power': 958140
      }
    },
    {
      'time': 1536407450511,
      'values': {
        'power': 958480
      }
    },
    {
      'time': 1536407452513,
      'values': {
        'power': 957540
      }
    },
    {
      'time': 1536407454515,
      'values': {
        'power': 957030
      }
    },
    {
      'time': 1536407456517,
      'values': {
        'power': 957160
      }
    },
    {
      'time': 1536407458519,
      'values': {
        'power': 957370
      }
    },
    {
      'time': 1536407460521,
      'values': {
        'power': 957250
      }
    },
    {
      'time': 1536407462523,
      'values': {
        'power': 956900
      }
    },
    {
      'time': 1536407464524,
      'values': {
        'power': 956610
      }
    },
    {
      'time': 1536407466526,
      'values': {
        'power': 957280
      }
    },
    {
      'time': 1536407468528,
      'values': {
        'power': 959090
      }
    },
    {
      'time': 1536407470530,
      'values': {
        'power': 959420
      }
    },
    {
      'time': 1536407472533,
      'values': {
        'power': 958460
      }
    },
    {
      'time': 1536407474534,
      'values': {
        'power': 957960
      }
    },
    {
      'time': 1536407476536,
      'values': {
        'power': 957800
      }
    },
    {
      'time': 1536407478539,
      'values': {
        'power': 957830
      }
    },
    {
      'time': 1536407480539,
      'values': {
        'power': 957860
      }
    },
    {
      'time': 1536407482542,
      'values': {
        'power': 957400
      }
    },
    {
      'time': 1536407484544,
      'values': {
        'power': 956870
      }
    },
    {
      'time': 1536407486546,
      'values': {
        'power': 956870
      }
    },
    {
      'time': 1536407488548,
      'values': {
        'power': 957640
      }
    },
    {
      'time': 1536407490551,
      'values': {
        'power': 958130
      }
    },
    {
      'time': 1536407492552,
      'values': {
        'power': 958180
      }
    },
    {
      'time': 1536407494554,
      'values': {
        'power': 958600
      }
    },
    {
      'time': 1536407496556,
      'values': {
        'power': 958950
      }
    },
    {
      'time': 1536407498560,
      'values': {
        'power': 958860
      }
    },
    {
      'time': 1536407500559,
      'values': {
        'power': 958120
      }
    },
    {
      'time': 1536407502562,
      'values': {
        'power': 957250
      }
    },
    {
      'time': 1536407504564,
      'values': {
        'power': 957460
      }
    },
    {
      'time': 1536407506566,
      'values': {
        'power': 957580
      }
    },
    {
      'time': 1536407508568,
      'values': {
        'power': 957870
      }
    },
    {
      'time': 1536407510569,
      'values': {
        'power': 959050
      }
    },
    {
      'time': 1536407512571,
      'values': {
        'power': 960460
      }
    },
    {
      'time': 1536407514573,
      'values': {
        'power': 960870
      }
    },
    {
      'time': 1536407516575,
      'values': {
        'power': 960420
      }
    },
    {
      'time': 1536407518577,
      'values': {
        'power': 959030
      }
    },
    {
      'time': 1536407520579,
      'values': {
        'power': 957890
      }
    },
    {
      'time': 1536407522581,
      'values': {
        'power': 958170
      }
    },
    {
      'time': 1536407524583,
      'values': {
        'power': 959160
      }
    },
    {
      'time': 1536407526585,
      'values': {
        'power': 960170
      }
    },
    {
      'time': 1536407528586,
      'values': {
        'power': 959580
      }
    },
    {
      'time': 1536407530588,
      'values': {
        'power': 958220
      }
    },
    {
      'time': 1536407532591,
      'values': {
        'power': 958000
      }
    },
    {
      'time': 1536407534593,
      'values': {
        'power': 958320
      }
    },
    {
      'time': 1536407536595,
      'values': {
        'power': 960030
      }
    },
    {
      'time': 1536407538597,
      'values': {
        'power': 960940
      }
    },
    {
      'time': 1536407540599,
      'values': {
        'power': 960520
      }
    },
    {
      'time': 1536407542601,
      'values': {
        'power': 960860
      }
    },
    {
      'time': 1536407544603,
      'values': {
        'power': 959900
      }
    },
    {
      'time': 1536407546604,
      'values': {
        'power': 958550
      }
    },
    {
      'time': 1536407548607,
      'values': {
        'power': 959090
      }
    },
    {
      'time': 1536407550609,
      'values': {
        'power': 959940
      }
    },
    {
      'time': 1536407552611,
      'values': {
        'power': 959870
      }
    },
    {
      'time': 1536407554614,
      'values': {
        'power': 959310
      }
    },
    {
      'time': 1536407556614,
      'values': {
        'power': 959570
      }
    },
    {
      'time': 1536407558616,
      'values': {
        'power': 960330
      }
    },
    {
      'time': 1536407560618,
      'values': {
        'power': 926680
      }
    },
    {
      'time': 1536407562620,
      'values': {
        'power': 779090
      }
    },
    {
      'time': 1536407564622,
      'values': {
        'power': 657200
      }
    },
    {
      'time': 1536407566624,
      'values': {
        'power': 649660
      }
    },
    {
      'time': 1536407568626,
      'values': {
        'power': 650340
      }
    },
    {
      'time': 1536407570628,
      'values': {
        'power': 650790
      }
    },
    {
      'time': 1536407572630,
      'values': {
        'power': 650590
      }
    },
    {
      'time': 1536407574632,
      'values': {
        'power': 650980
      }
    },
    {
      'time': 1536407576634,
      'values': {
        'power': 651660
      }
    },
    {
      'time': 1536407578636,
      'values': {
        'power': 651290
      }
    },
    {
      'time': 1536407580638,
      'values': {
        'power': 650930
      }
    },
    {
      'time': 1536407582639,
      'values': {
        'power': 651190
      }
    },
    {
      'time': 1536407584641,
      'values': {
        'power': 653240
      }
    },
    {
      'time': 1536407586644,
      'values': {
        'power': 653630
      }
    },
    {
      'time': 1536407588646,
      'values': {
        'power': 653010
      }
    },
    {
      'time': 1536407590648,
      'values': {
        'power': 653280
      }
    },
    {
      'time': 1536407592650,
      'values': {
        'power': 653020
      }
    },
    {
      'time': 1536407594652,
      'values': {
        'power': 653500
      }
    },
    {
      'time': 1536407596654,
      'values': {
        'power': 653400
      }
    },
    {
      'time': 1536407598656,
      'values': {
        'power': 653370
      }
    },
    {
      'time': 1536407600658,
      'values': {
        'power': 654000
      }
    },
    {
      'time': 1536407602659,
      'values': {
        'power': 654770
      }
    },
    {
      'time': 1536407604661,
      'values': {
        'power': 654460
      }
    },
    {
      'time': 1536407606664,
      'values': {
        'power': 653940
      }
    },
    {
      'time': 1536407608665,
      'values': {
        'power': 654210
      }
    },
    {
      'time': 1536407610667,
      'values': {
        'power': 656490
      }
    },
    {
      'time': 1536407612670,
      'values': {
        'power': 658010
      }
    },
    {
      'time': 1536407614670,
      'values': {
        'power': 656220
      }
    },
    {
      'time': 1536407616673,
      'values': {
        'power': 655040
      }
    },
    {
      'time': 1536407618675,
      'values': {
        'power': 655020
      }
    },
    {
      'time': 1536407620677,
      'values': {
        'power': 654230
      }
    },
    {
      'time': 1536407622679,
      'values': {
        'power': 654050
      }
    },
    {
      'time': 1536407624681,
      'values': {
        'power': 654150
      }
    },
    {
      'time': 1536407626683,
      'values': {
        'power': 653950
      }
    },
    {
      'time': 1536407628684,
      'values': {
        'power': 655190
      }
    },
    {
      'time': 1536407630687,
      'values': {
        'power': 656790
      }
    },
    {
      'time': 1536407632689,
      'values': {
        'power': 656940
      }
    },
    {
      'time': 1536407634691,
      'values': {
        'power': 656590
      }
    },
    {
      'time': 1536407636692,
      'values': {
        'power': 656470
      }
    },
    {
      'time': 1536407638694,
      'values': {
        'power': 656110
      }
    },
    {
      'time': 1536407640697,
      'values': {
        'power': 655770
      }
    },
    {
      'time': 1536407642699,
      'values': {
        'power': 655500
      }
    },
    {
      'time': 1536407644701,
      'values': {
        'power': 654730
      }
    },
    {
      'time': 1536407646702,
      'values': {
        'power': 651940
      }
    },
    {
      'time': 1536407648704,
      'values': {
        'power': 632210
      }
    },
    {
      'time': 1536407650707,
      'values': {
        'power': 610870
      }
    },
    {
      'time': 1536407652708,
      'values': {
        'power': 606930
      }
    },
    {
      'time': 1536407654710,
      'values': {
        'power': 606560
      }
    },
    {
      'time': 1536407656712,
      'values': {
        'power': 606780
      }
    },
    {
      'time': 1536407658714,
      'values': {
        'power': 607210
      }
    },
    {
      'time': 1536407660716,
      'values': {
        'power': 607360
      }
    },
    {
      'time': 1536407662718,
      'values': {
        'power': 607200
      }
    },
    {
      'time': 1536407664719,
      'values': {
        'power': 605780
      }
    },
    {
      'time': 1536407666721,
      'values': {
        'power': 604820
      }
    },
    {
      'time': 1536407668724,
      'values': {
        'power': 605140
      }
    },
    {
      'time': 1536407670726,
      'values': {
        'power': 605140
      }
    },
    {
      'time': 1536407672728,
      'values': {
        'power': 605180
      }
    },
    {
      'time': 1536407674730,
      'values': {
        'power': 606070
      }
    },
    {
      'time': 1536407676733,
      'values': {
        'power': 606680
      }
    },
    {
      'time': 1536407678737,
      'values': {
        'power': 606490
      }
    },
    {
      'time': 1536407680735,
      'values': {
        'power': 605840
      }
    },
    {
      'time': 1536407682737,
      'values': {
        'power': 605570
      }
    },
    {
      'time': 1536407684740,
      'values': {
        'power': 605720
      }
    },
    {
      'time': 1536407686742,
      'values': {
        'power': 605540
      }
    },
    {
      'time': 1536407688744,
      'values': {
        'power': 605210
      }
    },
    {
      'time': 1536407690746,
      'values': {
        'power': 605000
      }
    },
    {
      'time': 1536407692747,
      'values': {
        'power': 604610
      }
    },
    {
      'time': 1536407694750,
      'values': {
        'power': 605080
      }
    },
    {
      'time': 1536407696752,
      'values': {
        'power': 605740
      }
    },
    {
      'time': 1536407698753,
      'values': {
        'power': 606270
      }
    },
    {
      'time': 1536407700755,
      'values': {
        'power': 607490
      }
    },
    {
      'time': 1536407702757,
      'values': {
        'power': 608270
      }
    },
    {
      'time': 1536407704759,
      'values': {
        'power': 607230
      }
    },
    {
      'time': 1536407706760,
      'values': {
        'power': 605880
      }
    },
    {
      'time': 1536407708763,
      'values': {
        'power': 605290
      }
    },
    {
      'time': 1536407710765,
      'values': {
        'power': 605260
      }
    },
    {
      'time': 1536407712767,
      'values': {
        'power': 604810
      }
    },
    {
      'time': 1536407714768,
      'values': {
        'power': 604150
      }
    },
    {
      'time': 1536407716771,
      'values': {
        'power': 604300
      }
    },
    {
      'time': 1536407718772,
      'values': {
        'power': 604120
      }
    },
    {
      'time': 1536407720774,
      'values': {
        'power': 604220
      }
    },
    {
      'time': 1536407722777,
      'values': {
        'power': 604640
      }
    },
    {
      'time': 1536407724779,
      'values': {
        'power': 604260
      }
    },
    {
      'time': 1536407726781,
      'values': {
        'power': 604650
      }
    },
    {
      'time': 1536407728783,
      'values': {
        'power': 606110
      }
    },
    {
      'time': 1536407730784,
      'values': {
        'power': 606520
      }
    },
    {
      'time': 1536407732786,
      'values': {
        'power': 606250
      }
    },
    {
      'time': 1536407734789,
      'values': {
        'power': 605990
      }
    },
    {
      'time': 1536407736791,
      'values': {
        'power': 605700
      }
    },
    {
      'time': 1536407738793,
      'values': {
        'power': 605340
      }
    },
    {
      'time': 1536407740795,
      'values': {
        'power': 604980
      }
    },
    {
      'time': 1536407742797,
      'values': {
        'power': 604920
      }
    },
    {
      'time': 1536407744802,
      'values': {
        'power': 604550
      }
    },
    {
      'time': 1536407746800,
      'values': {
        'power': 604290
      }
    },
    {
      'time': 1536407748802,
      'values': {
        'power': 676870
      }
    },
    {
      'time': 1536407750804,
      'values': {
        'power': 790660
      }
    },
    {
      'time': 1536407752806,
      'values': {
        'power': 727630
      }
    },
    {
      'time': 1536407754808,
      'values': {
        'power': 651680
      }
    },
    {
      'time': 1536407756810,
      'values': {
        'power': 651630
      }
    },
    {
      'time': 1536407758811,
      'values': {
        'power': 652030
      }
    },
    {
      'time': 1536407760814,
      'values': {
        'power': 652680
      }
    },
    {
      'time': 1536407762816,
      'values': {
        'power': 652460
      }
    },
    {
      'time': 1536407764818,
      'values': {
        'power': 652090
      }
    },
    {
      'time': 1536407766820,
      'values': {
        'power': 651790
      }
    },
    {
      'time': 1536407768822,
      'values': {
        'power': 652060
      }
    },
    {
      'time': 1536407770824,
      'values': {
        'power': 651650
      }
    },
    {
      'time': 1536407772825,
      'values': {
        'power': 650470
      }
    },
    {
      'time': 1536407774827,
      'values': {
        'power': 649920
      }
    },
    {
      'time': 1536407776830,
      'values': {
        'power': 649580
      }
    },
    {
      'time': 1536407778832,
      'values': {
        'power': 648770
      }
    },
    {
      'time': 1536407780834,
      'values': {
        'power': 648850
      }
    },
    {
      'time': 1536407782835,
      'values': {
        'power': 649780
      }
    },
    {
      'time': 1536407784837,
      'values': {
        'power': 649470
      }
    },
    {
      'time': 1536407786840,
      'values': {
        'power': 648810
      }
    },
    {
      'time': 1536407788842,
      'values': {
        'power': 648220
      }
    },
    {
      'time': 1536407790844,
      'values': {
        'power': 647460
      }
    },
    {
      'time': 1536407792845,
      'values': {
        'power': 646830
      }
    },
    {
      'time': 1536407794847,
      'values': {
        'power': 646570
      }
    },
    {
      'time': 1536407796849,
      'values': {
        'power': 646530
      }
    },
    {
      'time': 1536407798851,
      'values': {
        'power': 646540
      }
    },
    {
      'time': 1536407800853,
      'values': {
        'power': 647000
      }
    },
    {
      'time': 1536407802854,
      'values': {
        'power': 647670
      }
    },
    {
      'time': 1536407804857,
      'values': {
        'power': 647300
      }
    },
    {
      'time': 1536407806861,
      'values': {
        'power': 645990
      }
    },
    {
      'time': 1536407808861,
      'values': {
        'power': 645640
      }
    },
    {
      'time': 1536407810863,
      'values': {
        'power': 645620
      }
    },
    {
      'time': 1536407812866,
      'values': {
        'power': 645040
      }
    },
    {
      'time': 1536407814866,
      'values': {
        'power': 645100
      }
    },
    {
      'time': 1536407816868,
      'values': {
        'power': 645350
      }
    },
    {
      'time': 1536407818871,
      'values': {
        'power': 645710
      }
    },
    {
      'time': 1536407820873,
      'values': {
        'power': 645270
      }
    },
    {
      'time': 1536407822875,
      'values': {
        'power': 644800
      }
    },
    {
      'time': 1536407824877,
      'values': {
        'power': 644960
      }
    },
    {
      'time': 1536407826878,
      'values': {
        'power': 645510
      }
    },
    {
      'time': 1536407828880,
      'values': {
        'power': 645940
      }
    },
    {
      'time': 1536407830883,
      'values': {
        'power': 645510
      }
    },
    {
      'time': 1536407832884,
      'values': {
        'power': 644830
      }
    },
    {
      'time': 1536407834886,
      'values': {
        'power': 644250
      }
    },
    {
      'time': 1536407836889,
      'values': {
        'power': 644470
      }
    },
    {
      'time': 1536407838891,
      'values': {
        'power': 644370
      }
    },
    {
      'time': 1536407840892,
      'values': {
        'power': 644030
      }
    },
    {
      'time': 1536407842894,
      'values': {
        'power': 644230
      }
    },
    {
      'time': 1536407844896,
      'values': {
        'power': 644060
      }
    },
    {
      'time': 1536407846898,
      'values': {
        'power': 643870
      }
    },
    {
      'time': 1536407848899,
      'values': {
        'power': 643900
      }
    },
    {
      'time': 1536407850902,
      'values': {
        'power': 644230
      }
    },
    {
      'time': 1536407852904,
      'values': {
        'power': 644730
      }
    },
    {
      'time': 1536407854906,
      'values': {
        'power': 644930
      }
    },
    {
      'time': 1536407856908,
      'values': {
        'power': 644900
      }
    },
    {
      'time': 1536407858909,
      'values': {
        'power': 794410
      }
    },
    {
      'time': 1536407860911,
      'values': {
        'power': 1131230
      }
    },
    {
      'time': 1536407862914,
      'values': {
        'power': 1211170
      }
    },
    {
      'time': 1536407864916,
      'values': {
        'power': 905470
      }
    },
    {
      'time': 1536407866918,
      'values': {
        'power': 721510
      }
    },
    {
      'time': 1536407868920,
      'values': {
        'power': 714210
      }
    },
    {
      'time': 1536407870922,
      'values': {
        'power': 711570
      }
    },
    {
      'time': 1536407872924,
      'values': {
        'power': 710520
      }
    },
    {
      'time': 1536407874926,
      'values': {
        'power': 709420
      }
    },
    {
      'time': 1536407876928,
      'values': {
        'power': 708210
      }
    },
    {
      'time': 1536407878931,
      'values': {
        'power': 706940
      }
    },
    {
      'time': 1536407880933,
      'values': {
        'power': 704930
      }
    },
    {
      'time': 1536407882934,
      'values': {
        'power': 703880
      }
    },
    {
      'time': 1536407884935,
      'values': {
        'power': 703670
      }
    },
    {
      'time': 1536407886937,
      'values': {
        'power': 703790
      }
    },
    {
      'time': 1536407888939,
      'values': {
        'power': 704260
      }
    },
    {
      'time': 1536407890941,
      'values': {
        'power': 705670
      }
    },
    {
      'time': 1536407892943,
      'values': {
        'power': 707350
      }
    },
    {
      'time': 1536407894945,
      'values': {
        'power': 706700
      }
    },
    {
      'time': 1536407896947,
      'values': {
        'power': 705350
      }
    },
    {
      'time': 1536407898949,
      'values': {
        'power': 705400
      }
    },
    {
      'time': 1536407900951,
      'values': {
        'power': 706060
      }
    },
    {
      'time': 1536407902953,
      'values': {
        'power': 707050
      }
    },
    {
      'time': 1536407904955,
      'values': {
        'power': 707590
      }
    },
    {
      'time': 1536407906957,
      'values': {
        'power': 707250
      }
    },
    {
      'time': 1536407908959,
      'values': {
        'power': 707590
      }
    },
    {
      'time': 1536407910961,
      'values': {
        'power': 710050
      }
    },
    {
      'time': 1536407912963,
      'values': {
        'power': 710730
      }
    },
    {
      'time': 1536407914965,
      'values': {
        'power': 709180
      }
    },
    {
      'time': 1536407916966,
      'values': {
        'power': 709510
      }
    },
    {
      'time': 1536407918969,
      'values': {
        'power': 709830
      }
    },
    {
      'time': 1536407920971,
      'values': {
        'power': 709710
      }
    },
    {
      'time': 1536407922973,
      'values': {
        'power': 709980
      }
    },
    {
      'time': 1536407924975,
      'values': {
        'power': 710680
      }
    },
    {
      'time': 1536407926977,
      'values': {
        'power': 711580
      }
    },
    {
      'time': 1536407928979,
      'values': {
        'power': 712160
      }
    },
    {
      'time': 1536407930981,
      'values': {
        'power': 712240
      }
    },
    {
      'time': 1536407932986,
      'values': {
        'power': 711600
      }
    },
    {
      'time': 1536407934984,
      'values': {
        'power': 711180
      }
    },
    {
      'time': 1536407936986,
      'values': {
        'power': 711520
      }
    },
    {
      'time': 1536407938988,
      'values': {
        'power': 711280
      }
    },
    {
      'time': 1536407940990,
      'values': {
        'power': 710870
      }
    },
    {
      'time': 1536407942992,
      'values': {
        'power': 711060
      }
    },
    {
      'time': 1536407944995,
      'values': {
        'power': 711050
      }
    },
    {
      'time': 1536407946996,
      'values': {
        'power': 710790
      }
    },
    {
      'time': 1536407948997,
      'values': {
        'power': 711150
      }
    },
    {
      'time': 1536407950999,
      'values': {
        'power': 711250
      }
    },
    {
      'time': 1536407953002,
      'values': {
        'power': 711320
      }
    },
    {
      'time': 1536407955004,
      'values': {
        'power': 711650
      }
    },
    {
      'time': 1536407957006,
      'values': {
        'power': 711830
      }
    },
    {
      'time': 1536407959008,
      'values': {
        'power': 711640
      }
    },
    {
      'time': 1536407961010,
      'values': {
        'power': 710780
      }
    },
    {
      'time': 1536407963011,
      'values': {
        'power': 710950
      }
    },
    {
      'time': 1536407965013,
      'values': {
        'power': 710800
      }
    },
    {
      'time': 1536407967016,
      'values': {
        'power': 709920
      }
    },
    {
      'time': 1536407969018,
      'values': {
        'power': 709940
      }
    },
    {
      'time': 1536407971020,
      'values': {
        'power': 710350
      }
    },
    {
      'time': 1536407973022,
      'values': {
        'power': 710430
      }
    },
    {
      'time': 1536407975024,
      'values': {
        'power': 710970
      }
    },
    {
      'time': 1536407977026,
      'values': {
        'power': 711780
      }
    },
    {
      'time': 1536407979028,
      'values': {
        'power': 711220
      }
    },
    {
      'time': 1536407981029,
      'values': {
        'power': 710490
      }
    },
    {
      'time': 1536407983031,
      'values': {
        'power': 711860
      }
    },
    {
      'time': 1536407985033,
      'values': {
        'power': 713780
      }
    },
    {
      'time': 1536407987035,
      'values': {
        'power': 713540
      }
    },
    {
      'time': 1536407989037,
      'values': {
        'power': 711890
      }
    },
    {
      'time': 1536407991039,
      'values': {
        'power': 710100
      }
    },
    {
      'time': 1536407993041,
      'values': {
        'power': 709640
      }
    },
    {
      'time': 1536407995043,
      'values': {
        'power': 710140
      }
    },
    {
      'time': 1536407997045,
      'values': {
        'power': 711120
      }
    },
    {
      'time': 1536407999047,
      'values': {
        'power': 711890
      }
    },
    {
      'time': 1536408001049,
      'values': {
        'power': 711830
      }
    },
    {
      'time': 1536408003051,
      'values': {
        'power': 711590
      }
    },
    {
      'time': 1536408005053,
      'values': {
        'power': 710600
      }
    },
    {
      'time': 1536408007055,
      'values': {
        'power': 710300
      }
    },
    {
      'time': 1536408009057,
      'values': {
        'power': 713630
      }
    },
    {
      'time': 1536408011059,
      'values': {
        'power': 713360
      }
    },
    {
      'time': 1536408013061,
      'values': {
        'power': 710140
      }
    },
    {
      'time': 1536408015065,
      'values': {
        'power': 710050
      }
    },
    {
      'time': 1536408017064,
      'values': {
        'power': 710300
      }
    },
    {
      'time': 1536408019066,
      'values': {
        'power': 709690
      }
    },
    {
      'time': 1536408021069,
      'values': {
        'power': 709540
      }
    },
    {
      'time': 1536408023071,
      'values': {
        'power': 709600
      }
    },
    {
      'time': 1536408025073,
      'values': {
        'power': 709760
      }
    },
    {
      'time': 1536408027074,
      'values': {
        'power': 709430
      }
    },
    {
      'time': 1536408029076,
      'values': {
        'power': 709590
      }
    },
    {
      'time': 1536408031078,
      'values': {
        'power': 709930
      }
    },
    {
      'time': 1536408033080,
      'values': {
        'power': 709120
      }
    },
    {
      'time': 1536408035082,
      'values': {
        'power': 708970
      }
    },
    {
      'time': 1536408037084,
      'values': {
        'power': 709260
      }
    },
    {
      'time': 1536408039086,
      'values': {
        'power': 712370
      }
    },
    {
      'time': 1536408041087,
      'values': {
        'power': 720020
      }
    },
    {
      'time': 1536408043090,
      'values': {
        'power': 725420
      }
    },
    {
      'time': 1536408045092,
      'values': {
        'power': 726010
      }
    },
    {
      'time': 1536408047094,
      'values': {
        'power': 725600
      }
    },
    {
      'time': 1536408049095,
      'values': {
        'power': 725020
      }
    },
    {
      'time': 1536408051098,
      'values': {
        'power': 723980
      }
    },
    {
      'time': 1536408053100,
      'values': {
        'power': 723220
      }
    },
    {
      'time': 1536408055102,
      'values': {
        'power': 723350
      }
    },
    {
      'time': 1536408057104,
      'values': {
        'power': 723600
      }
    },
    {
      'time': 1536408059106,
      'values': {
        'power': 723930
      }
    },
    {
      'time': 1536408061108,
      'values': {
        'power': 724130
      }
    },
    {
      'time': 1536408063109,
      'values': {
        'power': 724080
      }
    },
    {
      'time': 1536408065111,
      'values': {
        'power': 723740
      }
    },
    {
      'time': 1536408067113,
      'values': {
        'power': 723520
      }
    },
    {
      'time': 1536408069116,
      'values': {
        'power': 724630
      }
    },
    {
      'time': 1536408071119,
      'values': {
        'power': 725540
      }
    },
    {
      'time': 1536408073119,
      'values': {
        'power': 724980
      }
    },
    {
      'time': 1536408075121,
      'values': {
        'power': 724770
      }
    },
    {
      'time': 1536408077123,
      'values': {
        'power': 724880
      }
    },
    {
      'time': 1536408079125,
      'values': {
        'power': 720760
      }
    },
    {
      'time': 1536408081127,
      'values': {
        'power': 713160
      }
    },
    {
      'time': 1536408083129,
      'values': {
        'power': 709560
      }
    },
    {
      'time': 1536408085130,
      'values': {
        'power': 708990
      }
    },
    {
      'time': 1536408087133,
      'values': {
        'power': 707560
      }
    },
    {
      'time': 1536408089134,
      'values': {
        'power': 706750
      }
    },
    {
      'time': 1536408091136,
      'values': {
        'power': 706710
      }
    },
    {
      'time': 1536408093139,
      'values': {
        'power': 706940
      }
    },
    {
      'time': 1536408095141,
      'values': {
        'power': 707160
      }
    },
    {
      'time': 1536408097143,
      'values': {
        'power': 708010
      }
    },
    {
      'time': 1536408099144,
      'values': {
        'power': 709370
      }
    },
    {
      'time': 1536408101146,
      'values': {
        'power': 709550
      }
    },
    {
      'time': 1536408103149,
      'values': {
        'power': 708760
      }
    },
    {
      'time': 1536408105151,
      'values': {
        'power': 707320
      }
    },
    {
      'time': 1536408107153,
      'values': {
        'power': 706640
      }
    },
    {
      'time': 1536408109155,
      'values': {
        'power': 707440
      }
    },
    {
      'time': 1536408111157,
      'values': {
        'power': 707530
      }
    },
    {
      'time': 1536408113160,
      'values': {
        'power': 708310
      }
    },
    {
      'time': 1536408115161,
      'values': {
        'power': 716170
      }
    },
    {
      'time': 1536408117243,
      'values': {
        'power': 723230
      }
    },
    {
      'time': 1536408119164,
      'values': {
        'power': 723350
      }
    },
    {
      'time': 1536408121166,
      'values': {
        'power': 722730
      }
    },
    {
      'time': 1536408123168,
      'values': {
        'power': 722060
      }
    },
    {
      'time': 1536408125170,
      'values': {
        'power': 721370
      }
    },
    {
      'time': 1536408127172,
      'values': {
        'power': 721060
      }
    },
    {
      'time': 1536408129174,
      'values': {
        'power': 716560
      }
    },
    {
      'time': 1536408131176,
      'values': {
        'power': 699470
      }
    },
    {
      'time': 1536408133178,
      'values': {
        'power': 685940
      }
    },
    {
      'time': 1536408135180,
      'values': {
        'power': 685750
      }
    },
    {
      'time': 1536408137182,
      'values': {
        'power': 686740
      }
    },
    {
      'time': 1536408139184,
      'values': {
        'power': 687070
      }
    },
    {
      'time': 1536408141185,
      'values': {
        'power': 687610
      }
    },
    {
      'time': 1536408143187,
      'values': {
        'power': 688030
      }
    },
    {
      'time': 1536408145190,
      'values': {
        'power': 687440
      }
    },
    {
      'time': 1536408147192,
      'values': {
        'power': 687390
      }
    },
    {
      'time': 1536408149195,
      'values': {
        'power': 687450
      }
    },
    {
      'time': 1536408151196,
      'values': {
        'power': 687120
      }
    },
    {
      'time': 1536408153197,
      'values': {
        'power': 682210
      }
    },
    {
      'time': 1536408155199,
      'values': {
        'power': 675370
      }
    },
    {
      'time': 1536408157202,
      'values': {
        'power': 672270
      }
    },
    {
      'time': 1536408159204,
      'values': {
        'power': 672230
      }
    },
    {
      'time': 1536408161206,
      'values': {
        'power': 671980
      }
    },
    {
      'time': 1536408163208,
      'values': {
        'power': 671840
      }
    },
    {
      'time': 1536408165210,
      'values': {
        'power': 671660
      }
    },
    {
      'time': 1536408167213,
      'values': {
        'power': 671140
      }
    },
    {
      'time': 1536408169214,
      'values': {
        'power': 671860
      }
    },
    {
      'time': 1536408171215,
      'values': {
        'power': 672420
      }
    },
    {
      'time': 1536408173217,
      'values': {
        'power': 672350
      }
    },
    {
      'time': 1536408175219,
      'values': {
        'power': 672350
      }
    },
    {
      'time': 1536408177221,
      'values': {
        'power': 672130
      }
    },
    {
      'time': 1536408179223,
      'values': {
        'power': 673280
      }
    },
    {
      'time': 1536408181225,
      'values': {
        'power': 674290
      }
    },
    {
      'time': 1536408183226,
      'values': {
        'power': 672960
      }
    },
    {
      'time': 1536408185228,
      'values': {
        'power': 671440
      }
    },
    {
      'time': 1536408187231,
      'values': {
        'power': 673230
      }
    },
    {
      'time': 1536408189233,
      'values': {
        'power': 680960
      }
    },
    {
      'time': 1536408191235,
      'values': {
        'power': 686260
      }
    },
    {
      'time': 1536408193236,
      'values': {
        'power': 686460
      }
    },
    {
      'time': 1536408195238,
      'values': {
        'power': 686330
      }
    },
    {
      'time': 1536408197241,
      'values': {
        'power': 686760
      }
    },
    {
      'time': 1536408199243,
      'values': {
        'power': 687120
      }
    },
    {
      'time': 1536408201245,
      'values': {
        'power': 686830
      }
    },
    {
      'time': 1536408203247,
      'values': {
        'power': 686330
      }
    },
    {
      'time': 1536408205249,
      'values': {
        'power': 685440
      }
    },
    {
      'time': 1536408207250,
      'values': {
        'power': 685380
      }
    },
    {
      'time': 1536408209252,
      'values': {
        'power': 686230
      }
    },
    {
      'time': 1536408211255,
      'values': {
        'power': 688970
      }
    },
    {
      'time': 1536408213257,
      'values': {
        'power': 689060
      }
    },
    {
      'time': 1536408215260,
      'values': {
        'power': 686720
      }
    },
    {
      'time': 1536408217261,
      'values': {
        'power': 686720
      }
    },
    {
      'time': 1536408219262,
      'values': {
        'power': 687180
      }
    },
    {
      'time': 1536408221264,
      'values': {
        'power': 686350
      }
    },
    {
      'time': 1536408223266,
      'values': {
        'power': 686150
      }
    },
    {
      'time': 1536408225268,
      'values': {
        'power': 688470
      }
    },
    {
      'time': 1536408227270,
      'values': {
        'power': 685070
      }
    },
    {
      'time': 1536408229272,
      'values': {
        'power': 678650
      }
    },
    {
      'time': 1536408231274,
      'values': {
        'power': 677850
      }
    },
    {
      'time': 1536408233276,
      'values': {
        'power': 677810
      }
    },
    {
      'time': 1536408235277,
      'values': {
        'power': 677370
      }
    },
    {
      'time': 1536408237279,
      'values': {
        'power': 677150
      }
    },
    {
      'time': 1536408239282,
      'values': {
        'power': 677170
      }
    },
    {
      'time': 1536408241284,
      'values': {
        'power': 678270
      }
    },
    {
      'time': 1536408243285,
      'values': {
        'power': 678660
      }
    },
    {
      'time': 1536408245287,
      'values': {
        'power': 677620
      }
    },
    {
      'time': 1536408247290,
      'values': {
        'power': 677070
      }
    },
    {
      'time': 1536408249292,
      'values': {
        'power': 677230
      }
    },
    {
      'time': 1536408251293,
      'values': {
        'power': 668550
      }
    },
    {
      'time': 1536408253295,
      'values': {
        'power': 648710
      }
    },
    {
      'time': 1536408255298,
      'values': {
        'power': 667770
      }
    },
    {
      'time': 1536408257300,
      'values': {
        'power': 711810
      }
    },
    {
      'time': 1536408259302,
      'values': {
        'power': 728960
      }
    },
    {
      'time': 1536408261305,
      'values': {
        'power': 737660
      }
    },
    {
      'time': 1536408263305,
      'values': {
        'power': 738520
      }
    },
    {
      'time': 1536408265307,
      'values': {
        'power': 734140
      }
    },
    {
      'time': 1536408267309,
      'values': {
        'power': 737190
      }
    },
    {
      'time': 1536408269311,
      'values': {
        'power': 737900
      }
    },
    {
      'time': 1536408271312,
      'values': {
        'power': 734650
      }
    },
    {
      'time': 1536408273315,
      'values': {
        'power': 730230
      }
    },
    {
      'time': 1536408275317,
      'values': {
        'power': 727020
      }
    },
    {
      'time': 1536408277319,
      'values': {
        'power': 723710
      }
    },
    {
      'time': 1536408279321,
      'values': {
        'power': 720770
      }
    },
    {
      'time': 1536408281323,
      'values': {
        'power': 720470
      }
    },
    {
      'time': 1536408283326,
      'values': {
        'power': 720830
      }
    },
    {
      'time': 1536408285326,
      'values': {
        'power': 723160
      }
    },
    {
      'time': 1536408287329,
      'values': {
        'power': 725350
      }
    },
    {
      'time': 1536408289330,
      'values': {
        'power': 723540
      }
    },
    {
      'time': 1536408291333,
      'values': {
        'power': 728050
      }
    },
    {
      'time': 1536408293335,
      'values': {
        'power': 729990
      }
    },
    {
      'time': 1536408295336,
      'values': {
        'power': 727570
      }
    },
    {
      'time': 1536408297338,
      'values': {
        'power': 732450
      }
    },
    {
      'time': 1536408299341,
      'values': {
        'power': 734660
      }
    },
    {
      'time': 1536408301343,
      'values': {
        'power': 729640
      }
    },
    {
      'time': 1536408303345,
      'values': {
        'power': 724740
      }
    },
    {
      'time': 1536408305347,
      'values': {
        'power': 725850
      }
    },
    {
      'time': 1536408307349,
      'values': {
        'power': 729340
      }
    },
    {
      'time': 1536408309350,
      'values': {
        'power': 734770
      }
    },
    {
      'time': 1536408311352,
      'values': {
        'power': 741720
      }
    },
    {
      'time': 1536408313354,
      'values': {
        'power': 741710
      }
    },
    {
      'time': 1536408315358,
      'values': {
        'power': 741940
      }
    },
    {
      'time': 1536408317358,
      'values': {
        'power': 743410
      }
    },
    {
      'time': 1536408319360,
      'values': {
        'power': 742330
      }
    },
    {
      'time': 1536408321362,
      'values': {
        'power': 740650
      }
    },
    {
      'time': 1536408323364,
      'values': {
        'power': 738620
      }
    },
    {
      'time': 1536408325366,
      'values': {
        'power': 738750
      }
    },
    {
      'time': 1536408327368,
      'values': {
        'power': 741220
      }
    },
    {
      'time': 1536408329370,
      'values': {
        'power': 740550
      }
    },
    {
      'time': 1536408331372,
      'values': {
        'power': 737680
      }
    },
    {
      'time': 1536408333374,
      'values': {
        'power': 737100
      }
    },
    {
      'time': 1536408335376,
      'values': {
        'power': 736410
      }
    },
    {
      'time': 1536408337378,
      'values': {
        'power': 736530
      }
    },
    {
      'time': 1536408339380,
      'values': {
        'power': 737330
      }
    },
    {
      'time': 1536408341382,
      'values': {
        'power': 737280
      }
    },
    {
      'time': 1536408343384,
      'values': {
        'power': 736270
      }
    },
    {
      'time': 1536408345386,
      'values': {
        'power': 733430
      }
    },
    {
      'time': 1536408347388,
      'values': {
        'power': 731490
      }
    },
    {
      'time': 1536408349390,
      'values': {
        'power': 731150
      }
    },
    {
      'time': 1536408351392,
      'values': {
        'power': 732610
      }
    },
    {
      'time': 1536408353393,
      'values': {
        'power': 736450
      }
    },
    {
      'time': 1536408355396,
      'values': {
        'power': 737520
      }
    },
    {
      'time': 1536408357397,
      'values': {
        'power': 739020
      }
    },
    {
      'time': 1536408359399,
      'values': {
        'power': 740230
      }
    },
    {
      'time': 1536408361401,
      'values': {
        'power': 740090
      }
    },
    {
      'time': 1536408363403,
      'values': {
        'power': 740330
      }
    },
    {
      'time': 1536408365405,
      'values': {
        'power': 738280
      }
    },
    {
      'time': 1536408367407,
      'values': {
        'power': 737030
      }
    },
    {
      'time': 1536408369411,
      'values': {
        'power': 736950
      }
    },
    {
      'time': 1536408371412,
      'values': {
        'power': 735760
      }
    },
    {
      'time': 1536408373412,
      'values': {
        'power': 735830
      }
    },
    {
      'time': 1536408375415,
      'values': {
        'power': 735840
      }
    },
    {
      'time': 1536408377417,
      'values': {
        'power': 735990
      }
    },
    {
      'time': 1536408379419,
      'values': {
        'power': 736330
      }
    },
    {
      'time': 1536408381421,
      'values': {
        'power': 735950
      }
    },
    {
      'time': 1536408383423,
      'values': {
        'power': 735690
      }
    },
    {
      'time': 1536408385424,
      'values': {
        'power': 735770
      }
    },
    {
      'time': 1536408387426,
      'values': {
        'power': 736420
      }
    },
    {
      'time': 1536408389429,
      'values': {
        'power': 737760
      }
    },
    {
      'time': 1536408391431,
      'values': {
        'power': 738670
      }
    },
    {
      'time': 1536408393434,
      'values': {
        'power': 738760
      }
    },
    {
      'time': 1536408395437,
      'values': {
        'power': 737350
      }
    },
    {
      'time': 1536408397436,
      'values': {
        'power': 737820
      }
    },
    {
      'time': 1536408399438,
      'values': {
        'power': 738230
      }
    },
    {
      'time': 1536408401441,
      'values': {
        'power': 736410
      }
    },
    {
      'time': 1536408403442,
      'values': {
        'power': 737000
      }
    },
    {
      'time': 1536408405444,
      'values': {
        'power': 736060
      }
    },
    {
      'time': 1536408407446,
      'values': {
        'power': 734370
      }
    },
    {
      'time': 1536408409448,
      'values': {
        'power': 734440
      }
    },
    {
      'time': 1536408411450,
      'values': {
        'power': 736240
      }
    },
    {
      'time': 1536408413452,
      'values': {
        'power': 737950
      }
    },
    {
      'time': 1536408415454,
      'values': {
        'power': 737440
      }
    },
    {
      'time': 1536408417457,
      'values': {
        'power': 736300
      }
    },
    {
      'time': 1536408419457,
      'values': {
        'power': 735710
      }
    },
    {
      'time': 1536408421461,
      'values': {
        'power': 736310
      }
    },
    {
      'time': 1536408423462,
      'values': {
        'power': 736240
      }
    },
    {
      'time': 1536408425463,
      'values': {
        'power': 735400
      }
    },
    {
      'time': 1536408427465,
      'values': {
        'power': 735330
      }
    },
    {
      'time': 1536408429468,
      'values': {
        'power': 736980
      }
    },
    {
      'time': 1536408431470,
      'values': {
        'power': 737060
      }
    },
    {
      'time': 1536408433472,
      'values': {
        'power': 735450
      }
    },
    {
      'time': 1536408435474,
      'values': {
        'power': 734080
      }
    },
    {
      'time': 1536408437476,
      'values': {
        'power': 733550
      }
    },
    {
      'time': 1536408439479,
      'values': {
        'power': 735560
      }
    },
    {
      'time': 1536408441480,
      'values': {
        'power': 738590
      }
    },
    {
      'time': 1536408443482,
      'values': {
        'power': 739720
      }
    },
    {
      'time': 1536408445484,
      'values': {
        'power': 738100
      }
    },
    {
      'time': 1536408447486,
      'values': {
        'power': 735730
      }
    },
    {
      'time': 1536408449489,
      'values': {
        'power': 735980
      }
    },
    {
      'time': 1536408451491,
      'values': {
        'power': 738440
      }
    },
    {
      'time': 1536408453491,
      'values': {
        'power': 739690
      }
    },
    {
      'time': 1536408455493,
      'values': {
        'power': 739090
      }
    },
    {
      'time': 1536408457495,
      'values': {
        'power': 738610
      }
    },
    {
      'time': 1536408459497,
      'values': {
        'power': 737540
      }
    },
    {
      'time': 1536408461499,
      'values': {
        'power': 735800
      }
    },
    {
      'time': 1536408463501,
      'values': {
        'power': 734390
      }
    },
    {
      'time': 1536408465503,
      'values': {
        'power': 733880
      }
    },
    {
      'time': 1536408467505,
      'values': {
        'power': 734140
      }
    },
    {
      'time': 1536408469507,
      'values': {
        'power': 734250
      }
    },
    {
      'time': 1536408471509,
      'values': {
        'power': 734400
      }
    },
    {
      'time': 1536408473511,
      'values': {
        'power': 733720
      }
    },
    {
      'time': 1536408475512,
      'values': {
        'power': 733730
      }
    },
    {
      'time': 1536408477515,
      'values': {
        'power': 734840
      }
    },
    {
      'time': 1536408479516,
      'values': {
        'power': 734000
      }
    },
    {
      'time': 1536408481519,
      'values': {
        'power': 733220
      }
    },
    {
      'time': 1536408483521,
      'values': {
        'power': 734040
      }
    },
    {
      'time': 1536408485522,
      'values': {
        'power': 734960
      }
    },
    {
      'time': 1536408487524,
      'values': {
        'power': 735740
      }
    },
    {
      'time': 1536408489527,
      'values': {
        'power': 737150
      }
    },
    {
      'time': 1536408491529,
      'values': {
        'power': 736250
      }
    },
    {
      'time': 1536408493531,
      'values': {
        'power': 734300
      }
    },
    {
      'time': 1536408495533,
      'values': {
        'power': 733350
      }
    },
    {
      'time': 1536408497534,
      'values': {
        'power': 733190
      }
    },
    {
      'time': 1536408499537,
      'values': {
        'power': 734790
      }
    },
    {
      'time': 1536408501538,
      'values': {
        'power': 868870
      }
    },
    {
      'time': 1536408503540,
      'values': {
        'power': 967950
      }
    },
    {
      'time': 1536408505542,
      'values': {
        'power': 844850
      }
    },
    {
      'time': 1536408507544,
      'values': {
        'power': 781640
      }
    },
    {
      'time': 1536408509475,
      'values': {
        'power': 782680
      }
    },
    {
      'time': 1536408511478,
      'values': {
        'power': 785680
      }
    },
    {
      'time': 1536408513480,
      'values': {
        'power': 787040
      }
    },
    {
      'time': 1536408515482,
      'values': {
        'power': 784710
      }
    },
    {
      'time': 1536408517484,
      'values': {
        'power': 778520
      }
    },
    {
      'time': 1536408519485,
      'values': {
        'power': 749870
      }
    },
    {
      'time': 1536408521487,
      'values': {
        'power': 723360
      }
    },
    {
      'time': 1536408523490,
      'values': {
        'power': 720750
      }
    },
    {
      'time': 1536408525491,
      'values': {
        'power': 724990
      }
    },
    {
      'time': 1536408527493,
      'values': {
        'power': 856090
      }
    },
    {
      'time': 1536408529496,
      'values': {
        'power': 880540
      }
    },
    {
      'time': 1536408531497,
      'values': {
        'power': 772540
      }
    },
    {
      'time': 1536408533499,
      'values': {
        'power': 766950
      }
    },
    {
      'time': 1536408535501,
      'values': {
        'power': 766080
      }
    },
    {
      'time': 1536408537503,
      'values': {
        'power': 765880
      }
    },
    {
      'time': 1536408539505,
      'values': {
        'power': 766800
      }
    },
    {
      'time': 1536408541507,
      'values': {
        'power': 768790
      }
    },
    {
      'time': 1536408543509,
      'values': {
        'power': 769930
      }
    },
    {
      'time': 1536408545511,
      'values': {
        'power': 767210
      }
    },
    {
      'time': 1536408547513,
      'values': {
        'power': 764860
      }
    },
    {
      'time': 1536408549516,
      'values': {
        'power': 765250
      }
    },
    {
      'time': 1536408551518,
      'values': {
        'power': 765840
      }
    },
    {
      'time': 1536408553518,
      'values': {
        'power': 766760
      }
    },
    {
      'time': 1536408555521,
      'values': {
        'power': 765700
      }
    },
    {
      'time': 1536408557523,
      'values': {
        'power': 765260
      }
    },
    {
      'time': 1536408559525,
      'values': {
        'power': 764830
      }
    },
    {
      'time': 1536408561526,
      'values': {
        'power': 763520
      }
    },
    {
      'time': 1536408563529,
      'values': {
        'power': 763040
      }
    },
    {
      'time': 1536408565531,
      'values': {
        'power': 762660
      }
    },
    {
      'time': 1536408567533,
      'values': {
        'power': 763180
      }
    },
    {
      'time': 1536408569535,
      'values': {
        'power': 764330
      }
    },
    {
      'time': 1536408571537,
      'values': {
        'power': 763820
      }
    },
    {
      'time': 1536408573539,
      'values': {
        'power': 763300
      }
    },
    {
      'time': 1536408575541,
      'values': {
        'power': 763430
      }
    },
    {
      'time': 1536408577542,
      'values': {
        'power': 763540
      }
    },
    {
      'time': 1536408579544,
      'values': {
        'power': 764340
      }
    },
    {
      'time': 1536408581546,
      'values': {
        'power': 763360
      }
    },
    {
      'time': 1536408583548,
      'values': {
        'power': 763250
      }
    },
    {
      'time': 1536408585550,
      'values': {
        'power': 765830
      }
    },
    {
      'time': 1536408587551,
      'values': {
        'power': 766560
      }
    },
    {
      'time': 1536408589554,
      'values': {
        'power': 763870
      }
    },
    {
      'time': 1536408591556,
      'values': {
        'power': 762510
      }
    },
    {
      'time': 1536408593558,
      'values': {
        'power': 762280
      }
    },
    {
      'time': 1536408595560,
      'values': {
        'power': 761360
      }
    },
    {
      'time': 1536408597562,
      'values': {
        'power': 761200
      }
    },
    {
      'time': 1536408599564,
      'values': {
        'power': 761940
      }
    },
    {
      'time': 1536408601566,
      'values': {
        'power': 762590
      }
    },
    {
      'time': 1536408603567,
      'values': {
        'power': 762930
      }
    },
    {
      'time': 1536408605569,
      'values': {
        'power': 761160
      }
    },
    {
      'time': 1536408607572,
      'values': {
        'power': 760190
      }
    },
    {
      'time': 1536408609574,
      'values': {
        'power': 761960
      }
    },
    {
      'time': 1536408611576,
      'values': {
        'power': 762200
      }
    },
    {
      'time': 1536408613578,
      'values': {
        'power': 761170
      }
    },
    {
      'time': 1536408615580,
      'values': {
        'power': 760960
      }
    },
    {
      'time': 1536408617582,
      'values': {
        'power': 763940
      }
    },
    {
      'time': 1536408619583,
      'values': {
        'power': 764570
      }
    },
    {
      'time': 1536408621585,
      'values': {
        'power': 760300
      }
    },
    {
      'time': 1536408623588,
      'values': {
        'power': 759350
      }
    },
    {
      'time': 1536408625590,
      'values': {
        'power': 759090
      }
    },
    {
      'time': 1536408627593,
      'values': {
        'power': 759200
      }
    },
    {
      'time': 1536408629593,
      'values': {
        'power': 760750
      }
    },
    {
      'time': 1536408631595,
      'values': {
        'power': 761730
      }
    },
    {
      'time': 1536408633597,
      'values': {
        'power': 761270
      }
    },
    {
      'time': 1536408635599,
      'values': {
        'power': 760100
      }
    },
    {
      'time': 1536408637601,
      'values': {
        'power': 758610
      }
    },
    {
      'time': 1536408639603,
      'values': {
        'power': 758280
      }
    },
    {
      'time': 1536408641604,
      'values': {
        'power': 759680
      }
    },
    {
      'time': 1536408643606,
      'values': {
        'power': 761220
      }
    },
    {
      'time': 1536408645608,
      'values': {
        'power': 760210
      }
    },
    {
      'time': 1536408647611,
      'values': {
        'power': 759300
      }
    },
    {
      'time': 1536408649613,
      'values': {
        'power': 759210
      }
    },
    {
      'time': 1536408651616,
      'values': {
        'power': 757710
      }
    },
    {
      'time': 1536408653616,
      'values': {
        'power': 757530
      }
    },
    {
      'time': 1536408655618,
      'values': {
        'power': 759290
      }
    },
    {
      'time': 1536408657621,
      'values': {
        'power': 758740
      }
    },
    {
      'time': 1536408659623,
      'values': {
        'power': 758370
      }
    },
    {
      'time': 1536408661625,
      'values': {
        'power': 758670
      }
    },
    {
      'time': 1536408663627,
      'values': {
        'power': 759320
      }
    },
    {
      'time': 1536408665629,
      'values': {
        'power': 760300
      }
    },
    {
      'time': 1536408667631,
      'values': {
        'power': 758920
      }
    },
    {
      'time': 1536408669632,
      'values': {
        'power': 758210
      }
    },
    {
      'time': 1536408671634,
      'values': {
        'power': 757420
      }
    },
    {
      'time': 1536408673636,
      'values': {
        'power': 755510
      }
    },
    {
      'time': 1536408675638,
      'values': {
        'power': 754510
      }
    },
    {
      'time': 1536408677640,
      'values': {
        'power': 755550
      }
    },
    {
      'time': 1536408679642,
      'values': {
        'power': 755490
      }
    },
    {
      'time': 1536408681643,
      'values': {
        'power': 754400
      }
    },
    {
      'time': 1536408683646,
      'values': {
        'power': 756320
      }
    },
    {
      'time': 1536408685648,
      'values': {
        'power': 756220
      }
    },
    {
      'time': 1536408687649,
      'values': {
        'power': 754610
      }
    },
    {
      'time': 1536408689651,
      'values': {
        'power': 754020
      }
    },
    {
      'time': 1536408691654,
      'values': {
        'power': 753750
      }
    },
    {
      'time': 1536408693656,
      'values': {
        'power': 754090
      }
    },
    {
      'time': 1536408695658,
      'values': {
        'power': 753590
      }
    },
    {
      'time': 1536408697659,
      'values': {
        'power': 753910
      }
    },
    {
      'time': 1536408699661,
      'values': {
        'power': 755710
      }
    },
    {
      'time': 1536408701664,
      'values': {
        'power': 755420
      }
    },
    {
      'time': 1536408703666,
      'values': {
        'power': 753870
      }
    },
    {
      'time': 1536408705668,
      'values': {
        'power': 753980
      }
    },
    {
      'time': 1536408707669,
      'values': {
        'power': 755440
      }
    },
    {
      'time': 1536408709672,
      'values': {
        'power': 755900
      }
    },
    {
      'time': 1536408711674,
      'values': {
        'power': 755180
      }
    },
    {
      'time': 1536408713676,
      'values': {
        'power': 754650
      }
    },
    {
      'time': 1536408715678,
      'values': {
        'power': 753430
      }
    },
    {
      'time': 1536408717680,
      'values': {
        'power': 752720
      }
    },
    {
      'time': 1536408719682,
      'values': {
        'power': 754770
      }
    },
    {
      'time': 1536408721683,
      'values': {
        'power': 756090
      }
    },
    {
      'time': 1536408723685,
      'values': {
        'power': 756130
      }
    },
    {
      'time': 1536408725687,
      'values': {
        'power': 755630
      }
    },
    {
      'time': 1536408727689,
      'values': {
        'power': 744010
      }
    },
    {
      'time': 1536408729691,
      'values': {
        'power': 597100
      }
    },
    {
      'time': 1536408731692,
      'values': {
        'power': 424470
      }
    },
    {
      'time': 1536408733694,
      'values': {
        'power': 390350
      }
    },
    {
      'time': 1536408735697,
      'values': {
        'power': 393750
      }
    },
    {
      'time': 1536408737699,
      'values': {
        'power': 392440
      }
    },
    {
      'time': 1536408739701,
      'values': {
        'power': 391680
      }
    },
    {
      'time': 1536408741703,
      'values': {
        'power': 393460
      }
    },
    {
      'time': 1536408743705,
      'values': {
        'power': 395740
      }
    },
    {
      'time': 1536408745707,
      'values': {
        'power': 393460
      }
    },
    {
      'time': 1536408747709,
      'values': {
        'power': 389100
      }
    },
    {
      'time': 1536408749711,
      'values': {
        'power': 389390
      }
    },
    {
      'time': 1536408751713,
      'values': {
        'power': 390150
      }
    },
    {
      'time': 1536408753715,
      'values': {
        'power': 390060
      }
    },
    {
      'time': 1536408755717,
      'values': {
        'power': 388900
      }
    },
    {
      'time': 1536408757718,
      'values': {
        'power': 389300
      }
    },
    {
      'time': 1536408759720,
      'values': {
        'power': 391230
      }
    },
    {
      'time': 1536408761723,
      'values': {
        'power': 391290
      }
    },
    {
      'time': 1536408763725,
      'values': {
        'power': 389670
      }
    },
    {
      'time': 1536408765727,
      'values': {
        'power': 387610
      }
    },
    {
      'time': 1536408767728,
      'values': {
        'power': 387400
      }
    },
    {
      'time': 1536408769730,
      'values': {
        'power': 389800
      }
    },
    {
      'time': 1536408771732,
      'values': {
        'power': 390380
      }
    },
    {
      'time': 1536408773734,
      'values': {
        'power': 391040
      }
    },
    {
      'time': 1536408775736,
      'values': {
        'power': 390750
      }
    },
    {
      'time': 1536408777739,
      'values': {
        'power': 389640
      }
    },
    {
      'time': 1536408779740,
      'values': {
        'power': 390290
      }
    },
    {
      'time': 1536408781743,
      'values': {
        'power': 390630
      }
    },
    {
      'time': 1536408783744,
      'values': {
        'power': 390410
      }
    },
    {
      'time': 1536408785746,
      'values': {
        'power': 389130
      }
    },
    {
      'time': 1536408787747,
      'values': {
        'power': 388440
      }
    },
    {
      'time': 1536408789749,
      'values': {
        'power': 389200
      }
    },
    {
      'time': 1536408791752,
      'values': {
        'power': 388630
      }
    },
    {
      'time': 1536408793754,
      'values': {
        'power': 388670
      }
    },
    {
      'time': 1536408795756,
      'values': {
        'power': 388550
      }
    },
    {
      'time': 1536408797758,
      'values': {
        'power': 388610
      }
    },
    {
      'time': 1536408799760,
      'values': {
        'power': 389730
      }
    },
    {
      'time': 1536408801762,
      'values': {
        'power': 390000
      }
    },
    {
      'time': 1536408803764,
      'values': {
        'power': 390250
      }
    },
    {
      'time': 1536408805766,
      'values': {
        'power': 389090
      }
    },
    {
      'time': 1536408807767,
      'values': {
        'power': 389400
      }
    },
    {
      'time': 1536408809769,
      'values': {
        'power': 390590
      }
    },
    {
      'time': 1536408811772,
      'values': {
        'power': 392020
      }
    },
    {
      'time': 1536408813773,
      'values': {
        'power': 392380
      }
    },
    {
      'time': 1536408815775,
      'values': {
        'power': 388610
      }
    },
    {
      'time': 1536408817777,
      'values': {
        'power': 388200
      }
    },
    {
      'time': 1536408819779,
      'values': {
        'power': 388010
      }
    },
    {
      'time': 1536408821780,
      'values': {
        'power': 386080
      }
    },
    {
      'time': 1536408823782,
      'values': {
        'power': 385790
      }
    },
    {
      'time': 1536408825785,
      'values': {
        'power': 384050
      }
    },
    {
      'time': 1536408827787,
      'values': {
        'power': 383060
      }
    },
    {
      'time': 1536408829789,
      'values': {
        'power': 383630
      }
    },
    {
      'time': 1536408831790,
      'values': {
        'power': 386150
      }
    },
    {
      'time': 1536408833792,
      'values': {
        'power': 387490
      }
    },
    {
      'time': 1536408835794,
      'values': {
        'power': 386070
      }
    },
    {
      'time': 1536408837797,
      'values': {
        'power': 386560
      }
    },
    {
      'time': 1536408839799,
      'values': {
        'power': 387630
      }
    },
    {
      'time': 1536408841801,
      'values': {
        'power': 387500
      }
    },
    {
      'time': 1536408843803,
      'values': {
        'power': 385330
      }
    },
    {
      'time': 1536408845805,
      'values': {
        'power': 383470
      }
    },
    {
      'time': 1536408847807,
      'values': {
        'power': 384750
      }
    },
    {
      'time': 1536408849809,
      'values': {
        'power': 385600
      }
    },
    {
      'time': 1536408851811,
      'values': {
        'power': 384770
      }
    },
    {
      'time': 1536408853815,
      'values': {
        'power': 385260
      }
    },
    {
      'time': 1536408855814,
      'values': {
        'power': 386090
      }
    },
    {
      'time': 1536408857819,
      'values': {
        'power': 387630
      }
    },
    {
      'time': 1536408859818,
      'values': {
        'power': 391100
      }
    },
    {
      'time': 1536408861820,
      'values': {
        'power': 390870
      }
    },
    {
      'time': 1536408863822,
      'values': {
        'power': 387540
      }
    },
    {
      'time': 1536408865824,
      'values': {
        'power': 387100
      }
    },
    {
      'time': 1536408867826,
      'values': {
        'power': 389200
      }
    },
    {
      'time': 1536408869828,
      'values': {
        'power': 387240
      }
    },
    {
      'time': 1536408871830,
      'values': {
        'power': 379940
      }
    },
    {
      'time': 1536408873832,
      'values': {
        'power': 380870
      }
    },
    {
      'time': 1536408875834,
      'values': {
        'power': 381140
      }
    },
    {
      'time': 1536408877836,
      'values': {
        'power': 373230
      }
    },
    {
      'time': 1536408879838,
      'values': {
        'power': 369720
      }
    },
    {
      'time': 1536408881840,
      'values': {
        'power': 371010
      }
    },
    {
      'time': 1536408883843,
      'values': {
        'power': 371680
      }
    },
    {
      'time': 1536408885845,
      'values': {
        'power': 371680
      }
    },
    {
      'time': 1536408887845,
      'values': {
        'power': 372320
      }
    },
    {
      'time': 1536408889847,
      'values': {
        'power': 372670
      }
    },
    {
      'time': 1536408891850,
      'values': {
        'power': 372030
      }
    },
    {
      'time': 1536408893852,
      'values': {
        'power': 371450
      }
    },
    {
      'time': 1536408895854,
      'values': {
        'power': 370170
      }
    },
    {
      'time': 1536408897856,
      'values': {
        'power': 372280
      }
    },
    {
      'time': 1536408899858,
      'values': {
        'power': 374970
      }
    },
    {
      'time': 1536408901860,
      'values': {
        'power': 374550
      }
    },
    {
      'time': 1536408903862,
      'values': {
        'power': 373140
      }
    },
    {
      'time': 1536408905864,
      'values': {
        'power': 362220
      }
    },
    {
      'time': 1536408907865,
      'values': {
        'power': 347080
      }
    },
    {
      'time': 1536408909867,
      'values': {
        'power': 340690
      }
    },
    {
      'time': 1536408911869,
      'values': {
        'power': 337860
      }
    },
    {
      'time': 1536408913871,
      'values': {
        'power': 335100
      }
    },
    {
      'time': 1536408915873,
      'values': {
        'power': 334740
      }
    },
    {
      'time': 1536408917875,
      'values': {
        'power': 342680
      }
    },
    {
      'time': 1536408919877,
      'values': {
        'power': 357510
      }
    },
    {
      'time': 1536408921879,
      'values': {
        'power': 364540
      }
    },
    {
      'time': 1536408923880,
      'values': {
        'power': 360930
      }
    },
    {
      'time': 1536408925883,
      'values': {
        'power': 359000
      }
    },
    {
      'time': 1536408927885,
      'values': {
        'power': 360410
      }
    },
    {
      'time': 1536408929887,
      'values': {
        'power': 361300
      }
    },
    {
      'time': 1536408931889,
      'values': {
        'power': 359610
      }
    },
    {
      'time': 1536408933891,
      'values': {
        'power': 356760
      }
    },
    {
      'time': 1536408935892,
      'values': {
        'power': 337340
      }
    },
    {
      'time': 1536408937894,
      'values': {
        'power': 316740
      }
    },
    {
      'time': 1536408939897,
      'values': {
        'power': 312150
      }
    },
    {
      'time': 1536408941898,
      'values': {
        'power': 309930
      }
    },
    {
      'time': 1536408943900,
      'values': {
        'power': 307920
      }
    },
    {
      'time': 1536408945903,
      'values': {
        'power': 307460
      }
    },
    {
      'time': 1536408947905,
      'values': {
        'power': 309320
      }
    },
    {
      'time': 1536408949907,
      'values': {
        'power': 311020
      }
    },
    {
      'time': 1536408951908,
      'values': {
        'power': 310140
      }
    },
    {
      'time': 1536408953911,
      'values': {
        'power': 309170
      }
    },
    {
      'time': 1536408955912,
      'values': {
        'power': 309470
      }
    },
    {
      'time': 1536408957914,
      'values': {
        'power': 311030
      }
    },
    {
      'time': 1536408959916,
      'values': {
        'power': 313220
      }
    },
    {
      'time': 1536408961918,
      'values': {
        'power': 313310
      }
    },
    {
      'time': 1536408963919,
      'values': {
        'power': 312040
      }
    },
    {
      'time': 1536408965922,
      'values': {
        'power': 311750
      }
    },
    {
      'time': 1536408967926,
      'values': {
        'power': 311900
      }
    },
    {
      'time': 1536408969926,
      'values': {
        'power': 312450
      }
    },
    {
      'time': 1536408971928,
      'values': {
        'power': 311270
      }
    },
    {
      'time': 1536408973930,
      'values': {
        'power': 309810
      }
    },
    {
      'time': 1536408975932,
      'values': {
        'power': 310150
      }
    },
    {
      'time': 1536408977934,
      'values': {
        'power': 311610
      }
    },
    {
      'time': 1536408979936,
      'values': {
        'power': 312430
      }
    },
    {
      'time': 1536408981938,
      'values': {
        'power': 313230
      }
    },
    {
      'time': 1536408983940,
      'values': {
        'power': 311670
      }
    },
    {
      'time': 1536408985943,
      'values': {
        'power': 308010
      }
    },
    {
      'time': 1536408987944,
      'values': {
        'power': 307430
      }
    },
    {
      'time': 1536408989945,
      'values': {
        'power': 309230
      }
    },
    {
      'time': 1536408991947,
      'values': {
        'power': 308410
      }
    },
    {
      'time': 1536408993950,
      'values': {
        'power': 301600
      }
    },
    {
      'time': 1536408995951,
      'values': {
        'power': 301910
      }
    },
    {
      'time': 1536408997953,
      'values': {
        'power': 314710
      }
    },
    {
      'time': 1536408999956,
      'values': {
        'power': 322510
      }
    },
    {
      'time': 1536409001957,
      'values': {
        'power': 320320
      }
    },
    {
      'time': 1536409003959,
      'values': {
        'power': 314770
      }
    },
    {
      'time': 1536409005961,
      'values': {
        'power': 307200
      }
    },
    {
      'time': 1536409007963,
      'values': {
        'power': 310980
      }
    },
    {
      'time': 1536409009965,
      'values': {
        'power': 319210
      }
    },
    {
      'time': 1536409011967,
      'values': {
        'power': 318450
      }
    },
    {
      'time': 1536409013968,
      'values': {
        'power': 317210
      }
    },
    {
      'time': 1536409015970,
      'values': {
        'power': 317370
      }
    },
    {
      'time': 1536409017973,
      'values': {
        'power': 319460
      }
    },
    {
      'time': 1536409019976,
      'values': {
        'power': 318860
      }
    },
    {
      'time': 1536409021979,
      'values': {
        'power': 317720
      }
    },
    {
      'time': 1536409023978,
      'values': {
        'power': 318250
      }
    },
    {
      'time': 1536409025980,
      'values': {
        'power': 317280
      }
    },
    {
      'time': 1536409027983,
      'values': {
        'power': 317590
      }
    },
    {
      'time': 1536409029985,
      'values': {
        'power': 318210
      }
    },
    {
      'time': 1536409031987,
      'values': {
        'power': 318830
      }
    },
    {
      'time': 1536409033989,
      'values': {
        'power': 318980
      }
    },
    {
      'time': 1536409035991,
      'values': {
        'power': 317920
      }
    },
    {
      'time': 1536409037993,
      'values': {
        'power': 318370
      }
    },
    {
      'time': 1536409039994,
      'values': {
        'power': 319280
      }
    },
    {
      'time': 1536409041996,
      'values': {
        'power': 322770
      }
    },
    {
      'time': 1536409043999,
      'values': {
        'power': 323740
      }
    },
    {
      'time': 1536409046001,
      'values': {
        'power': 320020
      }
    },
    {
      'time': 1536409048003,
      'values': {
        'power': 319660
      }
    },
    {
      'time': 1536409050004,
      'values': {
        'power': 320550
      }
    },
    {
      'time': 1536409052006,
      'values': {
        'power': 320620
      }
    },
    {
      'time': 1536409054008,
      'values': {
        'power': 319280
      }
    },
    {
      'time': 1536409056010,
      'values': {
        'power': 320630
      }
    },
    {
      'time': 1536409058011,
      'values': {
        'power': 322820
      }
    },
    {
      'time': 1536409060014,
      'values': {
        'power': 321840
      }
    },
    {
      'time': 1536409062016,
      'values': {
        'power': 321050
      }
    },
    {
      'time': 1536409064019,
      'values': {
        'power': 318880
      }
    },
    {
      'time': 1536409066019,
      'values': {
        'power': 317200
      }
    },
    {
      'time': 1536409068022,
      'values': {
        'power': 318270
      }
    },
    {
      'time': 1536409070024,
      'values': {
        'power': 321000
      }
    },
    {
      'time': 1536409072026,
      'values': {
        'power': 323920
      }
    },
    {
      'time': 1536409074028,
      'values': {
        'power': 323160
      }
    },
    {
      'time': 1536409076030,
      'values': {
        'power': 321310
      }
    },
    {
      'time': 1536409078031,
      'values': {
        'power': 323300
      }
    },
    {
      'time': 1536409080033,
      'values': {
        'power': 324920
      }
    },
    {
      'time': 1536409082036,
      'values': {
        'power': 325180
      }
    },
    {
      'time': 1536409084038,
      'values': {
        'power': 323900
      }
    },
    {
      'time': 1536409086040,
      'values': {
        'power': 323200
      }
    },
    {
      'time': 1536409088044,
      'values': {
        'power': 324970
      }
    },
    {
      'time': 1536409090043,
      'values': {
        'power': 320270
      }
    },
    {
      'time': 1536409092045,
      'values': {
        'power': 304680
      }
    },
    {
      'time': 1536409094048,
      'values': {
        'power': 297750
      }
    },
    {
      'time': 1536409096049,
      'values': {
        'power': 298070
      }
    },
    {
      'time': 1536409098051,
      'values': {
        'power': 300010
      }
    },
    {
      'time': 1536409100053,
      'values': {
        'power': 310030
      }
    },
    {
      'time': 1536409102055,
      'values': {
        'power': 328120
      }
    },
    {
      'time': 1536409104057,
      'values': {
        'power': 333790
      }
    },
    {
      'time': 1536409106058,
      'values': {
        'power': 332030
      }
    },
    {
      'time': 1536409108061,
      'values': {
        'power': 333180
      }
    },
    {
      'time': 1536409110063,
      'values': {
        'power': 332900
      }
    },
    {
      'time': 1536409112065,
      'values': {
        'power': 332280
      }
    },
    {
      'time': 1536409114067,
      'values': {
        'power': 331040
      }
    },
    {
      'time': 1536409116068,
      'values': {
        'power': 332550
      }
    },
    {
      'time': 1536409118070,
      'values': {
        'power': 335630
      }
    },
    {
      'time': 1536409120073,
      'values': {
        'power': 334710
      }
    },
    {
      'time': 1536409122075,
      'values': {
        'power': 329220
      }
    },
    {
      'time': 1536409124076,
      'values': {
        'power': 326680
      }
    },
    {
      'time': 1536409126078,
      'values': {
        'power': 329510
      }
    },
    {
      'time': 1536409128081,
      'values': {
        'power': 331180
      }
    },
    {
      'time': 1536409130083,
      'values': {
        'power': 331660
      }
    },
    {
      'time': 1536409132085,
      'values': {
        'power': 332300
      }
    },
    {
      'time': 1536409134086,
      'values': {
        'power': 332930
      }
    },
    {
      'time': 1536409136089,
      'values': {
        'power': 332810
      }
    },
    {
      'time': 1536409138091,
      'values': {
        'power': 332940
      }
    },
    {
      'time': 1536409140093,
      'values': {
        'power': 333320
      }
    },
    {
      'time': 1536409142094,
      'values': {
        'power': 332600
      }
    },
    {
      'time': 1536409144096,
      'values': {
        'power': 331030
      }
    },
    {
      'time': 1536409146098,
      'values': {
        'power': 329770
      }
    },
    {
      'time': 1536409148100,
      'values': {
        'power': 329440
      }
    },
    {
      'time': 1536409150102,
      'values': {
        'power': 330180
      }
    },
    {
      'time': 1536409152104,
      'values': {
        'power': 329480
      }
    },
    {
      'time': 1536409154106,
      'values': {
        'power': 327820
      }
    },
    {
      'time': 1536409156108,
      'values': {
        'power': 327910
      }
    },
    {
      'time': 1536409158112,
      'values': {
        'power': 329310
      }
    },
    {
      'time': 1536409160111,
      'values': {
        'power': 329870
      }
    },
    {
      'time': 1536409162114,
      'values': {
        'power': 329610
      }
    },
    {
      'time': 1536409164116,
      'values': {
        'power': 328460
      }
    },
    {
      'time': 1536409166118,
      'values': {
        'power': 326490
      }
    },
    {
      'time': 1536409168119,
      'values': {
        'power': 324610
      }
    },
    {
      'time': 1536409170121,
      'values': {
        'power': 321530
      }
    },
    {
      'time': 1536409172124,
      'values': {
        'power': 315020
      }
    },
    {
      'time': 1536409174126,
      'values': {
        'power': 310360
      }
    },
    {
      'time': 1536409176128,
      'values': {
        'power': 311870
      }
    },
    {
      'time': 1536409178130,
      'values': {
        'power': 308790
      }
    },
    {
      'time': 1536409180132,
      'values': {
        'power': 303600
      }
    },
    {
      'time': 1536409182134,
      'values': {
        'power': 308570
      }
    },
    {
      'time': 1536409184136,
      'values': {
        'power': 321340
      }
    },
    {
      'time': 1536409186138,
      'values': {
        'power': 331130
      }
    },
    {
      'time': 1536409188140,
      'values': {
        'power': 328260
      }
    },
    {
      'time': 1536409190141,
      'values': {
        'power': 309720
      }
    },
    {
      'time': 1536409192145,
      'values': {
        'power': 290590
      }
    },
    {
      'time': 1536409194145,
      'values': {
        'power': 291330
      }
    },
    {
      'time': 1536409196148,
      'values': {
        'power': 304480
      }
    },
    {
      'time': 1536409198149,
      'values': {
        'power': 309280
      }
    },
    {
      'time': 1536409200151,
      'values': {
        'power': 309160
      }
    },
    {
      'time': 1536409202153,
      'values': {
        'power': 312630
      }
    },
    {
      'time': 1536409204155,
      'values': {
        'power': 311600
      }
    },
    {
      'time': 1536409206157,
      'values': {
        'power': 308310
      }
    },
    {
      'time': 1536409208159,
      'values': {
        'power': 309210
      }
    },
    {
      'time': 1536409210161,
      'values': {
        'power': 311320
      }
    },
    {
      'time': 1536409212163,
      'values': {
        'power': 311460
      }
    },
    {
      'time': 1536409214164,
      'values': {
        'power': 307090
      }
    },
    {
      'time': 1536409216167,
      'values': {
        'power': 306600
      }
    },
    {
      'time': 1536409218168,
      'values': {
        'power': 310430
      }
    },
    {
      'time': 1536409220171,
      'values': {
        'power': 309560
      }
    },
    {
      'time': 1536409222173,
      'values': {
        'power': 307840
      }
    },
    {
      'time': 1536409224174,
      'values': {
        'power': 306950
      }
    },
    {
      'time': 1536409226176,
      'values': {
        'power': 299230
      }
    },
    {
      'time': 1536409228179,
      'values': {
        'power': 289180
      }
    },
    {
      'time': 1536409230181,
      'values': {
        'power': 285470
      }
    },
    {
      'time': 1536409232183,
      'values': {
        'power': 286620
      }
    },
    {
      'time': 1536409234185,
      'values': {
        'power': 294820
      }
    },
    {
      'time': 1536409236187,
      'values': {
        'power': 308750
      }
    },
    {
      'time': 1536409238188,
      'values': {
        'power': 314950
      }
    },
    {
      'time': 1536409240190,
      'values': {
        'power': 314500
      }
    },
    {
      'time': 1536409242192,
      'values': {
        'power': 313460
      }
    },
    {
      'time': 1536409244194,
      'values': {
        'power': 314030
      }
    },
    {
      'time': 1536409246195,
      'values': {
        'power': 315690
      }
    },
    {
      'time': 1536409248198,
      'values': {
        'power': 315490
      }
    },
    {
      'time': 1536409250200,
      'values': {
        'power': 314280
      }
    },
    {
      'time': 1536409252202,
      'values': {
        'power': 312850
      }
    },
    {
      'time': 1536409254204,
      'values': {
        'power': 312360
      }
    },
    {
      'time': 1536409256206,
      'values': {
        'power': 313670
      }
    },
    {
      'time': 1536409258207,
      'values': {
        'power': 315730
      }
    },
    {
      'time': 1536409260209,
      'values': {
        'power': 317490
      }
    },
    {
      'time': 1536409262212,
      'values': {
        'power': 316610
      }
    },
    {
      'time': 1536409264214,
      'values': {
        'power': 316400
      }
    },
    {
      'time': 1536409266216,
      'values': {
        'power': 317420
      }
    },
    {
      'time': 1536409268218,
      'values': {
        'power': 319670
      }
    },
    {
      'time': 1536409270219,
      'values': {
        'power': 321430
      }
    },
    {
      'time': 1536409272221,
      'values': {
        'power': 320580
      }
    },
    {
      'time': 1536409274224,
      'values': {
        'power': 319850
      }
    },
    {
      'time': 1536409276226,
      'values': {
        'power': 318540
      }
    },
    {
      'time': 1536409278228,
      'values': {
        'power': 317730
      }
    },
    {
      'time': 1536409280230,
      'values': {
        'power': 316710
      }
    },
    {
      'time': 1536409282232,
      'values': {
        'power': 314620
      }
    },
    {
      'time': 1536409284233,
      'values': {
        'power': 314310
      }
    },
    {
      'time': 1536409286235,
      'values': {
        'power': 316670
      }
    },
    {
      'time': 1536409288237,
      'values': {
        'power': 318000
      }
    },
    {
      'time': 1536409290240,
      'values': {
        'power': 317400
      }
    },
    {
      'time': 1536409292241,
      'values': {
        'power': 316070
      }
    },
    {
      'time': 1536409294243,
      'values': {
        'power': 314850
      }
    },
    {
      'time': 1536409296245,
      'values': {
        'power': 315640
      }
    },
    {
      'time': 1536409298246,
      'values': {
        'power': 317010
      }
    },
    {
      'time': 1536409300249,
      'values': {
        'power': 414440
      }
    },
    {
      'time': 1536409302251,
      'values': {
        'power': 707500
      }
    },
    {
      'time': 1536409304253,
      'values': {
        'power': 893340
      }
    },
    {
      'time': 1536409306255,
      'values': {
        'power': 882980
      }
    },
    {
      'time': 1536409308257,
      'values': {
        'power': 885030
      }
    },
    {
      'time': 1536409310259,
      'values': {
        'power': 886960
      }
    },
    {
      'time': 1536409312261,
      'values': {
        'power': 885800
      }
    },
    {
      'time': 1536409314263,
      'values': {
        'power': 879960
      }
    },
    {
      'time': 1536409316265,
      'values': {
        'power': 874500
      }
    },
    {
      'time': 1536409318267,
      'values': {
        'power': 877290
      }
    },
    {
      'time': 1536409320272,
      'values': {
        'power': 991050
      }
    },
    {
      'time': 1536409322271,
      'values': {
        'power': 1014800
      }
    },
    {
      'time': 1536409324272,
      'values': {
        'power': 889550
      }
    },
    {
      'time': 1536409326274,
      'values': {
        'power': 855630
      }
    },
    {
      'time': 1536409328277,
      'values': {
        'power': 841410
      }
    },
    {
      'time': 1536409330278,
      'values': {
        'power': 638890
      }
    },
    {
      'time': 1536409332280,
      'values': {
        'power': 403690
      }
    },
    {
      'time': 1536409334282,
      'values': {
        'power': 357910
      }
    },
    {
      'time': 1536409336284,
      'values': {
        'power': 357530
      }
    },
    {
      'time': 1536409338286,
      'values': {
        'power': 359640
      }
    },
    {
      'time': 1536409340288,
      'values': {
        'power': 359480
      }
    },
    {
      'time': 1536409342290,
      'values': {
        'power': 356170
      }
    },
    {
      'time': 1536409344292,
      'values': {
        'power': 351990
      }
    },
    {
      'time': 1536409346294,
      'values': {
        'power': 350250
      }
    },
    {
      'time': 1536409348297,
      'values': {
        'power': 352140
      }
    },
    {
      'time': 1536409350297,
      'values': {
        'power': 357500
      }
    },
    {
      'time': 1536409352300,
      'values': {
        'power': 361890
      }
    },
    {
      'time': 1536409354302,
      'values': {
        'power': 362160
      }
    },
    {
      'time': 1536409356304,
      'values': {
        'power': 363100
      }
    },
    {
      'time': 1536409358305,
      'values': {
        'power': 364520
      }
    },
    {
      'time': 1536409360307,
      'values': {
        'power': 367820
      }
    },
    {
      'time': 1536409362310,
      'values': {
        'power': 371390
      }
    },
    {
      'time': 1536409364312,
      'values': {
        'power': 370450
      }
    },
    {
      'time': 1536409366314,
      'values': {
        'power': 367490
      }
    },
    {
      'time': 1536409368316,
      'values': {
        'power': 369960
      }
    },
    {
      'time': 1536409370319,
      'values': {
        'power': 370840
      }
    },
    {
      'time': 1536409372320,
      'values': {
        'power': 370700
      }
    },
    {
      'time': 1536409374322,
      'values': {
        'power': 363090
      }
    },
    {
      'time': 1536409376323,
      'values': {
        'power': 348900
      }
    },
    {
      'time': 1536409378325,
      'values': {
        'power': 343620
      }
    },
    {
      'time': 1536409380327,
      'values': {
        'power': 344530
      }
    },
    {
      'time': 1536409382329,
      'values': {
        'power': 344320
      }
    },
    {
      'time': 1536409384331,
      'values': {
        'power': 347530
      }
    },
    {
      'time': 1536409386333,
      'values': {
        'power': 358630
      }
    },
    {
      'time': 1536409388335,
      'values': {
        'power': 366350
      }
    },
    {
      'time': 1536409390337,
      'values': {
        'power': 366540
      }
    },
    {
      'time': 1536409392338,
      'values': {
        'power': 366280
      }
    },
    {
      'time': 1536409394340,
      'values': {
        'power': 365360
      }
    },
    {
      'time': 1536409396343,
      'values': {
        'power': 366320
      }
    },
    {
      'time': 1536409398344,
      'values': {
        'power': 369340
      }
    },
    {
      'time': 1536409400347,
      'values': {
        'power': 369710
      }
    },
    {
      'time': 1536409402349,
      'values': {
        'power': 369530
      }
    },
    {
      'time': 1536409404350,
      'values': {
        'power': 369640
      }
    },
    {
      'time': 1536409406352,
      'values': {
        'power': 369980
      }
    },
    {
      'time': 1536409408355,
      'values': {
        'power': 370050
      }
    },
    {
      'time': 1536409410357,
      'values': {
        'power': 370090
      }
    },
    {
      'time': 1536409412359,
      'values': {
        'power': 371380
      }
    },
    {
      'time': 1536409414361,
      'values': {
        'power': 375600
      }
    },
    {
      'time': 1536409416363,
      'values': {
        'power': 378030
      }
    },
    {
      'time': 1536409418365,
      'values': {
        'power': 376630
      }
    },
    {
      'time': 1536409420367,
      'values': {
        'power': 373340
      }
    },
    {
      'time': 1536409422370,
      'values': {
        'power': 368780
      }
    },
    {
      'time': 1536409424371,
      'values': {
        'power': 368150
      }
    },
    {
      'time': 1536409426372,
      'values': {
        'power': 369670
      }
    },
    {
      'time': 1536409428374,
      'values': {
        'power': 371200
      }
    },
    {
      'time': 1536409430376,
      'values': {
        'power': 371520
      }
    },
    {
      'time': 1536409432378,
      'values': {
        'power': 370500
      }
    },
    {
      'time': 1536409434380,
      'values': {
        'power': 369150
      }
    },
    {
      'time': 1536409436382,
      'values': {
        'power': 369910
      }
    },
    {
      'time': 1536409438384,
      'values': {
        'power': 368370
      }
    },
    {
      'time': 1536409440386,
      'values': {
        'power': 357970
      }
    },
    {
      'time': 1536409442388,
      'values': {
        'power': 350250
      }
    },
    {
      'time': 1536409444390,
      'values': {
        'power': 348850
      }
    },
    {
      'time': 1536409446392,
      'values': {
        'power': 349220
      }
    },
    {
      'time': 1536409448394,
      'values': {
        'power': 353510
      }
    },
    {
      'time': 1536409450395,
      'values': {
        'power': 353110
      }
    },
    {
      'time': 1536409452397,
      'values': {
        'power': 349190
      }
    },
    {
      'time': 1536409454400,
      'values': {
        'power': 347880
      }
    },
    {
      'time': 1536409456403,
      'values': {
        'power': 349350
      }
    },
    {
      'time': 1536409458403,
      'values': {
        'power': 351430
      }
    },
    {
      'time': 1536409460405,
      'values': {
        'power': 350910
      }
    },
    {
      'time': 1536409462408,
      'values': {
        'power': 350220
      }
    },
    {
      'time': 1536409464410,
      'values': {
        'power': 352210
      }
    },
    {
      'time': 1536409466412,
      'values': {
        'power': 354590
      }
    },
    {
      'time': 1536409468414,
      'values': {
        'power': 351950
      }
    },
    {
      'time': 1536409470416,
      'values': {
        'power': 342660
      }
    },
    {
      'time': 1536409472417,
      'values': {
        'power': 336640
      }
    },
    {
      'time': 1536409474419,
      'values': {
        'power': 337580
      }
    },
    {
      'time': 1536409476421,
      'values': {
        'power': 341700
      }
    },
    {
      'time': 1536409478423,
      'values': {
        'power': 344340
      }
    },
    {
      'time': 1536409480425,
      'values': {
        'power': 342960
      }
    },
    {
      'time': 1536409482427,
      'values': {
        'power': 344670
      }
    },
    {
      'time': 1536409484428,
      'values': {
        'power': 350330
      }
    },
    {
      'time': 1536409486430,
      'values': {
        'power': 355090
      }
    },
    {
      'time': 1536409488433,
      'values': {
        'power': 355380
      }
    },
    {
      'time': 1536409490435,
      'values': {
        'power': 353980
      }
    },
    {
      'time': 1536409492437,
      'values': {
        'power': 352560
      }
    },
    {
      'time': 1536409494438,
      'values': {
        'power': 348550
      }
    },
    {
      'time': 1536409496441,
      'values': {
        'power': 344810
      }
    },
    {
      'time': 1536409498443,
      'values': {
        'power': 343300
      }
    },
    {
      'time': 1536409500444,
      'values': {
        'power': 342860
      }
    },
    {
      'time': 1536409502446,
      'values': {
        'power': 345700
      }
    },
    {
      'time': 1536409504449,
      'values': {
        'power': 347440
      }
    },
    {
      'time': 1536409506451,
      'values': {
        'power': 348200
      }
    },
    {
      'time': 1536409508453,
      'values': {
        'power': 348950
      }
    },
    {
      'time': 1536409510455,
      'values': {
        'power': 348190
      }
    },
    {
      'time': 1536409512456,
      'values': {
        'power': 347360
      }
    },
    {
      'time': 1536409514458,
      'values': {
        'power': 346890
      }
    },
    {
      'time': 1536409516461,
      'values': {
        'power': 347810
      }
    },
    {
      'time': 1536409518462,
      'values': {
        'power': 351190
      }
    },
    {
      'time': 1536409520464,
      'values': {
        'power': 351930
      }
    },
    {
      'time': 1536409522466,
      'values': {
        'power': 348850
      }
    },
    {
      'time': 1536409524469,
      'values': {
        'power': 346970
      }
    },
    {
      'time': 1536409526470,
      'values': {
        'power': 346260
      }
    },
    {
      'time': 1536409528471,
      'values': {
        'power': 346150
      }
    },
    {
      'time': 1536409530474,
      'values': {
        'power': 346790
      }
    },
    {
      'time': 1536409532476,
      'values': {
        'power': 344930
      }
    },
    {
      'time': 1536409534478,
      'values': {
        'power': 344290
      }
    },
    {
      'time': 1536409536480,
      'values': {
        'power': 346910
      }
    },
    {
      'time': 1536409538483,
      'values': {
        'power': 347650
      }
    },
    {
      'time': 1536409540483,
      'values': {
        'power': 346350
      }
    },
    {
      'time': 1536409542486,
      'values': {
        'power': 345710
      }
    },
    {
      'time': 1536409544488,
      'values': {
        'power': 346900
      }
    },
    {
      'time': 1536409546490,
      'values': {
        'power': 349170
      }
    },
    {
      'time': 1536409548492,
      'values': {
        'power': 349800
      }
    },
    {
      'time': 1536409550494,
      'values': {
        'power': 347960
      }
    },
    {
      'time': 1536409552496,
      'values': {
        'power': 347710
      }
    },
    {
      'time': 1536409554497,
      'values': {
        'power': 348050
      }
    },
    {
      'time': 1536409556500,
      'values': {
        'power': 348430
      }
    },
    {
      'time': 1536409558502,
      'values': {
        'power': 349270
      }
    },
    {
      'time': 1536409560503,
      'values': {
        'power': 349140
      }
    },
    {
      'time': 1536409562505,
      'values': {
        'power': 347360
      }
    },
    {
      'time': 1536409564508,
      'values': {
        'power': 347490
      }
    },
    {
      'time': 1536409566509,
      'values': {
        'power': 348280
      }
    },
    {
      'time': 1536409568511,
      'values': {
        'power': 347960
      }
    },
    {
      'time': 1536409570513,
      'values': {
        'power': 347380
      }
    },
    {
      'time': 1536409572515,
      'values': {
        'power': 347670
      }
    },
    {
      'time': 1536409574517,
      'values': {
        'power': 349740
      }
    },
    {
      'time': 1536409576519,
      'values': {
        'power': 350170
      }
    },
    {
      'time': 1536409578520,
      'values': {
        'power': 349410
      }
    },
    {
      'time': 1536409580522,
      'values': {
        'power': 348460
      }
    },
    {
      'time': 1536409582525,
      'values': {
        'power': 348710
      }
    },
    {
      'time': 1536409584527,
      'values': {
        'power': 350900
      }
    },
    {
      'time': 1536409586529,
      'values': {
        'power': 350840
      }
    },
    {
      'time': 1536409588531,
      'values': {
        'power': 349700
      }
    },
    {
      'time': 1536409590535,
      'values': {
        'power': 347900
      }
    },
    {
      'time': 1536409592538,
      'values': {
        'power': 345300
      }
    },
    {
      'time': 1536409594536,
      'values': {
        'power': 346130
      }
    },
    {
      'time': 1536409596538,
      'values': {
        'power': 348290
      }
    },
    {
      'time': 1536409598541,
      'values': {
        'power': 347460
      }
    },
    {
      'time': 1536409600543,
      'values': {
        'power': 342470
      }
    },
    {
      'time': 1536409602544,
      'values': {
        'power': 338200
      }
    },
    {
      'time': 1536409604546,
      'values': {
        'power': 341870
      }
    },
    {
      'time': 1536409606549,
      'values': {
        'power': 345650
      }
    },
    {
      'time': 1536409608551,
      'values': {
        'power': 344670
      }
    },
    {
      'time': 1536409610553,
      'values': {
        'power': 345910
      }
    },
    {
      'time': 1536409612554,
      'values': {
        'power': 349000
      }
    },
    {
      'time': 1536409614556,
      'values': {
        'power': 350190
      }
    },
    {
      'time': 1536409616558,
      'values': {
        'power': 349070
      }
    },
    {
      'time': 1536409618560,
      'values': {
        'power': 347550
      }
    },
    {
      'time': 1536409620562,
      'values': {
        'power': 346630
      }
    },
    {
      'time': 1536409622563,
      'values': {
        'power': 345130
      }
    },
    {
      'time': 1536409624566,
      'values': {
        'power': 348690
      }
    },
    {
      'time': 1536409626568,
      'values': {
        'power': 354360
      }
    },
    {
      'time': 1536409628569,
      'values': {
        'power': 354800
      }
    },
    {
      'time': 1536409630571,
      'values': {
        'power': 352880
      }
    },
    {
      'time': 1536409632574,
      'values': {
        'power': 352830
      }
    },
    {
      'time': 1536409634576,
      'values': {
        'power': 354620
      }
    },
    {
      'time': 1536409636578,
      'values': {
        'power': 356440
      }
    },
    {
      'time': 1536409638580,
      'values': {
        'power': 355610
      }
    },
    {
      'time': 1536409640582,
      'values': {
        'power': 354120
      }
    },
    {
      'time': 1536409642584,
      'values': {
        'power': 353470
      }
    },
    {
      'time': 1536409644586,
      'values': {
        'power': 355930
      }
    },
    {
      'time': 1536409646588,
      'values': {
        'power': 357550
      }
    },
    {
      'time': 1536409648589,
      'values': {
        'power': 355170
      }
    },
    {
      'time': 1536409650591,
      'values': {
        'power': 353970
      }
    },
    {
      'time': 1536409652594,
      'values': {
        'power': 354930
      }
    },
    {
      'time': 1536409654595,
      'values': {
        'power': 355940
      }
    },
    {
      'time': 1536409656598,
      'values': {
        'power': 354620
      }
    },
    {
      'time': 1536409658600,
      'values': {
        'power': 353280
      }
    },
    {
      'time': 1536409660601,
      'values': {
        'power': 352060
      }
    },
    {
      'time': 1536409662603,
      'values': {
        'power': 349790
      }
    },
    {
      'time': 1536409664605,
      'values': {
        'power': 350460
      }
    },
    {
      'time': 1536409666608,
      'values': {
        'power': 351380
      }
    },
    {
      'time': 1536409668609,
      'values': {
        'power': 350170
      }
    },
    {
      'time': 1536409670611,
      'values': {
        'power': 353620
      }
    },
    {
      'time': 1536409672613,
      'values': {
        'power': 356200
      }
    },
    {
      'time': 1536409674614,
      'values': {
        'power': 356630
      }
    },
    {
      'time': 1536409676617,
      'values': {
        'power': 356990
      }
    },
    {
      'time': 1536409678619,
      'values': {
        'power': 352430
      }
    },
    {
      'time': 1536409680620,
      'values': {
        'power': 348480
      }
    },
    {
      'time': 1536409682622,
      'values': {
        'power': 346930
      }
    },
    {
      'time': 1536409684625,
      'values': {
        'power': 345720
      }
    },
    {
      'time': 1536409686627,
      'values': {
        'power': 332430
      }
    },
    {
      'time': 1536409688629,
      'values': {
        'power': 318340
      }
    },
    {
      'time': 1536409690631,
      'values': {
        'power': 315770
      }
    },
    {
      'time': 1536409692633,
      'values': {
        'power': 315330
      }
    },
    {
      'time': 1536409694634,
      'values': {
        'power': 317430
      }
    },
    {
      'time': 1536409696636,
      'values': {
        'power': 321550
      }
    },
    {
      'time': 1536409698639,
      'values': {
        'power': 321030
      }
    },
    {
      'time': 1536409700641,
      'values': {
        'power': 318330
      }
    },
    {
      'time': 1536409702643,
      'values': {
        'power': 318060
      }
    },
    {
      'time': 1536409704644,
      'values': {
        'power': 319720
      }
    },
    {
      'time': 1536409706646,
      'values': {
        'power': 319840
      }
    },
    {
      'time': 1536409708648,
      'values': {
        'power': 316950
      }
    },
    {
      'time': 1536409710650,
      'values': {
        'power': 315970
      }
    },
    {
      'time': 1536409712652,
      'values': {
        'power': 316640
      }
    },
    {
      'time': 1536409714654,
      'values': {
        'power': 316180
      }
    },
    {
      'time': 1536409716656,
      'values': {
        'power': 314630
      }
    },
    {
      'time': 1536409718658,
      'values': {
        'power': 314210
      }
    },
    {
      'time': 1536409720660,
      'values': {
        'power': 314720
      }
    },
    {
      'time': 1536409722662,
      'values': {
        'power': 314640
      }
    },
    {
      'time': 1536409724664,
      'values': {
        'power': 316360
      }
    },
    {
      'time': 1536409726665,
      'values': {
        'power': 318010
      }
    },
    {
      'time': 1536409728671,
      'values': {
        'power': 317630
      }
    },
    {
      'time': 1536409730669,
      'values': {
        'power': 316780
      }
    },
    {
      'time': 1536409732672,
      'values': {
        'power': 316300
      }
    },
    {
      'time': 1536409734674,
      'values': {
        'power': 316610
      }
    },
    {
      'time': 1536409736676,
      'values': {
        'power': 317210
      }
    },
    {
      'time': 1536409738678,
      'values': {
        'power': 316520
      }
    },
    {
      'time': 1536409740680,
      'values': {
        'power': 316460
      }
    },
    {
      'time': 1536409742682,
      'values': {
        'power': 318510
      }
    },
    {
      'time': 1536409744684,
      'values': {
        'power': 321790
      }
    },
    {
      'time': 1536409746686,
      'values': {
        'power': 320400
      }
    },
    {
      'time': 1536409748688,
      'values': {
        'power': 316990
      }
    },
    {
      'time': 1536409750690,
      'values': {
        'power': 316100
      }
    },
    {
      'time': 1536409752692,
      'values': {
        'power': 318330
      }
    },
    {
      'time': 1536409754695,
      'values': {
        'power': 320100
      }
    },
    {
      'time': 1536409756695,
      'values': {
        'power': 318100
      }
    },
    {
      'time': 1536409758697,
      'values': {
        'power': 316500
      }
    },
    {
      'time': 1536409760700,
      'values': {
        'power': 312240
      }
    },
    {
      'time': 1536409762701,
      'values': {
        'power': 310570
      }
    },
    {
      'time': 1536409764703,
      'values': {
        'power': 311850
      }
    },
    {
      'time': 1536409766705,
      'values': {
        'power': 312450
      }
    },
    {
      'time': 1536409768707,
      'values': {
        'power': 314120
      }
    },
    {
      'time': 1536409770709,
      'values': {
        'power': 314790
      }
    },
    {
      'time': 1536409772711,
      'values': {
        'power': 314790
      }
    },
    {
      'time': 1536409774713,
      'values': {
        'power': 316910
      }
    },
    {
      'time': 1536409776715,
      'values': {
        'power': 318220
      }
    },
    {
      'time': 1536409778717,
      'values': {
        'power': 315750
      }
    },
    {
      'time': 1536409780720,
      'values': {
        'power': 313680
      }
    },
    {
      'time': 1536409782721,
      'values': {
        'power': 313270
      }
    },
    {
      'time': 1536409784722,
      'values': {
        'power': 313270
      }
    },
    {
      'time': 1536409786724,
      'values': {
        'power': 312990
      }
    },
    {
      'time': 1536409788727,
      'values': {
        'power': 312150
      }
    },
    {
      'time': 1536409790729,
      'values': {
        'power': 312650
      }
    },
    {
      'time': 1536409792731,
      'values': {
        'power': 315580
      }
    },
    {
      'time': 1536409794732,
      'values': {
        'power': 318340
      }
    },
    {
      'time': 1536409796734,
      'values': {
        'power': 317640
      }
    },
    {
      'time': 1536409798737,
      'values': {
        'power': 312430
      }
    },
    {
      'time': 1536409800738,
      'values': {
        'power': 313540
      }
    },
    {
      'time': 1536409802740,
      'values': {
        'power': 318110
      }
    },
    {
      'time': 1536409804742,
      'values': {
        'power': 317970
      }
    },
    {
      'time': 1536409806744,
      'values': {
        'power': 314510
      }
    },
    {
      'time': 1536409808746,
      'values': {
        'power': 313070
      }
    },
    {
      'time': 1536409810748,
      'values': {
        'power': 312250
      }
    },
    {
      'time': 1536409812749,
      'values': {
        'power': 311840
      }
    },
    {
      'time': 1536409814752,
      'values': {
        'power': 313520
      }
    },
    {
      'time': 1536409816754,
      'values': {
        'power': 435660
      }
    },
    {
      'time': 1536409818756,
      'values': {
        'power': 524850
      }
    },
    {
      'time': 1536409820758,
      'values': {
        'power': 428250
      }
    },
    {
      'time': 1536409822760,
      'values': {
        'power': 362670
      }
    },
    {
      'time': 1536409824762,
      'values': {
        'power': 363410
      }
    },
    {
      'time': 1536409826764,
      'values': {
        'power': 364900
      }
    },
    {
      'time': 1536409828765,
      'values': {
        'power': 363850
      }
    },
    {
      'time': 1536409830768,
      'values': {
        'power': 362330
      }
    },
    {
      'time': 1536409832770,
      'values': {
        'power': 362460
      }
    },
    {
      'time': 1536409834771,
      'values': {
        'power': 364450
      }
    },
    {
      'time': 1536409836774,
      'values': {
        'power': 365990
      }
    },
    {
      'time': 1536409838775,
      'values': {
        'power': 364960
      }
    },
    {
      'time': 1536409840777,
      'values': {
        'power': 363790
      }
    },
    {
      'time': 1536409842780,
      'values': {
        'power': 364820
      }
    },
    {
      'time': 1536409844782,
      'values': {
        'power': 366390
      }
    },
    {
      'time': 1536409846784,
      'values': {
        'power': 365520
      }
    },
    {
      'time': 1536409848785,
      'values': {
        'power': 363980
      }
    },
    {
      'time': 1536409850787,
      'values': {
        'power': 363560
      }
    },
    {
      'time': 1536409852789,
      'values': {
        'power': 363350
      }
    },
    {
      'time': 1536409854791,
      'values': {
        'power': 362760
      }
    },
    {
      'time': 1536409856793,
      'values': {
        'power': 362070
      }
    },
    {
      'time': 1536409858798,
      'values': {
        'power': 361530
      }
    },
    {
      'time': 1536409860797,
      'values': {
        'power': 362500
      }
    },
    {
      'time': 1536409862799,
      'values': {
        'power': 363190
      }
    },
    {
      'time': 1536409864802,
      'values': {
        'power': 363570
      }
    },
    {
      'time': 1536409866802,
      'values': {
        'power': 365750
      }
    },
    {
      'time': 1536409868805,
      'values': {
        'power': 368160
      }
    },
    {
      'time': 1536409870807,
      'values': {
        'power': 366900
      }
    },
    {
      'time': 1536409872809,
      'values': {
        'power': 365070
      }
    },
    {
      'time': 1536409874811,
      'values': {
        'power': 366420
      }
    },
    {
      'time': 1536409876813,
      'values': {
        'power': 367360
      }
    },
    {
      'time': 1536409878815,
      'values': {
        'power': 366590
      }
    },
    {
      'time': 1536409880817,
      'values': {
        'power': 365130
      }
    },
    {
      'time': 1536409882819,
      'values': {
        'power': 363060
      }
    },
    {
      'time': 1536409884820,
      'values': {
        'power': 361470
      }
    },
    {
      'time': 1536409886822,
      'values': {
        'power': 363300
      }
    },
    {
      'time': 1536409888825,
      'values': {
        'power': 372150
      }
    },
    {
      'time': 1536409890827,
      'values': {
        'power': 378370
      }
    },
    {
      'time': 1536409892829,
      'values': {
        'power': 378860
      }
    },
    {
      'time': 1536409894832,
      'values': {
        'power': 378520
      }
    },
    {
      'time': 1536409896832,
      'values': {
        'power': 379120
      }
    },
    {
      'time': 1536409898834,
      'values': {
        'power': 378880
      }
    },
    {
      'time': 1536409900836,
      'values': {
        'power': 378710
      }
    },
    {
      'time': 1536409902838,
      'values': {
        'power': 378460
      }
    },
    {
      'time': 1536409904840,
      'values': {
        'power': 378410
      }
    },
    {
      'time': 1536409906842,
      'values': {
        'power': 379100
      }
    },
    {
      'time': 1536409908844,
      'values': {
        'power': 378540
      }
    },
    {
      'time': 1536409910846,
      'values': {
        'power': 377050
      }
    },
    {
      'time': 1536409912848,
      'values': {
        'power': 376860
      }
    },
    {
      'time': 1536409914850,
      'values': {
        'power': 378600
      }
    },
    {
      'time': 1536409916852,
      'values': {
        'power': 379900
      }
    },
    {
      'time': 1536409918854,
      'values': {
        'power': 379410
      }
    },
    {
      'time': 1536409920855,
      'values': {
        'power': 378680
      }
    },
    {
      'time': 1536409922857,
      'values': {
        'power': 378480
      }
    },
    {
      'time': 1536409924860,
      'values': {
        'power': 379260
      }
    },
    {
      'time': 1536409926862,
      'values': {
        'power': 379810
      }
    },
    {
      'time': 1536409928863,
      'values': {
        'power': 379190
      }
    },
    {
      'time': 1536409930865,
      'values': {
        'power': 378560
      }
    },
    {
      'time': 1536409932868,
      'values': {
        'power': 387740
      }
    },
    {
      'time': 1536409934870,
      'values': {
        'power': 400390
      }
    },
    {
      'time': 1536409936871,
      'values': {
        'power': 404690
      }
    },
    {
      'time': 1536409938873,
      'values': {
        'power': 405580
      }
    },
    {
      'time': 1536409940876,
      'values': {
        'power': 404320
      }
    },
    {
      'time': 1536409942877,
      'values': {
        'power': 403590
      }
    },
    {
      'time': 1536409944879,
      'values': {
        'power': 405170
      }
    },
    {
      'time': 1536409946881,
      'values': {
        'power': 406350
      }
    },
    {
      'time': 1536409948883,
      'values': {
        'power': 405540
      }
    },
    {
      'time': 1536409950885,
      'values': {
        'power': 406190
      }
    },
    {
      'time': 1536409952887,
      'values': {
        'power': 405380
      }
    },
    {
      'time': 1536409954889,
      'values': {
        'power': 404790
      }
    },
    {
      'time': 1536409956891,
      'values': {
        'power': 405830
      }
    },
    {
      'time': 1536409958893,
      'values': {
        'power': 403590
      }
    },
    {
      'time': 1536409960896,
      'values': {
        'power': 401070
      }
    },
    {
      'time': 1536409962896,
      'values': {
        'power': 401060
      }
    },
    {
      'time': 1536409964898,
      'values': {
        'power': 403880
      }
    },
    {
      'time': 1536409966901,
      'values': {
        'power': 406250
      }
    },
    {
      'time': 1536409968903,
      'values': {
        'power': 405680
      }
    },
    {
      'time': 1536409970905,
      'values': {
        'power': 406230
      }
    },
    {
      'time': 1536409972907,
      'values': {
        'power': 406610
      }
    },
    {
      'time': 1536409974908,
      'values': {
        'power': 405530
      }
    },
    {
      'time': 1536409976910,
      'values': {
        'power': 406130
      }
    },
    {
      'time': 1536409978913,
      'values': {
        'power': 404880
      }
    },
    {
      'time': 1536409980915,
      'values': {
        'power': 404650
      }
    },
    {
      'time': 1536409982917,
      'values': {
        'power': 404820
      }
    },
    {
      'time': 1536409984919,
      'values': {
        'power': 404940
      }
    },
    {
      'time': 1536409986920,
      'values': {
        'power': 406180
      }
    },
    {
      'time': 1536409988922,
      'values': {
        'power': 405760
      }
    },
    {
      'time': 1536409990924,
      'values': {
        'power': 402200
      }
    },
    {
      'time': 1536409992926,
      'values': {
        'power': 398390
      }
    },
    {
      'time': 1536409994928,
      'values': {
        'power': 397780
      }
    },
    {
      'time': 1536409996930,
      'values': {
        'power': 398240
      }
    },
    {
      'time': 1536409998932,
      'values': {
        'power': 398200
      }
    },
    {
      'time': 1536410000933,
      'values': {
        'power': 396760
      }
    },
    {
      'time': 1536410002935,
      'values': {
        'power': 395580
      }
    },
    {
      'time': 1536410004938,
      'values': {
        'power': 396430
      }
    },
    {
      'time': 1536410006940,
      'values': {
        'power': 396740
      }
    },
    {
      'time': 1536410008942,
      'values': {
        'power': 395880
      }
    },
    {
      'time': 1536410010944,
      'values': {
        'power': 398900
      }
    },
    {
      'time': 1536410012945,
      'values': {
        'power': 400990
      }
    },
    {
      'time': 1536410014947,
      'values': {
        'power': 399080
      }
    },
    {
      'time': 1536410016950,
      'values': {
        'power': 401110
      }
    },
    {
      'time': 1536410018952,
      'values': {
        'power': 411290
      }
    },
    {
      'time': 1536410020954,
      'values': {
        'power': 415900
      }
    },
    {
      'time': 1536410022956,
      'values': {
        'power': 411890
      }
    },
    {
      'time': 1536410024958,
      'values': {
        'power': 413050
      }
    },
    {
      'time': 1536410026962,
      'values': {
        'power': 414910
      }
    },
    {
      'time': 1536410028963,
      'values': {
        'power': 415150
      }
    },
    {
      'time': 1536410030963,
      'values': {
        'power': 416610
      }
    },
    {
      'time': 1536410032966,
      'values': {
        'power': 414330
      }
    },
    {
      'time': 1536410034968,
      'values': {
        'power': 406800
      }
    },
    {
      'time': 1536410036969,
      'values': {
        'power': 401950
      }
    },
    {
      'time': 1536410038971,
      'values': {
        'power': 402970
      }
    },
    {
      'time': 1536410040973,
      'values': {
        'power': 401220
      }
    },
    {
      'time': 1536410042975,
      'values': {
        'power': 397920
      }
    },
    {
      'time': 1536410044977,
      'values': {
        'power': 398520
      }
    },
    {
      'time': 1536410046979,
      'values': {
        'power': 399380
      }
    },
    {
      'time': 1536410048981,
      'values': {
        'power': 398220
      }
    },
    {
      'time': 1536410050983,
      'values': {
        'power': 397570
      }
    },
    {
      'time': 1536410052985,
      'values': {
        'power': 397310
      }
    },
    {
      'time': 1536410054989,
      'values': {
        'power': 398380
      }
    },
    {
      'time': 1536410056988,
      'values': {
        'power': 399460
      }
    },
    {
      'time': 1536410058991,
      'values': {
        'power': 402350
      }
    },
    {
      'time': 1536410060993,
      'values': {
        'power': 405320
      }
    },
    {
      'time': 1536410062995,
      'values': {
        'power': 405240
      }
    },
    {
      'time': 1536410064996,
      'values': {
        'power': 405480
      }
    },
    {
      'time': 1536410066998,
      'values': {
        'power': 401550
      }
    },
    {
      'time': 1536410069001,
      'values': {
        'power': 395530
      }
    },
    {
      'time': 1536410071003,
      'values': {
        'power': 393280
      }
    },
    {
      'time': 1536410073005,
      'values': {
        'power': 396520
      }
    },
    {
      'time': 1536410075007,
      'values': {
        'power': 399320
      }
    },
    {
      'time': 1536410077009,
      'values': {
        'power': 400180
      }
    },
    {
      'time': 1536410079011,
      'values': {
        'power': 396080
      }
    },
    {
      'time': 1536410081013,
      'values': {
        'power': 387960
      }
    },
    {
      'time': 1536410083014,
      'values': {
        'power': 385850
      }
    },
    {
      'time': 1536410085016,
      'values': {
        'power': 389070
      }
    },
    {
      'time': 1536410087018,
      'values': {
        'power': 391680
      }
    },
    {
      'time': 1536410089020,
      'values': {
        'power': 391830
      }
    },
    {
      'time': 1536410091022,
      'values': {
        'power': 391250
      }
    },
    {
      'time': 1536410093024,
      'values': {
        'power': 391010
      }
    },
    {
      'time': 1536410095026,
      'values': {
        'power': 391260
      }
    },
    {
      'time': 1536410097028,
      'values': {
        'power': 390870
      }
    },
    {
      'time': 1536410099029,
      'values': {
        'power': 389260
      }
    },
    {
      'time': 1536410101032,
      'values': {
        'power': 388360
      }
    },
    {
      'time': 1536410103034,
      'values': {
        'power': 416100
      }
    },
    {
      'time': 1536410105036,
      'values': {
        'power': 555600
      }
    },
    {
      'time': 1536410107038,
      'values': {
        'power': 554290
      }
    },
    {
      'time': 1536410109040,
      'values': {
        'power': 439990
      }
    },
    {
      'time': 1536410111041,
      'values': {
        'power': 436980
      }
    },
    {
      'time': 1536410113044,
      'values': {
        'power': 435890
      }
    },
    {
      'time': 1536410115046,
      'values': {
        'power': 436820
      }
    },
    {
      'time': 1536410117047,
      'values': {
        'power': 436830
      }
    },
    {
      'time': 1536410119049,
      'values': {
        'power': 435370
      }
    },
    {
      'time': 1536410121052,
      'values': {
        'power': 433180
      }
    },
    {
      'time': 1536410123054,
      'values': {
        'power': 434600
      }
    },
    {
      'time': 1536410125055,
      'values': {
        'power': 437810
      }
    },
    {
      'time': 1536410127058,
      'values': {
        'power': 436690
      }
    },
    {
      'time': 1536410129060,
      'values': {
        'power': 431510
      }
    },
    {
      'time': 1536410131061,
      'values': {
        'power': 428080
      }
    },
    {
      'time': 1536410133063,
      'values': {
        'power': 430730
      }
    },
    {
      'time': 1536410135065,
      'values': {
        'power': 432990
      }
    },
    {
      'time': 1536410137067,
      'values': {
        'power': 432680
      }
    },
    {
      'time': 1536410139069,
      'values': {
        'power': 429200
      }
    },
    {
      'time': 1536410141072,
      'values': {
        'power': 426600
      }
    },
    {
      'time': 1536410143072,
      'values': {
        'power': 427360
      }
    },
    {
      'time': 1536410145075,
      'values': {
        'power': 427920
      }
    },
    {
      'time': 1536410147077,
      'values': {
        'power': 427530
      }
    },
    {
      'time': 1536410149079,
      'values': {
        'power': 428300
      }
    },
    {
      'time': 1536410151081,
      'values': {
        'power': 428270
      }
    },
    {
      'time': 1536410153083,
      'values': {
        'power': 426700
      }
    },
    {
      'time': 1536410155085,
      'values': {
        'power': 427710
      }
    },
    {
      'time': 1536410157087,
      'values': {
        'power': 429180
      }
    },
    {
      'time': 1536410159089,
      'values': {
        'power': 429310
      }
    },
    {
      'time': 1536410161091,
      'values': {
        'power': 430230
      }
    },
    {
      'time': 1536410163095,
      'values': {
        'power': 431350
      }
    },
    {
      'time': 1536410165095,
      'values': {
        'power': 431610
      }
    },
    {
      'time': 1536410167096,
      'values': {
        'power': 434060
      }
    },
    {
      'time': 1536410169098,
      'values': {
        'power': 434590
      }
    },
    {
      'time': 1536410171101,
      'values': {
        'power': 432480
      }
    },
    {
      'time': 1536410173103,
      'values': {
        'power': 431810
      }
    },
    {
      'time': 1536410175105,
      'values': {
        'power': 432400
      }
    },
    {
      'time': 1536410177106,
      'values': {
        'power': 432370
      }
    },
    {
      'time': 1536410179108,
      'values': {
        'power': 431280
      }
    },
    {
      'time': 1536410181110,
      'values': {
        'power': 429030
      }
    },
    {
      'time': 1536410183112,
      'values': {
        'power': 427400
      }
    },
    {
      'time': 1536410185114,
      'values': {
        'power': 427930
      }
    },
    {
      'time': 1536410187116,
      'values': {
        'power': 428900
      }
    },
    {
      'time': 1536410189118,
      'values': {
        'power': 427690
      }
    },
    {
      'time': 1536410191123,
      'values': {
        'power': 425440
      }
    },
    {
      'time': 1536410193121,
      'values': {
        'power': 426960
      }
    },
    {
      'time': 1536410195124,
      'values': {
        'power': 429520
      }
    },
    {
      'time': 1536410197125,
      'values': {
        'power': 429940
      }
    },
    {
      'time': 1536410199127,
      'values': {
        'power': 429360
      }
    },
    {
      'time': 1536410201130,
      'values': {
        'power': 424740
      }
    },
    {
      'time': 1536410203132,
      'values': {
        'power': 422250
      }
    },
    {
      'time': 1536410205134,
      'values': {
        'power': 423340
      }
    },
    {
      'time': 1536410207136,
      'values': {
        'power': 424540
      }
    },
    {
      'time': 1536410209138,
      'values': {
        'power': 425650
      }
    },
    {
      'time': 1536410211140,
      'values': {
        'power': 426530
      }
    },
    {
      'time': 1536410213142,
      'values': {
        'power': 427710
      }
    },
    {
      'time': 1536410215144,
      'values': {
        'power': 429000
      }
    },
    {
      'time': 1536410217148,
      'values': {
        'power': 428360
      }
    },
    {
      'time': 1536410219147,
      'values': {
        'power': 425180
      }
    },
    {
      'time': 1536410221149,
      'values': {
        'power': 424690
      }
    },
    {
      'time': 1536410223152,
      'values': {
        'power': 427970
      }
    },
    {
      'time': 1536410225153,
      'values': {
        'power': 428490
      }
    },
    {
      'time': 1536410227155,
      'values': {
        'power': 428680
      }
    },
    {
      'time': 1536410229157,
      'values': {
        'power': 429330
      }
    },
    {
      'time': 1536410231159,
      'values': {
        'power': 428200
      }
    },
    {
      'time': 1536410233160,
      'values': {
        'power': 429120
      }
    },
    {
      'time': 1536410235163,
      'values': {
        'power': 427940
      }
    },
    {
      'time': 1536410237165,
      'values': {
        'power': 424590
      }
    },
    {
      'time': 1536410239167,
      'values': {
        'power': 425740
      }
    },
    {
      'time': 1536410241169,
      'values': {
        'power': 427180
      }
    },
    {
      'time': 1536410243171,
      'values': {
        'power': 424680
      }
    },
    {
      'time': 1536410245173,
      'values': {
        'power': 422880
      }
    },
    {
      'time': 1536410247174,
      'values': {
        'power': 426330
      }
    },
    {
      'time': 1536410249176,
      'values': {
        'power': 429300
      }
    },
    {
      'time': 1536410251179,
      'values': {
        'power': 420930
      }
    },
    {
      'time': 1536410253181,
      'values': {
        'power': 398200
      }
    },
    {
      'time': 1536410255183,
      'values': {
        'power': 382760
      }
    },
    {
      'time': 1536410257185,
      'values': {
        'power': 376640
      }
    },
    {
      'time': 1536410259187,
      'values': {
        'power': 372160
      }
    },
    {
      'time': 1536410261189,
      'values': {
        'power': 373450
      }
    },
    {
      'time': 1536410263191,
      'values': {
        'power': 375450
      }
    },
    {
      'time': 1536410265192,
      'values': {
        'power': 378160
      }
    },
    {
      'time': 1536410267195,
      'values': {
        'power': 376480
      }
    },
    {
      'time': 1536410269198,
      'values': {
        'power': 363300
      }
    },
    {
      'time': 1536410271198,
      'values': {
        'power': 352380
      }
    },
    {
      'time': 1536410273201,
      'values': {
        'power': 352370
      }
    },
    {
      'time': 1536410275202,
      'values': {
        'power': 351990
      }
    },
    {
      'time': 1536410277204,
      'values': {
        'power': 350980
      }
    },
    {
      'time': 1536410279206,
      'values': {
        'power': 351330
      }
    },
    {
      'time': 1536410281208,
      'values': {
        'power': 351140
      }
    },
    {
      'time': 1536410283210,
      'values': {
        'power': 351090
      }
    },
    {
      'time': 1536410285212,
      'values': {
        'power': 351020
      }
    },
    {
      'time': 1536410287215,
      'values': {
        'power': 349840
      }
    },
    {
      'time': 1536410289216,
      'values': {
        'power': 348740
      }
    },
    {
      'time': 1536410291218,
      'values': {
        'power': 347910
      }
    },
    {
      'time': 1536410293220,
      'values': {
        'power': 349600
      }
    },
    {
      'time': 1536410295222,
      'values': {
        'power': 351110
      }
    },
    {
      'time': 1536410297225,
      'values': {
        'power': 349690
      }
    },
    {
      'time': 1536410299226,
      'values': {
        'power': 349230
      }
    },
    {
      'time': 1536410301227,
      'values': {
        'power': 351160
      }
    },
    {
      'time': 1536410303229,
      'values': {
        'power': 353700
      }
    },
    {
      'time': 1536410305232,
      'values': {
        'power': 354350
      }
    },
    {
      'time': 1536410307234,
      'values': {
        'power': 351990
      }
    },
    {
      'time': 1536410309236,
      'values': {
        'power': 349020
      }
    },
    {
      'time': 1536410311238,
      'values': {
        'power': 350060
      }
    },
    {
      'time': 1536410313240,
      'values': {
        'power': 350190
      }
    },
    {
      'time': 1536410315242,
      'values': {
        'power': 348140
      }
    },
    {
      'time': 1536410317244,
      'values': {
        'power': 348360
      }
    },
    {
      'time': 1536410319245,
      'values': {
        'power': 348030
      }
    },
    {
      'time': 1536410321247,
      'values': {
        'power': 348580
      }
    },
    {
      'time': 1536410323249,
      'values': {
        'power': 351950
      }
    },
    {
      'time': 1536410325251,
      'values': {
        'power': 352630
      }
    },
    {
      'time': 1536410327253,
      'values': {
        'power': 350420
      }
    },
    {
      'time': 1536410329255,
      'values': {
        'power': 349920
      }
    },
    {
      'time': 1536410331256,
      'values': {
        'power': 349400
      }
    },
    {
      'time': 1536410333259,
      'values': {
        'power': 350280
      }
    },
    {
      'time': 1536410335261,
      'values': {
        'power': 349670
      }
    },
    {
      'time': 1536410337263,
      'values': {
        'power': 346360
      }
    },
    {
      'time': 1536410339265,
      'values': {
        'power': 345390
      }
    },
    {
      'time': 1536410341267,
      'values': {
        'power': 346780
      }
    },
    {
      'time': 1536410343269,
      'values': {
        'power': 348350
      }
    },
    {
      'time': 1536410345271,
      'values': {
        'power': 350710
      }
    },
    {
      'time': 1536410347272,
      'values': {
        'power': 351850
      }
    },
    {
      'time': 1536410349274,
      'values': {
        'power': 350280
      }
    },
    {
      'time': 1536410351277,
      'values': {
        'power': 350930
      }
    },
    {
      'time': 1536410353279,
      'values': {
        'power': 352600
      }
    },
    {
      'time': 1536410355280,
      'values': {
        'power': 349870
      }
    },
    {
      'time': 1536410357282,
      'values': {
        'power': 349150
      }
    },
    {
      'time': 1536410359285,
      'values': {
        'power': 351920
      }
    },
    {
      'time': 1536410361287,
      'values': {
        'power': 351580
      }
    },
    {
      'time': 1536410363289,
      'values': {
        'power': 351020
      }
    },
    {
      'time': 1536410365290,
      'values': {
        'power': 352300
      }
    },
    {
      'time': 1536410367292,
      'values': {
        'power': 352470
      }
    },
    {
      'time': 1536410369294,
      'values': {
        'power': 351480
      }
    },
    {
      'time': 1536410371296,
      'values': {
        'power': 350340
      }
    },
    {
      'time': 1536410373298,
      'values': {
        'power': 350050
      }
    },
    {
      'time': 1536410375299,
      'values': {
        'power': 351710
      }
    },
    {
      'time': 1536410377302,
      'values': {
        'power': 353240
      }
    },
    {
      'time': 1536410379304,
      'values': {
        'power': 353130
      }
    },
    {
      'time': 1536410381306,
      'values': {
        'power': 351870
      }
    },
    {
      'time': 1536410383307,
      'values': {
        'power': 357640
      }
    },
    {
      'time': 1536410385309,
      'values': {
        'power': 371890
      }
    },
    {
      'time': 1536410387312,
      'values': {
        'power': 376720
      }
    },
    {
      'time': 1536410389314,
      'values': {
        'power': 377490
      }
    },
    {
      'time': 1536410391316,
      'values': {
        'power': 378910
      }
    },
    {
      'time': 1536410393318,
      'values': {
        'power': 373580
      }
    },
    {
      'time': 1536410395321,
      'values': {
        'power': 361560
      }
    },
    {
      'time': 1536410397325,
      'values': {
        'power': 355720
      }
    },
    {
      'time': 1536410399323,
      'values': {
        'power': 357950
      }
    },
    {
      'time': 1536410401325,
      'values': {
        'power': 365210
      }
    },
    {
      'time': 1536410403328,
      'values': {
        'power': 370260
      }
    },
    {
      'time': 1536410405330,
      'values': {
        'power': 371400
      }
    },
    {
      'time': 1536410407332,
      'values': {
        'power': 372480
      }
    },
    {
      'time': 1536410409333,
      'values': {
        'power': 363890
      }
    },
    {
      'time': 1536410411335,
      'values': {
        'power': 353840
      }
    },
    {
      'time': 1536410413337,
      'values': {
        'power': 351130
      }
    },
    {
      'time': 1536410415339,
      'values': {
        'power': 353330
      }
    },
    {
      'time': 1536410417341,
      'values': {
        'power': 353340
      }
    },
    {
      'time': 1536410419343,
      'values': {
        'power': 351460
      }
    },
    {
      'time': 1536410421345,
      'values': {
        'power': 505070
      }
    },
    {
      'time': 1536410423347,
      'values': {
        'power': 559050
      }
    },
    {
      'time': 1536410425348,
      'values': {
        'power': 436260
      }
    },
    {
      'time': 1536410427351,
      'values': {
        'power': 415230
      }
    },
    {
      'time': 1536410429353,
      'values': {
        'power': 417590
      }
    },
    {
      'time': 1536410431356,
      'values': {
        'power': 418320
      }
    },
    {
      'time': 1536410433356,
      'values': {
        'power': 420350
      }
    },
    {
      'time': 1536410435359,
      'values': {
        'power': 423380
      }
    },
    {
      'time': 1536410437360,
      'values': {
        'power': 423220
      }
    },
    {
      'time': 1536410439362,
      'values': {
        'power': 416650
      }
    },
    {
      'time': 1536410441365,
      'values': {
        'power': 409780
      }
    },
    {
      'time': 1536410443367,
      'values': {
        'power': 410050
      }
    },
    {
      'time': 1536410445369,
      'values': {
        'power': 411570
      }
    },
    {
      'time': 1536410447371,
      'values': {
        'power': 409540
      }
    },
    {
      'time': 1536410449372,
      'values': {
        'power': 406630
      }
    },
    {
      'time': 1536410451374,
      'values': {
        'power': 403490
      }
    },
    {
      'time': 1536410453377,
      'values': {
        'power': 400900
      }
    },
    {
      'time': 1536410455379,
      'values': {
        'power': 400400
      }
    },
    {
      'time': 1536410457381,
      'values': {
        'power': 398030
      }
    },
    {
      'time': 1536410459382,
      'values': {
        'power': 394980
      }
    },
    {
      'time': 1536410461384,
      'values': {
        'power': 377850
      }
    },
    {
      'time': 1536410463387,
      'values': {
        'power': 365810
      }
    },
    {
      'time': 1536410465388,
      'values': {
        'power': 361550
      }
    },
    {
      'time': 1536410467389,
      'values': {
        'power': 360500
      }
    },
    {
      'time': 1536410469392,
      'values': {
        'power': 360050
      }
    },
    {
      'time': 1536410471394,
      'values': {
        'power': 357700
      }
    },
    {
      'time': 1536410473396,
      'values': {
        'power': 361270
      }
    },
    {
      'time': 1536410475397,
      'values': {
        'power': 372490
      }
    },
    {
      'time': 1536410477399,
      'values': {
        'power': 376920
      }
    },
    {
      'time': 1536410479402,
      'values': {
        'power': 373220
      }
    },
    {
      'time': 1536410481404,
      'values': {
        'power': 371100
      }
    },
    {
      'time': 1536410483406,
      'values': {
        'power': 371990
      }
    },
    {
      'time': 1536410485408,
      'values': {
        'power': 372800
      }
    },
    {
      'time': 1536410487410,
      'values': {
        'power': 371920
      }
    },
    {
      'time': 1536410489412,
      'values': {
        'power': 370860
      }
    },
    {
      'time': 1536410491413,
      'values': {
        'power': 371070
      }
    },
    {
      'time': 1536410493415,
      'values': {
        'power': 373170
      }
    },
    {
      'time': 1536410495418,
      'values': {
        'power': 373910
      }
    },
    {
      'time': 1536410497420,
      'values': {
        'power': 373220
      }
    },
    {
      'time': 1536410499422,
      'values': {
        'power': 373740
      }
    },
    {
      'time': 1536410501423,
      'values': {
        'power': 373370
      }
    },
    {
      'time': 1536410503425,
      'values': {
        'power': 374020
      }
    },
    {
      'time': 1536410505428,
      'values': {
        'power': 375460
      }
    },
    {
      'time': 1536410507429,
      'values': {
        'power': 373980
      }
    },
    {
      'time': 1536410509431,
      'values': {
        'power': 371030
      }
    },
    {
      'time': 1536410511433,
      'values': {
        'power': 374180
      }
    },
    {
      'time': 1536410513435,
      'values': {
        'power': 382640
      }
    },
    {
      'time': 1536410515437,
      'values': {
        'power': 387560
      }
    },
    {
      'time': 1536410517439,
      'values': {
        'power': 387130
      }
    },
    {
      'time': 1536410519440,
      'values': {
        'power': 381120
      }
    },
    {
      'time': 1536410521442,
      'values': {
        'power': 374660
      }
    },
    {
      'time': 1536410523445,
      'values': {
        'power': 374580
      }
    },
    {
      'time': 1536410525447,
      'values': {
        'power': 376980
      }
    },
    {
      'time': 1536410527448,
      'values': {
        'power': 377730
      }
    },
    {
      'time': 1536410529451,
      'values': {
        'power': 377180
      }
    },
    {
      'time': 1536410531453,
      'values': {
        'power': 377320
      }
    },
    {
      'time': 1536410533454,
      'values': {
        'power': 378760
      }
    },
    {
      'time': 1536410535456,
      'values': {
        'power': 381100
      }
    },
    {
      'time': 1536410537459,
      'values': {
        'power': 380960
      }
    },
    {
      'time': 1536410539461,
      'values': {
        'power': 377150
      }
    },
    {
      'time': 1536410541463,
      'values': {
        'power': 362440
      }
    },
    {
      'time': 1536410543465,
      'values': {
        'power': 350300
      }
    },
    {
      'time': 1536410545468,
      'values': {
        'power': 350430
      }
    },
    {
      'time': 1536410547468,
      'values': {
        'power': 350250
      }
    },
    {
      'time': 1536410549471,
      'values': {
        'power': 350020
      }
    },
    {
      'time': 1536410551472,
      'values': {
        'power': 352380
      }
    },
    {
      'time': 1536410553474,
      'values': {
        'power': 366730
      }
    },
    {
      'time': 1536410555476,
      'values': {
        'power': 380270
      }
    },
    {
      'time': 1536410557478,
      'values': {
        'power': 381150
      }
    },
    {
      'time': 1536410559480,
      'values': {
        'power': 380560
      }
    },
    {
      'time': 1536410561482,
      'values': {
        'power': 380060
      }
    },
    {
      'time': 1536410563484,
      'values': {
        'power': 380760
      }
    },
    {
      'time': 1536410565487,
      'values': {
        'power': 381220
      }
    },
    {
      'time': 1536410567487,
      'values': {
        'power': 380860
      }
    },
    {
      'time': 1536410569490,
      'values': {
        'power': 380280
      }
    },
    {
      'time': 1536410571492,
      'values': {
        'power': 377460
      }
    },
    {
      'time': 1536410573494,
      'values': {
        'power': 373120
      }
    },
    {
      'time': 1536410575496,
      'values': {
        'power': 370710
      }
    },
    {
      'time': 1536410577497,
      'values': {
        'power': 369380
      }
    },
    {
      'time': 1536410579499,
      'values': {
        'power': 372060
      }
    },
    {
      'time': 1536410581502,
      'values': {
        'power': 376950
      }
    },
    {
      'time': 1536410583504,
      'values': {
        'power': 379920
      }
    },
    {
      'time': 1536410585506,
      'values': {
        'power': 383200
      }
    },
    {
      'time': 1536410587508,
      'values': {
        'power': 383300
      }
    },
    {
      'time': 1536410589510,
      'values': {
        'power': 382310
      }
    },
    {
      'time': 1536410591512,
      'values': {
        'power': 381590
      }
    },
    {
      'time': 1536410593514,
      'values': {
        'power': 382070
      }
    },
    {
      'time': 1536410595516,
      'values': {
        'power': 382540
      }
    },
    {
      'time': 1536410597519,
      'values': {
        'power': 381730
      }
    },
    {
      'time': 1536410599520,
      'values': {
        'power': 381810
      }
    },
    {
      'time': 1536410601521,
      'values': {
        'power': 382460
      }
    },
    {
      'time': 1536410603523,
      'values': {
        'power': 383050
      }
    },
    {
      'time': 1536410605525,
      'values': {
        'power': 382750
      }
    },
    {
      'time': 1536410607527,
      'values': {
        'power': 382340
      }
    },
    {
      'time': 1536410609529,
      'values': {
        'power': 381870
      }
    },
    {
      'time': 1536410611531,
      'values': {
        'power': 381850
      }
    },
    {
      'time': 1536410613533,
      'values': {
        'power': 382790
      }
    },
    {
      'time': 1536410615535,
      'values': {
        'power': 385060
      }
    },
    {
      'time': 1536410617537,
      'values': {
        'power': 389080
      }
    },
    {
      'time': 1536410619539,
      'values': {
        'power': 389420
      }
    },
    {
      'time': 1536410621541,
      'values': {
        'power': 386280
      }
    },
    {
      'time': 1536410623543,
      'values': {
        'power': 386590
      }
    },
    {
      'time': 1536410625545,
      'values': {
        'power': 387130
      }
    },
    {
      'time': 1536410627547,
      'values': {
        'power': 385730
      }
    },
    {
      'time': 1536410629549,
      'values': {
        'power': 385160
      }
    },
    {
      'time': 1536410631551,
      'values': {
        'power': 378850
      }
    },
    {
      'time': 1536410633553,
      'values': {
        'power': 363140
      }
    },
    {
      'time': 1536410635554,
      'values': {
        'power': 354580
      }
    },
    {
      'time': 1536410637557,
      'values': {
        'power': 355110
      }
    },
    {
      'time': 1536410639559,
      'values': {
        'power': 355350
      }
    },
    {
      'time': 1536410641561,
      'values': {
        'power': 355320
      }
    },
    {
      'time': 1536410643564,
      'values': {
        'power': 358830
      }
    },
    {
      'time': 1536410645565,
      'values': {
        'power': 372500
      }
    },
    {
      'time': 1536410647566,
      'values': {
        'power': 383920
      }
    },
    {
      'time': 1536410649568,
      'values': {
        'power': 385820
      }
    },
    {
      'time': 1536410651570,
      'values': {
        'power': 384780
      }
    },
    {
      'time': 1536410653573,
      'values': {
        'power': 384390
      }
    },
    {
      'time': 1536410655573,
      'values': {
        'power': 384360
      }
    },
    {
      'time': 1536410657575,
      'values': {
        'power': 383970
      }
    },
    {
      'time': 1536410659578,
      'values': {
        'power': 385490
      }
    },
    {
      'time': 1536410661580,
      'values': {
        'power': 387870
      }
    },
    {
      'time': 1536410663582,
      'values': {
        'power': 384500
      }
    },
    {
      'time': 1536410665584,
      'values': {
        'power': 374370
      }
    },
    {
      'time': 1536410667585,
      'values': {
        'power': 367810
      }
    },
    {
      'time': 1536410669587,
      'values': {
        'power': 365890
      }
    },
    {
      'time': 1536410671590,
      'values': {
        'power': 369560
      }
    },
    {
      'time': 1536410673592,
      'values': {
        'power': 373610
      }
    },
    {
      'time': 1536410675594,
      'values': {
        'power': 373770
      }
    },
    {
      'time': 1536410677596,
      'values': {
        'power': 373360
      }
    },
    {
      'time': 1536410679600,
      'values': {
        'power': 372740
      }
    },
    {
      'time': 1536410681602,
      'values': {
        'power': 373070
      }
    },
    {
      'time': 1536410683601,
      'values': {
        'power': 374370
      }
    },
    {
      'time': 1536410685604,
      'values': {
        'power': 375980
      }
    },
    {
      'time': 1536410687606,
      'values': {
        'power': 376690
      }
    },
    {
      'time': 1536410689608,
      'values': {
        'power': 375810
      }
    },
    {
      'time': 1536410691610,
      'values': {
        'power': 375190
      }
    },
    {
      'time': 1536410693612,
      'values': {
        'power': 375470
      }
    },
    {
      'time': 1536410695613,
      'values': {
        'power': 375020
      }
    },
    {
      'time': 1536410697615,
      'values': {
        'power': 374010
      }
    },
    {
      'time': 1536410699617,
      'values': {
        'power': 371400
      }
    },
    {
      'time': 1536410701619,
      'values': {
        'power': 369350
      }
    },
    {
      'time': 1536410703621,
      'values': {
        'power': 369530
      }
    },
    {
      'time': 1536410705623,
      'values': {
        'power': 371950
      }
    },
    {
      'time': 1536410707625,
      'values': {
        'power': 374010
      }
    },
    {
      'time': 1536410709626,
      'values': {
        'power': 376020
      }
    },
    {
      'time': 1536410711628,
      'values': {
        'power': 385730
      }
    },
    {
      'time': 1536410713631,
      'values': {
        'power': 398540
      }
    },
    {
      'time': 1536410715633,
      'values': {
        'power': 404050
      }
    },
    {
      'time': 1536410717635,
      'values': {
        'power': 407100
      }
    },
    {
      'time': 1536410719637,
      'values': {
        'power': 404910
      }
    },
    {
      'time': 1536410721639,
      'values': {
        'power': 401140
      }
    },
    {
      'time': 1536410723641,
      'values': {
        'power': 397920
      }
    },
    {
      'time': 1536410725643,
      'values': {
        'power': 396880
      }
    },
    {
      'time': 1536410727645,
      'values': {
        'power': 388380
      }
    },
    {
      'time': 1536410729647,
      'values': {
        'power': 377530
      }
    },
    {
      'time': 1536410731649,
      'values': {
        'power': 375560
      }
    },
    {
      'time': 1536410733651,
      'values': {
        'power': 374920
      }
    },
    {
      'time': 1536410735653,
      'values': {
        'power': 374260
      }
    },
    {
      'time': 1536410737654,
      'values': {
        'power': 373260
      }
    },
    {
      'time': 1536410739656,
      'values': {
        'power': 371560
      }
    },
    {
      'time': 1536410741658,
      'values': {
        'power': 370970
      }
    },
    {
      'time': 1536410743660,
      'values': {
        'power': 374630
      }
    },
    {
      'time': 1536410745662,
      'values': {
        'power': 376710
      }
    },
    {
      'time': 1536410747664,
      'values': {
        'power': 375710
      }
    },
    {
      'time': 1536410749666,
      'values': {
        'power': 373710
      }
    },
    {
      'time': 1536410751668,
      'values': {
        'power': 372170
      }
    },
    {
      'time': 1536410753670,
      'values': {
        'power': 373480
      }
    },
    {
      'time': 1536410755672,
      'values': {
        'power': 376070
      }
    },
    {
      'time': 1536410757674,
      'values': {
        'power': 375220
      }
    },
    {
      'time': 1536410759675,
      'values': {
        'power': 372650
      }
    },
    {
      'time': 1536410761678,
      'values': {
        'power': 372140
      }
    },
    {
      'time': 1536410763680,
      'values': {
        'power': 372590
      }
    },
    {
      'time': 1536410765682,
      'values': {
        'power': 374290
      }
    },
    {
      'time': 1536410767683,
      'values': {
        'power': 376410
      }
    },
    {
      'time': 1536410769685,
      'values': {
        'power': 376250
      }
    },
    {
      'time': 1536410771688,
      'values': {
        'power': 373770
      }
    },
    {
      'time': 1536410773690,
      'values': {
        'power': 373420
      }
    },
    {
      'time': 1536410775692,
      'values': {
        'power': 374540
      }
    },
    {
      'time': 1536410777694,
      'values': {
        'power': 374520
      }
    },
    {
      'time': 1536410779696,
      'values': {
        'power': 372750
      }
    },
    {
      'time': 1536410781698,
      'values': {
        'power': 371890
      }
    },
    {
      'time': 1536410783699,
      'values': {
        'power': 372090
      }
    },
    {
      'time': 1536410785701,
      'values': {
        'power': 375760
      }
    },
    {
      'time': 1536410787704,
      'values': {
        'power': 382940
      }
    },
    {
      'time': 1536410789705,
      'values': {
        'power': 386390
      }
    },
    {
      'time': 1536410791707,
      'values': {
        'power': 386540
      }
    },
    {
      'time': 1536410793709,
      'values': {
        'power': 386960
      }
    },
    {
      'time': 1536410795711,
      'values': {
        'power': 385280
      }
    },
    {
      'time': 1536410797713,
      'values': {
        'power': 386490
      }
    },
    {
      'time': 1536410799715,
      'values': {
        'power': 390950
      }
    },
    {
      'time': 1536410801717,
      'values': {
        'power': 401860
      }
    },
    {
      'time': 1536410803719,
      'values': {
        'power': 412460
      }
    },
    {
      'time': 1536410805721,
      'values': {
        'power': 413750
      }
    },
    {
      'time': 1536410807723,
      'values': {
        'power': 412420
      }
    },
    {
      'time': 1536410809724,
      'values': {
        'power': 400970
      }
    },
    {
      'time': 1536410811726,
      'values': {
        'power': 389620
      }
    },
    {
      'time': 1536410813729,
      'values': {
        'power': 388150
      }
    },
    {
      'time': 1536410815731,
      'values': {
        'power': 389590
      }
    },
    {
      'time': 1536410817732,
      'values': {
        'power': 391190
      }
    },
    {
      'time': 1536410819734,
      'values': {
        'power': 390800
      }
    },
    {
      'time': 1536410821736,
      'values': {
        'power': 389980
      }
    },
    {
      'time': 1536410823739,
      'values': {
        'power': 390600
      }
    },
    {
      'time': 1536410825741,
      'values': {
        'power': 392330
      }
    },
    {
      'time': 1536410827743,
      'values': {
        'power': 392360
      }
    },
    {
      'time': 1536410829745,
      'values': {
        'power': 392080
      }
    },
    {
      'time': 1536410831748,
      'values': {
        'power': 407780
      }
    },
    {
      'time': 1536410833748,
      'values': {
        'power': 427010
      }
    },
    {
      'time': 1536410835750,
      'values': {
        'power': 431920
      }
    },
    {
      'time': 1536410837752,
      'values': {
        'power': 432660
      }
    },
    {
      'time': 1536410839754,
      'values': {
        'power': 431030
      }
    },
    {
      'time': 1536410841756,
      'values': {
        'power': 428630
      }
    },
    {
      'time': 1536410843758,
      'values': {
        'power': 427790
      }
    },
    {
      'time': 1536410845760,
      'values': {
        'power': 428810
      }
    },
    {
      'time': 1536410847761,
      'values': {
        'power': 431500
      }
    },
    {
      'time': 1536410849764,
      'values': {
        'power': 430680
      }
    },
    {
      'time': 1536410851766,
      'values': {
        'power': 427570
      }
    },
    {
      'time': 1536410853768,
      'values': {
        'power': 427430
      }
    },
    {
      'time': 1536410855770,
      'values': {
        'power': 429040
      }
    },
    {
      'time': 1536410857772,
      'values': {
        'power': 429460
      }
    },
    {
      'time': 1536410859773,
      'values': {
        'power': 428240
      }
    },
    {
      'time': 1536410861775,
      'values': {
        'power': 428730
      }
    },
    {
      'time': 1536410863778,
      'values': {
        'power': 429190
      }
    },
    {
      'time': 1536410865780,
      'values': {
        'power': 429670
      }
    },
    {
      'time': 1536410867781,
      'values': {
        'power': 429580
      }
    },
    {
      'time': 1536410869784,
      'values': {
        'power': 427850
      }
    },
    {
      'time': 1536410871786,
      'values': {
        'power': 427960
      }
    },
    {
      'time': 1536410873788,
      'values': {
        'power': 428560
      }
    },
    {
      'time': 1536410875789,
      'values': {
        'power': 428920
      }
    },
    {
      'time': 1536410877792,
      'values': {
        'power': 429550
      }
    },
    {
      'time': 1536410879794,
      'values': {
        'power': 428880
      }
    },
    {
      'time': 1536410881796,
      'values': {
        'power': 650110
      }
    },
    {
      'time': 1536410883797,
      'values': {
        'power': 1043080
      }
    },
    {
      'time': 1536410885799,
      'values': {
        'power': 1186190
      }
    },
    {
      'time': 1536410887801,
      'values': {
        'power': 1080600
      }
    },
    {
      'time': 1536410889804,
      'values': {
        'power': 1010520
      }
    },
    {
      'time': 1536410891805,
      'values': {
        'power': 1018230
      }
    },
    {
      'time': 1536410893808,
      'values': {
        'power': 1019650
      }
    },
    {
      'time': 1536410895809,
      'values': {
        'power': 1020580
      }
    },
    {
      'time': 1536410897812,
      'values': {
        'power': 1020720
      }
    },
    {
      'time': 1536410899813,
      'values': {
        'power': 1020310
      }
    },
    {
      'time': 1536410901814,
      'values': {
        'power': 1020490
      }
    },
    {
      'time': 1536410903816,
      'values': {
        'power': 1019170
      }
    },
    {
      'time': 1536410905819,
      'values': {
        'power': 1004180
      }
    },
    {
      'time': 1536410907821,
      'values': {
        'power': 979480
      }
    },
    {
      'time': 1536410909823,
      'values': {
        'power': 959690
      }
    },
    {
      'time': 1536410911824,
      'values': {
        'power': 954430
      }
    },
    {
      'time': 1536410913826,
      'values': {
        'power': 875380
      }
    },
    {
      'time': 1536410915829,
      'values': {
        'power': 641900
      }
    },
    {
      'time': 1536410917831,
      'values': {
        'power': 461580
      }
    },
    {
      'time': 1536410919833,
      'values': {
        'power': 453690
      }
    },
    {
      'time': 1536410921835,
      'values': {
        'power': 452650
      }
    },
    {
      'time': 1536410923837,
      'values': {
        'power': 452270
      }
    },
    {
      'time': 1536410925839,
      'values': {
        'power': 453310
      }
    },
    {
      'time': 1536410927840,
      'values': {
        'power': 449570
      }
    },
    {
      'time': 1536410929842,
      'values': {
        'power': 445640
      }
    },
    {
      'time': 1536410931844,
      'values': {
        'power': 446010
      }
    },
    {
      'time': 1536410933847,
      'values': {
        'power': 446590
      }
    },
    {
      'time': 1536410935848,
      'values': {
        'power': 447870
      }
    },
    {
      'time': 1536410937849,
      'values': {
        'power': 450290
      }
    },
    {
      'time': 1536410939851,
      'values': {
        'power': 449450
      }
    },
    {
      'time': 1536410941854,
      'values': {
        'power': 447080
      }
    },
    {
      'time': 1536410943856,
      'values': {
        'power': 446650
      }
    },
    {
      'time': 1536410945858,
      'values': {
        'power': 446870
      }
    },
    {
      'time': 1536410947860,
      'values': {
        'power': 447140
      }
    },
    {
      'time': 1536410949862,
      'values': {
        'power': 447400
      }
    },
    {
      'time': 1536410951864,
      'values': {
        'power': 445030
      }
    },
    {
      'time': 1536410953865,
      'values': {
        'power': 443480
      }
    },
    {
      'time': 1536410955867,
      'values': {
        'power': 443600
      }
    },
    {
      'time': 1536410957869,
      'values': {
        'power': 444640
      }
    },
    {
      'time': 1536410959872,
      'values': {
        'power': 444440
      }
    },
    {
      'time': 1536410961875,
      'values': {
        'power': 442060
      }
    },
    {
      'time': 1536410963875,
      'values': {
        'power': 443660
      }
    },
    {
      'time': 1536410965878,
      'values': {
        'power': 447160
      }
    },
    {
      'time': 1536410967881,
      'values': {
        'power': 447840
      }
    },
    {
      'time': 1536410969881,
      'values': {
        'power': 446280
      }
    },
    {
      'time': 1536410971884,
      'values': {
        'power': 444600
      }
    },
    {
      'time': 1536410973886,
      'values': {
        'power': 445220
      }
    },
    {
      'time': 1536410975888,
      'values': {
        'power': 447990
      }
    },
    {
      'time': 1536410977889,
      'values': {
        'power': 449790
      }
    },
    {
      'time': 1536410979891,
      'values': {
        'power': 449150
      }
    },
    {
      'time': 1536410981893,
      'values': {
        'power': 448620
      }
    },
    {
      'time': 1536410983895,
      'values': {
        'power': 448530
      }
    },
    {
      'time': 1536410985898,
      'values': {
        'power': 450440
      }
    },
    {
      'time': 1536410987898,
      'values': {
        'power': 451590
      }
    },
    {
      'time': 1536410989900,
      'values': {
        'power': 449910
      }
    },
    {
      'time': 1536410991903,
      'values': {
        'power': 448050
      }
    },
    {
      'time': 1536410993905,
      'values': {
        'power': 447190
      }
    },
    {
      'time': 1536410995907,
      'values': {
        'power': 448090
      }
    },
    {
      'time': 1536410997909,
      'values': {
        'power': 449550
      }
    },
    {
      'time': 1536410999911,
      'values': {
        'power': 450330
      }
    },
    {
      'time': 1536411001912,
      'values': {
        'power': 449910
      }
    },
    {
      'time': 1536411003914,
      'values': {
        'power': 452150
      }
    },
    {
      'time': 1536411005917,
      'values': {
        'power': 452180
      }
    },
    {
      'time': 1536411007919,
      'values': {
        'power': 449080
      }
    },
    {
      'time': 1536411009920,
      'values': {
        'power': 446820
      }
    },
    {
      'time': 1536411011923,
      'values': {
        'power': 443530
      }
    },
    {
      'time': 1536411013924,
      'values': {
        'power': 442050
      }
    },
    {
      'time': 1536411015926,
      'values': {
        'power': 442470
      }
    },
    {
      'time': 1536411017929,
      'values': {
        'power': 444910
      }
    },
    {
      'time': 1536411019931,
      'values': {
        'power': 444300
      }
    },
    {
      'time': 1536411021933,
      'values': {
        'power': 441510
      }
    },
    {
      'time': 1536411023934,
      'values': {
        'power': 440370
      }
    },
    {
      'time': 1536411025936,
      'values': {
        'power': 438730
      }
    },
    {
      'time': 1536411027938,
      'values': {
        'power': 439060
      }
    },
    {
      'time': 1536411029940,
      'values': {
        'power': 439770
      }
    },
    {
      'time': 1536411031942,
      'values': {
        'power': 439550
      }
    },
    {
      'time': 1536411033945,
      'values': {
        'power': 441000
      }
    },
    {
      'time': 1536411035947,
      'values': {
        'power': 443080
      }
    },
    {
      'time': 1536411037948,
      'values': {
        'power': 443950
      }
    },
    {
      'time': 1536411039949,
      'values': {
        'power': 443120
      }
    },
    {
      'time': 1536411041951,
      'values': {
        'power': 443580
      }
    },
    {
      'time': 1536411043954,
      'values': {
        'power': 445080
      }
    },
    {
      'time': 1536411045956,
      'values': {
        'power': 434100
      }
    },
    {
      'time': 1536411047958,
      'values': {
        'power': 418480
      }
    },
    {
      'time': 1536411049960,
      'values': {
        'power': 410610
      }
    },
    {
      'time': 1536411051962,
      'values': {
        'power': 406630
      }
    },
    {
      'time': 1536411053964,
      'values': {
        'power': 408420
      }
    },
    {
      'time': 1536411055966,
      'values': {
        'power': 414230
      }
    },
    {
      'time': 1536411057968,
      'values': {
        'power': 429400
      }
    },
    {
      'time': 1536411059970,
      'values': {
        'power': 442820
      }
    },
    {
      'time': 1536411061973,
      'values': {
        'power': 444610
      }
    },
    {
      'time': 1536411063974,
      'values': {
        'power': 442490
      }
    },
    {
      'time': 1536411065976,
      'values': {
        'power': 440130
      }
    },
    {
      'time': 1536411067977,
      'values': {
        'power': 441520
      }
    },
    {
      'time': 1536411069979,
      'values': {
        'power': 444000
      }
    },
    {
      'time': 1536411071981,
      'values': {
        'power': 442770
      }
    },
    {
      'time': 1536411073984,
      'values': {
        'power': 440330
      }
    },
    {
      'time': 1536411075985,
      'values': {
        'power': 440730
      }
    },
    {
      'time': 1536411077987,
      'values': {
        'power': 437020
      }
    },
    {
      'time': 1536411079989,
      'values': {
        'power': 429800
      }
    },
    {
      'time': 1536411081991,
      'values': {
        'power': 429090
      }
    },
    {
      'time': 1536411083994,
      'values': {
        'power': 435030
      }
    },
    {
      'time': 1536411085995,
      'values': {
        'power': 440440
      }
    },
    {
      'time': 1536411087999,
      'values': {
        'power': 441420
      }
    },
    {
      'time': 1536411090002,
      'values': {
        'power': 441190
      }
    },
    {
      'time': 1536411092000,
      'values': {
        'power': 441130
      }
    },
    {
      'time': 1536411094002,
      'values': {
        'power': 441950
      }
    },
    {
      'time': 1536411096005,
      'values': {
        'power': 442480
      }
    },
    {
      'time': 1536411098007,
      'values': {
        'power': 444610
      }
    },
    {
      'time': 1536411100009,
      'values': {
        'power': 447310
      }
    },
    {
      'time': 1536411102011,
      'values': {
        'power': 445150
      }
    },
    {
      'time': 1536411104012,
      'values': {
        'power': 442640
      }
    },
    {
      'time': 1536411106015,
      'values': {
        'power': 443050
      }
    },
    {
      'time': 1536411108017,
      'values': {
        'power': 443280
      }
    },
    {
      'time': 1536411110019,
      'values': {
        'power': 439380
      }
    },
    {
      'time': 1536411112021,
      'values': {
        'power': 423620
      }
    },
    {
      'time': 1536411114023,
      'values': {
        'power': 410970
      }
    },
    {
      'time': 1536411116025,
      'values': {
        'power': 413250
      }
    },
    {
      'time': 1536411118026,
      'values': {
        'power': 420010
      }
    },
    {
      'time': 1536411120028,
      'values': {
        'power': 420740
      }
    },
    {
      'time': 1536411122030,
      'values': {
        'power': 417730
      }
    },
    {
      'time': 1536411124032,
      'values': {
        'power': 432600
      }
    },
    {
      'time': 1536411126034,
      'values': {
        'power': 443900
      }
    },
    {
      'time': 1536411128036,
      'values': {
        'power': 437990
      }
    },
    {
      'time': 1536411130038,
      'values': {
        'power': 432920
      }
    },
    {
      'time': 1536411132040,
      'values': {
        'power': 431720
      }
    },
    {
      'time': 1536411134042,
      'values': {
        'power': 431730
      }
    },
    {
      'time': 1536411136043,
      'values': {
        'power': 429440
      }
    },
    {
      'time': 1536411138045,
      'values': {
        'power': 421910
      }
    },
    {
      'time': 1536411140048,
      'values': {
        'power': 411350
      }
    },
    {
      'time': 1536411142049,
      'values': {
        'power': 407290
      }
    },
    {
      'time': 1536411144052,
      'values': {
        'power': 408490
      }
    },
    {
      'time': 1536411146053,
      'values': {
        'power': 407780
      }
    },
    {
      'time': 1536411148055,
      'values': {
        'power': 408190
      }
    },
    {
      'time': 1536411150058,
      'values': {
        'power': 411210
      }
    },
    {
      'time': 1536411152060,
      'values': {
        'power': 415560
      }
    },
    {
      'time': 1536411154062,
      'values': {
        'power': 444080
      }
    },
    {
      'time': 1536411156064,
      'values': {
        'power': 569790
      }
    },
    {
      'time': 1536411158066,
      'values': {
        'power': 568810
      }
    },
    {
      'time': 1536411160068,
      'values': {
        'power': 467160
      }
    },
    {
      'time': 1536411162070,
      'values': {
        'power': 465180
      }
    },
    {
      'time': 1536411164072,
      'values': {
        'power': 464710
      }
    },
    {
      'time': 1536411166075,
      'values': {
        'power': 464870
      }
    },
    {
      'time': 1536411168075,
      'values': {
        'power': 464510
      }
    },
    {
      'time': 1536411170077,
      'values': {
        'power': 463810
      }
    },
    {
      'time': 1536411172080,
      'values': {
        'power': 463880
      }
    },
    {
      'time': 1536411174082,
      'values': {
        'power': 464430
      }
    },
    {
      'time': 1536411176083,
      'values': {
        'power': 465100
      }
    },
    {
      'time': 1536411178085,
      'values': {
        'power': 465440
      }
    },
    {
      'time': 1536411180087,
      'values': {
        'power': 463290
      }
    },
    {
      'time': 1536411182089,
      'values': {
        'power': 461680
      }
    },
    {
      'time': 1536411184091,
      'values': {
        'power': 465450
      }
    },
    {
      'time': 1536411186093,
      'values': {
        'power': 468320
      }
    },
    {
      'time': 1536411188095,
      'values': {
        'power': 468470
      }
    },
    {
      'time': 1536411190097,
      'values': {
        'power': 467780
      }
    },
    {
      'time': 1536411192099,
      'values': {
        'power': 465600
      }
    },
    {
      'time': 1536411194100,
      'values': {
        'power': 463480
      }
    },
    {
      'time': 1536411196102,
      'values': {
        'power': 463770
      }
    },
    {
      'time': 1536411198105,
      'values': {
        'power': 467650
      }
    },
    {
      'time': 1536411200107,
      'values': {
        'power': 470700
      }
    },
    {
      'time': 1536411202110,
      'values': {
        'power': 472000
      }
    },
    {
      'time': 1536411204110,
      'values': {
        'power': 471780
      }
    },
    {
      'time': 1536411206113,
      'values': {
        'power': 470250
      }
    },
    {
      'time': 1536411208115,
      'values': {
        'power': 469730
      }
    },
    {
      'time': 1536411210117,
      'values': {
        'power': 470680
      }
    },
    {
      'time': 1536411212119,
      'values': {
        'power': 474010
      }
    },
    {
      'time': 1536411214120,
      'values': {
        'power': 475300
      }
    },
    {
      'time': 1536411216122,
      'values': {
        'power': 474150
      }
    },
    {
      'time': 1536411218126,
      'values': {
        'power': 473030
      }
    },
    {
      'time': 1536411220126,
      'values': {
        'power': 470850
      }
    },
    {
      'time': 1536411222128,
      'values': {
        'power': 469780
      }
    },
    {
      'time': 1536411224130,
      'values': {
        'power': 470640
      }
    },
    {
      'time': 1536411226132,
      'values': {
        'power': 471240
      }
    },
    {
      'time': 1536411228133,
      'values': {
        'power': 471580
      }
    },
    {
      'time': 1536411230135,
      'values': {
        'power': 471860
      }
    },
    {
      'time': 1536411232138,
      'values': {
        'power': 472410
      }
    },
    {
      'time': 1536411234140,
      'values': {
        'power': 473560
      }
    },
    {
      'time': 1536411236141,
      'values': {
        'power': 473550
      }
    },
    {
      'time': 1536411238143,
      'values': {
        'power': 473150
      }
    },
    {
      'time': 1536411240146,
      'values': {
        'power': 474000
      }
    },
    {
      'time': 1536411242148,
      'values': {
        'power': 472820
      }
    },
    {
      'time': 1536411244149,
      'values': {
        'power': 472120
      }
    },
    {
      'time': 1536411246151,
      'values': {
        'power': 473040
      }
    },
    {
      'time': 1536411248154,
      'values': {
        'power': 464860
      }
    },
    {
      'time': 1536411250156,
      'values': {
        'power': 447130
      }
    },
    {
      'time': 1536411252158,
      'values': {
        'power': 438120
      }
    },
    {
      'time': 1536411254159,
      'values': {
        'power': 436920
      }
    },
    {
      'time': 1536411256161,
      'values': {
        'power': 436420
      }
    },
    {
      'time': 1536411258164,
      'values': {
        'power': 437760
      }
    },
    {
      'time': 1536411260165,
      'values': {
        'power': 436310
      }
    },
    {
      'time': 1536411262167,
      'values': {
        'power': 432980
      }
    },
    {
      'time': 1536411264169,
      'values': {
        'power': 431570
      }
    },
    {
      'time': 1536411266171,
      'values': {
        'power': 433010
      }
    },
    {
      'time': 1536411268174,
      'values': {
        'power': 436710
      }
    },
    {
      'time': 1536411270175,
      'values': {
        'power': 442160
      }
    },
    {
      'time': 1536411272176,
      'values': {
        'power': 442580
      }
    },
    {
      'time': 1536411274179,
      'values': {
        'power': 438250
      }
    },
    {
      'time': 1536411276181,
      'values': {
        'power': 438960
      }
    },
    {
      'time': 1536411278183,
      'values': {
        'power': 443240
      }
    },
    {
      'time': 1536411280185,
      'values': {
        'power': 444050
      }
    },
    {
      'time': 1536411282186,
      'values': {
        'power': 443600
      }
    },
    {
      'time': 1536411284188,
      'values': {
        'power': 444950
      }
    },
    {
      'time': 1536411286191,
      'values': {
        'power': 446160
      }
    },
    {
      'time': 1536411288193,
      'values': {
        'power': 446190
      }
    },
    {
      'time': 1536411290195,
      'values': {
        'power': 443230
      }
    },
    {
      'time': 1536411292197,
      'values': {
        'power': 441730
      }
    },
    {
      'time': 1536411294199,
      'values': {
        'power': 443410
      }
    },
    {
      'time': 1536411296200,
      'values': {
        'power': 442650
      }
    },
    {
      'time': 1536411298202,
      'values': {
        'power': 441750
      }
    },
    {
      'time': 1536411300205,
      'values': {
        'power': 441770
      }
    },
    {
      'time': 1536411302207,
      'values': {
        'power': 441550
      }
    },
    {
      'time': 1536411304208,
      'values': {
        'power': 441960
      }
    },
    {
      'time': 1536411306211,
      'values': {
        'power': 443080
      }
    },
    {
      'time': 1536411308213,
      'values': {
        'power': 443320
      }
    },
    {
      'time': 1536411310214,
      'values': {
        'power': 440010
      }
    },
    {
      'time': 1536411312216,
      'values': {
        'power': 434810
      }
    },
    {
      'time': 1536411314218,
      'values': {
        'power': 433510
      }
    },
    {
      'time': 1536411316220,
      'values': {
        'power': 436620
      }
    },
    {
      'time': 1536411318222,
      'values': {
        'power': 439040
      }
    },
    {
      'time': 1536411320224,
      'values': {
        'power': 434650
      }
    },
    {
      'time': 1536411322225,
      'values': {
        'power': 418470
      }
    },
    {
      'time': 1536411324227,
      'values': {
        'power': 402380
      }
    },
    {
      'time': 1536411326230,
      'values': {
        'power': 397110
      }
    },
    {
      'time': 1536411328232,
      'values': {
        'power': 397820
      }
    },
    {
      'time': 1536411330234,
      'values': {
        'power': 402730
      }
    },
    {
      'time': 1536411332237,
      'values': {
        'power': 419290
      }
    },
    {
      'time': 1536411334239,
      'values': {
        'power': 434620
      }
    },
    {
      'time': 1536411336241,
      'values': {
        'power': 436950
      }
    },
    {
      'time': 1536411338241,
      'values': {
        'power': 437140
      }
    },
    {
      'time': 1536411340244,
      'values': {
        'power': 437190
      }
    },
    {
      'time': 1536411342246,
      'values': {
        'power': 436770
      }
    },
    {
      'time': 1536411344248,
      'values': {
        'power': 438650
      }
    },
    {
      'time': 1536411346250,
      'values': {
        'power': 440410
      }
    },
    {
      'time': 1536411348251,
      'values': {
        'power': 441270
      }
    },
    {
      'time': 1536411350253,
      'values': {
        'power': 444230
      }
    },
    {
      'time': 1536411352256,
      'values': {
        'power': 445500
      }
    },
    {
      'time': 1536411354257,
      'values': {
        'power': 441810
      }
    },
    {
      'time': 1536411356259,
      'values': {
        'power': 438540
      }
    },
    {
      'time': 1536411358261,
      'values': {
        'power': 438340
      }
    },
    {
      'time': 1536411360263,
      'values': {
        'power': 437950
      }
    },
    {
      'time': 1536411362265,
      'values': {
        'power': 438070
      }
    },
    {
      'time': 1536411364266,
      'values': {
        'power': 436370
      }
    },
    {
      'time': 1536411366268,
      'values': {
        'power': 431010
      }
    },
    {
      'time': 1536411368271,
      'values': {
        'power': 428230
      }
    },
    {
      'time': 1536411370273,
      'values': {
        'power': 429010
      }
    },
    {
      'time': 1536411372276,
      'values': {
        'power': 427130
      }
    },
    {
      'time': 1536411374276,
      'values': {
        'power': 427780
      }
    },
    {
      'time': 1536411376279,
      'values': {
        'power': 433550
      }
    },
    {
      'time': 1536411378281,
      'values': {
        'power': 436430
      }
    },
    {
      'time': 1536411380283,
      'values': {
        'power': 436190
      }
    },
    {
      'time': 1536411382285,
      'values': {
        'power': 438100
      }
    },
    {
      'time': 1536411384287,
      'values': {
        'power': 440870
      }
    },
    {
      'time': 1536411386289,
      'values': {
        'power': 441670
      }
    },
    {
      'time': 1536411388291,
      'values': {
        'power': 438620
      }
    },
    {
      'time': 1536411390292,
      'values': {
        'power': 434740
      }
    },
    {
      'time': 1536411392294,
      'values': {
        'power': 437640
      }
    },
    {
      'time': 1536411394297,
      'values': {
        'power': 441230
      }
    },
    {
      'time': 1536411396299,
      'values': {
        'power': 441270
      }
    },
    {
      'time': 1536411398300,
      'values': {
        'power': 441930
      }
    },
    {
      'time': 1536411400302,
      'values': {
        'power': 441520
      }
    },
    {
      'time': 1536411402304,
      'values': {
        'power': 440950
      }
    },
    {
      'time': 1536411404306,
      'values': {
        'power': 441780
      }
    },
    {
      'time': 1536411406308,
      'values': {
        'power': 442560
      }
    },
    {
      'time': 1536411408310,
      'values': {
        'power': 442470
      }
    },
    {
      'time': 1536411410312,
      'values': {
        'power': 442730
      }
    },
    {
      'time': 1536411412314,
      'values': {
        'power': 441850
      }
    },
    {
      'time': 1536411414316,
      'values': {
        'power': 440310
      }
    },
    {
      'time': 1536411416318,
      'values': {
        'power': 440670
      }
    },
    {
      'time': 1536411418319,
      'values': {
        'power': 441510
      }
    },
    {
      'time': 1536411420321,
      'values': {
        'power': 441460
      }
    },
    {
      'time': 1536411422324,
      'values': {
        'power': 440080
      }
    },
    {
      'time': 1536411424325,
      'values': {
        'power': 440120
      }
    },
    {
      'time': 1536411426327,
      'values': {
        'power': 442150
      }
    },
    {
      'time': 1536411428330,
      'values': {
        'power': 443150
      }
    },
    {
      'time': 1536411430332,
      'values': {
        'power': 441600
      }
    },
    {
      'time': 1536411432334,
      'values': {
        'power': 440050
      }
    },
    {
      'time': 1536411434336,
      'values': {
        'power': 440800
      }
    },
    {
      'time': 1536411436338,
      'values': {
        'power': 441040
      }
    },
    {
      'time': 1536411438339,
      'values': {
        'power': 440310
      }
    },
    {
      'time': 1536411440341,
      'values': {
        'power': 443550
      }
    },
    {
      'time': 1536411442344,
      'values': {
        'power': 446750
      }
    },
    {
      'time': 1536411444345,
      'values': {
        'power': 444860
      }
    },
    {
      'time': 1536411446347,
      'values': {
        'power': 441430
      }
    },
    {
      'time': 1536411448350,
      'values': {
        'power': 440240
      }
    },
    {
      'time': 1536411450351,
      'values': {
        'power': 440260
      }
    },
    {
      'time': 1536411452353,
      'values': {
        'power': 439360
      }
    },
    {
      'time': 1536411454355,
      'values': {
        'power': 439930
      }
    },
    {
      'time': 1536411456357,
      'values': {
        'power': 442170
      }
    },
    {
      'time': 1536411458359,
      'values': {
        'power': 443690
      }
    },
    {
      'time': 1536411460361,
      'values': {
        'power': 442970
      }
    },
    {
      'time': 1536411462363,
      'values': {
        'power': 437910
      }
    },
    {
      'time': 1536411464365,
      'values': {
        'power': 423480
      }
    },
    {
      'time': 1536411466367,
      'values': {
        'power': 412070
      }
    },
    {
      'time': 1536411468369,
      'values': {
        'power': 411970
      }
    },
    {
      'time': 1536411470373,
      'values': {
        'power': 411890
      }
    },
    {
      'time': 1536411472373,
      'values': {
        'power': 411450
      }
    },
    {
      'time': 1536411474375,
      'values': {
        'power': 412420
      }
    },
    {
      'time': 1536411476376,
      'values': {
        'power': 425030
      }
    },
    {
      'time': 1536411478378,
      'values': {
        'power': 439200
      }
    },
    {
      'time': 1536411480381,
      'values': {
        'power': 441200
      }
    },
    {
      'time': 1536411482383,
      'values': {
        'power': 439690
      }
    },
    {
      'time': 1536411484385,
      'values': {
        'power': 439400
      }
    },
    {
      'time': 1536411486387,
      'values': {
        'power': 441260
      }
    },
    {
      'time': 1536411488389,
      'values': {
        'power': 442950
      }
    },
    {
      'time': 1536411490391,
      'values': {
        'power': 441420
      }
    },
    {
      'time': 1536411492393,
      'values': {
        'power': 438140
      }
    },
    {
      'time': 1536411494395,
      'values': {
        'power': 438620
      }
    },
    {
      'time': 1536411496396,
      'values': {
        'power': 439470
      }
    },
    {
      'time': 1536411498399,
      'values': {
        'power': 440860
      }
    },
    {
      'time': 1536411500401,
      'values': {
        'power': 440680
      }
    },
    {
      'time': 1536411502402,
      'values': {
        'power': 439220
      }
    },
    {
      'time': 1536411504403,
      'values': {
        'power': 440370
      }
    },
    {
      'time': 1536411506405,
      'values': {
        'power': 440010
      }
    },
    {
      'time': 1536411508408,
      'values': {
        'power': 439490
      }
    },
    {
      'time': 1536411510410,
      'values': {
        'power': 439180
      }
    },
    {
      'time': 1536411512412,
      'values': {
        'power': 441900
      }
    },
    {
      'time': 1536411514414,
      'values': {
        'power': 443590
      }
    },
    {
      'time': 1536411516416,
      'values': {
        'power': 441580
      }
    },
    {
      'time': 1536411518418,
      'values': {
        'power': 441580
      }
    },
    {
      'time': 1536411520421,
      'values': {
        'power': 440800
      }
    },
    {
      'time': 1536411522422,
      'values': {
        'power': 440300
      }
    },
    {
      'time': 1536411524426,
      'values': {
        'power': 441020
      }
    },
    {
      'time': 1536411526427,
      'values': {
        'power': 441460
      }
    },
    {
      'time': 1536411528427,
      'values': {
        'power': 442180
      }
    },
    {
      'time': 1536411530430,
      'values': {
        'power': 442880
      }
    },
    {
      'time': 1536411532432,
      'values': {
        'power': 444150
      }
    },
    {
      'time': 1536411534434,
      'values': {
        'power': 444580
      }
    },
    {
      'time': 1536411536436,
      'values': {
        'power': 439830
      }
    },
    {
      'time': 1536411538437,
      'values': {
        'power': 433160
      }
    },
    {
      'time': 1536411540439,
      'values': {
        'power': 431550
      }
    },
    {
      'time': 1536411542441,
      'values': {
        'power': 433640
      }
    },
    {
      'time': 1536411544443,
      'values': {
        'power': 436080
      }
    },
    {
      'time': 1536411546445,
      'values': {
        'power': 436400
      }
    },
    {
      'time': 1536411548447,
      'values': {
        'power': 435600
      }
    },
    {
      'time': 1536411550449,
      'values': {
        'power': 440020
      }
    },
    {
      'time': 1536411552451,
      'values': {
        'power': 445270
      }
    },
    {
      'time': 1536411554452,
      'values': {
        'power': 446490
      }
    },
    {
      'time': 1536411556454,
      'values': {
        'power': 446420
      }
    },
    {
      'time': 1536411558457,
      'values': {
        'power': 444130
      }
    },
    {
      'time': 1536411560459,
      'values': {
        'power': 442960
      }
    },
    {
      'time': 1536411562461,
      'values': {
        'power': 445110
      }
    },
    {
      'time': 1536411564463,
      'values': {
        'power': 447620
      }
    },
    {
      'time': 1536411566465,
      'values': {
        'power': 446230
      }
    },
    {
      'time': 1536411568467,
      'values': {
        'power': 444800
      }
    },
    {
      'time': 1536411570469,
      'values': {
        'power': 443570
      }
    },
    {
      'time': 1536411572470,
      'values': {
        'power': 440490
      }
    },
    {
      'time': 1536411574472,
      'values': {
        'power': 439590
      }
    },
    {
      'time': 1536411576475,
      'values': {
        'power': 439770
      }
    },
    {
      'time': 1536411578477,
      'values': {
        'power': 442120
      }
    },
    {
      'time': 1536411580479,
      'values': {
        'power': 443600
      }
    },
    {
      'time': 1536411582480,
      'values': {
        'power': 441240
      }
    },
    {
      'time': 1536411584482,
      'values': {
        'power': 424990
      }
    },
    {
      'time': 1536411586485,
      'values': {
        'power': 401520
      }
    },
    {
      'time': 1536411588487,
      'values': {
        'power': 391630
      }
    },
    {
      'time': 1536411590488,
      'values': {
        'power': 388410
      }
    },
    {
      'time': 1536411592490,
      'values': {
        'power': 386890
      }
    },
    {
      'time': 1536411594492,
      'values': {
        'power': 388340
      }
    },
    {
      'time': 1536411596494,
      'values': {
        'power': 389100
      }
    },
    {
      'time': 1536411598497,
      'values': {
        'power': 389480
      }
    },
    {
      'time': 1536411600498,
      'values': {
        'power': 390170
      }
    },
    {
      'time': 1536411602502,
      'values': {
        'power': 390710
      }
    },
    {
      'time': 1536411604501,
      'values': {
        'power': 409530
      }
    },
    {
      'time': 1536411606504,
      'values': {
        'power': 440330
      }
    },
    {
      'time': 1536411608505,
      'values': {
        'power': 453120
      }
    },
    {
      'time': 1536411610507,
      'values': {
        'power': 454950
      }
    },
    {
      'time': 1536411612510,
      'values': {
        'power': 457100
      }
    },
    {
      'time': 1536411614512,
      'values': {
        'power': 456110
      }
    },
    {
      'time': 1536411616514,
      'values': {
        'power': 453110
      }
    },
    {
      'time': 1536411618516,
      'values': {
        'power': 451470
      }
    },
    {
      'time': 1536411620518,
      'values': {
        'power': 454490
      }
    },
    {
      'time': 1536411622520,
      'values': {
        'power': 458890
      }
    },
    {
      'time': 1536411624522,
      'values': {
        'power': 458740
      }
    },
    {
      'time': 1536411626524,
      'values': {
        'power': 458240
      }
    },
    {
      'time': 1536411628528,
      'values': {
        'power': 457510
      }
    },
    {
      'time': 1536411630527,
      'values': {
        'power': 455900
      }
    },
    {
      'time': 1536411632530,
      'values': {
        'power': 451900
      }
    },
    {
      'time': 1536411634532,
      'values': {
        'power': 449910
      }
    },
    {
      'time': 1536411636533,
      'values': {
        'power': 450450
      }
    },
    {
      'time': 1536411638535,
      'values': {
        'power': 449690
      }
    },
    {
      'time': 1536411640537,
      'values': {
        'power': 443490
      }
    },
    {
      'time': 1536411642539,
      'values': {
        'power': 432890
      }
    },
    {
      'time': 1536411644541,
      'values': {
        'power': 431640
      }
    },
    {
      'time': 1536411646543,
      'values': {
        'power': 432320
      }
    },
    {
      'time': 1536411648545,
      'values': {
        'power': 431210
      }
    },
    {
      'time': 1536411650547,
      'values': {
        'power': 430380
      }
    },
    {
      'time': 1536411652549,
      'values': {
        'power': 430920
      }
    },
    {
      'time': 1536411654551,
      'values': {
        'power': 432100
      }
    },
    {
      'time': 1536411656552,
      'values': {
        'power': 433390
      }
    },
    {
      'time': 1536411658555,
      'values': {
        'power': 432810
      }
    },
    {
      'time': 1536411660557,
      'values': {
        'power': 431720
      }
    },
    {
      'time': 1536411662558,
      'values': {
        'power': 433400
      }
    },
    {
      'time': 1536411664560,
      'values': {
        'power': 436440
      }
    },
    {
      'time': 1536411666563,
      'values': {
        'power': 437590
      }
    },
    {
      'time': 1536411668565,
      'values': {
        'power': 437100
      }
    },
    {
      'time': 1536411670567,
      'values': {
        'power': 435350
      }
    },
    {
      'time': 1536411672569,
      'values': {
        'power': 430930
      }
    },
    {
      'time': 1536411674570,
      'values': {
        'power': 415830
      }
    },
    {
      'time': 1536411676573,
      'values': {
        'power': 406580
      }
    },
    {
      'time': 1536411678575,
      'values': {
        'power': 405660
      }
    },
    {
      'time': 1536411680576,
      'values': {
        'power': 408540
      }
    },
    {
      'time': 1536411682578,
      'values': {
        'power': 482100
      }
    },
    {
      'time': 1536411684580,
      'values': {
        'power': 590790
      }
    },
    {
      'time': 1536411686582,
      'values': {
        'power': 566770
      }
    },
    {
      'time': 1536411688584,
      'values': {
        'power': 501910
      }
    },
    {
      'time': 1536411690586,
      'values': {
        'power': 499750
      }
    },
    {
      'time': 1536411692587,
      'values': {
        'power': 499970
      }
    },
    {
      'time': 1536411694590,
      'values': {
        'power': 499350
      }
    },
    {
      'time': 1536411696592,
      'values': {
        'power': 499690
      }
    },
    {
      'time': 1536411698594,
      'values': {
        'power': 500760
      }
    },
    {
      'time': 1536411700596,
      'values': {
        'power': 500480
      }
    },
    {
      'time': 1536411702598,
      'values': {
        'power': 499450
      }
    },
    {
      'time': 1536411704600,
      'values': {
        'power': 498600
      }
    },
    {
      'time': 1536411706601,
      'values': {
        'power': 497740
      }
    },
    {
      'time': 1536411708603,
      'values': {
        'power': 498170
      }
    },
    {
      'time': 1536411710606,
      'values': {
        'power': 499110
      }
    },
    {
      'time': 1536411712608,
      'values': {
        'power': 498830
      }
    },
    {
      'time': 1536411714610,
      'values': {
        'power': 498140
      }
    },
    {
      'time': 1536411716612,
      'values': {
        'power': 489680
      }
    },
    {
      'time': 1536411718613,
      'values': {
        'power': 474900
      }
    },
    {
      'time': 1536411720615,
      'values': {
        'power': 468110
      }
    },
    {
      'time': 1536411722618,
      'values': {
        'power': 468280
      }
    },
    {
      'time': 1536411724620,
      'values': {
        'power': 470020
      }
    },
    {
      'time': 1536411726622,
      'values': {
        'power': 470390
      }
    },
    {
      'time': 1536411728624,
      'values': {
        'power': 471060
      }
    },
    {
      'time': 1536411730625,
      'values': {
        'power': 481120
      }
    },
    {
      'time': 1536411732627,
      'values': {
        'power': 492870
      }
    },
    {
      'time': 1536411734629,
      'values': {
        'power': 496610
      }
    },
    {
      'time': 1536411736631,
      'values': {
        'power': 497580
      }
    },
    {
      'time': 1536411738632,
      'values': {
        'power': 496980
      }
    },
    {
      'time': 1536411740634,
      'values': {
        'power': 496400
      }
    },
    {
      'time': 1536411742637,
      'values': {
        'power': 493260
      }
    },
    {
      'time': 1536411744638,
      'values': {
        'power': 487470
      }
    },
    {
      'time': 1536411746641,
      'values': {
        'power': 485230
      }
    },
    {
      'time': 1536411748643,
      'values': {
        'power': 486960
      }
    },
    {
      'time': 1536411750645,
      'values': {
        'power': 487610
      }
    },
    {
      'time': 1536411752647,
      'values': {
        'power': 490660
      }
    },
    {
      'time': 1536411754649,
      'values': {
        'power': 495040
      }
    },
    {
      'time': 1536411756650,
      'values': {
        'power': 496570
      }
    },
    {
      'time': 1536411758652,
      'values': {
        'power': 496830
      }
    },
    {
      'time': 1536411760654,
      'values': {
        'power': 496050
      }
    },
    {
      'time': 1536411762657,
      'values': {
        'power': 495220
      }
    },
    {
      'time': 1536411764659,
      'values': {
        'power': 495290
      }
    },
    {
      'time': 1536411766661,
      'values': {
        'power': 494770
      }
    },
    {
      'time': 1536411768663,
      'values': {
        'power': 493600
      }
    },
    {
      'time': 1536411770666,
      'values': {
        'power': 495790
      }
    },
    {
      'time': 1536411772666,
      'values': {
        'power': 500440
      }
    },
    {
      'time': 1536411774668,
      'values': {
        'power': 504310
      }
    },
    {
      'time': 1536411776671,
      'values': {
        'power': 504980
      }
    },
    {
      'time': 1536411778672,
      'values': {
        'power': 506060
      }
    },
    {
      'time': 1536411780674,
      'values': {
        'power': 508160
      }
    },
    {
      'time': 1536411782676,
      'values': {
        'power': 502310
      }
    },
    {
      'time': 1536411784678,
      'values': {
        'power': 493880
      }
    },
    {
      'time': 1536411786680,
      'values': {
        'power': 491250
      }
    },
    {
      'time': 1536411788682,
      'values': {
        'power': 491670
      }
    },
    {
      'time': 1536411790684,
      'values': {
        'power': 493380
      }
    },
    {
      'time': 1536411792686,
      'values': {
        'power': 494810
      }
    },
    {
      'time': 1536411794688,
      'values': {
        'power': 495340
      }
    },
    {
      'time': 1536411796690,
      'values': {
        'power': 497180
      }
    },
    {
      'time': 1536411798693,
      'values': {
        'power': 497670
      }
    },
    {
      'time': 1536411800693,
      'values': {
        'power': 497640
      }
    },
    {
      'time': 1536411802696,
      'values': {
        'power': 498770
      }
    },
    {
      'time': 1536411804698,
      'values': {
        'power': 499170
      }
    },
    {
      'time': 1536411806700,
      'values': {
        'power': 497610
      }
    },
    {
      'time': 1536411808701,
      'values': {
        'power': 486910
      }
    },
    {
      'time': 1536411810703,
      'values': {
        'power': 481750
      }
    },
    {
      'time': 1536411812706,
      'values': {
        'power': 481460
      }
    },
    {
      'time': 1536411814708,
      'values': {
        'power': 479460
      }
    },
    {
      'time': 1536411816710,
      'values': {
        'power': 479060
      }
    },
    {
      'time': 1536411818712,
      'values': {
        'power': 478810
      }
    },
    {
      'time': 1536411820714,
      'values': {
        'power': 478850
      }
    },
    {
      'time': 1536411822716,
      'values': {
        'power': 479420
      }
    },
    {
      'time': 1536411824718,
      'values': {
        'power': 477690
      }
    },
    {
      'time': 1536411826719,
      'values': {
        'power': 474490
      }
    },
    {
      'time': 1536411828721,
      'values': {
        'power': 472510
      }
    },
    {
      'time': 1536411830723,
      'values': {
        'power': 472570
      }
    },
    {
      'time': 1536411832725,
      'values': {
        'power': 473490
      }
    },
    {
      'time': 1536411834727,
      'values': {
        'power': 472720
      }
    },
    {
      'time': 1536411836729,
      'values': {
        'power': 472210
      }
    },
    {
      'time': 1536411838731,
      'values': {
        'power': 472250
      }
    },
    {
      'time': 1536411840733,
      'values': {
        'power': 473480
      }
    },
    {
      'time': 1536411842734,
      'values': {
        'power': 474990
      }
    },
    {
      'time': 1536411844737,
      'values': {
        'power': 474440
      }
    },
    {
      'time': 1536411846739,
      'values': {
        'power': 472560
      }
    },
    {
      'time': 1536411848741,
      'values': {
        'power': 471800
      }
    },
    {
      'time': 1536411850743,
      'values': {
        'power': 472730
      }
    },
    {
      'time': 1536411852745,
      'values': {
        'power': 472970
      }
    },
    {
      'time': 1536411854746,
      'values': {
        'power': 473540
      }
    },
    {
      'time': 1536411856748,
      'values': {
        'power': 472870
      }
    },
    {
      'time': 1536411858751,
      'values': {
        'power': 473530
      }
    },
    {
      'time': 1536411860752,
      'values': {
        'power': 479820
      }
    },
    {
      'time': 1536411862754,
      'values': {
        'power': 481060
      }
    },
    {
      'time': 1536411864757,
      'values': {
        'power': 478350
      }
    },
    {
      'time': 1536411866759,
      'values': {
        'power': 475250
      }
    },
    {
      'time': 1536411868761,
      'values': {
        'power': 470960
      }
    },
    {
      'time': 1536411870762,
      'values': {
        'power': 470880
      }
    },
    {
      'time': 1536411872766,
      'values': {
        'power': 469800
      }
    },
    {
      'time': 1536411874766,
      'values': {
        'power': 468490
      }
    },
    {
      'time': 1536411876768,
      'values': {
        'power': 470850
      }
    },
    {
      'time': 1536411878771,
      'values': {
        'power': 473380
      }
    },
    {
      'time': 1536411880772,
      'values': {
        'power': 474260
      }
    },
    {
      'time': 1536411882774,
      'values': {
        'power': 474480
      }
    },
    {
      'time': 1536411884776,
      'values': {
        'power': 474340
      }
    },
    {
      'time': 1536411886777,
      'values': {
        'power': 473770
      }
    },
    {
      'time': 1536411888779,
      'values': {
        'power': 472510
      }
    },
    {
      'time': 1536411890782,
      'values': {
        'power': 469450
      }
    },
    {
      'time': 1536411892784,
      'values': {
        'power': 466280
      }
    },
    {
      'time': 1536411894786,
      'values': {
        'power': 464070
      }
    },
    {
      'time': 1536411896788,
      'values': {
        'power': 463330
      }
    },
    {
      'time': 1536411898790,
      'values': {
        'power': 465070
      }
    },
    {
      'time': 1536411900792,
      'values': {
        'power': 469110
      }
    },
    {
      'time': 1536411902794,
      'values': {
        'power': 471480
      }
    },
    {
      'time': 1536411904796,
      'values': {
        'power': 471900
      }
    },
    {
      'time': 1536411906798,
      'values': {
        'power': 471420
      }
    },
    {
      'time': 1536411908800,
      'values': {
        'power': 471670
      }
    },
    {
      'time': 1536411910803,
      'values': {
        'power': 472590
      }
    },
    {
      'time': 1536411912803,
      'values': {
        'power': 471410
      }
    },
    {
      'time': 1536411914806,
      'values': {
        'power': 469670
      }
    },
    {
      'time': 1536411916808,
      'values': {
        'power': 468770
      }
    },
    {
      'time': 1536411918809,
      'values': {
        'power': 468860
      }
    },
    {
      'time': 1536411920812,
      'values': {
        'power': 470030
      }
    },
    {
      'time': 1536411922813,
      'values': {
        'power': 472230
      }
    },
    {
      'time': 1536411924815,
      'values': {
        'power': 471860
      }
    },
    {
      'time': 1536411926817,
      'values': {
        'power': 469000
      }
    },
    {
      'time': 1536411928819,
      'values': {
        'power': 467210
      }
    },
    {
      'time': 1536411930821,
      'values': {
        'power': 467730
      }
    },
    {
      'time': 1536411932823,
      'values': {
        'power': 468810
      }
    },
    {
      'time': 1536411934828,
      'values': {
        'power': 467750
      }
    },
    {
      'time': 1536411936827,
      'values': {
        'power': 466970
      }
    },
    {
      'time': 1536411938829,
      'values': {
        'power': 468530
      }
    },
    {
      'time': 1536411940831,
      'values': {
        'power': 469550
      }
    },
    {
      'time': 1536411942832,
      'values': {
        'power': 472210
      }
    },
    {
      'time': 1536411944835,
      'values': {
        'power': 477980
      }
    },
    {
      'time': 1536411946837,
      'values': {
        'power': 483650
      }
    },
    {
      'time': 1536411948839,
      'values': {
        'power': 487640
      }
    },
    {
      'time': 1536411950841,
      'values': {
        'power': 489290
      }
    },
    {
      'time': 1536411952843,
      'values': {
        'power': 489810
      }
    },
    {
      'time': 1536411954845,
      'values': {
        'power': 508260
      }
    },
    {
      'time': 1536411956847,
      'values': {
        'power': 790520
      }
    },
    {
      'time': 1536411958849,
      'values': {
        'power': 1072720
      }
    },
    {
      'time': 1536411960853,
      'values': {
        'power': 860270
      }
    },
    {
      'time': 1536411962852,
      'values': {
        'power': 597680
      }
    },
    {
      'time': 1536411964854,
      'values': {
        'power': 561420
      }
    },
    {
      'time': 1536411966857,
      'values': {
        'power': 556300
      }
    },
    {
      'time': 1536411968858,
      'values': {
        'power': 557690
      }
    },
    {
      'time': 1536411970860,
      'values': {
        'power': 560010
      }
    },
    {
      'time': 1536411972862,
      'values': {
        'power': 559470
      }
    },
    {
      'time': 1536411974864,
      'values': {
        'power': 557270
      }
    },
    {
      'time': 1536411976865,
      'values': {
        'power': 554010
      }
    },
    {
      'time': 1536411978868,
      'values': {
        'power': 550110
      }
    },
    {
      'time': 1536411980870,
      'values': {
        'power': 547930
      }
    },
    {
      'time': 1536411982872,
      'values': {
        'power': 548760
      }
    },
    {
      'time': 1536411984874,
      'values': {
        'power': 548050
      }
    },
    {
      'time': 1536411986877,
      'values': {
        'power': 546320
      }
    },
    {
      'time': 1536411988878,
      'values': {
        'power': 546300
      }
    },
    {
      'time': 1536411990879,
      'values': {
        'power': 548450
      }
    },
    {
      'time': 1536411992881,
      'values': {
        'power': 550870
      }
    },
    {
      'time': 1536411994884,
      'values': {
        'power': 545040
      }
    },
    {
      'time': 1536411996886,
      'values': {
        'power': 537940
      }
    },
    {
      'time': 1536411998888,
      'values': {
        'power': 538590
      }
    },
    {
      'time': 1536412000890,
      'values': {
        'power': 539460
      }
    },
    {
      'time': 1536412002892,
      'values': {
        'power': 539390
      }
    },
    {
      'time': 1536412004894,
      'values': {
        'power': 538920
      }
    },
    {
      'time': 1536412006898,
      'values': {
        'power': 538570
      }
    },
    {
      'time': 1536412008897,
      'values': {
        'power': 537910
      }
    },
    {
      'time': 1536412010900,
      'values': {
        'power': 537350
      }
    },
    {
      'time': 1536412012901,
      'values': {
        'power': 538700
      }
    },
    {
      'time': 1536412014903,
      'values': {
        'power': 539600
      }
    },
    {
      'time': 1536412016905,
      'values': {
        'power': 543590
      }
    },
    {
      'time': 1536412018907,
      'values': {
        'power': 550470
      }
    },
    {
      'time': 1536412020910,
      'values': {
        'power': 555940
      }
    },
    {
      'time': 1536412022911,
      'values': {
        'power': 557480
      }
    },
    {
      'time': 1536412024913,
      'values': {
        'power': 556960
      }
    },
    {
      'time': 1536412026915,
      'values': {
        'power': 557370
      }
    },
    {
      'time': 1536412028917,
      'values': {
        'power': 557340
      }
    },
    {
      'time': 1536412030919,
      'values': {
        'power': 551700
      }
    },
    {
      'time': 1536412032921,
      'values': {
        'power': 534750
      }
    },
    {
      'time': 1536412034924,
      'values': {
        'power': 522280
      }
    },
    {
      'time': 1536412036925,
      'values': {
        'power': 522470
      }
    },
    {
      'time': 1536412038926,
      'values': {
        'power': 523290
      }
    },
    {
      'time': 1536412040928,
      'values': {
        'power': 522450
      }
    },
    {
      'time': 1536412042931,
      'values': {
        'power': 520170
      }
    },
    {
      'time': 1536412044932,
      'values': {
        'power': 517690
      }
    },
    {
      'time': 1536412046934,
      'values': {
        'power': 519530
      }
    },
    {
      'time': 1536412048937,
      'values': {
        'power': 521470
      }
    },
    {
      'time': 1536412050939,
      'values': {
        'power': 521740
      }
    },
    {
      'time': 1536412052941,
      'values': {
        'power': 523130
      }
    },
    {
      'time': 1536412054942,
      'values': {
        'power': 521500
      }
    },
    {
      'time': 1536412056945,
      'values': {
        'power': 516680
      }
    },
    {
      'time': 1536412058947,
      'values': {
        'power': 515570
      }
    },
    {
      'time': 1536412060948,
      'values': {
        'power': 519740
      }
    },
    {
      'time': 1536412062950,
      'values': {
        'power': 522800
      }
    },
    {
      'time': 1536412064952,
      'values': {
        'power': 522850
      }
    },
    {
      'time': 1536412066954,
      'values': {
        'power': 520700
      }
    },
    {
      'time': 1536412068956,
      'values': {
        'power': 514740
      }
    },
    {
      'time': 1536412070959,
      'values': {
        'power': 507390
      }
    },
    {
      'time': 1536412072960,
      'values': {
        'power': 501120
      }
    },
    {
      'time': 1536412074961,
      'values': {
        'power': 497980
      }
    },
    {
      'time': 1536412076963,
      'values': {
        'power': 500310
      }
    },
    {
      'time': 1536412078966,
      'values': {
        'power': 502760
      }
    },
    {
      'time': 1536412080968,
      'values': {
        'power': 505160
      }
    },
    {
      'time': 1536412082970,
      'values': {
        'power': 509050
      }
    },
    {
      'time': 1536412084972,
      'values': {
        'power': 509380
      }
    },
    {
      'time': 1536412086974,
      'values': {
        'power': 507880
      }
    },
    {
      'time': 1536412088976,
      'values': {
        'power': 508630
      }
    },
    {
      'time': 1536412090977,
      'values': {
        'power': 507020
      }
    },
    {
      'time': 1536412092979,
      'values': {
        'power': 505130
      }
    },
    {
      'time': 1536412094982,
      'values': {
        'power': 504250
      }
    },
    {
      'time': 1536412096984,
      'values': {
        'power': 503580
      }
    },
    {
      'time': 1536412098985,
      'values': {
        'power': 504060
      }
    },
    {
      'time': 1536412100987,
      'values': {
        'power': 505660
      }
    },
    {
      'time': 1536412102990,
      'values': {
        'power': 514710
      }
    },
    {
      'time': 1536412104992,
      'values': {
        'power': 520780
      }
    },
    {
      'time': 1536412106993,
      'values': {
        'power': 520460
      }
    },
    {
      'time': 1536412108995,
      'values': {
        'power': 518930
      }
    },
    {
      'time': 1536412110997,
      'values': {
        'power': 522330
      }
    },
    {
      'time': 1536412112999,
      'values': {
        'power': 524100
      }
    },
    {
      'time': 1536412115001,
      'values': {
        'power': 521010
      }
    },
    {
      'time': 1536412117002,
      'values': {
        'power': 519590
      }
    },
    {
      'time': 1536412119004,
      'values': {
        'power': 520430
      }
    },
    {
      'time': 1536412121007,
      'values': {
        'power': 521430
      }
    },
    {
      'time': 1536412123009,
      'values': {
        'power': 521040
      }
    },
    {
      'time': 1536412125011,
      'values': {
        'power': 519520
      }
    },
    {
      'time': 1536412127012,
      'values': {
        'power': 518730
      }
    },
    {
      'time': 1536412129014,
      'values': {
        'power': 520180
      }
    },
    {
      'time': 1536412131017,
      'values': {
        'power': 522250
      }
    },
    {
      'time': 1536412133019,
      'values': {
        'power': 521370
      }
    },
    {
      'time': 1536412135021,
      'values': {
        'power': 518370
      }
    },
    {
      'time': 1536412137023,
      'values': {
        'power': 517090
      }
    },
    {
      'time': 1536412139025,
      'values': {
        'power': 513020
      }
    },
    {
      'time': 1536412141030,
      'values': {
        'power': 506020
      }
    },
    {
      'time': 1536412143028,
      'values': {
        'power': 502710
      }
    },
    {
      'time': 1536412145030,
      'values': {
        'power': 501270
      }
    },
    {
      'time': 1536412147033,
      'values': {
        'power': 502390
      }
    },
    {
      'time': 1536412149035,
      'values': {
        'power': 507350
      }
    },
    {
      'time': 1536412151037,
      'values': {
        'power': 509000
      }
    },
    {
      'time': 1536412153038,
      'values': {
        'power': 506450
      }
    },
    {
      'time': 1536412155040,
      'values': {
        'power': 504470
      }
    },
    {
      'time': 1536412157042,
      'values': {
        'power': 504420
      }
    },
    {
      'time': 1536412159044,
      'values': {
        'power': 505750
      }
    },
    {
      'time': 1536412161046,
      'values': {
        'power': 506440
      }
    },
    {
      'time': 1536412163048,
      'values': {
        'power': 506310
      }
    },
    {
      'time': 1536412165050,
      'values': {
        'power': 506920
      }
    },
    {
      'time': 1536412167052,
      'values': {
        'power': 508700
      }
    },
    {
      'time': 1536412169053,
      'values': {
        'power': 509930
      }
    },
    {
      'time': 1536412171055,
      'values': {
        'power': 506230
      }
    },
    {
      'time': 1536412173058,
      'values': {
        'power': 489360
      }
    },
    {
      'time': 1536412175059,
      'values': {
        'power': 479180
      }
    },
    {
      'time': 1536412177061,
      'values': {
        'power': 482430
      }
    },
    {
      'time': 1536412179064,
      'values': {
        'power': 492890
      }
    },
    {
      'time': 1536412181065,
      'values': {
        'power': 506210
      }
    },
    {
      'time': 1536412183067,
      'values': {
        'power': 513280
      }
    },
    {
      'time': 1536412185070,
      'values': {
        'power': 525390
      }
    },
    {
      'time': 1536412187072,
      'values': {
        'power': 537580
      }
    },
    {
      'time': 1536412189074,
      'values': {
        'power': 537410
      }
    },
    {
      'time': 1536412191076,
      'values': {
        'power': 536230
      }
    },
    {
      'time': 1536412193080,
      'values': {
        'power': 536510
      }
    },
    {
      'time': 1536412195080,
      'values': {
        'power': 536650
      }
    },
    {
      'time': 1536412197082,
      'values': {
        'power': 536560
      }
    },
    {
      'time': 1536412199084,
      'values': {
        'power': 536600
      }
    },
    {
      'time': 1536412201085,
      'values': {
        'power': 538000
      }
    },
    {
      'time': 1536412203087,
      'values': {
        'power': 540820
      }
    },
    {
      'time': 1536412205090,
      'values': {
        'power': 540460
      }
    },
    {
      'time': 1536412207092,
      'values': {
        'power': 537040
      }
    },
    {
      'time': 1536412209093,
      'values': {
        'power': 537410
      }
    },
    {
      'time': 1536412211094,
      'values': {
        'power': 531820
      }
    },
    {
      'time': 1536412213097,
      'values': {
        'power': 511890
      }
    },
    {
      'time': 1536412215099,
      'values': {
        'power': 495010
      }
    },
    {
      'time': 1536412217101,
      'values': {
        'power': 491930
      }
    },
    {
      'time': 1536412219103,
      'values': {
        'power': 495750
      }
    },
    {
      'time': 1536412221104,
      'values': {
        'power': 498240
      }
    },
    {
      'time': 1536412223107,
      'values': {
        'power': 505000
      }
    },
    {
      'time': 1536412225109,
      'values': {
        'power': 515620
      }
    },
    {
      'time': 1536412227111,
      'values': {
        'power': 517940
      }
    },
    {
      'time': 1536412229113,
      'values': {
        'power': 519350
      }
    },
    {
      'time': 1536412231115,
      'values': {
        'power': 520890
      }
    },
    {
      'time': 1536412233117,
      'values': {
        'power': 520370
      }
    },
    {
      'time': 1536412235118,
      'values': {
        'power': 521800
      }
    },
    {
      'time': 1536412237120,
      'values': {
        'power': 524800
      }
    },
    {
      'time': 1536412239123,
      'values': {
        'power': 525630
      }
    },
    {
      'time': 1536412241126,
      'values': {
        'power': 524680
      }
    },
    {
      'time': 1536412243127,
      'values': {
        'power': 523810
      }
    },
    {
      'time': 1536412245128,
      'values': {
        'power': 518630
      }
    },
    {
      'time': 1536412247130,
      'values': {
        'power': 516060
      }
    },
    {
      'time': 1536412249132,
      'values': {
        'power': 525320
      }
    },
    {
      'time': 1536412251134,
      'values': {
        'power': 536000
      }
    },
    {
      'time': 1536412253136,
      'values': {
        'power': 538410
      }
    },
    {
      'time': 1536412255138,
      'values': {
        'power': 537830
      }
    },
    {
      'time': 1536412257140,
      'values': {
        'power': 536410
      }
    },
    {
      'time': 1536412259142,
      'values': {
        'power': 536080
      }
    },
    {
      'time': 1536412261144,
      'values': {
        'power': 538140
      }
    },
    {
      'time': 1536412263145,
      'values': {
        'power': 540040
      }
    },
    {
      'time': 1536412265147,
      'values': {
        'power': 540110
      }
    },
    {
      'time': 1536412267150,
      'values': {
        'power': 540250
      }
    },
    {
      'time': 1536412269152,
      'values': {
        'power': 539500
      }
    },
    {
      'time': 1536412271153,
      'values': {
        'power': 535570
      }
    },
    {
      'time': 1536412273156,
      'values': {
        'power': 533830
      }
    },
    {
      'time': 1536412275159,
      'values': {
        'power': 534220
      }
    },
    {
      'time': 1536412277159,
      'values': {
        'power': 532880
      }
    },
    {
      'time': 1536412279162,
      'values': {
        'power': 531330
      }
    },
    {
      'time': 1536412281164,
      'values': {
        'power': 531870
      }
    },
    {
      'time': 1536412283166,
      'values': {
        'power': 533610
      }
    },
    {
      'time': 1536412285168,
      'values': {
        'power': 532640
      }
    },
    {
      'time': 1536412287170,
      'values': {
        'power': 523960
      }
    },
    {
      'time': 1536412289171,
      'values': {
        'power': 516880
      }
    },
    {
      'time': 1536412291173,
      'values': {
        'power': 517200
      }
    },
    {
      'time': 1536412293176,
      'values': {
        'power': 519780
      }
    },
    {
      'time': 1536412295177,
      'values': {
        'power': 521620
      }
    },
    {
      'time': 1536412297179,
      'values': {
        'power': 518840
      }
    },
    {
      'time': 1536412299181,
      'values': {
        'power': 515160
      }
    },
    {
      'time': 1536412301183,
      'values': {
        'power': 512980
      }
    },
    {
      'time': 1536412303185,
      'values': {
        'power': 515450
      }
    },
    {
      'time': 1536412305187,
      'values': {
        'power': 519340
      }
    },
    {
      'time': 1536412307189,
      'values': {
        'power': 518680
      }
    },
    {
      'time': 1536412309192,
      'values': {
        'power': 520860
      }
    },
    {
      'time': 1536412311192,
      'values': {
        'power': 524000
      }
    },
    {
      'time': 1536412313195,
      'values': {
        'power': 523190
      }
    },
    {
      'time': 1536412315197,
      'values': {
        'power': 521510
      }
    },
    {
      'time': 1536412317198,
      'values': {
        'power': 521030
      }
    },
    {
      'time': 1536412319201,
      'values': {
        'power': 523520
      }
    },
    {
      'time': 1536412321204,
      'values': {
        'power': 529690
      }
    },
    {
      'time': 1536412323204,
      'values': {
        'power': 536850
      }
    },
    {
      'time': 1536412325207,
      'values': {
        'power': 538390
      }
    },
    {
      'time': 1536412327209,
      'values': {
        'power': 537960
      }
    },
    {
      'time': 1536412329211,
      'values': {
        'power': 540180
      }
    },
    {
      'time': 1536412331213,
      'values': {
        'power': 540230
      }
    },
    {
      'time': 1536412333215,
      'values': {
        'power': 539180
      }
    },
    {
      'time': 1536412335217,
      'values': {
        'power': 538830
      }
    },
    {
      'time': 1536412337219,
      'values': {
        'power': 538780
      }
    },
    {
      'time': 1536412339221,
      'values': {
        'power': 539660
      }
    },
    {
      'time': 1536412341224,
      'values': {
        'power': 539640
      }
    },
    {
      'time': 1536412343224,
      'values': {
        'power': 539330
      }
    },
    {
      'time': 1536412345226,
      'values': {
        'power': 539030
      }
    },
    {
      'time': 1536412347228,
      'values': {
        'power': 538560
      }
    },
    {
      'time': 1536412349230,
      'values': {
        'power': 539600
      }
    },
    {
      'time': 1536412351232,
      'values': {
        'power': 539390
      }
    },
    {
      'time': 1536412353234,
      'values': {
        'power': 536730
      }
    },
    {
      'time': 1536412355236,
      'values': {
        'power': 531070
      }
    },
    {
      'time': 1536412357238,
      'values': {
        'power': 527570
      }
    },
    {
      'time': 1536412359240,
      'values': {
        'power': 527980
      }
    },
    {
      'time': 1536412361242,
      'values': {
        'power': 522990
      }
    },
    {
      'time': 1536412363244,
      'values': {
        'power': 523570
      }
    },
    {
      'time': 1536412365246,
      'values': {
        'power': 527130
      }
    },
    {
      'time': 1536412367248,
      'values': {
        'power': 520790
      }
    },
    {
      'time': 1536412369250,
      'values': {
        'power': 516890
      }
    },
    {
      'time': 1536412371252,
      'values': {
        'power': 522040
      }
    },
    {
      'time': 1536412373254,
      'values': {
        'power': 526120
      }
    },
    {
      'time': 1536412375256,
      'values': {
        'power': 523230
      }
    },
    {
      'time': 1536412377258,
      'values': {
        'power': 519870
      }
    },
    {
      'time': 1536412379259,
      'values': {
        'power': 519540
      }
    },
    {
      'time': 1536412381262,
      'values': {
        'power': 520920
      }
    },
    {
      'time': 1536412383264,
      'values': {
        'power': 521810
      }
    },
    {
      'time': 1536412385266,
      'values': {
        'power': 521890
      }
    },
    {
      'time': 1536412387268,
      'values': {
        'power': 521930
      }
    },
    {
      'time': 1536412389269,
      'values': {
        'power': 521000
      }
    },
    {
      'time': 1536412391271,
      'values': {
        'power': 520740
      }
    },
    {
      'time': 1536412393273,
      'values': {
        'power': 522710
      }
    },
    {
      'time': 1536412395275,
      'values': {
        'power': 528540
      }
    },
    {
      'time': 1536412397278,
      'values': {
        'power': 533270
      }
    },
    {
      'time': 1536412399279,
      'values': {
        'power': 535070
      }
    },
    {
      'time': 1536412401280,
      'values': {
        'power': 537280
      }
    },
    {
      'time': 1536412403283,
      'values': {
        'power': 537510
      }
    },
    {
      'time': 1536412405285,
      'values': {
        'power': 536320
      }
    },
    {
      'time': 1536412407287,
      'values': {
        'power': 534870
      }
    },
    {
      'time': 1536412409289,
      'values': {
        'power': 536030
      }
    },
    {
      'time': 1536412411290,
      'values': {
        'power': 539850
      }
    },
    {
      'time': 1536412413292,
      'values': {
        'power': 544580
      }
    },
    {
      'time': 1536412415295,
      'values': {
        'power': 542830
      }
    },
    {
      'time': 1536412417297,
      'values': {
        'power': 539480
      }
    },
    {
      'time': 1536412419299,
      'values': {
        'power': 539160
      }
    },
    {
      'time': 1536412421301,
      'values': {
        'power': 538410
      }
    },
    {
      'time': 1536412423305,
      'values': {
        'power': 537200
      }
    },
    {
      'time': 1536412425306,
      'values': {
        'power': 536310
      }
    },
    {
      'time': 1536412427306,
      'values': {
        'power': 534780
      }
    },
    {
      'time': 1536412429309,
      'values': {
        'power': 533460
      }
    },
    {
      'time': 1536412431311,
      'values': {
        'power': 536850
      }
    },
    {
      'time': 1536412433313,
      'values': {
        'power': 538270
      }
    },
    {
      'time': 1536412435315,
      'values': {
        'power': 529220
      }
    },
    {
      'time': 1536412437316,
      'values': {
        'power': 520640
      }
    },
    {
      'time': 1536412439318,
      'values': {
        'power': 520110
      }
    },
    {
      'time': 1536412441320,
      'values': {
        'power': 521900
      }
    },
    {
      'time': 1536412443323,
      'values': {
        'power': 521450
      }
    },
    {
      'time': 1536412445324,
      'values': {
        'power': 519970
      }
    },
    {
      'time': 1536412447326,
      'values': {
        'power': 521740
      }
    },
    {
      'time': 1536412449330,
      'values': {
        'power': 524440
      }
    },
    {
      'time': 1536412451330,
      'values': {
        'power': 523180
      }
    },
    {
      'time': 1536412453331,
      'values': {
        'power': 520160
      }
    },
    {
      'time': 1536412455333,
      'values': {
        'power': 519220
      }
    },
    {
      'time': 1536412457336,
      'values': {
        'power': 519830
      }
    },
    {
      'time': 1536412459338,
      'values': {
        'power': 520880
      }
    },
    {
      'time': 1536412461340,
      'values': {
        'power': 521600
      }
    },
    {
      'time': 1536412463342,
      'values': {
        'power': 519270
      }
    },
    {
      'time': 1536412465344,
      'values': {
        'power': 516330
      }
    },
    {
      'time': 1536412467346,
      'values': {
        'power': 516650
      }
    },
    {
      'time': 1536412469348,
      'values': {
        'power': 525210
      }
    },
    {
      'time': 1536412471350,
      'values': {
        'power': 534780
      }
    },
    {
      'time': 1536412473352,
      'values': {
        'power': 537610
      }
    },
    {
      'time': 1536412475354,
      'values': {
        'power': 531830
      }
    },
    {
      'time': 1536412477356,
      'values': {
        'power': 521260
      }
    },
    {
      'time': 1536412479358,
      'values': {
        'power': 517830
      }
    },
    {
      'time': 1536412481359,
      'values': {
        'power': 643340
      }
    },
    {
      'time': 1536412483361,
      'values': {
        'power': 705090
      }
    },
    {
      'time': 1536412485363,
      'values': {
        'power': 616610
      }
    },
    {
      'time': 1536412487365,
      'values': {
        'power': 661920
      }
    },
    {
      'time': 1536412489367,
      'values': {
        'power': 718490
      }
    },
    {
      'time': 1536412491369,
      'values': {
        'power': 643380
      }
    },
    {
      'time': 1536412493371,
      'values': {
        'power': 612980
      }
    },
    {
      'time': 1536412495373,
      'values': {
        'power': 610970
      }
    },
    {
      'time': 1536412497375,
      'values': {
        'power': 609700
      }
    },
    {
      'time': 1536412499377,
      'values': {
        'power': 611490
      }
    },
    {
      'time': 1536412501378,
      'values': {
        'power': 611880
      }
    },
    {
      'time': 1536412503380,
      'values': {
        'power': 609880
      }
    },
    {
      'time': 1536412505383,
      'values': {
        'power': 609160
      }
    },
    {
      'time': 1536412507384,
      'values': {
        'power': 610390
      }
    },
    {
      'time': 1536412509387,
      'values': {
        'power': 611900
      }
    },
    {
      'time': 1536412511388,
      'values': {
        'power': 612980
      }
    },
    {
      'time': 1536412513390,
      'values': {
        'power': 612250
      }
    },
    {
      'time': 1536412515393,
      'values': {
        'power': 608640
      }
    },
    {
      'time': 1536412517395,
      'values': {
        'power': 606130
      }
    },
    {
      'time': 1536412519397,
      'values': {
        'power': 606380
      }
    },
    {
      'time': 1536412521399,
      'values': {
        'power': 608150
      }
    },
    {
      'time': 1536412523401,
      'values': {
        'power': 608780
      }
    },
    {
      'time': 1536412525403,
      'values': {
        'power': 608870
      }
    },
    {
      'time': 1536412527404,
      'values': {
        'power': 610240
      }
    },
    {
      'time': 1536412529406,
      'values': {
        'power': 608290
      }
    },
    {
      'time': 1536412531409,
      'values': {
        'power': 603920
      }
    },
    {
      'time': 1536412533410,
      'values': {
        'power': 603270
      }
    },
    {
      'time': 1536412535412,
      'values': {
        'power': 603150
      }
    },
    {
      'time': 1536412537414,
      'values': {
        'power': 597870
      }
    },
    {
      'time': 1536412539416,
      'values': {
        'power': 595780
      }
    },
    {
      'time': 1536412541418,
      'values': {
        'power': 594010
      }
    },
    {
      'time': 1536412543420,
      'values': {
        'power': 591760
      }
    },
    {
      'time': 1536412545421,
      'values': {
        'power': 591130
      }
    },
    {
      'time': 1536412547423,
      'values': {
        'power': 590360
      }
    },
    {
      'time': 1536412549426,
      'values': {
        'power': 590690
      }
    },
    {
      'time': 1536412551428,
      'values': {
        'power': 590860
      }
    },
    {
      'time': 1536412553429,
      'values': {
        'power': 589180
      }
    },
    {
      'time': 1536412555432,
      'values': {
        'power': 587810
      }
    },
    {
      'time': 1536412557434,
      'values': {
        'power': 590640
      }
    },
    {
      'time': 1536412559436,
      'values': {
        'power': 593880
      }
    },
    {
      'time': 1536412561438,
      'values': {
        'power': 593660
      }
    },
    {
      'time': 1536412563439,
      'values': {
        'power': 592240
      }
    },
    {
      'time': 1536412565441,
      'values': {
        'power': 591190
      }
    },
    {
      'time': 1536412567444,
      'values': {
        'power': 592070
      }
    },
    {
      'time': 1536412569446,
      'values': {
        'power': 594850
      }
    },
    {
      'time': 1536412571448,
      'values': {
        'power': 597160
      }
    },
    {
      'time': 1536412573450,
      'values': {
        'power': 601780
      }
    },
    {
      'time': 1536412575453,
      'values': {
        'power': 608210
      }
    },
    {
      'time': 1536412577455,
      'values': {
        'power': 612130
      }
    },
    {
      'time': 1536412579455,
      'values': {
        'power': 613650
      }
    },
    {
      'time': 1536412581457,
      'values': {
        'power': 611830
      }
    },
    {
      'time': 1536412583459,
      'values': {
        'power': 609770
      }
    },
    {
      'time': 1536412585461,
      'values': {
        'power': 609060
      }
    },
    {
      'time': 1536412587463,
      'values': {
        'power': 611030
      }
    },
    {
      'time': 1536412589464,
      'values': {
        'power': 611490
      }
    },
    {
      'time': 1536412591466,
      'values': {
        'power': 609130
      }
    },
    {
      'time': 1536412593469,
      'values': {
        'power': 607210
      }
    },
    {
      'time': 1536412595471,
      'values': {
        'power': 607000
      }
    },
    {
      'time': 1536412597473,
      'values': {
        'power': 610010
      }
    },
    {
      'time': 1536412599475,
      'values': {
        'power': 612100
      }
    },
    {
      'time': 1536412601477,
      'values': {
        'power': 611320
      }
    },
    {
      'time': 1536412603480,
      'values': {
        'power': 608420
      }
    },
    {
      'time': 1536412605480,
      'values': {
        'power': 606670
      }
    },
    {
      'time': 1536412607483,
      'values': {
        'power': 607160
      }
    },
    {
      'time': 1536412609485,
      'values': {
        'power': 606830
      }
    },
    {
      'time': 1536412611487,
      'values': {
        'power': 604170
      }
    },
    {
      'time': 1536412613488,
      'values': {
        'power': 596470
      }
    },
    {
      'time': 1536412615491,
      'values': {
        'power': 591000
      }
    },
    {
      'time': 1536412617492,
      'values': {
        'power': 585420
      }
    },
    {
      'time': 1536412619494,
      'values': {
        'power': 555940
      }
    },
    {
      'time': 1536412621497,
      'values': {
        'power': 530630
      }
    },
    {
      'time': 1536412623499,
      'values': {
        'power': 528790
      }
    },
    {
      'time': 1536412625500,
      'values': {
        'power': 526210
      }
    },
    {
      'time': 1536412627502,
      'values': {
        'power': 525030
      }
    },
    {
      'time': 1536412629504,
      'values': {
        'power': 526600
      }
    },
    {
      'time': 1536412631506,
      'values': {
        'power': 525390
      }
    },
    {
      'time': 1536412633508,
      'values': {
        'power': 522870
      }
    },
    {
      'time': 1536412635510,
      'values': {
        'power': 521650
      }
    },
    {
      'time': 1536412637512,
      'values': {
        'power': 519840
      }
    },
    {
      'time': 1536412639514,
      'values': {
        'power': 517270
      }
    },
    {
      'time': 1536412641516,
      'values': {
        'power': 518350
      }
    },
    {
      'time': 1536412643521,
      'values': {
        'power': 519990
      }
    },
    {
      'time': 1536412645521,
      'values': {
        'power': 518460
      }
    },
    {
      'time': 1536412647521,
      'values': {
        'power': 520020
      }
    },
    {
      'time': 1536412649524,
      'values': {
        'power': 526920
      }
    },
    {
      'time': 1536412651526,
      'values': {
        'power': 529790
      }
    },
    {
      'time': 1536412653528,
      'values': {
        'power': 528730
      }
    },
    {
      'time': 1536412655529,
      'values': {
        'power': 530450
      }
    },
    {
      'time': 1536412657531,
      'values': {
        'power': 532480
      }
    },
    {
      'time': 1536412659534,
      'values': {
        'power': 533570
      }
    },
    {
      'time': 1536412661536,
      'values': {
        'power': 533800
      }
    },
    {
      'time': 1536412663538,
      'values': {
        'power': 533790
      }
    },
    {
      'time': 1536412665540,
      'values': {
        'power': 532640
      }
    },
    {
      'time': 1536412667542,
      'values': {
        'power': 533420
      }
    },
    {
      'time': 1536412669544,
      'values': {
        'power': 535470
      }
    },
    {
      'time': 1536412671545,
      'values': {
        'power': 534890
      }
    },
    {
      'time': 1536412673547,
      'values': {
        'power': 533270
      }
    },
    {
      'time': 1536412675549,
      'values': {
        'power': 530990
      }
    },
    {
      'time': 1536412677551,
      'values': {
        'power': 532090
      }
    },
    {
      'time': 1536412679555,
      'values': {
        'power': 534340
      }
    },
    {
      'time': 1536412681555,
      'values': {
        'power': 533250
      }
    },
    {
      'time': 1536412683556,
      'values': {
        'power': 532190
      }
    },
    {
      'time': 1536412685559,
      'values': {
        'power': 532080
      }
    },
    {
      'time': 1536412687561,
      'values': {
        'power': 526780
      }
    },
    {
      'time': 1536412689563,
      'values': {
        'power': 519720
      }
    },
    {
      'time': 1536412691565,
      'values': {
        'power': 516150
      }
    },
    {
      'time': 1536412693567,
      'values': {
        'power': 518030
      }
    },
    {
      'time': 1536412695569,
      'values': {
        'power': 518490
      }
    },
    {
      'time': 1536412697572,
      'values': {
        'power': 513030
      }
    },
    {
      'time': 1536412699572,
      'values': {
        'power': 511940
      }
    },
    {
      'time': 1536412701574,
      'values': {
        'power': 514410
      }
    },
    {
      'time': 1536412703577,
      'values': {
        'power': 514220
      }
    },
    {
      'time': 1536412705579,
      'values': {
        'power': 514870
      }
    },
    {
      'time': 1536412707580,
      'values': {
        'power': 516620
      }
    },
    {
      'time': 1536412709582,
      'values': {
        'power': 514960
      }
    },
    {
      'time': 1536412711585,
      'values': {
        'power': 515500
      }
    },
    {
      'time': 1536412713586,
      'values': {
        'power': 515130
      }
    },
    {
      'time': 1536412715588,
      'values': {
        'power': 510770
      }
    },
    {
      'time': 1536412717591,
      'values': {
        'power': 509530
      }
    },
    {
      'time': 1536412719593,
      'values': {
        'power': 513840
      }
    },
    {
      'time': 1536412721594,
      'values': {
        'power': 521340
      }
    },
    {
      'time': 1536412723596,
      'values': {
        'power': 527980
      }
    },
    {
      'time': 1536412725599,
      'values': {
        'power': 532190
      }
    },
    {
      'time': 1536412727699,
      'values': {
        'power': 535060
      }
    },
    {
      'time': 1536412729602,
      'values': {
        'power': 535710
      }
    },
    {
      'time': 1536412731606,
      'values': {
        'power': 534060
      }
    },
    {
      'time': 1536412733605,
      'values': {
        'power': 531490
      }
    },
    {
      'time': 1536412735608,
      'values': {
        'power': 530370
      }
    },
    {
      'time': 1536412737610,
      'values': {
        'power': 531770
      }
    },
    {
      'time': 1536412739612,
      'values': {
        'power': 533170
      }
    },
    {
      'time': 1536412741614,
      'values': {
        'power': 532070
      }
    },
    {
      'time': 1536412743616,
      'values': {
        'power': 529940
      }
    },
    {
      'time': 1536412745618,
      'values': {
        'power': 529350
      }
    },
    {
      'time': 1536412747619,
      'values': {
        'power': 531750
      }
    },
    {
      'time': 1536412749621,
      'values': {
        'power': 533420
      }
    },
    {
      'time': 1536412751624,
      'values': {
        'power': 530260
      }
    },
    {
      'time': 1536412753625,
      'values': {
        'power': 526270
      }
    },
    {
      'time': 1536412755628,
      'values': {
        'power': 527600
      }
    },
    {
      'time': 1536412757629,
      'values': {
        'power': 531250
      }
    },
    {
      'time': 1536412759631,
      'values': {
        'power': 525080
      }
    },
    {
      'time': 1536412761634,
      'values': {
        'power': 517210
      }
    },
    {
      'time': 1536412763636,
      'values': {
        'power': 516370
      }
    },
    {
      'time': 1536412765638,
      'values': {
        'power': 516870
      }
    },
    {
      'time': 1536412767639,
      'values': {
        'power': 517930
      }
    },
    {
      'time': 1536412769641,
      'values': {
        'power': 519030
      }
    },
    {
      'time': 1536412771643,
      'values': {
        'power': 519250
      }
    },
    {
      'time': 1536412773645,
      'values': {
        'power': 519560
      }
    },
    {
      'time': 1536412775647,
      'values': {
        'power': 520070
      }
    },
    {
      'time': 1536412777650,
      'values': {
        'power': 521360
      }
    },
    {
      'time': 1536412779652,
      'values': {
        'power': 523690
      }
    },
    {
      'time': 1536412781653,
      'values': {
        'power': 522680
      }
    },
    {
      'time': 1536412783654,
      'values': {
        'power': 516170
      }
    },
    {
      'time': 1536412785656,
      'values': {
        'power': 511620
      }
    },
    {
      'time': 1536412787659,
      'values': {
        'power': 513120
      }
    },
    {
      'time': 1536412789661,
      'values': {
        'power': 516380
      }
    },
    {
      'time': 1536412791663,
      'values': {
        'power': 517950
      }
    },
    {
      'time': 1536412793665,
      'values': {
        'power': 519250
      }
    },
    {
      'time': 1536412795667,
      'values': {
        'power': 520530
      }
    },
    {
      'time': 1536412797669,
      'values': {
        'power': 512750
      }
    },
    {
      'time': 1536412799671,
      'values': {
        'power': 508050
      }
    },
    {
      'time': 1536412801673,
      'values': {
        'power': 519680
      }
    },
    {
      'time': 1536412803675,
      'values': {
        'power': 527340
      }
    },
    {
      'time': 1536412805677,
      'values': {
        'power': 526520
      }
    },
    {
      'time': 1536412807679,
      'values': {
        'power': 525400
      }
    },
    {
      'time': 1536412809680,
      'values': {
        'power': 535020
      }
    },
    {
      'time': 1536412811683,
      'values': {
        'power': 545700
      }
    },
    {
      'time': 1536412813685,
      'values': {
        'power': 547950
      }
    },
    {
      'time': 1536412815686,
      'values': {
        'power': 549020
      }
    },
    {
      'time': 1536412817688,
      'values': {
        'power': 550770
      }
    },
    {
      'time': 1536412819690,
      'values': {
        'power': 552170
      }
    },
    {
      'time': 1536412821692,
      'values': {
        'power': 552340
      }
    },
    {
      'time': 1536412823694,
      'values': {
        'power': 552170
      }
    },
    {
      'time': 1536412825696,
      'values': {
        'power': 543160
      }
    },
    {
      'time': 1536412827698,
      'values': {
        'power': 522530
      }
    },
    {
      'time': 1536412829701,
      'values': {
        'power': 511000
      }
    },
    {
      'time': 1536412831702,
      'values': {
        'power': 510440
      }
    },
    {
      'time': 1536412833706,
      'values': {
        'power': 511170
      }
    },
    {
      'time': 1536412835705,
      'values': {
        'power': 508160
      }
    },
    {
      'time': 1536412837707,
      'values': {
        'power': 500700
      }
    },
    {
      'time': 1536412839710,
      'values': {
        'power': 499170
      }
    },
    {
      'time': 1536412841712,
      'values': {
        'power': 497490
      }
    },
    {
      'time': 1536412843714,
      'values': {
        'power': 483960
      }
    },
    {
      'time': 1536412845716,
      'values': {
        'power': 469260
      }
    },
    {
      'time': 1536412847719,
      'values': {
        'power': 467400
      }
    },
    {
      'time': 1536412849719,
      'values': {
        'power': 468330
      }
    },
    {
      'time': 1536412851722,
      'values': {
        'power': 469060
      }
    },
    {
      'time': 1536412853724,
      'values': {
        'power': 471800
      }
    },
    {
      'time': 1536412855726,
      'values': {
        'power': 482740
      }
    },
    {
      'time': 1536412857728,
      'values': {
        'power': 497450
      }
    },
    {
      'time': 1536412859732,
      'values': {
        'power': 502930
      }
    },
    {
      'time': 1536412861731,
      'values': {
        'power': 502840
      }
    },
    {
      'time': 1536412863733,
      'values': {
        'power': 503650
      }
    },
    {
      'time': 1536412865735,
      'values': {
        'power': 502760
      }
    },
    {
      'time': 1536412867737,
      'values': {
        'power': 502270
      }
    },
    {
      'time': 1536412869739,
      'values': {
        'power': 507710
      }
    },
    {
      'time': 1536412871741,
      'values': {
        'power': 513720
      }
    },
    {
      'time': 1536412873743,
      'values': {
        'power': 514670
      }
    },
    {
      'time': 1536412875745,
      'values': {
        'power': 515800
      }
    },
    {
      'time': 1536412877747,
      'values': {
        'power': 518680
      }
    },
    {
      'time': 1536412879749,
      'values': {
        'power': 520200
      }
    },
    {
      'time': 1536412881750,
      'values': {
        'power': 519810
      }
    },
    {
      'time': 1536412883753,
      'values': {
        'power': 519500
      }
    },
    {
      'time': 1536412885756,
      'values': {
        'power': 517020
      }
    },
    {
      'time': 1536412887757,
      'values': {
        'power': 512890
      }
    },
    {
      'time': 1536412889758,
      'values': {
        'power': 512390
      }
    },
    {
      'time': 1536412891760,
      'values': {
        'power': 515590
      }
    },
    {
      'time': 1536412893763,
      'values': {
        'power': 517010
      }
    },
    {
      'time': 1536412895765,
      'values': {
        'power': 517320
      }
    },
    {
      'time': 1536412897767,
      'values': {
        'power': 517510
      }
    },
    {
      'time': 1536412899770,
      'values': {
        'power': 517260
      }
    },
    {
      'time': 1536412901771,
      'values': {
        'power': 515920
      }
    },
    {
      'time': 1536412903773,
      'values': {
        'power': 513450
      }
    },
    {
      'time': 1536412905775,
      'values': {
        'power': 512310
      }
    },
    {
      'time': 1536412907776,
      'values': {
        'power': 511220
      }
    },
    {
      'time': 1536412909778,
      'values': {
        'power': 503300
      }
    },
    {
      'time': 1536412911780,
      'values': {
        'power': 486330
      }
    },
    {
      'time': 1536412913782,
      'values': {
        'power': 465670
      }
    },
    {
      'time': 1536412915784,
      'values': {
        'power': 453980
      }
    },
    {
      'time': 1536412917785,
      'values': {
        'power': 455050
      }
    },
    {
      'time': 1536412919787,
      'values': {
        'power': 452710
      }
    },
    {
      'time': 1536412921790,
      'values': {
        'power': 451210
      }
    },
    {
      'time': 1536412923792,
      'values': {
        'power': 448150
      }
    },
    {
      'time': 1536412925794,
      'values': {
        'power': 441820
      }
    },
    {
      'time': 1536412927796,
      'values': {
        'power': 436530
      }
    },
    {
      'time': 1536412929798,
      'values': {
        'power': 436230
      }
    },
    {
      'time': 1536412931800,
      'values': {
        'power': 433460
      }
    },
    {
      'time': 1536412933802,
      'values': {
        'power': 432590
      }
    },
    {
      'time': 1536412935804,
      'values': {
        'power': 435710
      }
    },
    {
      'time': 1536412937805,
      'values': {
        'power': 438500
      }
    },
    {
      'time': 1536412939807,
      'values': {
        'power': 439550
      }
    },
    {
      'time': 1536412941810,
      'values': {
        'power': 436760
      }
    },
    {
      'time': 1536412943814,
      'values': {
        'power': 432020
      }
    },
    {
      'time': 1536412945814,
      'values': {
        'power': 431580
      }
    },
    {
      'time': 1536412947816,
      'values': {
        'power': 440990
      }
    },
    {
      'time': 1536412949817,
      'values': {
        'power': 447990
      }
    },
    {
      'time': 1536412951819,
      'values': {
        'power': 448490
      }
    },
    {
      'time': 1536412953822,
      'values': {
        'power': 446860
      }
    },
    {
      'time': 1536412955823,
      'values': {
        'power': 447860
      }
    },
    {
      'time': 1536412957825,
      'values': {
        'power': 449190
      }
    },
    {
      'time': 1536412959827,
      'values': {
        'power': 449840
      }
    },
    {
      'time': 1536412961829,
      'values': {
        'power': 448410
      }
    },
    {
      'time': 1536412963831,
      'values': {
        'power': 444210
      }
    },
    {
      'time': 1536412965832,
      'values': {
        'power': 443100
      }
    },
    {
      'time': 1536412967835,
      'values': {
        'power': 444360
      }
    },
    {
      'time': 1536412969837,
      'values': {
        'power': 445050
      }
    },
    {
      'time': 1536412971838,
      'values': {
        'power': 445860
      }
    },
    {
      'time': 1536412973840,
      'values': {
        'power': 446500
      }
    },
    {
      'time': 1536412975843,
      'values': {
        'power': 447970
      }
    },
    {
      'time': 1536412977845,
      'values': {
        'power': 448790
      }
    },
    {
      'time': 1536412979847,
      'values': {
        'power': 446290
      }
    },
    {
      'time': 1536412981849,
      'values': {
        'power': 444010
      }
    },
    {
      'time': 1536412983850,
      'values': {
        'power': 444460
      }
    },
    {
      'time': 1536412985852,
      'values': {
        'power': 442370
      }
    },
    {
      'time': 1536412987855,
      'values': {
        'power': 437140
      }
    },
    {
      'time': 1536412989856,
      'values': {
        'power': 435610
      }
    },
    {
      'time': 1536412991858,
      'values': {
        'power': 435600
      }
    },
    {
      'time': 1536412993861,
      'values': {
        'power': 434620
      }
    },
    {
      'time': 1536412995863,
      'values': {
        'power': 434750
      }
    },
    {
      'time': 1536412997864,
      'values': {
        'power': 435220
      }
    },
    {
      'time': 1536412999866,
      'values': {
        'power': 432690
      }
    },
    {
      'time': 1536413001868,
      'values': {
        'power': 429610
      }
    },
    {
      'time': 1536413003870,
      'values': {
        'power': 428660
      }
    },
    {
      'time': 1536413005872,
      'values': {
        'power': 430090
      }
    },
    {
      'time': 1536413007874,
      'values': {
        'power': 431650
      }
    },
    {
      'time': 1536413009876,
      'values': {
        'power': 431720
      }
    },
    {
      'time': 1536413011878,
      'values': {
        'power': 433900
      }
    },
    {
      'time': 1536413013881,
      'values': {
        'power': 436510
      }
    },
    {
      'time': 1536413015882,
      'values': {
        'power': 435870
      }
    },
    {
      'time': 1536413017883,
      'values': {
        'power': 435310
      }
    },
    {
      'time': 1536413019885,
      'values': {
        'power': 433580
      }
    },
    {
      'time': 1536413021888,
      'values': {
        'power': 434670
      }
    },
    {
      'time': 1536413023890,
      'values': {
        'power': 442670
      }
    },
    {
      'time': 1536413025893,
      'values': {
        'power': 448640
      }
    },
    {
      'time': 1536413027893,
      'values': {
        'power': 448770
      }
    },
    {
      'time': 1536413029896,
      'values': {
        'power': 446020
      }
    },
    {
      'time': 1536413031898,
      'values': {
        'power': 441910
      }
    },
    {
      'time': 1536413033900,
      'values': {
        'power': 444050
      }
    },
    {
      'time': 1536413035902,
      'values': {
        'power': 447700
      }
    },
    {
      'time': 1536413037904,
      'values': {
        'power': 449570
      }
    },
    {
      'time': 1536413039905,
      'values': {
        'power': 450990
      }
    },
    {
      'time': 1536413041907,
      'values': {
        'power': 447880
      }
    },
    {
      'time': 1536413043910,
      'values': {
        'power': 443270
      }
    },
    {
      'time': 1536413045912,
      'values': {
        'power': 443830
      }
    },
    {
      'time': 1536413047914,
      'values': {
        'power': 449510
      }
    },
    {
      'time': 1536413049917,
      'values': {
        'power': 451440
      }
    },
    {
      'time': 1536413051917,
      'values': {
        'power': 449230
      }
    },
    {
      'time': 1536413053919,
      'values': {
        'power': 447880
      }
    },
    {
      'time': 1536413055921,
      'values': {
        'power': 446590
      }
    },
    {
      'time': 1536413057923,
      'values': {
        'power': 445310
      }
    },
    {
      'time': 1536413059925,
      'values': {
        'power': 441320
      }
    },
    {
      'time': 1536413061927,
      'values': {
        'power': 433940
      }
    },
    {
      'time': 1536413063929,
      'values': {
        'power': 431400
      }
    },
    {
      'time': 1536413065930,
      'values': {
        'power': 433620
      }
    },
    {
      'time': 1536413067932,
      'values': {
        'power': 434290
      }
    },
    {
      'time': 1536413069935,
      'values': {
        'power': 433730
      }
    },
    {
      'time': 1536413071937,
      'values': {
        'power': 433160
      }
    },
    {
      'time': 1536413073939,
      'values': {
        'power': 432750
      }
    },
    {
      'time': 1536413075941,
      'values': {
        'power': 433420
      }
    },
    {
      'time': 1536413077943,
      'values': {
        'power': 435140
      }
    },
    {
      'time': 1536413079945,
      'values': {
        'power': 434800
      }
    },
    {
      'time': 1536413081947,
      'values': {
        'power': 432430
      }
    },
    {
      'time': 1536413083948,
      'values': {
        'power': 431810
      }
    },
    {
      'time': 1536413085950,
      'values': {
        'power': 433660
      }
    },
    {
      'time': 1536413087953,
      'values': {
        'power': 435630
      }
    },
    {
      'time': 1536413089955,
      'values': {
        'power': 434440
      }
    },
    {
      'time': 1536413091956,
      'values': {
        'power': 433000
      }
    },
    {
      'time': 1536413093958,
      'values': {
        'power': 434030
      }
    },
    {
      'time': 1536413095960,
      'values': {
        'power': 441920
      }
    },
    {
      'time': 1536413097962,
      'values': {
        'power': 448760
      }
    },
    {
      'time': 1536413099964,
      'values': {
        'power': 446680
      }
    },
    {
      'time': 1536413101966,
      'values': {
        'power': 444860
      }
    },
    {
      'time': 1536413103968,
      'values': {
        'power': 445340
      }
    },
    {
      'time': 1536413105970,
      'values': {
        'power': 445080
      }
    },
    {
      'time': 1536413107972,
      'values': {
        'power': 445810
      }
    },
    {
      'time': 1536413109973,
      'values': {
        'power': 447520
      }
    },
    {
      'time': 1536413111976,
      'values': {
        'power': 446720
      }
    },
    {
      'time': 1536413113978,
      'values': {
        'power': 447760
      }
    },
    {
      'time': 1536413115981,
      'values': {
        'power': 451210
      }
    },
    {
      'time': 1536413117981,
      'values': {
        'power': 451190
      }
    },
    {
      'time': 1536413119983,
      'values': {
        'power': 449400
      }
    },
    {
      'time': 1536413121986,
      'values': {
        'power': 447170
      }
    },
    {
      'time': 1536413123988,
      'values': {
        'power': 445600
      }
    },
    {
      'time': 1536413125990,
      'values': {
        'power': 447710
      }
    },
    {
      'time': 1536413127992,
      'values': {
        'power': 448710
      }
    },
    {
      'time': 1536413129994,
      'values': {
        'power': 442920
      }
    },
    {
      'time': 1536413131996,
      'values': {
        'power': 442140
      }
    },
    {
      'time': 1536413133998,
      'values': {
        'power': 443250
      }
    },
    {
      'time': 1536413135999,
      'values': {
        'power': 436910
      }
    },
    {
      'time': 1536413138001,
      'values': {
        'power': 432750
      }
    },
    {
      'time': 1536413140004,
      'values': {
        'power': 433650
      }
    },
    {
      'time': 1536413142006,
      'values': {
        'power': 434340
      }
    },
    {
      'time': 1536413144007,
      'values': {
        'power': 436830
      }
    },
    {
      'time': 1536413146009,
      'values': {
        'power': 437430
      }
    },
    {
      'time': 1536413148011,
      'values': {
        'power': 435640
      }
    },
    {
      'time': 1536413150013,
      'values': {
        'power': 433820
      }
    },
    {
      'time': 1536413152015,
      'values': {
        'power': 431660
      }
    },
    {
      'time': 1536413154016,
      'values': {
        'power': 432700
      }
    },
    {
      'time': 1536413156019,
      'values': {
        'power': 435010
      }
    },
    {
      'time': 1536413158021,
      'values': {
        'power': 436580
      }
    },
    {
      'time': 1536413160023,
      'values': {
        'power': 435960
      }
    },
    {
      'time': 1536413162025,
      'values': {
        'power': 434160
      }
    },
    {
      'time': 1536413164026,
      'values': {
        'power': 432230
      }
    },
    {
      'time': 1536413166029,
      'values': {
        'power': 430500
      }
    },
    {
      'time': 1536413168032,
      'values': {
        'power': 436800
      }
    },
    {
      'time': 1536413170032,
      'values': {
        'power': 445770
      }
    },
    {
      'time': 1536413172035,
      'values': {
        'power': 447910
      }
    },
    {
      'time': 1536413174037,
      'values': {
        'power': 449350
      }
    },
    {
      'time': 1536413176039,
      'values': {
        'power': 451180
      }
    },
    {
      'time': 1536413178041,
      'values': {
        'power': 450260
      }
    },
    {
      'time': 1536413180043,
      'values': {
        'power': 446190
      }
    },
    {
      'time': 1536413182045,
      'values': {
        'power': 444780
      }
    },
    {
      'time': 1536413184047,
      'values': {
        'power': 446870
      }
    },
    {
      'time': 1536413186048,
      'values': {
        'power': 447610
      }
    },
    {
      'time': 1536413188051,
      'values': {
        'power': 449490
      }
    },
    {
      'time': 1536413190052,
      'values': {
        'power': 449890
      }
    },
    {
      'time': 1536413192054,
      'values': {
        'power': 448270
      }
    },
    {
      'time': 1536413194056,
      'values': {
        'power': 448720
      }
    },
    {
      'time': 1536413196058,
      'values': {
        'power': 449390
      }
    },
    {
      'time': 1536413198061,
      'values': {
        'power': 445280
      }
    },
    {
      'time': 1536413200062,
      'values': {
        'power': 441830
      }
    },
    {
      'time': 1536413202064,
      'values': {
        'power': 445070
      }
    },
    {
      'time': 1536413204066,
      'values': {
        'power': 450510
      }
    },
    {
      'time': 1536413206068,
      'values': {
        'power': 450970
      }
    },
    {
      'time': 1536413208070,
      'values': {
        'power': 441430
      }
    },
    {
      'time': 1536413210072,
      'values': {
        'power': 433050
      }
    },
    {
      'time': 1536413212074,
      'values': {
        'power': 429350
      }
    },
    {
      'time': 1536413214076,
      'values': {
        'power': 426650
      }
    },
    {
      'time': 1536413216079,
      'values': {
        'power': 429920
      }
    },
    {
      'time': 1536413218079,
      'values': {
        'power': 434620
      }
    },
    {
      'time': 1536413220081,
      'values': {
        'power': 435400
      }
    },
    {
      'time': 1536413222083,
      'values': {
        'power': 434320
      }
    },
    {
      'time': 1536413224086,
      'values': {
        'power': 435850
      }
    },
    {
      'time': 1536413226088,
      'values': {
        'power': 437030
      }
    },
    {
      'time': 1536413228090,
      'values': {
        'power': 434330
      }
    },
    {
      'time': 1536413230092,
      'values': {
        'power': 429200
      }
    },
    {
      'time': 1536413232094,
      'values': {
        'power': 427050
      }
    },
    {
      'time': 1536413234096,
      'values': {
        'power': 430750
      }
    },
    {
      'time': 1536413236098,
      'values': {
        'power': 434780
      }
    },
    {
      'time': 1536413238099,
      'values': {
        'power': 435670
      }
    },
    {
      'time': 1536413240101,
      'values': {
        'power': 435240
      }
    },
    {
      'time': 1536413242103,
      'values': {
        'power': 438460
      }
    },
    {
      'time': 1536413244107,
      'values': {
        'power': 446620
      }
    },
    {
      'time': 1536413246106,
      'values': {
        'power': 450970
      }
    },
    {
      'time': 1536413248108,
      'values': {
        'power': 449360
      }
    },
    {
      'time': 1536413250111,
      'values': {
        'power': 444270
      }
    },
    {
      'time': 1536413252114,
      'values': {
        'power': 441140
      }
    },
    {
      'time': 1536413254116,
      'values': {
        'power': 443610
      }
    },
    {
      'time': 1536413256117,
      'values': {
        'power': 447240
      }
    },
    {
      'time': 1536413258119,
      'values': {
        'power': 449430
      }
    },
    {
      'time': 1536413260121,
      'values': {
        'power': 450700
      }
    },
    {
      'time': 1536413262123,
      'values': {
        'power': 450370
      }
    },
    {
      'time': 1536413264125,
      'values': {
        'power': 450400
      }
    },
    {
      'time': 1536413266127,
      'values': {
        'power': 450460
      }
    },
    {
      'time': 1536413268129,
      'values': {
        'power': 449200
      }
    },
    {
      'time': 1536413270132,
      'values': {
        'power': 445200
      }
    },
    {
      'time': 1536413272132,
      'values': {
        'power': 441660
      }
    },
    {
      'time': 1536413274134,
      'values': {
        'power': 444160
      }
    },
    {
      'time': 1536413276137,
      'values': {
        'power': 448450
      }
    },
    {
      'time': 1536413278139,
      'values': {
        'power': 449070
      }
    },
    {
      'time': 1536413280141,
      'values': {
        'power': 447120
      }
    },
    {
      'time': 1536413282142,
      'values': {
        'power': 440290
      }
    },
    {
      'time': 1536413284145,
      'values': {
        'power': 551120
      }
    },
    {
      'time': 1536413286146,
      'values': {
        'power': 636960
      }
    },
    {
      'time': 1536413288148,
      'values': {
        'power': 552670
      }
    },
    {
      'time': 1536413290150,
      'values': {
        'power': 479520
      }
    },
    {
      'time': 1536413292152,
      'values': {
        'power': 478400
      }
    },
    {
      'time': 1536413294154,
      'values': {
        'power': 479500
      }
    },
    {
      'time': 1536413296158,
      'values': {
        'power': 482730
      }
    },
    {
      'time': 1536413298158,
      'values': {
        'power': 482890
      }
    },
    {
      'time': 1536413300159,
      'values': {
        'power': 482420
      }
    },
    {
      'time': 1536413302161,
      'values': {
        'power': 479020
      }
    },
    {
      'time': 1536413304164,
      'values': {
        'power': 477540
      }
    },
    {
      'time': 1536413306166,
      'values': {
        'power': 480330
      }
    },
    {
      'time': 1536413308168,
      'values': {
        'power': 481010
      }
    },
    {
      'time': 1536413310170,
      'values': {
        'power': 479550
      }
    },
    {
      'time': 1536413312172,
      'values': {
        'power': 479700
      }
    },
    {
      'time': 1536413314174,
      'values': {
        'power': 482540
      }
    },
    {
      'time': 1536413316176,
      'values': {
        'power': 489490
      }
    },
    {
      'time': 1536413318178,
      'values': {
        'power': 494470
      }
    },
    {
      'time': 1536413320180,
      'values': {
        'power': 493350
      }
    },
    {
      'time': 1536413322181,
      'values': {
        'power': 491950
      }
    },
    {
      'time': 1536413324184,
      'values': {
        'power': 490380
      }
    },
    {
      'time': 1536413326188,
      'values': {
        'power': 488020
      }
    },
    {
      'time': 1536413328187,
      'values': {
        'power': 486810
      }
    },
    {
      'time': 1536413330190,
      'values': {
        'power': 487890
      }
    },
    {
      'time': 1536413332191,
      'values': {
        'power': 487660
      }
    },
    {
      'time': 1536413334193,
      'values': {
        'power': 485980
      }
    },
    {
      'time': 1536413336195,
      'values': {
        'power': 488170
      }
    },
    {
      'time': 1536413338197,
      'values': {
        'power': 489970
      }
    },
    {
      'time': 1536413340199,
      'values': {
        'power': 489150
      }
    },
    {
      'time': 1536413342201,
      'values': {
        'power': 489960
      }
    },
    {
      'time': 1536413344203,
      'values': {
        'power': 492220
      }
    },
    {
      'time': 1536413346205,
      'values': {
        'power': 492840
      }
    },
    {
      'time': 1536413348206,
      'values': {
        'power': 491940
      }
    },
    {
      'time': 1536413350209,
      'values': {
        'power': 490690
      }
    },
    {
      'time': 1536413352212,
      'values': {
        'power': 479670
      }
    },
    {
      'time': 1536413354212,
      'values': {
        'power': 469300
      }
    },
    {
      'time': 1536413356214,
      'values': {
        'power': 472550
      }
    },
    {
      'time': 1536413358217,
      'values': {
        'power': 476570
      }
    },
    {
      'time': 1536413360219,
      'values': {
        'power': 479660
      }
    },
    {
      'time': 1536413362221,
      'values': {
        'power': 480390
      }
    },
    {
      'time': 1536413364223,
      'values': {
        'power': 479070
      }
    },
    {
      'time': 1536413366225,
      'values': {
        'power': 477470
      }
    },
    {
      'time': 1536413368227,
      'values': {
        'power': 475870
      }
    },
    {
      'time': 1536413370229,
      'values': {
        'power': 470070
      }
    },
    {
      'time': 1536413372231,
      'values': {
        'power': 463240
      }
    },
    {
      'time': 1536413374232,
      'values': {
        'power': 465690
      }
    },
    {
      'time': 1536413376234,
      'values': {
        'power': 471830
      }
    },
    {
      'time': 1536413378237,
      'values': {
        'power': 474100
      }
    },
    {
      'time': 1536413380239,
      'values': {
        'power': 473390
      }
    },
    {
      'time': 1536413382240,
      'values': {
        'power': 469690
      }
    },
    {
      'time': 1536413384242,
      'values': {
        'power': 467230
      }
    },
    {
      'time': 1536413386245,
      'values': {
        'power': 478180
      }
    },
    {
      'time': 1536413388245,
      'values': {
        'power': 492010
      }
    },
    {
      'time': 1536413390247,
      'values': {
        'power': 497660
      }
    },
    {
      'time': 1536413392250,
      'values': {
        'power': 500340
      }
    },
    {
      'time': 1536413394252,
      'values': {
        'power': 494260
      }
    },
    {
      'time': 1536413396254,
      'values': {
        'power': 486270
      }
    },
    {
      'time': 1536413398256,
      'values': {
        'power': 489970
      }
    },
    {
      'time': 1536413400257,
      'values': {
        'power': 508730
      }
    },
    {
      'time': 1536413402259,
      'values': {
        'power': 542010
      }
    },
    {
      'time': 1536413404262,
      'values': {
        'power': 563950
      }
    },
    {
      'time': 1536413406264,
      'values': {
        'power': 565360
      }
    },
    {
      'time': 1536413408267,
      'values': {
        'power': 563190
      }
    },
    {
      'time': 1536413410267,
      'values': {
        'power': 563350
      }
    },
    {
      'time': 1536413412270,
      'values': {
        'power': 563340
      }
    },
    {
      'time': 1536413414272,
      'values': {
        'power': 560490
      }
    },
    {
      'time': 1536413416274,
      'values': {
        'power': 558730
      }
    },
    {
      'time': 1536413418276,
      'values': {
        'power': 555180
      }
    },
    {
      'time': 1536413420279,
      'values': {
        'power': 555800
      }
    },
    {
      'time': 1536413422280,
      'values': {
        'power': 560900
      }
    },
    {
      'time': 1536413424282,
      'values': {
        'power': 558340
      }
    },
    {
      'time': 1536413426283,
      'values': {
        'power': 553800
      }
    },
    {
      'time': 1536413428285,
      'values': {
        'power': 552630
      }
    },
    {
      'time': 1536413430287,
      'values': {
        'power': 551850
      }
    },
    {
      'time': 1536413432289,
      'values': {
        'power': 549850
      }
    },
    {
      'time': 1536413434291,
      'values': {
        'power': 543860
      }
    },
    {
      'time': 1536413436293,
      'values': {
        'power': 540370
      }
    },
    {
      'time': 1536413438296,
      'values': {
        'power': 548820
      }
    },
    {
      'time': 1536413440297,
      'values': {
        'power': 545230
      }
    },
    {
      'time': 1536413442299,
      'values': {
        'power': 526160
      }
    },
    {
      'time': 1536413444301,
      'values': {
        'power': 516740
      }
    },
    {
      'time': 1536413446303,
      'values': {
        'power': 516510
      }
    },
    {
      'time': 1536413448305,
      'values': {
        'power': 518530
      }
    },
    {
      'time': 1536413450306,
      'values': {
        'power': 518020
      }
    },
    {
      'time': 1536413452309,
      'values': {
        'power': 516900
      }
    },
    {
      'time': 1536413454310,
      'values': {
        'power': 518230
      }
    },
    {
      'time': 1536413456313,
      'values': {
        'power': 518210
      }
    },
    {
      'time': 1536413458315,
      'values': {
        'power': 522160
      }
    },
    {
      'time': 1536413460317,
      'values': {
        'power': 526980
      }
    },
    {
      'time': 1536413462319,
      'values': {
        'power': 528750
      }
    },
    {
      'time': 1536413464320,
      'values': {
        'power': 526980
      }
    },
    {
      'time': 1536413466322,
      'values': {
        'power': 524360
      }
    },
    {
      'time': 1536413468325,
      'values': {
        'power': 523280
      }
    },
    {
      'time': 1536413470327,
      'values': {
        'power': 521660
      }
    },
    {
      'time': 1536413472329,
      'values': {
        'power': 520990
      }
    },
    {
      'time': 1536413474331,
      'values': {
        'power': 521220
      }
    },
    {
      'time': 1536413476332,
      'values': {
        'power': 522260
      }
    },
    {
      'time': 1536413478334,
      'values': {
        'power': 522760
      }
    },
    {
      'time': 1536413480336,
      'values': {
        'power': 522160
      }
    },
    {
      'time': 1536413482338,
      'values': {
        'power': 522690
      }
    },
    {
      'time': 1536413484340,
      'values': {
        'power': 523220
      }
    },
    {
      'time': 1536413486342,
      'values': {
        'power': 522800
      }
    },
    {
      'time': 1536413488344,
      'values': {
        'power': 523060
      }
    },
    {
      'time': 1536413490345,
      'values': {
        'power': 523280
      }
    },
    {
      'time': 1536413492347,
      'values': {
        'power': 523340
      }
    },
    {
      'time': 1536413494350,
      'values': {
        'power': 522170
      }
    },
    {
      'time': 1536413496352,
      'values': {
        'power': 520510
      }
    },
    {
      'time': 1536413498354,
      'values': {
        'power': 508350
      }
    },
    {
      'time': 1536413500356,
      'values': {
        'power': 488720
      }
    },
    {
      'time': 1536413502357,
      'values': {
        'power': 481240
      }
    },
    {
      'time': 1536413504359,
      'values': {
        'power': 481320
      }
    },
    {
      'time': 1536413506362,
      'values': {
        'power': 486930
      }
    },
    {
      'time': 1536413508364,
      'values': {
        'power': 501410
      }
    },
    {
      'time': 1536413510366,
      'values': {
        'power': 506970
      }
    },
    {
      'time': 1536413512368,
      'values': {
        'power': 503050
      }
    },
    {
      'time': 1536413514370,
      'values': {
        'power': 503920
      }
    },
    {
      'time': 1536413516372,
      'values': {
        'power': 505710
      }
    },
    {
      'time': 1536413518374,
      'values': {
        'power': 505510
      }
    },
    {
      'time': 1536413520376,
      'values': {
        'power': 505570
      }
    },
    {
      'time': 1536413522378,
      'values': {
        'power': 506340
      }
    },
    {
      'time': 1536413524379,
      'values': {
        'power': 508110
      }
    },
    {
      'time': 1536413526381,
      'values': {
        'power': 510070
      }
    },
    {
      'time': 1536413528383,
      'values': {
        'power': 511190
      }
    },
    {
      'time': 1536413530384,
      'values': {
        'power': 509490
      }
    },
    {
      'time': 1536413532387,
      'values': {
        'power': 507930
      }
    },
    {
      'time': 1536413534389,
      'values': {
        'power': 503430
      }
    },
    {
      'time': 1536413536391,
      'values': {
        'power': 498440
      }
    },
    {
      'time': 1536413538393,
      'values': {
        'power': 497400
      }
    },
    {
      'time': 1536413540395,
      'values': {
        'power': 496650
      }
    },
    {
      'time': 1536413542397,
      'values': {
        'power': 496020
      }
    },
    {
      'time': 1536413544399,
      'values': {
        'power': 496460
      }
    },
    {
      'time': 1536413546400,
      'values': {
        'power': 498690
      }
    },
    {
      'time': 1536413548402,
      'values': {
        'power': 499800
      }
    },
    {
      'time': 1536413550405,
      'values': {
        'power': 500520
      }
    },
    {
      'time': 1536413552408,
      'values': {
        'power': 501620
      }
    },
    {
      'time': 1536413554409,
      'values': {
        'power': 502290
      }
    },
    {
      'time': 1536413556410,
      'values': {
        'power': 501550
      }
    },
    {
      'time': 1536413558412,
      'values': {
        'power': 497800
      }
    },
    {
      'time': 1536413560415,
      'values': {
        'power': 496130
      }
    },
    {
      'time': 1536413562417,
      'values': {
        'power': 497230
      }
    },
    {
      'time': 1536413564419,
      'values': {
        'power': 499510
      }
    },
    {
      'time': 1536413566421,
      'values': {
        'power': 502650
      }
    },
    {
      'time': 1536413568422,
      'values': {
        'power': 504570
      }
    },
    {
      'time': 1536413570424,
      'values': {
        'power': 502340
      }
    },
    {
      'time': 1536413572426,
      'values': {
        'power': 491550
      }
    },
    {
      'time': 1536413574428,
      'values': {
        'power': 480720
      }
    },
    {
      'time': 1536413576431,
      'values': {
        'power': 479950
      }
    },
    {
      'time': 1536413578434,
      'values': {
        'power': 482140
      }
    },
    {
      'time': 1536413580434,
      'values': {
        'power': 484640
      }
    },
    {
      'time': 1536413582436,
      'values': {
        'power': 486330
      }
    },
    {
      'time': 1536413584438,
      'values': {
        'power': 486290
      }
    },
    {
      'time': 1536413586440,
      'values': {
        'power': 487460
      }
    },
    {
      'time': 1536413588443,
      'values': {
        'power': 490080
      }
    },
    {
      'time': 1536413590443,
      'values': {
        'power': 489850
      }
    },
    {
      'time': 1536413592446,
      'values': {
        'power': 483320
      }
    },
    {
      'time': 1536413594448,
      'values': {
        'power': 478750
      }
    },
    {
      'time': 1536413596450,
      'values': {
        'power': 479780
      }
    },
    {
      'time': 1536413598452,
      'values': {
        'power': 483730
      }
    },
    {
      'time': 1536413600453,
      'values': {
        'power': 485880
      }
    },
    {
      'time': 1536413602456,
      'values': {
        'power': 486590
      }
    },
    {
      'time': 1536413604457,
      'values': {
        'power': 487420
      }
    },
    {
      'time': 1536413606459,
      'values': {
        'power': 496500
      }
    },
    {
      'time': 1536413608462,
      'values': {
        'power': 511040
      }
    },
    {
      'time': 1536413610464,
      'values': {
        'power': 520820
      }
    },
    {
      'time': 1536413612466,
      'values': {
        'power': 520470
      }
    },
    {
      'time': 1536413614467,
      'values': {
        'power': 517220
      }
    },
    {
      'time': 1536413616469,
      'values': {
        'power': 512080
      }
    },
    {
      'time': 1536413618471,
      'values': {
        'power': 503160
      }
    },
    {
      'time': 1536413620473,
      'values': {
        'power': 504350
      }
    },
    {
      'time': 1536413622476,
      'values': {
        'power': 503170
      }
    },
    {
      'time': 1536413624477,
      'values': {
        'power': 493280
      }
    },
    {
      'time': 1536413626478,
      'values': {
        'power': 488000
      }
    },
    {
      'time': 1536413628481,
      'values': {
        'power': 488470
      }
    },
    {
      'time': 1536413630482,
      'values': {
        'power': 487010
      }
    },
    {
      'time': 1536413632484,
      'values': {
        'power': 485550
      }
    },
    {
      'time': 1536413634487,
      'values': {
        'power': 482580
      }
    },
    {
      'time': 1536413636489,
      'values': {
        'power': 474840
      }
    },
    {
      'time': 1536413638491,
      'values': {
        'power': 466280
      }
    },
    {
      'time': 1536413640493,
      'values': {
        'power': 462140
      }
    },
    {
      'time': 1536413642495,
      'values': {
        'power': 461570
      }
    },
    {
      'time': 1536413644497,
      'values': {
        'power': 458470
      }
    },
    {
      'time': 1536413646499,
      'values': {
        'power': 452140
      }
    },
    {
      'time': 1536413648501,
      'values': {
        'power': 448680
      }
    },
    {
      'time': 1536413650503,
      'values': {
        'power': 447600
      }
    },
    {
      'time': 1536413652505,
      'values': {
        'power': 445720
      }
    },
    {
      'time': 1536413654508,
      'values': {
        'power': 445500
      }
    },
    {
      'time': 1536413656508,
      'values': {
        'power': 447580
      }
    },
    {
      'time': 1536413658510,
      'values': {
        'power': 449050
      }
    },
    {
      'time': 1536413660513,
      'values': {
        'power': 447900
      }
    },
    {
      'time': 1536413662514,
      'values': {
        'power': 451500
      }
    },
    {
      'time': 1536413664516,
      'values': {
        'power': 454910
      }
    },
    {
      'time': 1536413666518,
      'values': {
        'power': 450600
      }
    },
    {
      'time': 1536413668520,
      'values': {
        'power': 446310
      }
    },
    {
      'time': 1536413670522,
      'values': {
        'power': 444580
      }
    },
    {
      'time': 1536413672524,
      'values': {
        'power': 443720
      }
    },
    {
      'time': 1536413674526,
      'values': {
        'power': 445520
      }
    },
    {
      'time': 1536413676528,
      'values': {
        'power': 447690
      }
    },
    {
      'time': 1536413678530,
      'values': {
        'power': 447990
      }
    },
    {
      'time': 1536413680535,
      'values': {
        'power': 448760
      }
    },
    {
      'time': 1536413682533,
      'values': {
        'power': 453680
      }
    },
    {
      'time': 1536413684535,
      'values': {
        'power': 460070
      }
    },
    {
      'time': 1536413686538,
      'values': {
        'power': 462630
      }
    },
    {
      'time': 1536413688540,
      'values': {
        'power': 465160
      }
    },
    {
      'time': 1536413690541,
      'values': {
        'power': 465990
      }
    },
    {
      'time': 1536413692543,
      'values': {
        'power': 464420
      }
    },
    {
      'time': 1536413694546,
      'values': {
        'power': 462900
      }
    },
    {
      'time': 1536413696548,
      'values': {
        'power': 466800
      }
    },
    {
      'time': 1536413698550,
      'values': {
        'power': 468540
      }
    },
    {
      'time': 1536413700552,
      'values': {
        'power': 461350
      }
    },
    {
      'time': 1536413702554,
      'values': {
        'power': 459150
      }
    },
    {
      'time': 1536413704556,
      'values': {
        'power': 462470
      }
    },
    {
      'time': 1536413706560,
      'values': {
        'power': 463870
      }
    },
    {
      'time': 1536413708561,
      'values': {
        'power': 465800
      }
    },
    {
      'time': 1536413710561,
      'values': {
        'power': 465140
      }
    },
    {
      'time': 1536413712563,
      'values': {
        'power': 460210
      }
    },
    {
      'time': 1536413714565,
      'values': {
        'power': 457080
      }
    },
    {
      'time': 1536413716567,
      'values': {
        'power': 459410
      }
    },
    {
      'time': 1536413718569,
      'values': {
        'power': 459390
      }
    },
    {
      'time': 1536413720571,
      'values': {
        'power': 451910
      }
    },
    {
      'time': 1536413722573,
      'values': {
        'power': 447520
      }
    },
    {
      'time': 1536413724574,
      'values': {
        'power': 448090
      }
    },
    {
      'time': 1536413726576,
      'values': {
        'power': 449460
      }
    },
    {
      'time': 1536413728579,
      'values': {
        'power': 450500
      }
    },
    {
      'time': 1536413730581,
      'values': {
        'power': 448360
      }
    },
    {
      'time': 1536413732584,
      'values': {
        'power': 443360
      }
    },
    {
      'time': 1536413734585,
      'values': {
        'power': 440120
      }
    },
    {
      'time': 1536413736586,
      'values': {
        'power': 441650
      }
    },
    {
      'time': 1536413738588,
      'values': {
        'power': 448770
      }
    },
    {
      'time': 1536413740591,
      'values': {
        'power': 461380
      }
    },
    {
      'time': 1536413742593,
      'values': {
        'power': 467660
      }
    },
    {
      'time': 1536413744595,
      'values': {
        'power': 462800
      }
    },
    {
      'time': 1536413746597,
      'values': {
        'power': 466850
      }
    },
    {
      'time': 1536413748599,
      'values': {
        'power': 473460
      }
    },
    {
      'time': 1536413750601,
      'values': {
        'power': 463870
      }
    },
    {
      'time': 1536413752603,
      'values': {
        'power': 451550
      }
    },
    {
      'time': 1536413754605,
      'values': {
        'power': 447660
      }
    },
    {
      'time': 1536413756608,
      'values': {
        'power': 446720
      }
    },
    {
      'time': 1536413758608,
      'values': {
        'power': 445650
      }
    },
    {
      'time': 1536413760610,
      'values': {
        'power': 444780
      }
    },
    {
      'time': 1536413762612,
      'values': {
        'power': 445850
      }
    },
    {
      'time': 1536413764614,
      'values': {
        'power': 446240
      }
    },
    {
      'time': 1536413766615,
      'values': {
        'power': 447370
      }
    },
    {
      'time': 1536413768618,
      'values': {
        'power': 460470
      }
    },
    {
      'time': 1536413770620,
      'values': {
        'power': 469800
      }
    },
    {
      'time': 1536413772622,
      'values': {
        'power': 457890
      }
    },
    {
      'time': 1536413774624,
      'values': {
        'power': 448580
      }
    },
    {
      'time': 1536413776626,
      'values': {
        'power': 449780
      }
    },
    {
      'time': 1536413778628,
      'values': {
        'power': 448410
      }
    },
    {
      'time': 1536413780630,
      'values': {
        'power': 443920
      }
    },
    {
      'time': 1536413782632,
      'values': {
        'power': 442080
      }
    },
    {
      'time': 1536413784633,
      'values': {
        'power': 443750
      }
    },
    {
      'time': 1536413786635,
      'values': {
        'power': 447260
      }
    },
    {
      'time': 1536413788641,
      'values': {
        'power': 450520
      }
    },
    {
      'time': 1536413790641,
      'values': {
        'power': 450260
      }
    },
    {
      'time': 1536413792641,
      'values': {
        'power': 447350
      }
    },
    {
      'time': 1536413794644,
      'values': {
        'power': 444410
      }
    },
    {
      'time': 1536413796646,
      'values': {
        'power': 444540
      }
    },
    {
      'time': 1536413798648,
      'values': {
        'power': 443810
      }
    },
    {
      'time': 1536413800650,
      'values': {
        'power': 440680
      }
    },
    {
      'time': 1536413802652,
      'values': {
        'power': 440740
      }
    },
    {
      'time': 1536413804653,
      'values': {
        'power': 442360
      }
    },
    {
      'time': 1536413806655,
      'values': {
        'power': 444770
      }
    },
    {
      'time': 1536413808657,
      'values': {
        'power': 446680
      }
    },
    {
      'time': 1536413810659,
      'values': {
        'power': 445750
      }
    },
    {
      'time': 1536413812660,
      'values': {
        'power': 445360
      }
    },
    {
      'time': 1536413814663,
      'values': {
        'power': 444400
      }
    },
    {
      'time': 1536413816665,
      'values': {
        'power': 442550
      }
    },
    {
      'time': 1536413818666,
      'values': {
        'power': 430820
      }
    },
    {
      'time': 1536413820668,
      'values': {
        'power': 428160
      }
    },
    {
      'time': 1536413822671,
      'values': {
        'power': 495550
      }
    },
    {
      'time': 1536413824672,
      'values': {
        'power': 617220
      }
    },
    {
      'time': 1536413826674,
      'values': {
        'power': 580270
      }
    },
    {
      'time': 1536413828677,
      'values': {
        'power': 483050
      }
    },
    {
      'time': 1536413830679,
      'values': {
        'power': 483880
      }
    },
    {
      'time': 1536413832681,
      'values': {
        'power': 487730
      }
    },
    {
      'time': 1536413834683,
      'values': {
        'power': 488440
      }
    },
    {
      'time': 1536413836684,
      'values': {
        'power': 489640
      }
    },
    {
      'time': 1536413838686,
      'values': {
        'power': 491290
      }
    },
    {
      'time': 1536413840689,
      'values': {
        'power': 490360
      }
    },
    {
      'time': 1536413842691,
      'values': {
        'power': 489740
      }
    },
    {
      'time': 1536413844695,
      'values': {
        'power': 489640
      }
    },
    {
      'time': 1536413846694,
      'values': {
        'power': 490120
      }
    },
    {
      'time': 1536413848697,
      'values': {
        'power': 491790
      }
    },
    {
      'time': 1536413850698,
      'values': {
        'power': 490560
      }
    },
    {
      'time': 1536413852700,
      'values': {
        'power': 486850
      }
    },
    {
      'time': 1536413854702,
      'values': {
        'power': 482560
      }
    },
    {
      'time': 1536413856704,
      'values': {
        'power': 483160
      }
    },
    {
      'time': 1536413858706,
      'values': {
        'power': 486440
      }
    },
    {
      'time': 1536413860709,
      'values': {
        'power': 487070
      }
    },
    {
      'time': 1536413862710,
      'values': {
        'power': 490720
      }
    },
    {
      'time': 1536413864712,
      'values': {
        'power': 493230
      }
    },
    {
      'time': 1536413866714,
      'values': {
        'power': 494410
      }
    },
    {
      'time': 1536413868716,
      'values': {
        'power': 495250
      }
    },
    {
      'time': 1536413870718,
      'values': {
        'power': 496410
      }
    },
    {
      'time': 1536413872719,
      'values': {
        'power': 495180
      }
    },
    {
      'time': 1536413874721,
      'values': {
        'power': 492760
      }
    },
    {
      'time': 1536413876724,
      'values': {
        'power': 492920
      }
    },
    {
      'time': 1536413878726,
      'values': {
        'power': 493700
      }
    },
    {
      'time': 1536413880728,
      'values': {
        'power': 496140
      }
    },
    {
      'time': 1536413882730,
      'values': {
        'power': 497830
      }
    },
    {
      'time': 1536413884732,
      'values': {
        'power': 497790
      }
    },
    {
      'time': 1536413886733,
      'values': {
        'power': 497600
      }
    },
    {
      'time': 1536413888736,
      'values': {
        'power': 497490
      }
    },
    {
      'time': 1536413890738,
      'values': {
        'power': 496200
      }
    },
    {
      'time': 1536413892739,
      'values': {
        'power': 491810
      }
    },
    {
      'time': 1536413894741,
      'values': {
        'power': 485920
      }
    },
    {
      'time': 1536413896744,
      'values': {
        'power': 485780
      }
    },
    {
      'time': 1536413898745,
      'values': {
        'power': 491890
      }
    },
    {
      'time': 1536413900747,
      'values': {
        'power': 496150
      }
    },
    {
      'time': 1536413902749,
      'values': {
        'power': 494850
      }
    },
    {
      'time': 1536413904751,
      'values': {
        'power': 493140
      }
    },
    {
      'time': 1536413906753,
      'values': {
        'power': 492700
      }
    },
    {
      'time': 1536413908755,
      'values': {
        'power': 493480
      }
    },
    {
      'time': 1536413910757,
      'values': {
        'power': 497160
      }
    },
    {
      'time': 1536413912758,
      'values': {
        'power': 497640
      }
    },
    {
      'time': 1536413914760,
      'values': {
        'power': 493420
      }
    },
    {
      'time': 1536413916763,
      'values': {
        'power': 500120
      }
    },
    {
      'time': 1536413918765,
      'values': {
        'power': 517210
      }
    },
    {
      'time': 1536413920767,
      'values': {
        'power': 527030
      }
    },
    {
      'time': 1536413922769,
      'values': {
        'power': 537430
      }
    },
    {
      'time': 1536413924772,
      'values': {
        'power': 548380
      }
    },
    {
      'time': 1536413926772,
      'values': {
        'power': 545790
      }
    },
    {
      'time': 1536413928774,
      'values': {
        'power': 542800
      }
    },
    {
      'time': 1536413930777,
      'values': {
        'power': 541190
      }
    },
    {
      'time': 1536413932779,
      'values': {
        'power': 531290
      }
    },
    {
      'time': 1536413934781,
      'values': {
        'power': 515330
      }
    },
    {
      'time': 1536413936783,
      'values': {
        'power': 508690
      }
    },
    {
      'time': 1536413938784,
      'values': {
        'power': 510810
      }
    },
    {
      'time': 1536413940786,
      'values': {
        'power': 510950
      }
    },
    {
      'time': 1536413942789,
      'values': {
        'power': 513060
      }
    },
    {
      'time': 1536413944790,
      'values': {
        'power': 525940
      }
    },
    {
      'time': 1536413946792,
      'values': {
        'power': 538900
      }
    },
    {
      'time': 1536413948794,
      'values': {
        'power': 542530
      }
    },
    {
      'time': 1536413950796,
      'values': {
        'power': 543600
      }
    },
    {
      'time': 1536413952798,
      'values': {
        'power': 542730
      }
    },
    {
      'time': 1536413954799,
      'values': {
        'power': 541150
      }
    },
    {
      'time': 1536413956802,
      'values': {
        'power': 540110
      }
    },
    {
      'time': 1536413958805,
      'values': {
        'power': 539790
      }
    },
    {
      'time': 1536413960806,
      'values': {
        'power': 539830
      }
    },
    {
      'time': 1536413962808,
      'values': {
        'power': 536000
      }
    },
    {
      'time': 1536413964809,
      'values': {
        'power': 531530
      }
    },
    {
      'time': 1536413966811,
      'values': {
        'power': 529270
      }
    },
    {
      'time': 1536413968814,
      'values': {
        'power': 533560
      }
    },
    {
      'time': 1536413970816,
      'values': {
        'power': 540820
      }
    },
    {
      'time': 1536413972818,
      'values': {
        'power': 541730
      }
    },
    {
      'time': 1536413974820,
      'values': {
        'power': 541050
      }
    },
    {
      'time': 1536413976822,
      'values': {
        'power': 541670
      }
    },
    {
      'time': 1536413978824,
      'values': {
        'power': 543050
      }
    },
    {
      'time': 1536413980827,
      'values': {
        'power': 542630
      }
    },
    {
      'time': 1536413982827,
      'values': {
        'power': 540680
      }
    },
    {
      'time': 1536413984830,
      'values': {
        'power': 540500
      }
    },
    {
      'time': 1536413986832,
      'values': {
        'power': 541590
      }
    },
    {
      'time': 1536413988836,
      'values': {
        'power': 544780
      }
    },
    {
      'time': 1536413990836,
      'values': {
        'power': 548550
      }
    },
    {
      'time': 1536413992838,
      'values': {
        'power': 548630
      }
    },
    {
      'time': 1536413994839,
      'values': {
        'power': 547400
      }
    },
    {
      'time': 1536413996841,
      'values': {
        'power': 546540
      }
    },
    {
      'time': 1536413998843,
      'values': {
        'power': 544820
      }
    },
    {
      'time': 1536414000845,
      'values': {
        'power': 543090
      }
    },
    {
      'time': 1536414002847,
      'values': {
        'power': 544070
      }
    },
    {
      'time': 1536414004849,
      'values': {
        'power': 546560
      }
    },
    {
      'time': 1536414006851,
      'values': {
        'power': 548150
      }
    },
    {
      'time': 1536414008852,
      'values': {
        'power': 548830
      }
    },
    {
      'time': 1536414010854,
      'values': {
        'power': 547720
      }
    },
    {
      'time': 1536414012857,
      'values': {
        'power': 543830
      }
    },
    {
      'time': 1536414014858,
      'values': {
        'power': 539900
      }
    },
    {
      'time': 1536414016860,
      'values': {
        'power': 540060
      }
    },
    {
      'time': 1536414018863,
      'values': {
        'power': 546100
      }
    },
    {
      'time': 1536414020865,
      'values': {
        'power': 550420
      }
    },
    {
      'time': 1536414022867,
      'values': {
        'power': 549330
      }
    },
    {
      'time': 1536414024869,
      'values': {
        'power': 549130
      }
    },
    {
      'time': 1536414026870,
      'values': {
        'power': 552910
      }
    },
    {
      'time': 1536414028872,
      'values': {
        'power': 556260
      }
    },
    {
      'time': 1536414030875,
      'values': {
        'power': 556150
      }
    },
    {
      'time': 1536414032877,
      'values': {
        'power': 553720
      }
    },
    {
      'time': 1536414034879,
      'values': {
        'power': 551370
      }
    },
    {
      'time': 1536414036881,
      'values': {
        'power': 544700
      }
    },
    {
      'time': 1536414038883,
      'values': {
        'power': 534980
      }
    },
    {
      'time': 1536414040884,
      'values': {
        'power': 531720
      }
    },
    {
      'time': 1536414042886,
      'values': {
        'power': 533500
      }
    },
    {
      'time': 1536414044888,
      'values': {
        'power': 534900
      }
    },
    {
      'time': 1536414046890,
      'values': {
        'power': 535200
      }
    },
    {
      'time': 1536414048892,
      'values': {
        'power': 535430
      }
    },
    {
      'time': 1536414050894,
      'values': {
        'power': 535780
      }
    },
    {
      'time': 1536414052896,
      'values': {
        'power': 532970
      }
    },
    {
      'time': 1536414054898,
      'values': {
        'power': 529730
      }
    },
    {
      'time': 1536414056900,
      'values': {
        'power': 530880
      }
    },
    {
      'time': 1536414058902,
      'values': {
        'power': 534450
      }
    },
    {
      'time': 1536414060904,
      'values': {
        'power': 535870
      }
    },
    {
      'time': 1536414062905,
      'values': {
        'power': 533380
      }
    },
    {
      'time': 1536414064908,
      'values': {
        'power': 534160
      }
    },
    {
      'time': 1536414066909,
      'values': {
        'power': 534690
      }
    },
    {
      'time': 1536414068911,
      'values': {
        'power': 533920
      }
    },
    {
      'time': 1536414070914,
      'values': {
        'power': 529860
      }
    },
    {
      'time': 1536414072916,
      'values': {
        'power': 529450
      }
    },
    {
      'time': 1536414074918,
      'values': {
        'power': 541270
      }
    },
    {
      'time': 1536414076920,
      'values': {
        'power': 552220
      }
    },
    {
      'time': 1536414078922,
      'values': {
        'power': 552110
      }
    },
    {
      'time': 1536414080924,
      'values': {
        'power': 551570
      }
    },
    {
      'time': 1536414082926,
      'values': {
        'power': 551070
      }
    },
    {
      'time': 1536414084928,
      'values': {
        'power': 550050
      }
    },
    {
      'time': 1536414086929,
      'values': {
        'power': 662940
      }
    },
    {
      'time': 1536414088931,
      'values': {
        'power': 742700
      }
    },
    {
      'time': 1536414090934,
      'values': {
        'power': 653400
      }
    },
    {
      'time': 1536414092936,
      'values': {
        'power': 596710
      }
    },
    {
      'time': 1536414094936,
      'values': {
        'power': 595560
      }
    },
    {
      'time': 1536414096938,
      'values': {
        'power': 595480
      }
    },
    {
      'time': 1536414098941,
      'values': {
        'power': 595800
      }
    },
    {
      'time': 1536414100943,
      'values': {
        'power': 595780
      }
    },
    {
      'time': 1536414102945,
      'values': {
        'power': 595520
      }
    },
    {
      'time': 1536414104947,
      'values': {
        'power': 597370
      }
    },
    {
      'time': 1536414106949,
      'values': {
        'power': 599320
      }
    },
    {
      'time': 1536414108951,
      'values': {
        'power': 599880
      }
    },
    {
      'time': 1536414110953,
      'values': {
        'power': 599250
      }
    },
    {
      'time': 1536414112955,
      'values': {
        'power': 598610
      }
    },
    {
      'time': 1536414114958,
      'values': {
        'power': 599290
      }
    },
    {
      'time': 1536414116962,
      'values': {
        'power': 602650
      }
    },
    {
      'time': 1536414118960,
      'values': {
        'power': 605570
      }
    },
    {
      'time': 1536414120962,
      'values': {
        'power': 605060
      }
    },
    {
      'time': 1536414122965,
      'values': {
        'power': 603390
      }
    },
    {
      'time': 1536414124967,
      'values': {
        'power': 598840
      }
    },
    {
      'time': 1536414126970,
      'values': {
        'power': 594880
      }
    },
    {
      'time': 1536414128970,
      'values': {
        'power': 595330
      }
    },
    {
      'time': 1536414130973,
      'values': {
        'power': 596740
      }
    },
    {
      'time': 1536414132975,
      'values': {
        'power': 596230
      }
    },
    {
      'time': 1536414134976,
      'values': {
        'power': 596250
      }
    },
    {
      'time': 1536414136978,
      'values': {
        'power': 598570
      }
    },
    {
      'time': 1536414138980,
      'values': {
        'power': 601220
      }
    },
    {
      'time': 1536414140982,
      'values': {
        'power': 596810
      }
    },
    {
      'time': 1536414142986,
      'values': {
        'power': 587230
      }
    },
    {
      'time': 1536414144985,
      'values': {
        'power': 584010
      }
    },
    {
      'time': 1536414146987,
      'values': {
        'power': 584530
      }
    },
    {
      'time': 1536414148990,
      'values': {
        'power': 581910
      }
    },
    {
      'time': 1536414150992,
      'values': {
        'power': 578100
      }
    },
    {
      'time': 1536414152994,
      'values': {
        'power': 577720
      }
    },
    {
      'time': 1536414154996,
      'values': {
        'power': 580010
      }
    },
    {
      'time': 1536414156998,
      'values': {
        'power': 582090
      }
    },
    {
      'time': 1536414159000,
      'values': {
        'power': 583090
      }
    },
    {
      'time': 1536414161002,
      'values': {
        'power': 581380
      }
    },
    {
      'time': 1536414163003,
      'values': {
        'power': 580240
      }
    },
    {
      'time': 1536414165006,
      'values': {
        'power': 580060
      }
    },
    {
      'time': 1536414167008,
      'values': {
        'power': 578770
      }
    },
    {
      'time': 1536414169010,
      'values': {
        'power': 573410
      }
    },
    {
      'time': 1536414171012,
      'values': {
        'power': 570620
      }
    },
    {
      'time': 1536414173013,
      'values': {
        'power': 573600
      }
    },
    {
      'time': 1536414175015,
      'values': {
        'power': 574410
      }
    },
    {
      'time': 1536414177018,
      'values': {
        'power': 575290
      }
    },
    {
      'time': 1536414179020,
      'values': {
        'power': 576080
      }
    },
    {
      'time': 1536414181021,
      'values': {
        'power': 575320
      }
    },
    {
      'time': 1536414183023,
      'values': {
        'power': 574330
      }
    },
    {
      'time': 1536414185025,
      'values': {
        'power': 574950
      }
    },
    {
      'time': 1536414187027,
      'values': {
        'power': 577000
      }
    },
    {
      'time': 1536414189029,
      'values': {
        'power': 580210
      }
    },
    {
      'time': 1536414191031,
      'values': {
        'power': 580590
      }
    },
    {
      'time': 1536414193034,
      'values': {
        'power': 577230
      }
    },
    {
      'time': 1536414195034,
      'values': {
        'power': 574160
      }
    },
    {
      'time': 1536414197037,
      'values': {
        'power': 571240
      }
    },
    {
      'time': 1536414199038,
      'values': {
        'power': 571880
      }
    },
    {
      'time': 1536414201040,
      'values': {
        'power': 573700
      }
    },
    {
      'time': 1536414203043,
      'values': {
        'power': 574850
      }
    },
    {
      'time': 1536414205045,
      'values': {
        'power': 583990
      }
    },
    {
      'time': 1536414207047,
      'values': {
        'power': 621880
      }
    },
    {
      'time': 1536414209049,
      'values': {
        'power': 667330
      }
    },
    {
      'time': 1536414211051,
      'values': {
        'power': 688560
      }
    },
    {
      'time': 1536414213053,
      'values': {
        'power': 695520
      }
    },
    {
      'time': 1536414215055,
      'values': {
        'power': 697930
      }
    },
    {
      'time': 1536414217057,
      'values': {
        'power': 699930
      }
    },
    {
      'time': 1536414219059,
      'values': {
        'power': 705910
      }
    },
    {
      'time': 1536414221061,
      'values': {
        'power': 712960
      }
    },
    {
      'time': 1536414223062,
      'values': {
        'power': 717570
      }
    },
    {
      'time': 1536414225066,
      'values': {
        'power': 716790
      }
    },
    {
      'time': 1536414227067,
      'values': {
        'power': 714170
      }
    },
    {
      'time': 1536414229068,
      'values': {
        'power': 712290
      }
    },
    {
      'time': 1536414231070,
      'values': {
        'power': 709260
      }
    },
    {
      'time': 1536414233072,
      'values': {
        'power': 707540
      }
    },
    {
      'time': 1536414235074,
      'values': {
        'power': 705150
      }
    },
    {
      'time': 1536414237076,
      'values': {
        'power': 703190
      }
    },
    {
      'time': 1536414239078,
      'values': {
        'power': 703740
      }
    },
    {
      'time': 1536414241080,
      'values': {
        'power': 706420
      }
    },
    {
      'time': 1536414243082,
      'values': {
        'power': 709620
      }
    },
    {
      'time': 1536414245084,
      'values': {
        'power': 709490
      }
    },
    {
      'time': 1536414247085,
      'values': {
        'power': 705980
      }
    },
    {
      'time': 1536414249087,
      'values': {
        'power': 683230
      }
    },
    {
      'time': 1536414251090,
      'values': {
        'power': 666250
      }
    },
    {
      'time': 1536414253094,
      'values': {
        'power': 658410
      }
    },
    {
      'time': 1536414255093,
      'values': {
        'power': 653520
      }
    },
    {
      'time': 1536414257096,
      'values': {
        'power': 653780
      }
    },
    {
      'time': 1536414259098,
      'values': {
        'power': 657060
      }
    },
    {
      'time': 1536414261101,
      'values': {
        'power': 658250
      }
    },
    {
      'time': 1536414263101,
      'values': {
        'power': 657940
      }
    },
    {
      'time': 1536414265104,
      'values': {
        'power': 659240
      }
    },
    {
      'time': 1536414267106,
      'values': {
        'power': 660090
      }
    },
    {
      'time': 1536414269108,
      'values': {
        'power': 660450
      }
    },
    {
      'time': 1536414271109,
      'values': {
        'power': 659190
      }
    },
    {
      'time': 1536414273111,
      'values': {
        'power': 654460
      }
    },
    {
      'time': 1536414275113,
      'values': {
        'power': 651850
      }
    },
    {
      'time': 1536414277115,
      'values': {
        'power': 656730
      }
    },
    {
      'time': 1536414279117,
      'values': {
        'power': 659810
      }
    },
    {
      'time': 1536414281119,
      'values': {
        'power': 657740
      }
    },
    {
      'time': 1536414283121,
      'values': {
        'power': 655920
      }
    },
    {
      'time': 1536414285123,
      'values': {
        'power': 656260
      }
    },
    {
      'time': 1536414287125,
      'values': {
        'power': 657520
      }
    },
    {
      'time': 1536414289127,
      'values': {
        'power': 657370
      }
    },
    {
      'time': 1536414291129,
      'values': {
        'power': 655540
      }
    },
    {
      'time': 1536414293131,
      'values': {
        'power': 655160
      }
    },
    {
      'time': 1536414295133,
      'values': {
        'power': 656880
      }
    },
    {
      'time': 1536414297134,
      'values': {
        'power': 659520
      }
    },
    {
      'time': 1536414299136,
      'values': {
        'power': 659800
      }
    },
    {
      'time': 1536414301139,
      'values': {
        'power': 655610
      }
    },
    {
      'time': 1536414303141,
      'values': {
        'power': 653270
      }
    },
    {
      'time': 1536414305143,
      'values': {
        'power': 655550
      }
    },
    {
      'time': 1536414307145,
      'values': {
        'power': 658340
      }
    },
    {
      'time': 1536414309146,
      'values': {
        'power': 659400
      }
    },
    {
      'time': 1536414311148,
      'values': {
        'power': 658110
      }
    },
    {
      'time': 1536414313151,
      'values': {
        'power': 655080
      }
    },
    {
      'time': 1536414315153,
      'values': {
        'power': 654160
      }
    },
    {
      'time': 1536414317155,
      'values': {
        'power': 656320
      }
    },
    {
      'time': 1536414319157,
      'values': {
        'power': 660890
      }
    },
    {
      'time': 1536414321159,
      'values': {
        'power': 662750
      }
    },
    {
      'time': 1536414323160,
      'values': {
        'power': 659510
      }
    },
    {
      'time': 1536414325162,
      'values': {
        'power': 658130
      }
    },
    {
      'time': 1536414327164,
      'values': {
        'power': 659670
      }
    },
    {
      'time': 1536414329166,
      'values': {
        'power': 660880
      }
    },
    {
      'time': 1536414331168,
      'values': {
        'power': 661010
      }
    },
    {
      'time': 1536414333170,
      'values': {
        'power': 661280
      }
    },
    {
      'time': 1536414335171,
      'values': {
        'power': 660730
      }
    },
    {
      'time': 1536414337173,
      'values': {
        'power': 660370
      }
    },
    {
      'time': 1536414339176,
      'values': {
        'power': 660850
      }
    },
    {
      'time': 1536414341178,
      'values': {
        'power': 659160
      }
    },
    {
      'time': 1536414343180,
      'values': {
        'power': 654710
      }
    },
    {
      'time': 1536414345182,
      'values': {
        'power': 652400
      }
    },
    {
      'time': 1536414347184,
      'values': {
        'power': 637300
      }
    },
    {
      'time': 1536414349185,
      'values': {
        'power': 619770
      }
    },
    {
      'time': 1536414351187,
      'values': {
        'power': 617520
      }
    },
    {
      'time': 1536414353190,
      'values': {
        'power': 618100
      }
    },
    {
      'time': 1536414355192,
      'values': {
        'power': 619480
      }
    },
    {
      'time': 1536414357194,
      'values': {
        'power': 620430
      }
    },
    {
      'time': 1536414359196,
      'values': {
        'power': 618610
      }
    },
    {
      'time': 1536414361199,
      'values': {
        'power': 613130
      }
    },
    {
      'time': 1536414363199,
      'values': {
        'power': 609950
      }
    },
    {
      'time': 1536414365201,
      'values': {
        'power': 610490
      }
    },
    {
      'time': 1536414367204,
      'values': {
        'power': 612330
      }
    },
    {
      'time': 1536414369206,
      'values': {
        'power': 615830
      }
    },
    {
      'time': 1536414371207,
      'values': {
        'power': 617310
      }
    },
    {
      'time': 1536414373209,
      'values': {
        'power': 617700
      }
    },
    {
      'time': 1536414375211,
      'values': {
        'power': 620780
      }
    },
    {
      'time': 1536414377213,
      'values': {
        'power': 621640
      }
    },
    {
      'time': 1536414379215,
      'values': {
        'power': 619530
      }
    },
    {
      'time': 1536414381217,
      'values': {
        'power': 616940
      }
    },
    {
      'time': 1536414383219,
      'values': {
        'power': 613740
      }
    },
    {
      'time': 1536414385221,
      'values': {
        'power': 609860
      }
    },
    {
      'time': 1536414387223,
      'values': {
        'power': 608020
      }
    },
    {
      'time': 1536414389226,
      'values': {
        'power': 605540
      }
    },
    {
      'time': 1536414391226,
      'values': {
        'power': 603520
      }
    },
    {
      'time': 1536414393229,
      'values': {
        'power': 604910
      }
    },
    {
      'time': 1536414395231,
      'values': {
        'power': 605050
      }
    },
    {
      'time': 1536414397233,
      'values': {
        'power': 605260
      }
    },
    {
      'time': 1536414399235,
      'values': {
        'power': 606540
      }
    },
    {
      'time': 1536414401236,
      'values': {
        'power': 606370
      }
    },
    {
      'time': 1536414403238,
      'values': {
        'power': 603140
      }
    },
    {
      'time': 1536414405241,
      'values': {
        'power': 601670
      }
    },
    {
      'time': 1536414407243,
      'values': {
        'power': 603410
      }
    },
    {
      'time': 1536414409245,
      'values': {
        'power': 605440
      }
    },
    {
      'time': 1536414411247,
      'values': {
        'power': 607600
      }
    },
    {
      'time': 1536414413249,
      'values': {
        'power': 608630
      }
    },
    {
      'time': 1536414415251,
      'values': {
        'power': 609940
      }
    },
    {
      'time': 1536414417252,
      'values': {
        'power': 607880
      }
    },
    {
      'time': 1536414419254,
      'values': {
        'power': 590570
      }
    },
    {
      'time': 1536414421256,
      'values': {
        'power': 573450
      }
    },
    {
      'time': 1536414423258,
      'values': {
        'power': 566830
      }
    },
    {
      'time': 1536414425262,
      'values': {
        'power': 562490
      }
    },
    {
      'time': 1536414427262,
      'values': {
        'power': 561840
      }
    },
    {
      'time': 1536414429264,
      'values': {
        'power': 562460
      }
    },
    {
      'time': 1536414431265,
      'values': {
        'power': 563310
      }
    },
    {
      'time': 1536414433268,
      'values': {
        'power': 563820
      }
    },
    {
      'time': 1536414435270,
      'values': {
        'power': 566110
      }
    },
    {
      'time': 1536414437272,
      'values': {
        'power': 567580
      }
    },
    {
      'time': 1536414439274,
      'values': {
        'power': 566070
      }
    },
    {
      'time': 1536414441276,
      'values': {
        'power': 567880
      }
    },
    {
      'time': 1536414443278,
      'values': {
        'power': 571330
      }
    },
    {
      'time': 1536414445279,
      'values': {
        'power': 573000
      }
    },
    {
      'time': 1536414447282,
      'values': {
        'power': 574350
      }
    },
    {
      'time': 1536414449284,
      'values': {
        'power': 573330
      }
    },
    {
      'time': 1536414451285,
      'values': {
        'power': 568510
      }
    },
    {
      'time': 1536414453287,
      'values': {
        'power': 564350
      }
    },
    {
      'time': 1536414455290,
      'values': {
        'power': 563910
      }
    },
    {
      'time': 1536414457292,
      'values': {
        'power': 565870
      }
    },
    {
      'time': 1536414459294,
      'values': {
        'power': 567980
      }
    },
    {
      'time': 1536414461296,
      'values': {
        'power': 568490
      }
    },
    {
      'time': 1536414463297,
      'values': {
        'power': 570000
      }
    },
    {
      'time': 1536414465299,
      'values': {
        'power': 573140
      }
    },
    {
      'time': 1536414467301,
      'values': {
        'power': 575350
      }
    },
    {
      'time': 1536414469303,
      'values': {
        'power': 574140
      }
    },
    {
      'time': 1536414471305,
      'values': {
        'power': 569060
      }
    },
    {
      'time': 1536414473306,
      'values': {
        'power': 563090
      }
    },
    {
      'time': 1536414475309,
      'values': {
        'power': 562770
      }
    },
    {
      'time': 1536414477311,
      'values': {
        'power': 567420
      }
    },
    {
      'time': 1536414479312,
      'values': {
        'power': 569780
      }
    },
    {
      'time': 1536414481315,
      'values': {
        'power': 571850
      }
    },
    {
      'time': 1536414483317,
      'values': {
        'power': 582150
      }
    },
    {
      'time': 1536414485319,
      'values': {
        'power': 588520
      }
    },
    {
      'time': 1536414487321,
      'values': {
        'power': 587190
      }
    },
    {
      'time': 1536414489323,
      'values': {
        'power': 585510
      }
    },
    {
      'time': 1536414491325,
      'values': {
        'power': 579910
      }
    },
    {
      'time': 1536414493327,
      'values': {
        'power': 573910
      }
    },
    {
      'time': 1536414495329,
      'values': {
        'power': 574370
      }
    },
    {
      'time': 1536414497331,
      'values': {
        'power': 579090
      }
    },
    {
      'time': 1536414499332,
      'values': {
        'power': 583030
      }
    },
    {
      'time': 1536414501335,
      'values': {
        'power': 584300
      }
    },
    {
      'time': 1536414503336,
      'values': {
        'power': 582260
      }
    },
    {
      'time': 1536414505340,
      'values': {
        'power': 578070
      }
    },
    {
      'time': 1536414507341,
      'values': {
        'power': 575930
      }
    },
    {
      'time': 1536414509343,
      'values': {
        'power': 574800
      }
    },
    {
      'time': 1536414511344,
      'values': {
        'power': 576000
      }
    },
    {
      'time': 1536414513346,
      'values': {
        'power': 576390
      }
    },
    {
      'time': 1536414515348,
      'values': {
        'power': 576100
      }
    },
    {
      'time': 1536414517350,
      'values': {
        'power': 576980
      }
    },
    {
      'time': 1536414519352,
      'values': {
        'power': 576890
      }
    },
    {
      'time': 1536414521354,
      'values': {
        'power': 576650
      }
    },
    {
      'time': 1536414523356,
      'values': {
        'power': 577870
      }
    },
    {
      'time': 1536414525357,
      'values': {
        'power': 582340
      }
    },
    {
      'time': 1536414527361,
      'values': {
        'power': 583540
      }
    },
    {
      'time': 1536414529362,
      'values': {
        'power': 577110
      }
    },
    {
      'time': 1536414531363,
      'values': {
        'power': 570120
      }
    },
    {
      'time': 1536414533365,
      'values': {
        'power': 565880
      }
    },
    {
      'time': 1536414535368,
      'values': {
        'power': 567420
      }
    },
    {
      'time': 1536414537370,
      'values': {
        'power': 570250
      }
    },
    {
      'time': 1536414539372,
      'values': {
        'power': 572000
      }
    },
    {
      'time': 1536414541374,
      'values': {
        'power': 573030
      }
    },
    {
      'time': 1536414543376,
      'values': {
        'power': 571850
      }
    },
    {
      'time': 1536414545378,
      'values': {
        'power': 572330
      }
    },
    {
      'time': 1536414547380,
      'values': {
        'power': 572500
      }
    },
    {
      'time': 1536414549382,
      'values': {
        'power': 570500
      }
    },
    {
      'time': 1536414551385,
      'values': {
        'power': 568640
      }
    },
    {
      'time': 1536414553386,
      'values': {
        'power': 568480
      }
    },
    {
      'time': 1536414555387,
      'values': {
        'power': 570250
      }
    },
    {
      'time': 1536414557389,
      'values': {
        'power': 571540
      }
    },
    {
      'time': 1536414559391,
      'values': {
        'power': 571150
      }
    },
    {
      'time': 1536414561394,
      'values': {
        'power': 569510
      }
    },
    {
      'time': 1536414563396,
      'values': {
        'power': 569760
      }
    },
    {
      'time': 1536414565397,
      'values': {
        'power': 573320
      }
    },
    {
      'time': 1536414567399,
      'values': {
        'power': 575400
      }
    },
    {
      'time': 1536414569401,
      'values': {
        'power': 574250
      }
    },
    {
      'time': 1536414571403,
      'values': {
        'power': 573750
      }
    },
    {
      'time': 1536414573406,
      'values': {
        'power': 573870
      }
    },
    {
      'time': 1536414575407,
      'values': {
        'power': 574260
      }
    },
    {
      'time': 1536414577411,
      'values': {
        'power': 574630
      }
    },
    {
      'time': 1536414579413,
      'values': {
        'power': 575800
      }
    },
    {
      'time': 1536414581412,
      'values': {
        'power': 573570
      }
    },
    {
      'time': 1536414583414,
      'values': {
        'power': 568130
      }
    },
    {
      'time': 1536414585417,
      'values': {
        'power': 568900
      }
    },
    {
      'time': 1536414587419,
      'values': {
        'power': 577220
      }
    },
    {
      'time': 1536414589421,
      'values': {
        'power': 582510
      }
    },
    {
      'time': 1536414591423,
      'values': {
        'power': 581960
      }
    },
    {
      'time': 1536414593425,
      'values': {
        'power': 581540
      }
    },
    {
      'time': 1536414595427,
      'values': {
        'power': 584450
      }
    },
    {
      'time': 1536414597429,
      'values': {
        'power': 580680
      }
    },
    {
      'time': 1536414599430,
      'values': {
        'power': 571930
      }
    },
    {
      'time': 1536414601433,
      'values': {
        'power': 565220
      }
    },
    {
      'time': 1536414603435,
      'values': {
        'power': 564820
      }
    },
    {
      'time': 1536414605436,
      'values': {
        'power': 567590
      }
    },
    {
      'time': 1536414607438,
      'values': {
        'power': 566380
      }
    },
    {
      'time': 1536414609440,
      'values': {
        'power': 565060
      }
    },
    {
      'time': 1536414611442,
      'values': {
        'power': 564310
      }
    },
    {
      'time': 1536414613444,
      'values': {
        'power': 564060
      }
    },
    {
      'time': 1536414615446,
      'values': {
        'power': 564680
      }
    },
    {
      'time': 1536414617448,
      'values': {
        'power': 565660
      }
    },
    {
      'time': 1536414619450,
      'values': {
        'power': 568000
      }
    },
    {
      'time': 1536414621452,
      'values': {
        'power': 569290
      }
    },
    {
      'time': 1536414623454,
      'values': {
        'power': 566520
      }
    },
    {
      'time': 1536414625456,
      'values': {
        'power': 565440
      }
    },
    {
      'time': 1536414627458,
      'values': {
        'power': 565430
      }
    },
    {
      'time': 1536414629461,
      'values': {
        'power': 563040
      }
    },
    {
      'time': 1536414631462,
      'values': {
        'power': 563380
      }
    },
    {
      'time': 1536414633464,
      'values': {
        'power': 565110
      }
    },
    {
      'time': 1536414635466,
      'values': {
        'power': 565500
      }
    },
    {
      'time': 1536414637467,
      'values': {
        'power': 565240
      }
    },
    {
      'time': 1536414639470,
      'values': {
        'power': 564080
      }
    },
    {
      'time': 1536414641472,
      'values': {
        'power': 560540
      }
    },
    {
      'time': 1536414643474,
      'values': {
        'power': 554240
      }
    },
    {
      'time': 1536414645476,
      'values': {
        'power': 547530
      }
    },
    {
      'time': 1536414647478,
      'values': {
        'power': 545360
      }
    },
    {
      'time': 1536414649480,
      'values': {
        'power': 549530
      }
    },
    {
      'time': 1536414651482,
      'values': {
        'power': 554460
      }
    },
    {
      'time': 1536414653483,
      'values': {
        'power': 554320
      }
    },
    {
      'time': 1536414655485,
      'values': {
        'power': 552770
      }
    },
    {
      'time': 1536414657487,
      'values': {
        'power': 551220
      }
    },
    {
      'time': 1536414659489,
      'values': {
        'power': 549140
      }
    },
    {
      'time': 1536414661493,
      'values': {
        'power': 547910
      }
    },
    {
      'time': 1536414663493,
      'values': {
        'power': 548710
      }
    },
    {
      'time': 1536414665495,
      'values': {
        'power': 550540
      }
    },
    {
      'time': 1536414667496,
      'values': {
        'power': 553490
      }
    },
    {
      'time': 1536414669499,
      'values': {
        'power': 554830
      }
    },
    {
      'time': 1536414671501,
      'values': {
        'power': 553960
      }
    },
    {
      'time': 1536414673503,
      'values': {
        'power': 553900
      }
    },
    {
      'time': 1536414675505,
      'values': {
        'power': 556040
      }
    },
    {
      'time': 1536414677507,
      'values': {
        'power': 556350
      }
    },
    {
      'time': 1536414679509,
      'values': {
        'power': 551750
      }
    },
    {
      'time': 1536414681511,
      'values': {
        'power': 548610
      }
    },
    {
      'time': 1536414683512,
      'values': {
        'power': 550090
      }
    },
    {
      'time': 1536414685514,
      'values': {
        'power': 554300
      }
    },
    {
      'time': 1536414687517,
      'values': {
        'power': 558410
      }
    },
    {
      'time': 1536414689518,
      'values': {
        'power': 557290
      }
    },
    {
      'time': 1536414691520,
      'values': {
        'power': 551440
      }
    },
    {
      'time': 1536414693523,
      'values': {
        'power': 550340
      }
    },
    {
      'time': 1536414695525,
      'values': {
        'power': 553580
      }
    },
    {
      'time': 1536414697527,
      'values': {
        'power': 552270
      }
    },
    {
      'time': 1536414699528,
      'values': {
        'power': 548680
      }
    },
    {
      'time': 1536414701530,
      'values': {
        'power': 546070
      }
    },
    {
      'time': 1536414703532,
      'values': {
        'power': 548170
      }
    },
    {
      'time': 1536414705534,
      'values': {
        'power': 552860
      }
    },
    {
      'time': 1536414707537,
      'values': {
        'power': 555160
      }
    },
    {
      'time': 1536414709538,
      'values': {
        'power': 553460
      }
    },
    {
      'time': 1536414711540,
      'values': {
        'power': 552440
      }
    },
    {
      'time': 1536414713542,
      'values': {
        'power': 553280
      }
    },
    {
      'time': 1536414715544,
      'values': {
        'power': 554190
      }
    },
    {
      'time': 1536414717546,
      'values': {
        'power': 553960
      }
    },
    {
      'time': 1536414719547,
      'values': {
        'power': 550580
      }
    },
    {
      'time': 1536414721550,
      'values': {
        'power': 548370
      }
    },
    {
      'time': 1536414723552,
      'values': {
        'power': 550810
      }
    },
    {
      'time': 1536414725554,
      'values': {
        'power': 555730
      }
    },
    {
      'time': 1536414727556,
      'values': {
        'power': 558720
      }
    },
    {
      'time': 1536414729558,
      'values': {
        'power': 557940
      }
    },
    {
      'time': 1536414731562,
      'values': {
        'power': 557090
      }
    },
    {
      'time': 1536414733561,
      'values': {
        'power': 556310
      }
    },
    {
      'time': 1536414735563,
      'values': {
        'power': 555780
      }
    },
    {
      'time': 1536414737566,
      'values': {
        'power': 555660
      }
    },
    {
      'time': 1536414739568,
      'values': {
        'power': 552440
      }
    },
    {
      'time': 1536414741570,
      'values': {
        'power': 548380
      }
    },
    {
      'time': 1536414743571,
      'values': {
        'power': 547780
      }
    },
    {
      'time': 1536414745573,
      'values': {
        'power': 552420
      }
    },
    {
      'time': 1536414747575,
      'values': {
        'power': 557140
      }
    },
    {
      'time': 1536414749577,
      'values': {
        'power': 557080
      }
    },
    {
      'time': 1536414751579,
      'values': {
        'power': 552090
      }
    },
    {
      'time': 1536414753581,
      'values': {
        'power': 544680
      }
    },
    {
      'time': 1536414755583,
      'values': {
        'power': 544780
      }
    },
    {
      'time': 1536414757585,
      'values': {
        'power': 549370
      }
    },
    {
      'time': 1536414759587,
      'values': {
        'power': 550460
      }
    },
    {
      'time': 1536414761588,
      'values': {
        'power': 548120
      }
    },
    {
      'time': 1536414763591,
      'values': {
        'power': 549850
      }
    },
    {
      'time': 1536414765592,
      'values': {
        'power': 554110
      }
    },
    {
      'time': 1536414767595,
      'values': {
        'power': 553900
      }
    },
    {
      'time': 1536414769597,
      'values': {
        'power': 551030
      }
    },
    {
      'time': 1536414771598,
      'values': {
        'power': 549430
      }
    },
    {
      'time': 1536414773600,
      'values': {
        'power': 549690
      }
    },
    {
      'time': 1536414775603,
      'values': {
        'power': 551220
      }
    },
    {
      'time': 1536414777605,
      'values': {
        'power': 553600
      }
    },
    {
      'time': 1536414779607,
      'values': {
        'power': 553710
      }
    },
    {
      'time': 1536414781609,
      'values': {
        'power': 552880
      }
    },
    {
      'time': 1536414783611,
      'values': {
        'power': 553370
      }
    },
    {
      'time': 1536414785612,
      'values': {
        'power': 553100
      }
    },
    {
      'time': 1536414787614,
      'values': {
        'power': 549890
      }
    },
    {
      'time': 1536414789617,
      'values': {
        'power': 545860
      }
    },
    {
      'time': 1536414791619,
      'values': {
        'power': 545010
      }
    },
    {
      'time': 1536414793621,
      'values': {
        'power': 547130
      }
    },
    {
      'time': 1536414795623,
      'values': {
        'power': 549830
      }
    },
    {
      'time': 1536414797624,
      'values': {
        'power': 552630
      }
    },
    {
      'time': 1536414799626,
      'values': {
        'power': 552990
      }
    },
    {
      'time': 1536414801628,
      'values': {
        'power': 549900
      }
    },
    {
      'time': 1536414803630,
      'values': {
        'power': 549560
      }
    },
    {
      'time': 1536414805632,
      'values': {
        'power': 550630
      }
    },
    {
      'time': 1536414807634,
      'values': {
        'power': 550400
      }
    },
    {
      'time': 1536414809636,
      'values': {
        'power': 546340
      }
    },
    {
      'time': 1536414811637,
      'values': {
        'power': 545960
      }
    },
    {
      'time': 1536414813639,
      'values': {
        'power': 548330
      }
    },
    {
      'time': 1536414815642,
      'values': {
        'power': 552070
      }
    },
    {
      'time': 1536414817644,
      'values': {
        'power': 556970
      }
    },
    {
      'time': 1536414819646,
      'values': {
        'power': 555220
      }
    },
    {
      'time': 1536414821648,
      'values': {
        'power': 552380
      }
    },
    {
      'time': 1536414823650,
      'values': {
        'power': 552390
      }
    },
    {
      'time': 1536414825651,
      'values': {
        'power': 552530
      }
    },
    {
      'time': 1536414827653,
      'values': {
        'power': 549450
      }
    },
    {
      'time': 1536414829656,
      'values': {
        'power': 546580
      }
    },
    {
      'time': 1536414831659,
      'values': {
        'power': 548880
      }
    },
    {
      'time': 1536414833660,
      'values': {
        'power': 551700
      }
    },
    {
      'time': 1536414835663,
      'values': {
        'power': 552740
      }
    },
    {
      'time': 1536414837664,
      'values': {
        'power': 551950
      }
    },
    {
      'time': 1536414839666,
      'values': {
        'power': 552000
      }
    },
    {
      'time': 1536414841667,
      'values': {
        'power': 554300
      }
    },
    {
      'time': 1536414843669,
      'values': {
        'power': 553500
      }
    },
    {
      'time': 1536414845671,
      'values': {
        'power': 550310
      }
    },
    {
      'time': 1536414847673,
      'values': {
        'power': 550370
      }
    },
    {
      'time': 1536414849675,
      'values': {
        'power': 551560
      }
    },
    {
      'time': 1536414851676,
      'values': {
        'power': 549970
      }
    },
    {
      'time': 1536414853679,
      'values': {
        'power': 549550
      }
    },
    {
      'time': 1536414855680,
      'values': {
        'power': 551520
      }
    },
    {
      'time': 1536414857683,
      'values': {
        'power': 552360
      }
    },
    {
      'time': 1536414859685,
      'values': {
        'power': 552280
      }
    },
    {
      'time': 1536414861686,
      'values': {
        'power': 552690
      }
    },
    {
      'time': 1536414863689,
      'values': {
        'power': 552790
      }
    },
    {
      'time': 1536414865693,
      'values': {
        'power': 551820
      }
    },
    {
      'time': 1536414867692,
      'values': {
        'power': 551960
      }
    },
    {
      'time': 1536414869695,
      'values': {
        'power': 553180
      }
    },
    {
      'time': 1536414871697,
      'values': {
        'power': 552560
      }
    },
    {
      'time': 1536414873699,
      'values': {
        'power': 550870
      }
    },
    {
      'time': 1536414875701,
      'values': {
        'power': 550690
      }
    },
    {
      'time': 1536414877703,
      'values': {
        'power': 554340
      }
    },
    {
      'time': 1536414879704,
      'values': {
        'power': 554410
      }
    },
    {
      'time': 1536414881706,
      'values': {
        'power': 551230
      }
    },
    {
      'time': 1536414883709,
      'values': {
        'power': 552160
      }
    },
    {
      'time': 1536414885711,
      'values': {
        'power': 553530
      }
    },
    {
      'time': 1536414887712,
      'values': {
        'power': 552590
      }
    },
    {
      'time': 1536414889714,
      'values': {
        'power': 547860
      }
    },
    {
      'time': 1536414891716,
      'values': {
        'power': 544060
      }
    },
    {
      'time': 1536414893718,
      'values': {
        'power': 545780
      }
    },
    {
      'time': 1536414895720,
      'values': {
        'power': 860930
      }
    },
    {
      'time': 1536414897722,
      'values': {
        'power': 1400570
      }
    },
    {
      'time': 1536414899724,
      'values': {
        'power': 1555670
      }
    },
    {
      'time': 1536414901725,
      'values': {
        'power': 1555850
      }
    },
    {
      'time': 1536414903728,
      'values': {
        'power': 1689000
      }
    },
    {
      'time': 1536414905730,
      'values': {
        'power': 1606380
      }
    },
    {
      'time': 1536414907731,
      'values': {
        'power': 1495130
      }
    },
    {
      'time': 1536414909733,
      'values': {
        'power': 1488910
      }
    },
    {
      'time': 1536414911736,
      'values': {
        'power': 1487780
      }
    },
    {
      'time': 1536414913737,
      'values': {
        'power': 1493020
      }
    },
    {
      'time': 1536414915739,
      'values': {
        'power': 1497710
      }
    },
    {
      'time': 1536414917742,
      'values': {
        'power': 1497110
      }
    },
    {
      'time': 1536414919744,
      'values': {
        'power': 1497480
      }
    },
    {
      'time': 1536414921746,
      'values': {
        'power': 1497490
      }
    },
    {
      'time': 1536414923748,
      'values': {
        'power': 1497630
      }
    },
    {
      'time': 1536414925750,
      'values': {
        'power': 1501640
      }
    },
    {
      'time': 1536414927752,
      'values': {
        'power': 1508030
      }
    },
    {
      'time': 1536414929754,
      'values': {
        'power': 1337530
      }
    },
    {
      'time': 1536414931757,
      'values': {
        'power': 879420
      }
    },
    {
      'time': 1536414933757,
      'values': {
        'power': 595360
      }
    },
    {
      'time': 1536414935759,
      'values': {
        'power': 595170
      }
    },
    {
      'time': 1536414937762,
      'values': {
        'power': 594820
      }
    },
    {
      'time': 1536414939763,
      'values': {
        'power': 594140
      }
    },
    {
      'time': 1536414941765,
      'values': {
        'power': 593660
      }
    },
    {
      'time': 1536414943767,
      'values': {
        'power': 591530
      }
    },
    {
      'time': 1536414945769,
      'values': {
        'power': 588570
      }
    },
    {
      'time': 1536414947771,
      'values': {
        'power': 588860
      }
    },
    {
      'time': 1536414949773,
      'values': {
        'power': 591310
      }
    },
    {
      'time': 1536414951775,
      'values': {
        'power': 591980
      }
    },
    {
      'time': 1536414953777,
      'values': {
        'power': 590730
      }
    },
    {
      'time': 1536414955779,
      'values': {
        'power': 591190
      }
    },
    {
      'time': 1536414957781,
      'values': {
        'power': 592590
      }
    },
    {
      'time': 1536414959783,
      'values': {
        'power': 593950
      }
    },
    {
      'time': 1536414961785,
      'values': {
        'power': 594200
      }
    },
    {
      'time': 1536414963789,
      'values': {
        'power': 594080
      }
    },
    {
      'time': 1536414965789,
      'values': {
        'power': 593940
      }
    },
    {
      'time': 1536414967790,
      'values': {
        'power': 593450
      }
    },
    {
      'time': 1536414969792,
      'values': {
        'power': 592580
      }
    },
    {
      'time': 1536414971795,
      'values': {
        'power': 588870
      }
    },
    {
      'time': 1536414973797,
      'values': {
        'power': 586520
      }
    },
    {
      'time': 1536414975799,
      'values': {
        'power': 588330
      }
    },
    {
      'time': 1536414977801,
      'values': {
        'power': 589610
      }
    },
    {
      'time': 1536414979803,
      'values': {
        'power': 588000
      }
    },
    {
      'time': 1536414981805,
      'values': {
        'power': 586890
      }
    },
    {
      'time': 1536414983806,
      'values': {
        'power': 585940
      }
    },
    {
      'time': 1536414985808,
      'values': {
        'power': 584210
      }
    },
    {
      'time': 1536414987810,
      'values': {
        'power': 585440
      }
    },
    {
      'time': 1536414989812,
      'values': {
        'power': 583390
      }
    },
    {
      'time': 1536414991813,
      'values': {
        'power': 579190
      }
    },
    {
      'time': 1536414993816,
      'values': {
        'power': 581560
      }
    },
    {
      'time': 1536414995818,
      'values': {
        'power': 586690
      }
    },
    {
      'time': 1536414997820,
      'values': {
        'power': 589020
      }
    },
    {
      'time': 1536414999822,
      'values': {
        'power': 588810
      }
    },
    {
      'time': 1536415001823,
      'values': {
        'power': 589930
      }
    },
    {
      'time': 1536415003825,
      'values': {
        'power': 591180
      }
    },
    {
      'time': 1536415005828,
      'values': {
        'power': 591100
      }
    },
    {
      'time': 1536415007830,
      'values': {
        'power': 588580
      }
    },
    {
      'time': 1536415009832,
      'values': {
        'power': 583670
      }
    },
    {
      'time': 1536415011834,
      'values': {
        'power': 582880
      }
    },
    {
      'time': 1536415013837,
      'values': {
        'power': 585780
      }
    },
    {
      'time': 1536415015837,
      'values': {
        'power': 591050
      }
    },
    {
      'time': 1536415017839,
      'values': {
        'power': 598890
      }
    },
    {
      'time': 1536415019842,
      'values': {
        'power': 602080
      }
    },
    {
      'time': 1536415021844,
      'values': {
        'power': 603030
      }
    },
    {
      'time': 1536415023846,
      'values': {
        'power': 603650
      }
    },
    {
      'time': 1536415025848,
      'values': {
        'power': 605510
      }
    },
    {
      'time': 1536415027850,
      'values': {
        'power': 606870
      }
    },
    {
      'time': 1536415029852,
      'values': {
        'power': 602150
      }
    },
    {
      'time': 1536415031853,
      'values': {
        'power': 596630
      }
    },
    {
      'time': 1536415033856,
      'values': {
        'power': 615120
      }
    },
    {
      'time': 1536415035857,
      'values': {
        'power': 648740
      }
    },
    {
      'time': 1536415037859,
      'values': {
        'power': 665710
      }
    },
    {
      'time': 1536415039862,
      'values': {
        'power': 665770
      }
    },
    {
      'time': 1536415041863,
      'values': {
        'power': 664160
      }
    },
    {
      'time': 1536415043865,
      'values': {
        'power': 663430
      }
    },
    {
      'time': 1536415045866,
      'values': {
        'power': 663520
      }
    },
    {
      'time': 1536415047869,
      'values': {
        'power': 664400
      }
    },
    {
      'time': 1536415049871,
      'values': {
        'power': 662210
      }
    },
    {
      'time': 1536415051873,
      'values': {
        'power': 658210
      }
    },
    {
      'time': 1536415053875,
      'values': {
        'power': 658370
      }
    },
    {
      'time': 1536415055877,
      'values': {
        'power': 663210
      }
    },
    {
      'time': 1536415057879,
      'values': {
        'power': 667430
      }
    },
    {
      'time': 1536415059881,
      'values': {
        'power': 666170
      }
    },
    {
      'time': 1536415061883,
      'values': {
        'power': 663500
      }
    },
    {
      'time': 1536415063885,
      'values': {
        'power': 662600
      }
    },
    {
      'time': 1536415065888,
      'values': {
        'power': 664190
      }
    },
    {
      'time': 1536415067889,
      'values': {
        'power': 662720
      }
    },
    {
      'time': 1536415069890,
      'values': {
        'power': 657620
      }
    },
    {
      'time': 1536415071892,
      'values': {
        'power': 657160
      }
    },
    {
      'time': 1536415073895,
      'values': {
        'power': 667730
      }
    },
    {
      'time': 1536415075897,
      'values': {
        'power': 676170
      }
    },
    {
      'time': 1536415077898,
      'values': {
        'power': 676530
      }
    },
    {
      'time': 1536415079900,
      'values': {
        'power': 675880
      }
    },
    {
      'time': 1536415081902,
      'values': {
        'power': 674440
      }
    },
    {
      'time': 1536415083904,
      'values': {
        'power': 676420
      }
    },
    {
      'time': 1536415085906,
      'values': {
        'power': 676920
      }
    },
    {
      'time': 1536415087908,
      'values': {
        'power': 667540
      }
    },
    {
      'time': 1536415089910,
      'values': {
        'power': 631010
      }
    },
    {
      'time': 1536415091913,
      'values': {
        'power': 596120
      }
    },
    {
      'time': 1536415093913,
      'values': {
        'power': 595240
      }
    },
    {
      'time': 1536415095916,
      'values': {
        'power': 618480
      }
    },
    {
      'time': 1536415097918,
      'values': {
        'power': 637620
      }
    },
    {
      'time': 1536415099920,
      'values': {
        'power': 643220
      }
    },
    {
      'time': 1536415101921,
      'values': {
        'power': 651020
      }
    },
    {
      'time': 1536415103923,
      'values': {
        'power': 658930
      }
    },
    {
      'time': 1536415105926,
      'values': {
        'power': 658280
      }
    },
    {
      'time': 1536415107928,
      'values': {
        'power': 655080
      }
    },
    {
      'time': 1536415109930,
      'values': {
        'power': 653990
      }
    },
    {
      'time': 1536415111932,
      'values': {
        'power': 658970
      }
    },
    {
      'time': 1536415113934,
      'values': {
        'power': 663420
      }
    },
    {
      'time': 1536415115936,
      'values': {
        'power': 664880
      }
    },
    {
      'time': 1536415117937,
      'values': {
        'power': 666630
      }
    },
    {
      'time': 1536415119939,
      'values': {
        'power': 662180
      }
    },
    {
      'time': 1536415121942,
      'values': {
        'power': 659510
      }
    },
    {
      'time': 1536415123944,
      'values': {
        'power': 663390
      }
    },
    {
      'time': 1536415125945,
      'values': {
        'power': 661390
      }
    },
    {
      'time': 1536415127947,
      'values': {
        'power': 658610
      }
    },
    {
      'time': 1536415129949,
      'values': {
        'power': 655220
      }
    },
    {
      'time': 1536415131951,
      'values': {
        'power': 655850
      }
    },
    {
      'time': 1536415133953,
      'values': {
        'power': 661040
      }
    },
    {
      'time': 1536415135954,
      'values': {
        'power': 662850
      }
    },
    {
      'time': 1536415137957,
      'values': {
        'power': 664370
      }
    },
    {
      'time': 1536415139959,
      'values': {
        'power': 664560
      }
    },
    {
      'time': 1536415141961,
      'values': {
        'power': 664460
      }
    },
    {
      'time': 1536415143962,
      'values': {
        'power': 665650
      }
    },
    {
      'time': 1536415145964,
      'values': {
        'power': 667660
      }
    },
    {
      'time': 1536415147967,
      'values': {
        'power': 662370
      }
    },
    {
      'time': 1536415149969,
      'values': {
        'power': 653060
      }
    },
    {
      'time': 1536415151970,
      'values': {
        'power': 639690
      }
    },
    {
      'time': 1536415153972,
      'values': {
        'power': 622160
      }
    },
    {
      'time': 1536415155975,
      'values': {
        'power': 608070
      }
    },
    {
      'time': 1536415157977,
      'values': {
        'power': 604090
      }
    },
    {
      'time': 1536415159979,
      'values': {
        'power': 615030
      }
    },
    {
      'time': 1536415161981,
      'values': {
        'power': 643140
      }
    },
    {
      'time': 1536415163983,
      'values': {
        'power': 662200
      }
    },
    {
      'time': 1536415165985,
      'values': {
        'power': 659130
      }
    },
    {
      'time': 1536415167988,
      'values': {
        'power': 656880
      }
    },
    {
      'time': 1536415169988,
      'values': {
        'power': 770370
      }
    },
    {
      'time': 1536415171990,
      'values': {
        'power': 844870
      }
    },
    {
      'time': 1536415173992,
      'values': {
        'power': 733670
      }
    },
    {
      'time': 1536415175994,
      'values': {
        'power': 688490
      }
    },
    {
      'time': 1536415177996,
      'values': {
        'power': 696370
      }
    },
    {
      'time': 1536415179998,
      'values': {
        'power': 695150
      }
    },
    {
      'time': 1536415181999,
      'values': {
        'power': 695980
      }
    },
    {
      'time': 1536415184002,
      'values': {
        'power': 695190
      }
    },
    {
      'time': 1536415186004,
      'values': {
        'power': 702790
      }
    },
    {
      'time': 1536415188006,
      'values': {
        'power': 711000
      }
    },
    {
      'time': 1536415190008,
      'values': {
        'power': 687520
      }
    },
    {
      'time': 1536415192010,
      'values': {
        'power': 664180
      }
    },
    {
      'time': 1536415194012,
      'values': {
        'power': 662480
      }
    },
    {
      'time': 1536415196013,
      'values': {
        'power': 662010
      }
    },
    {
      'time': 1536415198016,
      'values': {
        'power': 661780
      }
    },
    {
      'time': 1536415200018,
      'values': {
        'power': 657170
      }
    },
    {
      'time': 1536415202021,
      'values': {
        'power': 652620
      }
    },
    {
      'time': 1536415204022,
      'values': {
        'power': 649850
      }
    },
    {
      'time': 1536415206025,
      'values': {
        'power': 649050
      }
    },
    {
      'time': 1536415208025,
      'values': {
        'power': 652190
      }
    },
    {
      'time': 1536415210028,
      'values': {
        'power': 656210
      }
    },
    {
      'time': 1536415212030,
      'values': {
        'power': 659440
      }
    },
    {
      'time': 1536415214032,
      'values': {
        'power': 648600
      }
    },
    {
      'time': 1536415216033,
      'values': {
        'power': 636120
      }
    },
    {
      'time': 1536415218036,
      'values': {
        'power': 635670
      }
    },
    {
      'time': 1536415220037,
      'values': {
        'power': 637390
      }
    },
    {
      'time': 1536415222039,
      'values': {
        'power': 801860
      }
    },
    {
      'time': 1536415224042,
      'values': {
        'power': 858150
      }
    },
    {
      'time': 1536415226043,
      'values': {
        'power': 732580
      }
    },
    {
      'time': 1536415228045,
      'values': {
        'power': 704100
      }
    },
    {
      'time': 1536415230047,
      'values': {
        'power': 691720
      }
    },
    {
      'time': 1536415232049,
      'values': {
        'power': 690990
      }
    },
    {
      'time': 1536415234051,
      'values': {
        'power': 702470
      }
    },
    {
      'time': 1536415236052,
      'values': {
        'power': 714850
      }
    },
    {
      'time': 1536415238054,
      'values': {
        'power': 719820
      }
    },
    {
      'time': 1536415240057,
      'values': {
        'power': 717840
      }
    },
    {
      'time': 1536415242059,
      'values': {
        'power': 703170
      }
    },
    {
      'time': 1536415244061,
      'values': {
        'power': 689580
      }
    },
    {
      'time': 1536415246062,
      'values': {
        'power': 687810
      }
    },
    {
      'time': 1536415248064,
      'values': {
        'power': 689930
      }
    },
    {
      'time': 1536415250067,
      'values': {
        'power': 690630
      }
    },
    {
      'time': 1536415252069,
      'values': {
        'power': 690020
      }
    },
    {
      'time': 1536415254071,
      'values': {
        'power': 689260
      }
    },
    {
      'time': 1536415256073,
      'values': {
        'power': 687820
      }
    },
    {
      'time': 1536415258075,
      'values': {
        'power': 684800
      }
    },
    {
      'time': 1536415260077,
      'values': {
        'power': 682570
      }
    },
    {
      'time': 1536415262078,
      'values': {
        'power': 680170
      }
    },
    {
      'time': 1536415264080,
      'values': {
        'power': 676500
      }
    },
    {
      'time': 1536415266083,
      'values': {
        'power': 676600
      }
    },
    {
      'time': 1536415268084,
      'values': {
        'power': 680070
      }
    },
    {
      'time': 1536415270086,
      'values': {
        'power': 681360
      }
    },
    {
      'time': 1536415272088,
      'values': {
        'power': 678300
      }
    },
    {
      'time': 1536415274089,
      'values': {
        'power': 673440
      }
    },
    {
      'time': 1536415276092,
      'values': {
        'power': 673090
      }
    },
    {
      'time': 1536415278094,
      'values': {
        'power': 676230
      }
    },
    {
      'time': 1536415280096,
      'values': {
        'power': 679390
      }
    },
    {
      'time': 1536415282098,
      'values': {
        'power': 681430
      }
    },
    {
      'time': 1536415284100,
      'values': {
        'power': 678840
      }
    },
    {
      'time': 1536415286102,
      'values': {
        'power': 673370
      }
    },
    {
      'time': 1536415288103,
      'values': {
        'power': 673970
      }
    },
    {
      'time': 1536415290105,
      'values': {
        'power': 679690
      }
    },
    {
      'time': 1536415292108,
      'values': {
        'power': 682860
      }
    },
    {
      'time': 1536415294188,
      'values': {
        'power': 683090
      }
    },
    {
      'time': 1536415296112,
      'values': {
        'power': 684120
      }
    },
    {
      'time': 1536415298113,
      'values': {
        'power': 683870
      }
    },
    {
      'time': 1536415300116,
      'values': {
        'power': 681710
      }
    },
    {
      'time': 1536415302118,
      'values': {
        'power': 679090
      }
    },
    {
      'time': 1536415304119,
      'values': {
        'power': 673710
      }
    },
    {
      'time': 1536415306121,
      'values': {
        'power': 668320
      }
    },
    {
      'time': 1536415308124,
      'values': {
        'power': 670040
      }
    },
    {
      'time': 1536415310126,
      'values': {
        'power': 672900
      }
    },
    {
      'time': 1536415312128,
      'values': {
        'power': 674000
      }
    },
    {
      'time': 1536415314129,
      'values': {
        'power': 672250
      }
    },
    {
      'time': 1536415316131,
      'values': {
        'power': 666220
      }
    },
    {
      'time': 1536415318133,
      'values': {
        'power': 664060
      }
    },
    {
      'time': 1536415320135,
      'values': {
        'power': 675360
      }
    },
    {
      'time': 1536415322137,
      'values': {
        'power': 681790
      }
    },
    {
      'time': 1536415324138,
      'values': {
        'power': 677890
      }
    },
    {
      'time': 1536415326140,
      'values': {
        'power': 677820
      }
    },
    {
      'time': 1536415328143,
      'values': {
        'power': 677030
      }
    },
    {
      'time': 1536415330145,
      'values': {
        'power': 674480
      }
    },
    {
      'time': 1536415332147,
      'values': {
        'power': 673840
      }
    },
    {
      'time': 1536415334149,
      'values': {
        'power': 674880
      }
    },
    {
      'time': 1536415336151,
      'values': {
        'power': 676610
      }
    },
    {
      'time': 1536415338152,
      'values': {
        'power': 678220
      }
    },
    {
      'time': 1536415340155,
      'values': {
        'power': 679210
      }
    },
    {
      'time': 1536415342159,
      'values': {
        'power': 680810
      }
    },
    {
      'time': 1536415344158,
      'values': {
        'power': 681600
      }
    },
    {
      'time': 1536415346161,
      'values': {
        'power': 678050
      }
    },
    {
      'time': 1536415348162,
      'values': {
        'power': 675600
      }
    },
    {
      'time': 1536415350164,
      'values': {
        'power': 675200
      }
    },
    {
      'time': 1536415352167,
      'values': {
        'power': 675990
      }
    },
    {
      'time': 1536415354169,
      'values': {
        'power': 678940
      }
    },
    {
      'time': 1536415356171,
      'values': {
        'power': 680490
      }
    },
    {
      'time': 1536415358173,
      'values': {
        'power': 682360
      }
    },
    {
      'time': 1536415360174,
      'values': {
        'power': 684490
      }
    },
    {
      'time': 1536415362176,
      'values': {
        'power': 683820
      }
    },
    {
      'time': 1536415364178,
      'values': {
        'power': 677400
      }
    },
    {
      'time': 1536415366181,
      'values': {
        'power': 669030
      }
    },
    {
      'time': 1536415368183,
      'values': {
        'power': 665620
      }
    },
    {
      'time': 1536415370185,
      'values': {
        'power': 666330
      }
    },
    {
      'time': 1536415372186,
      'values': {
        'power': 668280
      }
    },
    {
      'time': 1536415374187,
      'values': {
        'power': 670600
      }
    },
    {
      'time': 1536415376189,
      'values': {
        'power': 672300
      }
    },
    {
      'time': 1536415378192,
      'values': {
        'power': 674040
      }
    },
    {
      'time': 1536415380194,
      'values': {
        'power': 674890
      }
    },
    {
      'time': 1536415382196,
      'values': {
        'power': 674100
      }
    },
    {
      'time': 1536415384198,
      'values': {
        'power': 673100
      }
    },
    {
      'time': 1536415386200,
      'values': {
        'power': 673030
      }
    },
    {
      'time': 1536415388202,
      'values': {
        'power': 672940
      }
    },
    {
      'time': 1536415390204,
      'values': {
        'power': 669410
      }
    },
    {
      'time': 1536415392206,
      'values': {
        'power': 664850
      }
    },
    {
      'time': 1536415394208,
      'values': {
        'power': 665140
      }
    },
    {
      'time': 1536415396210,
      'values': {
        'power': 670140
      }
    },
    {
      'time': 1536415398212,
      'values': {
        'power': 673500
      }
    },
    {
      'time': 1536415400213,
      'values': {
        'power': 671160
      }
    },
    {
      'time': 1536415402216,
      'values': {
        'power': 662530
      }
    },
    {
      'time': 1536415404217,
      'values': {
        'power': 656770
      }
    },
    {
      'time': 1536415406219,
      'values': {
        'power': 653110
      }
    },
    {
      'time': 1536415408221,
      'values': {
        'power': 650130
      }
    },
    {
      'time': 1536415410223,
      'values': {
        'power': 649160
      }
    },
    {
      'time': 1536415412225,
      'values': {
        'power': 651660
      }
    },
    {
      'time': 1536415414227,
      'values': {
        'power': 654830
      }
    },
    {
      'time': 1536415416229,
      'values': {
        'power': 656470
      }
    },
    {
      'time': 1536415418231,
      'values': {
        'power': 658510
      }
    },
    {
      'time': 1536415420233,
      'values': {
        'power': 657180
      }
    },
    {
      'time': 1536415422235,
      'values': {
        'power': 655670
      }
    },
    {
      'time': 1536415424237,
      'values': {
        'power': 654140
      }
    },
    {
      'time': 1536415426238,
      'values': {
        'power': 653240
      }
    },
    {
      'time': 1536415428240,
      'values': {
        'power': 651510
      }
    },
    {
      'time': 1536415430243,
      'values': {
        'power': 638370
      }
    },
    {
      'time': 1536415432245,
      'values': {
        'power': 623210
      }
    },
    {
      'time': 1536415434247,
      'values': {
        'power': 621070
      }
    },
    {
      'time': 1536415436249,
      'values': {
        'power': 624260
      }
    },
    {
      'time': 1536415438252,
      'values': {
        'power': 625860
      }
    },
    {
      'time': 1536415440252,
      'values': {
        'power': 627930
      }
    },
    {
      'time': 1536415442255,
      'values': {
        'power': 639500
      }
    },
    {
      'time': 1536415444257,
      'values': {
        'power': 650520
      }
    },
    {
      'time': 1536415446259,
      'values': {
        'power': 649280
      }
    },
    {
      'time': 1536415448261,
      'values': {
        'power': 646890
      }
    },
    {
      'time': 1536415450265,
      'values': {
        'power': 647030
      }
    },
    {
      'time': 1536415452264,
      'values': {
        'power': 647670
      }
    },
    {
      'time': 1536415454266,
      'values': {
        'power': 647510
      }
    },
    {
      'time': 1536415456268,
      'values': {
        'power': 650400
      }
    },
    {
      'time': 1536415458270,
      'values': {
        'power': 656410
      }
    },
    {
      'time': 1536415460272,
      'values': {
        'power': 658550
      }
    },
    {
      'time': 1536415462274,
      'values': {
        'power': 658230
      }
    },
    {
      'time': 1536415464276,
      'values': {
        'power': 657390
      }
    },
    {
      'time': 1536415466278,
      'values': {
        'power': 643190
      }
    },
    {
      'time': 1536415468280,
      'values': {
        'power': 627060
      }
    },
    {
      'time': 1536415470282,
      'values': {
        'power': 623960
      }
    },
    {
      'time': 1536415472283,
      'values': {
        'power': 625770
      }
    },
    {
      'time': 1536415474286,
      'values': {
        'power': 629830
      }
    },
    {
      'time': 1536415476290,
      'values': {
        'power': 641340
      }
    },
    {
      'time': 1536415478292,
      'values': {
        'power': 657810
      }
    },
    {
      'time': 1536415480291,
      'values': {
        'power': 663330
      }
    },
    {
      'time': 1536415482294,
      'values': {
        'power': 663300
      }
    },
    {
      'time': 1536415484296,
      'values': {
        'power': 661670
      }
    },
    {
      'time': 1536415486298,
      'values': {
        'power': 655910
      }
    },
    {
      'time': 1536415488300,
      'values': {
        'power': 652310
      }
    },
    {
      'time': 1536415490302,
      'values': {
        'power': 656290
      }
    },
    {
      'time': 1536415492304,
      'values': {
        'power': 660540
      }
    },
    {
      'time': 1536415494306,
      'values': {
        'power': 658850
      }
    },
    {
      'time': 1536415496308,
      'values': {
        'power': 656630
      }
    },
    {
      'time': 1536415498310,
      'values': {
        'power': 654780
      }
    },
    {
      'time': 1536415500312,
      'values': {
        'power': 655430
      }
    },
    {
      'time': 1536415502313,
      'values': {
        'power': 660400
      }
    },
    {
      'time': 1536415504318,
      'values': {
        'power': 656820
      }
    },
    {
      'time': 1536415506317,
      'values': {
        'power': 719260
      }
    },
    {
      'time': 1536415508319,
      'values': {
        'power': 1191190
      }
    },
    {
      'time': 1536415510321,
      'values': {
        'power': 1659090
      }
    },
    {
      'time': 1536415512323,
      'values': {
        'power': 1594370
      }
    },
    {
      'time': 1536415514325,
      'values': {
        'power': 1582410
      }
    },
    {
      'time': 1536415516327,
      'values': {
        'power': 1581630
      }
    },
    {
      'time': 1536415518329,
      'values': {
        'power': 1581480
      }
    },
    {
      'time': 1536415520331,
      'values': {
        'power': 1583630
      }
    },
    {
      'time': 1536415522333,
      'values': {
        'power': 1585010
      }
    },
    {
      'time': 1536415524335,
      'values': {
        'power': 1583630
      }
    },
    {
      'time': 1536415526337,
      'values': {
        'power': 1577660
      }
    },
    {
      'time': 1536415528338,
      'values': {
        'power': 1576100
      }
    },
    {
      'time': 1536415530341,
      'values': {
        'power': 1576010
      }
    },
    {
      'time': 1536415532343,
      'values': {
        'power': 1575850
      }
    },
    {
      'time': 1536415534344,
      'values': {
        'power': 1583790
      }
    },
    {
      'time': 1536415536347,
      'values': {
        'power': 1586500
      }
    },
    {
      'time': 1536415538349,
      'values': {
        'power': 1582510
      }
    },
    {
      'time': 1536415540350,
      'values': {
        'power': 1581150
      }
    },
    {
      'time': 1536415542353,
      'values': {
        'power': 1455850
      }
    },
    {
      'time': 1536415544355,
      'values': {
        'power': 1008770
      }
    },
    {
      'time': 1536415546357,
      'values': {
        'power': 667310
      }
    },
    {
      'time': 1536415548359,
      'values': {
        'power': 645240
      }
    },
    {
      'time': 1536415550360,
      'values': {
        'power': 644270
      }
    },
    {
      'time': 1536415552362,
      'values': {
        'power': 646060
      }
    },
    {
      'time': 1536415554364,
      'values': {
        'power': 647280
      }
    },
    {
      'time': 1536415556366,
      'values': {
        'power': 647320
      }
    },
    {
      'time': 1536415558368,
      'values': {
        'power': 647190
      }
    },
    {
      'time': 1536415560371,
      'values': {
        'power': 646830
      }
    },
    {
      'time': 1536415562371,
      'values': {
        'power': 646140
      }
    },
    {
      'time': 1536415564374,
      'values': {
        'power': 645580
      }
    },
    {
      'time': 1536415566376,
      'values': {
        'power': 642980
      }
    },
    {
      'time': 1536415568378,
      'values': {
        'power': 638250
      }
    },
    {
      'time': 1536415570380,
      'values': {
        'power': 635340
      }
    },
    {
      'time': 1536415572381,
      'values': {
        'power': 637530
      }
    },
    {
      'time': 1536415574383,
      'values': {
        'power': 640350
      }
    },
    {
      'time': 1536415576386,
      'values': {
        'power': 644510
      }
    },
    {
      'time': 1536415578388,
      'values': {
        'power': 648660
      }
    },
    {
      'time': 1536415580389,
      'values': {
        'power': 648630
      }
    },
    {
      'time': 1536415582391,
      'values': {
        'power': 647020
      }
    },
    {
      'time': 1536415584394,
      'values': {
        'power': 646140
      }
    },
    {
      'time': 1536415586396,
      'values': {
        'power': 643610
      }
    },
    {
      'time': 1536415588397,
      'values': {
        'power': 639010
      }
    },
    {
      'time': 1536415590399,
      'values': {
        'power': 636010
      }
    },
    {
      'time': 1536415592402,
      'values': {
        'power': 638770
      }
    },
    {
      'time': 1536415594404,
      'values': {
        'power': 643060
      }
    },
    {
      'time': 1536415596405,
      'values': {
        'power': 627510
      }
    },
    {
      'time': 1536415598407,
      'values': {
        'power': 605710
      }
    },
    {
      'time': 1536415600409,
      'values': {
        'power': 598130
      }
    },
    {
      'time': 1536415602412,
      'values': {
        'power': 596150
      }
    },
    {
      'time': 1536415604415,
      'values': {
        'power': 594770
      }
    },
    {
      'time': 1536415606415,
      'values': {
        'power': 592660
      }
    },
    {
      'time': 1536415608416,
      'values': {
        'power': 590620
      }
    },
    {
      'time': 1536415610419,
      'values': {
        'power': 591350
      }
    },
    {
      'time': 1536415612421,
      'values': {
        'power': 594390
      }
    },
    {
      'time': 1536415614423,
      'values': {
        'power': 596230
      }
    },
    {
      'time': 1536415616424,
      'values': {
        'power': 597110
      }
    },
    {
      'time': 1536415618427,
      'values': {
        'power': 597330
      }
    },
    {
      'time': 1536415620429,
      'values': {
        'power': 596630
      }
    },
    {
      'time': 1536415622431,
      'values': {
        'power': 595940
      }
    },
    {
      'time': 1536415624433,
      'values': {
        'power': 594570
      }
    },
    {
      'time': 1536415626435,
      'values': {
        'power': 592650
      }
    },
    {
      'time': 1536415628437,
      'values': {
        'power': 589400
      }
    },
    {
      'time': 1536415630439,
      'values': {
        'power': 588380
      }
    },
    {
      'time': 1536415632440,
      'values': {
        'power': 589550
      }
    },
    {
      'time': 1536415634443,
      'values': {
        'power': 591270
      }
    },
    {
      'time': 1536415636445,
      'values': {
        'power': 593790
      }
    },
    {
      'time': 1536415638447,
      'values': {
        'power': 595180
      }
    },
    {
      'time': 1536415640449,
      'values': {
        'power': 593990
      }
    },
    {
      'time': 1536415642450,
      'values': {
        'power': 592880
      }
    },
    {
      'time': 1536415644452,
      'values': {
        'power': 592870
      }
    },
    {
      'time': 1536415646454,
      'values': {
        'power': 591400
      }
    },
    {
      'time': 1536415648456,
      'values': {
        'power': 588890
      }
    },
    {
      'time': 1536415650458,
      'values': {
        'power': 586630
      }
    },
    {
      'time': 1536415652460,
      'values': {
        'power': 589470
      }
    },
    {
      'time': 1536415654462,
      'values': {
        'power': 592740
      }
    },
    {
      'time': 1536415656464,
      'values': {
        'power': 594890
      }
    },
    {
      'time': 1536415658465,
      'values': {
        'power': 596520
      }
    },
    {
      'time': 1536415660468,
      'values': {
        'power': 594060
      }
    },
    {
      'time': 1536415662470,
      'values': {
        'power': 591970
      }
    },
    {
      'time': 1536415664472,
      'values': {
        'power': 589040
      }
    },
    {
      'time': 1536415666474,
      'values': {
        'power': 586220
      }
    },
    {
      'time': 1536415668476,
      'values': {
        'power': 588620
      }
    },
    {
      'time': 1536415670478,
      'values': {
        'power': 593100
      }
    },
    {
      'time': 1536415672481,
      'values': {
        'power': 594070
      }
    },
    {
      'time': 1536415674481,
      'values': {
        'power': 592930
      }
    },
    {
      'time': 1536415676484,
      'values': {
        'power': 594360
      }
    },
    {
      'time': 1536415678486,
      'values': {
        'power': 595110
      }
    },
    {
      'time': 1536415680488,
      'values': {
        'power': 593510
      }
    },
    {
      'time': 1536415682489,
      'values': {
        'power': 590250
      }
    },
    {
      'time': 1536415684491,
      'values': {
        'power': 585710
      }
    },
    {
      'time': 1536415686494,
      'values': {
        'power': 584960
      }
    },
    {
      'time': 1536415688496,
      'values': {
        'power': 586980
      }
    },
    {
      'time': 1536415690497,
      'values': {
        'power': 587320
      }
    },
    {
      'time': 1536415692499,
      'values': {
        'power': 587990
      }
    },
    {
      'time': 1536415694501,
      'values': {
        'power': 590040
      }
    },
    {
      'time': 1536415696503,
      'values': {
        'power': 592410
      }
    },
    {
      'time': 1536415698505,
      'values': {
        'power': 595170
      }
    },
    {
      'time': 1536415700507,
      'values': {
        'power': 596770
      }
    },
    {
      'time': 1536415702509,
      'values': {
        'power': 596530
      }
    },
    {
      'time': 1536415704512,
      'values': {
        'power': 592380
      }
    },
    {
      'time': 1536415706512,
      'values': {
        'power': 588840
      }
    },
    {
      'time': 1536415708514,
      'values': {
        'power': 589520
      }
    },
    {
      'time': 1536415710516,
      'values': {
        'power': 592500
      }
    },
    {
      'time': 1536415712519,
      'values': {
        'power': 596210
      }
    },
    {
      'time': 1536415714521,
      'values': {
        'power': 597010
      }
    },
    {
      'time': 1536415716523,
      'values': {
        'power': 590490
      }
    },
    {
      'time': 1536415718525,
      'values': {
        'power': 579760
      }
    },
    {
      'time': 1536415720527,
      'values': {
        'power': 574230
      }
    },
    {
      'time': 1536415722529,
      'values': {
        'power': 573550
      }
    },
    {
      'time': 1536415724530,
      'values': {
        'power': 683110
      }
    },
    {
      'time': 1536415726532,
      'values': {
        'power': 770440
      }
    },
    {
      'time': 1536415728535,
      'values': {
        'power': 680370
      }
    },
    {
      'time': 1536415730537,
      'values': {
        'power': 613430
      }
    },
    {
      'time': 1536415732538,
      'values': {
        'power': 615030
      }
    },
    {
      'time': 1536415734540,
      'values': {
        'power': 616260
      }
    },
    {
      'time': 1536415736543,
      'values': {
        'power': 617050
      }
    },
    {
      'time': 1536415738545,
      'values': {
        'power': 618000
      }
    },
    {
      'time': 1536415740546,
      'values': {
        'power': 618470
      }
    },
    {
      'time': 1536415742548,
      'values': {
        'power': 618040
      }
    },
    {
      'time': 1536415744550,
      'values': {
        'power': 617330
      }
    },
    {
      'time': 1536415746552,
      'values': {
        'power': 614940
      }
    },
    {
      'time': 1536415748554,
      'values': {
        'power': 618880
      }
    },
    {
      'time': 1536415750555,
      'values': {
        'power': 632210
      }
    },
    {
      'time': 1536415752557,
      'values': {
        'power': 639170
      }
    },
    {
      'time': 1536415754559,
      'values': {
        'power': 642230
      }
    },
    {
      'time': 1536415756562,
      'values': {
        'power': 645590
      }
    },
    {
      'time': 1536415758563,
      'values': {
        'power': 640330
      }
    },
    {
      'time': 1536415760565,
      'values': {
        'power': 633150
      }
    },
    {
      'time': 1536415762568,
      'values': {
        'power': 629060
      }
    },
    {
      'time': 1536415764570,
      'values': {
        'power': 631000
      }
    },
    {
      'time': 1536415766572,
      'values': {
        'power': 629200
      }
    },
    {
      'time': 1536415768574,
      'values': {
        'power': 625120
      }
    },
    {
      'time': 1536415770576,
      'values': {
        'power': 628610
      }
    },
    {
      'time': 1536415772578,
      'values': {
        'power': 626330
      }
    },
    {
      'time': 1536415774579,
      'values': {
        'power': 621830
      }
    },
    {
      'time': 1536415776582,
      'values': {
        'power': 624720
      }
    },
    {
      'time': 1536415778583,
      'values': {
        'power': 628770
      }
    },
    {
      'time': 1536415780585,
      'values': {
        'power': 627420
      }
    },
    {
      'time': 1536415782588,
      'values': {
        'power': 623390
      }
    },
    {
      'time': 1536415784589,
      'values': {
        'power': 622530
      }
    },
    {
      'time': 1536415786591,
      'values': {
        'power': 622450
      }
    },
    {
      'time': 1536415788593,
      'values': {
        'power': 619880
      }
    },
    {
      'time': 1536415790595,
      'values': {
        'power': 616880
      }
    },
    {
      'time': 1536415792597,
      'values': {
        'power': 616820
      }
    },
    {
      'time': 1536415794599,
      'values': {
        'power': 617690
      }
    },
    {
      'time': 1536415796601,
      'values': {
        'power': 619970
      }
    },
    {
      'time': 1536415798604,
      'values': {
        'power': 622070
      }
    },
    {
      'time': 1536415800605,
      'values': {
        'power': 618770
      }
    },
    {
      'time': 1536415802607,
      'values': {
        'power': 614240
      }
    },
    {
      'time': 1536415804611,
      'values': {
        'power': 614620
      }
    },
    {
      'time': 1536415806611,
      'values': {
        'power': 615260
      }
    },
    {
      'time': 1536415808613,
      'values': {
        'power': 611970
      }
    },
    {
      'time': 1536415810614,
      'values': {
        'power': 606910
      }
    },
    {
      'time': 1536415812616,
      'values': {
        'power': 606960
      }
    },
    {
      'time': 1536415814619,
      'values': {
        'power': 611070
      }
    },
    {
      'time': 1536415816621,
      'values': {
        'power': 614910
      }
    },
    {
      'time': 1536415818623,
      'values': {
        'power': 616720
      }
    },
    {
      'time': 1536415820625,
      'values': {
        'power': 616460
      }
    },
    {
      'time': 1536415822627,
      'values': {
        'power': 616730
      }
    },
    {
      'time': 1536415824629,
      'values': {
        'power': 616520
      }
    },
    {
      'time': 1536415826631,
      'values': {
        'power': 611560
      }
    },
    {
      'time': 1536415828633,
      'values': {
        'power': 606670
      }
    },
    {
      'time': 1536415830635,
      'values': {
        'power': 605960
      }
    },
    {
      'time': 1536415832638,
      'values': {
        'power': 607160
      }
    },
    {
      'time': 1536415834638,
      'values': {
        'power': 609560
      }
    },
    {
      'time': 1536415836640,
      'values': {
        'power': 611700
      }
    },
    {
      'time': 1536415838642,
      'values': {
        'power': 611780
      }
    },
    {
      'time': 1536415840645,
      'values': {
        'power': 611220
      }
    },
    {
      'time': 1536415842646,
      'values': {
        'power': 611680
      }
    },
    {
      'time': 1536415844648,
      'values': {
        'power': 611140
      }
    },
    {
      'time': 1536415846650,
      'values': {
        'power': 608510
      }
    },
    {
      'time': 1536415848652,
      'values': {
        'power': 605770
      }
    },
    {
      'time': 1536415850654,
      'values': {
        'power': 605170
      }
    },
    {
      'time': 1536415852656,
      'values': {
        'power': 595940
      }
    },
    {
      'time': 1536415854658,
      'values': {
        'power': 584760
      }
    },
    {
      'time': 1536415856660,
      'values': {
        'power': 585960
      }
    },
    {
      'time': 1536415858664,
      'values': {
        'power': 588640
      }
    },
    {
      'time': 1536415860665,
      'values': {
        'power': 583730
      }
    },
    {
      'time': 1536415862665,
      'values': {
        'power': 585380
      }
    },
    {
      'time': 1536415864668,
      'values': {
        'power': 602790
      }
    },
    {
      'time': 1536415866670,
      'values': {
        'power': 615140
      }
    },
    {
      'time': 1536415868672,
      'values': {
        'power': 612300
      }
    },
    {
      'time': 1536415870674,
      'values': {
        'power': 613290
      }
    },
    {
      'time': 1536415872676,
      'values': {
        'power': 622030
      }
    },
    {
      'time': 1536415874677,
      'values': {
        'power': 622140
      }
    },
    {
      'time': 1536415876679,
      'values': {
        'power': 618040
      }
    },
    {
      'time': 1536415878682,
      'values': {
        'power': 615850
      }
    },
    {
      'time': 1536415880683,
      'values': {
        'power': 614250
      }
    },
    {
      'time': 1536415882685,
      'values': {
        'power': 614270
      }
    },
    {
      'time': 1536415884689,
      'values': {
        'power': 612880
      }
    },
    {
      'time': 1536415886689,
      'values': {
        'power': 603920
      }
    },
    {
      'time': 1536415888691,
      'values': {
        'power': 588340
      }
    },
    {
      'time': 1536415890692,
      'values': {
        'power': 586380
      }
    },
    {
      'time': 1536415892695,
      'values': {
        'power': 595960
      }
    },
    {
      'time': 1536415894697,
      'values': {
        'power': 598300
      }
    },
    {
      'time': 1536415896699,
      'values': {
        'power': 595810
      }
    },
    {
      'time': 1536415898701,
      'values': {
        'power': 597990
      }
    },
    {
      'time': 1536415900703,
      'values': {
        'power': 610680
      }
    },
    {
      'time': 1536415902705,
      'values': {
        'power': 613980
      }
    },
    {
      'time': 1536415904707,
      'values': {
        'power': 607760
      }
    },
    {
      'time': 1536415906709,
      'values': {
        'power': 606970
      }
    },
    {
      'time': 1536415908710,
      'values': {
        'power': 609560
      }
    },
    {
      'time': 1536415910713,
      'values': {
        'power': 614180
      }
    },
    {
      'time': 1536415912715,
      'values': {
        'power': 614690
      }
    },
    {
      'time': 1536415914716,
      'values': {
        'power': 615260
      }
    },
    {
      'time': 1536415916718,
      'values': {
        'power': 616760
      }
    },
    {
      'time': 1536415918721,
      'values': {
        'power': 618620
      }
    },
    {
      'time': 1536415920723,
      'values': {
        'power': 618920
      }
    },
    {
      'time': 1536415922725,
      'values': {
        'power': 613940
      }
    },
    {
      'time': 1536415924727,
      'values': {
        'power': 610800
      }
    },
    {
      'time': 1536415926728,
      'values': {
        'power': 856060
      }
    },
    {
      'time': 1536415928730,
      'values': {
        'power': 1213880
      }
    },
    {
      'time': 1536415930732,
      'values': {
        'power': 1113700
      }
    },
    {
      'time': 1536415932734,
      'values': {
        'power': 839730
      }
    },
    {
      'time': 1536415934736,
      'values': {
        'power': 766390
      }
    },
    {
      'time': 1536415936738,
      'values': {
        'power': 751310
      }
    },
    {
      'time': 1536415938740,
      'values': {
        'power': 748210
      }
    },
    {
      'time': 1536415940743,
      'values': {
        'power': 745050
      }
    },
    {
      'time': 1536415942743,
      'values': {
        'power': 740170
      }
    },
    {
      'time': 1536415944745,
      'values': {
        'power': 735100
      }
    },
    {
      'time': 1536415946748,
      'values': {
        'power': 734860
      }
    },
    {
      'time': 1536415948750,
      'values': {
        'power': 736900
      }
    },
    {
      'time': 1536415950752,
      'values': {
        'power': 741600
      }
    },
    {
      'time': 1536415952754,
      'values': {
        'power': 746050
      }
    },
    {
      'time': 1536415954756,
      'values': {
        'power': 730230
      }
    },
    {
      'time': 1536415956758,
      'values': {
        'power': 691320
      }
    },
    {
      'time': 1536415958760,
      'values': {
        'power': 669330
      }
    },
    {
      'time': 1536415960762,
      'values': {
        'power': 667140
      }
    },
    {
      'time': 1536415962764,
      'values': {
        'power': 661230
      }
    },
    {
      'time': 1536415964765,
      'values': {
        'power': 659200
      }
    },
    {
      'time': 1536415966768,
      'values': {
        'power': 661890
      }
    },
    {
      'time': 1536415968771,
      'values': {
        'power': 663330
      }
    },
    {
      'time': 1536415970771,
      'values': {
        'power': 662650
      }
    },
    {
      'time': 1536415972774,
      'values': {
        'power': 658430
      }
    },
    {
      'time': 1536415974775,
      'values': {
        'power': 654290
      }
    },
    {
      'time': 1536415976777,
      'values': {
        'power': 657010
      }
    },
    {
      'time': 1536415978779,
      'values': {
        'power': 661240
      }
    },
    {
      'time': 1536415980781,
      'values': {
        'power': 663470
      }
    },
    {
      'time': 1536415982783,
      'values': {
        'power': 663040
      }
    },
    {
      'time': 1536415984785,
      'values': {
        'power': 659290
      }
    },
    {
      'time': 1536415986787,
      'values': {
        'power': 658440
      }
    },
    {
      'time': 1536415988790,
      'values': {
        'power': 661100
      }
    },
    {
      'time': 1536415990790,
      'values': {
        'power': 663950
      }
    },
    {
      'time': 1536415992793,
      'values': {
        'power': 664140
      }
    },
    {
      'time': 1536415994795,
      'values': {
        'power': 665280
      }
    },
    {
      'time': 1536415996796,
      'values': {
        'power': 666740
      }
    },
    {
      'time': 1536415998798,
      'values': {
        'power': 665820
      }
    },
    {
      'time': 1536416000801,
      'values': {
        'power': 660060
      }
    },
    {
      'time': 1536416002803,
      'values': {
        'power': 652920
      }
    },
    {
      'time': 1536416004805,
      'values': {
        'power': 652210
      }
    },
    {
      'time': 1536416006807,
      'values': {
        'power': 656670
      }
    },
    {
      'time': 1536416008810,
      'values': {
        'power': 661140
      }
    },
    {
      'time': 1536416010810,
      'values': {
        'power': 664280
      }
    },
    {
      'time': 1536416012813,
      'values': {
        'power': 664880
      }
    },
    {
      'time': 1536416014814,
      'values': {
        'power': 661180
      }
    },
    {
      'time': 1536416016816,
      'values': {
        'power': 658180
      }
    },
    {
      'time': 1536416018819,
      'values': {
        'power': 659540
      }
    },
    {
      'time': 1536416020820,
      'values': {
        'power': 658840
      }
    },
    {
      'time': 1536416022822,
      'values': {
        'power': 656050
      }
    },
    {
      'time': 1536416024824,
      'values': {
        'power': 655650
      }
    },
    {
      'time': 1536416026826,
      'values': {
        'power': 658080
      }
    },
    {
      'time': 1536416028828,
      'values': {
        'power': 660370
      }
    },
    {
      'time': 1536416030830,
      'values': {
        'power': 660450
      }
    },
    {
      'time': 1536416032832,
      'values': {
        'power': 660730
      }
    },
    {
      'time': 1536416034834,
      'values': {
        'power': 662810
      }
    },
    {
      'time': 1536416036836,
      'values': {
        'power': 663480
      }
    },
    {
      'time': 1536416038839,
      'values': {
        'power': 661060
      }
    },
    {
      'time': 1536416040840,
      'values': {
        'power': 660220
      }
    },
    {
      'time': 1536416042841,
      'values': {
        'power': 658680
      }
    },
    {
      'time': 1536416044843,
      'values': {
        'power': 657460
      }
    },
    {
      'time': 1536416046846,
      'values': {
        'power': 657020
      }
    },
    {
      'time': 1536416048848,
      'values': {
        'power': 655740
      }
    },
    {
      'time': 1536416050849,
      'values': {
        'power': 652440
      }
    },
    {
      'time': 1536416052851,
      'values': {
        'power': 649200
      }
    },
    {
      'time': 1536416054854,
      'values': {
        'power': 651500
      }
    },
    {
      'time': 1536416056856,
      'values': {
        'power': 655970
      }
    },
    {
      'time': 1536416058858,
      'values': {
        'power': 658380
      }
    },
    {
      'time': 1536416060860,
      'values': {
        'power': 660180
      }
    },
    {
      'time': 1536416062862,
      'values': {
        'power': 658040
      }
    },
    {
      'time': 1536416064864,
      'values': {
        'power': 636560
      }
    },
    {
      'time': 1536416066865,
      'values': {
        'power': 616290
      }
    },
    {
      'time': 1536416068867,
      'values': {
        'power': 614820
      }
    },
    {
      'time': 1536416070869,
      'values': {
        'power': 617060
      }
    },
    {
      'time': 1536416072871,
      'values': {
        'power': 620310
      }
    },
    {
      'time': 1536416074873,
      'values': {
        'power': 622960
      }
    },
    {
      'time': 1536416076875,
      'values': {
        'power': 625670
      }
    },
    {
      'time': 1536416078877,
      'values': {
        'power': 626270
      }
    },
    {
      'time': 1536416080878,
      'values': {
        'power': 621640
      }
    },
    {
      'time': 1536416082881,
      'values': {
        'power': 618700
      }
    },
    {
      'time': 1536416084883,
      'values': {
        'power': 616560
      }
    },
    {
      'time': 1536416086885,
      'values': {
        'power': 613820
      }
    },
    {
      'time': 1536416088887,
      'values': {
        'power': 619330
      }
    },
    {
      'time': 1536416090889,
      'values': {
        'power': 627090
      }
    },
    {
      'time': 1536416092890,
      'values': {
        'power': 624910
      }
    },
    {
      'time': 1536416094892,
      'values': {
        'power': 622850
      }
    },
    {
      'time': 1536416096895,
      'values': {
        'power': 621860
      }
    },
    {
      'time': 1536416098897,
      'values': {
        'power': 620060
      }
    },
    {
      'time': 1536416100899,
      'values': {
        'power': 622250
      }
    },
    {
      'time': 1536416102901,
      'values': {
        'power': 622030
      }
    },
    {
      'time': 1536416104902,
      'values': {
        'power': 617640
      }
    },
    {
      'time': 1536416106905,
      'values': {
        'power': 615790
      }
    },
    {
      'time': 1536416108907,
      'values': {
        'power': 619640
      }
    },
    {
      'time': 1536416110908,
      'values': {
        'power': 625650
      }
    },
    {
      'time': 1536416112910,
      'values': {
        'power': 626340
      }
    },
    {
      'time': 1536416114913,
      'values': {
        'power': 621070
      }
    },
    {
      'time': 1536416116914,
      'values': {
        'power': 617980
      }
    },
    {
      'time': 1536416118916,
      'values': {
        'power': 616090
      }
    },
    {
      'time': 1536416120918,
      'values': {
        'power': 615640
      }
    },
    {
      'time': 1536416122920,
      'values': {
        'power': 618590
      }
    },
    {
      'time': 1536416124922,
      'values': {
        'power': 618020
      }
    },
    {
      'time': 1536416126924,
      'values': {
        'power': 614800
      }
    },
    {
      'time': 1536416128926,
      'values': {
        'power': 614950
      }
    },
    {
      'time': 1536416130928,
      'values': {
        'power': 617180
      }
    },
    {
      'time': 1536416132929,
      'values': {
        'power': 620160
      }
    },
    {
      'time': 1536416134931,
      'values': {
        'power': 623160
      }
    },
    {
      'time': 1536416136934,
      'values': {
        'power': 624000
      }
    },
    {
      'time': 1536416138936,
      'values': {
        'power': 622990
      }
    },
    {
      'time': 1536416140939,
      'values': {
        'power': 622220
      }
    },
    {
      'time': 1536416142940,
      'values': {
        'power': 623830
      }
    },
    {
      'time': 1536416144941,
      'values': {
        'power': 622950
      }
    },
    {
      'time': 1536416146943,
      'values': {
        'power': 619640
      }
    },
    {
      'time': 1536416148946,
      'values': {
        'power': 620040
      }
    },
    {
      'time': 1536416150948,
      'values': {
        'power': 624000
      }
    },
    {
      'time': 1536416152950,
      'values': {
        'power': 629030
      }
    },
    {
      'time': 1536416154952,
      'values': {
        'power': 630790
      }
    },
    {
      'time': 1536416156954,
      'values': {
        'power': 630880
      }
    },
    {
      'time': 1536416158956,
      'values': {
        'power': 631070
      }
    },
    {
      'time': 1536416160957,
      'values': {
        'power': 629910
      }
    },
    {
      'time': 1536416162959,
      'values': {
        'power': 626260
      }
    },
    {
      'time': 1536416164961,
      'values': {
        'power': 623510
      }
    },
    {
      'time': 1536416166963,
      'values': {
        'power': 623440
      }
    },
    {
      'time': 1536416168965,
      'values': {
        'power': 624510
      }
    },
    {
      'time': 1536416170966,
      'values': {
        'power': 621450
      }
    },
    {
      'time': 1536416172969,
      'values': {
        'power': 616060
      }
    },
    {
      'time': 1536416174971,
      'values': {
        'power': 614360
      }
    },
    {
      'time': 1536416176973,
      'values': {
        'power': 615980
      }
    },
    {
      'time': 1536416178975,
      'values': {
        'power': 618360
      }
    },
    {
      'time': 1536416180976,
      'values': {
        'power': 618990
      }
    },
    {
      'time': 1536416182979,
      'values': {
        'power': 620490
      }
    },
    {
      'time': 1536416184981,
      'values': {
        'power': 620700
      }
    },
    {
      'time': 1536416186984,
      'values': {
        'power': 620360
      }
    },
    {
      'time': 1536416188984,
      'values': {
        'power': 623590
      }
    },
    {
      'time': 1536416190987,
      'values': {
        'power': 625530
      }
    },
    {
      'time': 1536416192989,
      'values': {
        'power': 628360
      }
    },
    {
      'time': 1536416194990,
      'values': {
        'power': 632670
      }
    },
    {
      'time': 1536416196992,
      'values': {
        'power': 632930
      }
    },
    {
      'time': 1536416198995,
      'values': {
        'power': 630720
      }
    },
    {
      'time': 1536416200997,
      'values': {
        'power': 626030
      }
    },
    {
      'time': 1536416202999,
      'values': {
        'power': 621790
      }
    },
    {
      'time': 1536416205001,
      'values': {
        'power': 621600
      }
    },
    {
      'time': 1536416207003,
      'values': {
        'power': 623730
      }
    },
    {
      'time': 1536416209005,
      'values': {
        'power': 625840
      }
    },
    {
      'time': 1536416211008,
      'values': {
        'power': 624870
      }
    },
    {
      'time': 1536416213008,
      'values': {
        'power': 623190
      }
    },
    {
      'time': 1536416215010,
      'values': {
        'power': 623490
      }
    },
    {
      'time': 1536416217012,
      'values': {
        'power': 622090
      }
    },
    {
      'time': 1536416219014,
      'values': {
        'power': 619170
      }
    },
    {
      'time': 1536416221016,
      'values': {
        'power': 617060
      }
    },
    {
      'time': 1536416223017,
      'values': {
        'power': 612250
      }
    },
    {
      'time': 1536416225020,
      'values': {
        'power': 610640
      }
    },
    {
      'time': 1536416227022,
      'values': {
        'power': 615180
      }
    },
    {
      'time': 1536416229024,
      'values': {
        'power': 622270
      }
    },
    {
      'time': 1536416231026,
      'values': {
        'power': 626870
      }
    },
    {
      'time': 1536416233028,
      'values': {
        'power': 626440
      }
    },
    {
      'time': 1536416235030,
      'values': {
        'power': 627970
      }
    },
    {
      'time': 1536416237032,
      'values': {
        'power': 631330
      }
    },
    {
      'time': 1536416239034,
      'values': {
        'power': 629670
      }
    },
    {
      'time': 1536416241036,
      'values': {
        'power': 619970
      }
    },
    {
      'time': 1536416243039,
      'values': {
        'power': 613080
      }
    },
    {
      'time': 1536416245040,
      'values': {
        'power': 612220
      }
    },
    {
      'time': 1536416247041,
      'values': {
        'power': 613790
      }
    },
    {
      'time': 1536416249043,
      'values': {
        'power': 618600
      }
    },
    {
      'time': 1536416251046,
      'values': {
        'power': 621790
      }
    },
    {
      'time': 1536416253048,
      'values': {
        'power': 621330
      }
    },
    {
      'time': 1536416255050,
      'values': {
        'power': 620180
      }
    },
    {
      'time': 1536416257051,
      'values': {
        'power': 623210
      }
    },
    {
      'time': 1536416259053,
      'values': {
        'power': 625670
      }
    },
    {
      'time': 1536416261055,
      'values': {
        'power': 622890
      }
    },
    {
      'time': 1536416263057,
      'values': {
        'power': 618900
      }
    },
    {
      'time': 1536416265059,
      'values': {
        'power': 618280
      }
    },
    {
      'time': 1536416267061,
      'values': {
        'power': 618920
      }
    },
    {
      'time': 1536416269063,
      'values': {
        'power': 616830
      }
    },
    {
      'time': 1536416271067,
      'values': {
        'power': 615830
      }
    },
    {
      'time': 1536416273066,
      'values': {
        'power': 620240
      }
    },
    {
      'time': 1536416275069,
      'values': {
        'power': 623920
      }
    },
    {
      'time': 1536416277071,
      'values': {
        'power': 621790
      }
    },
    {
      'time': 1536416279073,
      'values': {
        'power': 617880
      }
    },
    {
      'time': 1536416281074,
      'values': {
        'power': 617340
      }
    },
    {
      'time': 1536416283077,
      'values': {
        'power': 616480
      }
    },
    {
      'time': 1536416285079,
      'values': {
        'power': 615400
      }
    },
    {
      'time': 1536416287081,
      'values': {
        'power': 617720
      }
    },
    {
      'time': 1536416289083,
      'values': {
        'power': 619310
      }
    },
    {
      'time': 1536416291085,
      'values': {
        'power': 617980
      }
    },
    {
      'time': 1536416293087,
      'values': {
        'power': 616590
      }
    },
    {
      'time': 1536416295090,
      'values': {
        'power': 618140
      }
    },
    {
      'time': 1536416297090,
      'values': {
        'power': 622250
      }
    },
    {
      'time': 1536416299092,
      'values': {
        'power': 617580
      }
    },
    {
      'time': 1536416301095,
      'values': {
        'power': 610390
      }
    },
    {
      'time': 1536416303097,
      'values': {
        'power': 610780
      }
    },
    {
      'time': 1536416305098,
      'values': {
        'power': 615810
      }
    },
    {
      'time': 1536416307100,
      'values': {
        'power': 621460
      }
    },
    {
      'time': 1536416309102,
      'values': {
        'power': 621420
      }
    },
    {
      'time': 1536416311104,
      'values': {
        'power': 619840
      }
    },
    {
      'time': 1536416313106,
      'values': {
        'power': 619860
      }
    },
    {
      'time': 1536416315107,
      'values': {
        'power': 620480
      }
    },
    {
      'time': 1536416317110,
      'values': {
        'power': 620740
      }
    },
    {
      'time': 1536416319112,
      'values': {
        'power': 618210
      }
    },
    {
      'time': 1536416321116,
      'values': {
        'power': 616750
      }
    },
    {
      'time': 1536416323116,
      'values': {
        'power': 617360
      }
    },
    {
      'time': 1536416325117,
      'values': {
        'power': 621780
      }
    },
    {
      'time': 1536416327119,
      'values': {
        'power': 627560
      }
    },
    {
      'time': 1536416329122,
      'values': {
        'power': 628310
      }
    },
    {
      'time': 1536416331124,
      'values': {
        'power': 628590
      }
    },
    {
      'time': 1536416333126,
      'values': {
        'power': 629420
      }
    },
    {
      'time': 1536416335128,
      'values': {
        'power': 629690
      }
    },
    {
      'time': 1536416337130,
      'values': {
        'power': 625190
      }
    },
    {
      'time': 1536416339132,
      'values': {
        'power': 620140
      }
    },
    {
      'time': 1536416341134,
      'values': {
        'power': 619630
      }
    },
    {
      'time': 1536416343136,
      'values': {
        'power': 620660
      }
    },
    {
      'time': 1536416345138,
      'values': {
        'power': 621740
      }
    },
    {
      'time': 1536416347140,
      'values': {
        'power': 622820
      }
    },
    {
      'time': 1536416349142,
      'values': {
        'power': 625010
      }
    },
    {
      'time': 1536416351143,
      'values': {
        'power': 625260
      }
    },
    {
      'time': 1536416353145,
      'values': {
        'power': 623300
      }
    },
    {
      'time': 1536416355148,
      'values': {
        'power': 623220
      }
    },
    {
      'time': 1536416357149,
      'values': {
        'power': 620750
      }
    },
    {
      'time': 1536416359151,
      'values': {
        'power': 614130
      }
    },
    {
      'time': 1536416361153,
      'values': {
        'power': 611550
      }
    },
    {
      'time': 1536416363155,
      'values': {
        'power': 614270
      }
    },
    {
      'time': 1536416365157,
      'values': {
        'power': 618930
      }
    },
    {
      'time': 1536416367159,
      'values': {
        'power': 618820
      }
    },
    {
      'time': 1536416369161,
      'values': {
        'power': 615700
      }
    },
    {
      'time': 1536416371163,
      'values': {
        'power': 615830
      }
    },
    {
      'time': 1536416373165,
      'values': {
        'power': 617170
      }
    },
    {
      'time': 1536416375166,
      'values': {
        'power': 618920
      }
    },
    {
      'time': 1536416377170,
      'values': {
        'power': 618810
      }
    },
    {
      'time': 1536416379171,
      'values': {
        'power': 614480
      }
    },
    {
      'time': 1536416381172,
      'values': {
        'power': 611190
      }
    },
    {
      'time': 1536416383174,
      'values': {
        'power': 612790
      }
    },
    {
      'time': 1536416385177,
      'values': {
        'power': 615020
      }
    },
    {
      'time': 1536416387179,
      'values': {
        'power': 615080
      }
    },
    {
      'time': 1536416389181,
      'values': {
        'power': 614840
      }
    },
    {
      'time': 1536416391183,
      'values': {
        'power': 615370
      }
    },
    {
      'time': 1536416393185,
      'values': {
        'power': 616090
      }
    },
    {
      'time': 1536416395187,
      'values': {
        'power': 616970
      }
    },
    {
      'time': 1536416397189,
      'values': {
        'power': 617120
      }
    },
    {
      'time': 1536416399190,
      'values': {
        'power': 616520
      }
    },
    {
      'time': 1536416401192,
      'values': {
        'power': 613090
      }
    },
    {
      'time': 1536416403194,
      'values': {
        'power': 610070
      }
    },
    {
      'time': 1536416405198,
      'values': {
        'power': 611180
      }
    },
    {
      'time': 1536416407197,
      'values': {
        'power': 613560
      }
    },
    {
      'time': 1536416409200,
      'values': {
        'power': 615040
      }
    },
    {
      'time': 1536416411202,
      'values': {
        'power': 614240
      }
    },
    {
      'time': 1536416413205,
      'values': {
        'power': 613650
      }
    },
    {
      'time': 1536416415205,
      'values': {
        'power': 615740
      }
    },
    {
      'time': 1536416417208,
      'values': {
        'power': 617080
      }
    },
    {
      'time': 1536416419210,
      'values': {
        'power': 613260
      }
    },
    {
      'time': 1536416421212,
      'values': {
        'power': 606480
      }
    },
    {
      'time': 1536416423214,
      'values': {
        'power': 605550
      }
    },
    {
      'time': 1536416425217,
      'values': {
        'power': 610510
      }
    },
    {
      'time': 1536416427217,
      'values': {
        'power': 613440
      }
    },
    {
      'time': 1536416429220,
      'values': {
        'power': 611880
      }
    },
    {
      'time': 1536416431222,
      'values': {
        'power': 611050
      }
    },
    {
      'time': 1536416433224,
      'values': {
        'power': 613340
      }
    },
    {
      'time': 1536416435225,
      'values': {
        'power': 615780
      }
    },
    {
      'time': 1536416437228,
      'values': {
        'power': 617820
      }
    },
    {
      'time': 1536416439230,
      'values': {
        'power': 614470
      }
    },
    {
      'time': 1536416441232,
      'values': {
        'power': 608450
      }
    },
    {
      'time': 1536416443234,
      'values': {
        'power': 605960
      }
    },
    {
      'time': 1536416445236,
      'values': {
        'power': 608380
      }
    },
    {
      'time': 1536416447239,
      'values': {
        'power': 613840
      }
    },
    {
      'time': 1536416449239,
      'values': {
        'power': 616660
      }
    },
    {
      'time': 1536416451241,
      'values': {
        'power': 614550
      }
    },
    {
      'time': 1536416453243,
      'values': {
        'power': 613700
      }
    },
    {
      'time': 1536416455245,
      'values': {
        'power': 616070
      }
    },
    {
      'time': 1536416457247,
      'values': {
        'power': 616600
      }
    },
    {
      'time': 1536416459249,
      'values': {
        'power': 614940
      }
    },
    {
      'time': 1536416461250,
      'values': {
        'power': 612760
      }
    },
    {
      'time': 1536416463252,
      'values': {
        'power': 610040
      }
    },
    {
      'time': 1536416465255,
      'values': {
        'power': 608730
      }
    },
    {
      'time': 1536416467257,
      'values': {
        'power': 611200
      }
    },
    {
      'time': 1536416469259,
      'values': {
        'power': 615200
      }
    },
    {
      'time': 1536416471261,
      'values': {
        'power': 615630
      }
    },
    {
      'time': 1536416473263,
      'values': {
        'power': 614230
      }
    },
    {
      'time': 1536416475265,
      'values': {
        'power': 614930
      }
    },
    {
      'time': 1536416477266,
      'values': {
        'power': 614430
      }
    },
    {
      'time': 1536416479269,
      'values': {
        'power': 606610
      }
    },
    {
      'time': 1536416481270,
      'values': {
        'power': 598330
      }
    },
    {
      'time': 1536416483272,
      'values': {
        'power': 597770
      }
    },
    {
      'time': 1536416485275,
      'values': {
        'power': 603800
      }
    },
    {
      'time': 1536416487276,
      'values': {
        'power': 606750
      }
    },
    {
      'time': 1536416489278,
      'values': {
        'power': 606160
      }
    },
    {
      'time': 1536416491281,
      'values': {
        'power': 605130
      }
    },
    {
      'time': 1536416493282,
      'values': {
        'power': 605430
      }
    },
    {
      'time': 1536416495284,
      'values': {
        'power': 606430
      }
    },
    {
      'time': 1536416497286,
      'values': {
        'power': 606610
      }
    },
    {
      'time': 1536416499288,
      'values': {
        'power': 601270
      }
    },
    {
      'time': 1536416501290,
      'values': {
        'power': 595100
      }
    },
    {
      'time': 1536416503292,
      'values': {
        'power': 596090
      }
    },
    {
      'time': 1536416505293,
      'values': {
        'power': 602180
      }
    },
    {
      'time': 1536416507296,
      'values': {
        'power': 605740
      }
    },
    {
      'time': 1536416509298,
      'values': {
        'power': 605000
      }
    },
    {
      'time': 1536416511300,
      'values': {
        'power': 604680
      }
    },
    {
      'time': 1536416513303,
      'values': {
        'power': 606120
      }
    },
    {
      'time': 1536416515303,
      'values': {
        'power': 607590
      }
    },
    {
      'time': 1536416517305,
      'values': {
        'power': 603860
      }
    },
    {
      'time': 1536416519308,
      'values': {
        'power': 595570
      }
    },
    {
      'time': 1536416521310,
      'values': {
        'power': 576870
      }
    },
    {
      'time': 1536416523312,
      'values': {
        'power': 688700
      }
    },
    {
      'time': 1536416525314,
      'values': {
        'power': 716910
      }
    },
    {
      'time': 1536416527316,
      'values': {
        'power': 614500
      }
    },
    {
      'time': 1536416529317,
      'values': {
        'power': 608030
      }
    },
    {
      'time': 1536416531319,
      'values': {
        'power': 604840
      }
    },
    {
      'time': 1536416533322,
      'values': {
        'power': 603900
      }
    },
    {
      'time': 1536416535324,
      'values': {
        'power': 603640
      }
    },
    {
      'time': 1536416537326,
      'values': {
        'power': 599280
      }
    },
    {
      'time': 1536416539328,
      'values': {
        'power': 595840
      }
    },
    {
      'time': 1536416541329,
      'values': {
        'power': 598960
      }
    },
    {
      'time': 1536416543331,
      'values': {
        'power': 605910
      }
    },
    {
      'time': 1536416545333,
      'values': {
        'power': 609000
      }
    },
    {
      'time': 1536416547335,
      'values': {
        'power': 606950
      }
    },
    {
      'time': 1536416549337,
      'values': {
        'power': 605640
      }
    },
    {
      'time': 1536416551340,
      'values': {
        'power': 605920
      }
    },
    {
      'time': 1536416553342,
      'values': {
        'power': 670030
      }
    },
    {
      'time': 1536416555342,
      'values': {
        'power': 770030
      }
    },
    {
      'time': 1536416557345,
      'values': {
        'power': 728100
      }
    },
    {
      'time': 1536416559347,
      'values': {
        'power': 648230
      }
    },
    {
      'time': 1536416561349,
      'values': {
        'power': 646140
      }
    },
    {
      'time': 1536416563351,
      'values': {
        'power': 648740
      }
    },
    {
      'time': 1536416565353,
      'values': {
        'power': 652540
      }
    },
    {
      'time': 1536416567355,
      'values': {
        'power': 652850
      }
    },
    {
      'time': 1536416569356,
      'values': {
        'power': 649580
      }
    },
    {
      'time': 1536416571358,
      'values': {
        'power': 648200
      }
    },
    {
      'time': 1536416573361,
      'values': {
        'power': 651160
      }
    },
    {
      'time': 1536416575363,
      'values': {
        'power': 651790
      }
    },
    {
      'time': 1536416577365,
      'values': {
        'power': 647540
      }
    },
    {
      'time': 1536416579367,
      'values': {
        'power': 645300
      }
    },
    {
      'time': 1536416581369,
      'values': {
        'power': 647960
      }
    },
    {
      'time': 1536416583370,
      'values': {
        'power': 651610
      }
    },
    {
      'time': 1536416585372,
      'values': {
        'power': 653400
      }
    },
    {
      'time': 1536416587374,
      'values': {
        'power': 653890
      }
    },
    {
      'time': 1536416589376,
      'values': {
        'power': 654050
      }
    },
    {
      'time': 1536416591378,
      'values': {
        'power': 652100
      }
    },
    {
      'time': 1536416593380,
      'values': {
        'power': 650550
      }
    },
    {
      'time': 1536416595382,
      'values': {
        'power': 648560
      }
    },
    {
      'time': 1536416597384,
      'values': {
        'power': 647270
      }
    },
    {
      'time': 1536416599385,
      'values': {
        'power': 645530
      }
    },
    {
      'time': 1536416601388,
      'values': {
        'power': 647190
      }
    },
    {
      'time': 1536416603390,
      'values': {
        'power': 651730
      }
    },
    {
      'time': 1536416605392,
      'values': {
        'power': 653140
      }
    },
    {
      'time': 1536416607393,
      'values': {
        'power': 653990
      }
    },
    {
      'time': 1536416609396,
      'values': {
        'power': 648230
      }
    },
    {
      'time': 1536416611398,
      'values': {
        'power': 619470
      }
    },
    {
      'time': 1536416613400,
      'values': {
        'power': 589760
      }
    },
    {
      'time': 1536416615404,
      'values': {
        'power': 582310
      }
    },
    {
      'time': 1536416617403,
      'values': {
        'power': 581700
      }
    },
    {
      'time': 1536416619406,
      'values': {
        'power': 586740
      }
    },
    {
      'time': 1536416621408,
      'values': {
        'power': 581020
      }
    },
    {
      'time': 1536416623411,
      'values': {
        'power': 548150
      }
    },
    {
      'time': 1536416625411,
      'values': {
        'power': 520900
      }
    },
    {
      'time': 1536416627414,
      'values': {
        'power': 518420
      }
    },
    {
      'time': 1536416629416,
      'values': {
        'power': 519220
      }
    },
    {
      'time': 1536416631417,
      'values': {
        'power': 519010
      }
    },
    {
      'time': 1536416633419,
      'values': {
        'power': 515640
      }
    },
    {
      'time': 1536416635421,
      'values': {
        'power': 508730
      }
    },
    {
      'time': 1536416637423,
      'values': {
        'power': 504750
      }
    },
    {
      'time': 1536416639425,
      'values': {
        'power': 513090
      }
    },
    {
      'time': 1536416641427,
      'values': {
        'power': 525710
      }
    },
    {
      'time': 1536416643429,
      'values': {
        'power': 528220
      }
    },
    {
      'time': 1536416645431,
      'values': {
        'power': 524680
      }
    },
    {
      'time': 1536416647433,
      'values': {
        'power': 523070
      }
    },
    {
      'time': 1536416649426,
      'values': {
        'power': 523620
      }
    },
    {
      'time': 1536416651426,
      'values': {
        'power': 524390
      }
    },
    {
      'time': 1536416653428,
      'values': {
        'power': 526250
      }
    },
    {
      'time': 1536416655430,
      'values': {
        'power': 527770
      }
    },
    {
      'time': 1536416657431,
      'values': {
        'power': 523900
      }
    },
    {
      'time': 1536416659433,
      'values': {
        'power': 517890
      }
    },
    {
      'time': 1536416661436,
      'values': {
        'power': 516230
      }
    },
    {
      'time': 1536416663438,
      'values': {
        'power': 519430
      }
    },
    {
      'time': 1536416665440,
      'values': {
        'power': 519660
      }
    },
    {
      'time': 1536416667442,
      'values': {
        'power': 517910
      }
    },
    {
      'time': 1536416669444,
      'values': {
        'power': 519680
      }
    },
    {
      'time': 1536416671446,
      'values': {
        'power': 522550
      }
    },
    {
      'time': 1536416673448,
      'values': {
        'power': 527540
      }
    },
    {
      'time': 1536416675450,
      'values': {
        'power': 528390
      }
    },
    {
      'time': 1536416677452,
      'values': {
        'power': 522530
      }
    },
    {
      'time': 1536416679454,
      'values': {
        'power': 519060
      }
    },
    {
      'time': 1536416681458,
      'values': {
        'power': 519710
      }
    },
    {
      'time': 1536416683457,
      'values': {
        'power': 519650
      }
    },
    {
      'time': 1536416685459,
      'values': {
        'power': 517420
      }
    },
    {
      'time': 1536416687461,
      'values': {
        'power': 515670
      }
    },
    {
      'time': 1536416689463,
      'values': {
        'power': 516850
      }
    },
    {
      'time': 1536416691465,
      'values': {
        'power': 521090
      }
    },
    {
      'time': 1536416693467,
      'values': {
        'power': 522560
      }
    },
    {
      'time': 1536416695469,
      'values': {
        'power': 513410
      }
    },
    {
      'time': 1536416697471,
      'values': {
        'power': 503650
      }
    },
    {
      'time': 1536416699473,
      'values': {
        'power': 501090
      }
    },
    {
      'time': 1536416701475,
      'values': {
        'power': 503420
      }
    },
    {
      'time': 1536416703477,
      'values': {
        'power': 507980
      }
    },
    {
      'time': 1536416705479,
      'values': {
        'power': 510660
      }
    },
    {
      'time': 1536416707480,
      'values': {
        'power': 511000
      }
    },
    {
      'time': 1536416709482,
      'values': {
        'power': 511210
      }
    },
    {
      'time': 1536416711485,
      'values': {
        'power': 508850
      }
    },
    {
      'time': 1536416713487,
      'values': {
        'power': 504260
      }
    },
    {
      'time': 1536416715489,
      'values': {
        'power': 501040
      }
    },
    {
      'time': 1536416717490,
      'values': {
        'power': 499690
      }
    },
    {
      'time': 1536416719492,
      'values': {
        'power': 503770
      }
    },
    {
      'time': 1536416721495,
      'values': {
        'power': 512730
      }
    },
    {
      'time': 1536416723497,
      'values': {
        'power': 514990
      }
    },
    {
      'time': 1536416725499,
      'values': {
        'power': 511950
      }
    },
    {
      'time': 1536416727501,
      'values': {
        'power': 508150
      }
    },
    {
      'time': 1536416729503,
      'values': {
        'power': 506860
      }
    },
    {
      'time': 1536416731506,
      'values': {
        'power': 507790
      }
    },
    {
      'time': 1536416733506,
      'values': {
        'power': 507220
      }
    },
    {
      'time': 1536416735508,
      'values': {
        'power': 503400
      }
    },
    {
      'time': 1536416737510,
      'values': {
        'power': 500510
      }
    },
    {
      'time': 1536416739512,
      'values': {
        'power': 504180
      }
    },
    {
      'time': 1536416741514,
      'values': {
        'power': 508130
      }
    },
    {
      'time': 1536416743516,
      'values': {
        'power': 507410
      }
    },
    {
      'time': 1536416745518,
      'values': {
        'power': 506540
      }
    },
    {
      'time': 1536416747520,
      'values': {
        'power': 505680
      }
    },
    {
      'time': 1536416749522,
      'values': {
        'power': 507140
      }
    },
    {
      'time': 1536416751523,
      'values': {
        'power': 509190
      }
    },
    {
      'time': 1536416753525,
      'values': {
        'power': 506720
      }
    },
    {
      'time': 1536416755528,
      'values': {
        'power': 502650
      }
    },
    {
      'time': 1536416757532,
      'values': {
        'power': 500600
      }
    },
    {
      'time': 1536416759532,
      'values': {
        'power': 500490
      }
    },
    {
      'time': 1536416761533,
      'values': {
        'power': 500470
      }
    },
    {
      'time': 1536416763535,
      'values': {
        'power': 504090
      }
    },
    {
      'time': 1536416765538,
      'values': {
        'power': 508180
      }
    },
    {
      'time': 1536416767540,
      'values': {
        'power': 507260
      }
    },
    {
      'time': 1536416769542,
      'values': {
        'power': 503680
      }
    },
    {
      'time': 1536416771544,
      'values': {
        'power': 497500
      }
    },
    {
      'time': 1536416773546,
      'values': {
        'power': 494740
      }
    },
    {
      'time': 1536416775548,
      'values': {
        'power': 499810
      }
    },
    {
      'time': 1536416777550,
      'values': {
        'power': 507670
      }
    },
    {
      'time': 1536416779552,
      'values': {
        'power': 510510
      }
    },
    {
      'time': 1536416781555,
      'values': {
        'power': 507330
      }
    },
    {
      'time': 1536416783557,
      'values': {
        'power': 505540
      }
    },
    {
      'time': 1536416785557,
      'values': {
        'power': 505910
      }
    },
    {
      'time': 1536416787559,
      'values': {
        'power': 505380
      }
    },
    {
      'time': 1536416789561,
      'values': {
        'power': 502910
      }
    },
    {
      'time': 1536416791563,
      'values': {
        'power': 500540
      }
    },
    {
      'time': 1536416793565,
      'values': {
        'power': 499910
      }
    },
    {
      'time': 1536416795567,
      'values': {
        'power': 501990
      }
    },
    {
      'time': 1536416797569,
      'values': {
        'power': 505660
      }
    },
    {
      'time': 1536416799571,
      'values': {
        'power': 505910
      }
    },
    {
      'time': 1536416801573,
      'values': {
        'power': 504200
      }
    },
    {
      'time': 1536416803575,
      'values': {
        'power': 504650
      }
    },
    {
      'time': 1536416805577,
      'values': {
        'power': 505530
      }
    },
    {
      'time': 1536416807579,
      'values': {
        'power': 505130
      }
    },
    {
      'time': 1536416809582,
      'values': {
        'power': 503110
      }
    },
    {
      'time': 1536416811582,
      'values': {
        'power': 501190
      }
    },
    {
      'time': 1536416813585,
      'values': {
        'power': 500920
      }
    },
    {
      'time': 1536416815587,
      'values': {
        'power': 502070
      }
    },
    {
      'time': 1536416817589,
      'values': {
        'power': 504750
      }
    },
    {
      'time': 1536416819591,
      'values': {
        'power': 508820
      }
    },
    {
      'time': 1536416821592,
      'values': {
        'power': 513190
      }
    },
    {
      'time': 1536416823595,
      'values': {
        'power': 511880
      }
    },
    {
      'time': 1536416825597,
      'values': {
        'power': 509270
      }
    },
    {
      'time': 1536416827599,
      'values': {
        'power': 510310
      }
    },
    {
      'time': 1536416829600,
      'values': {
        'power': 510590
      }
    },
    {
      'time': 1536416831602,
      'values': {
        'power': 509760
      }
    },
    {
      'time': 1536416833604,
      'values': {
        'power': 509490
      }
    },
    {
      'time': 1536416835606,
      'values': {
        'power': 509450
      }
    },
    {
      'time': 1536416837607,
      'values': {
        'power': 507930
      }
    },
    {
      'time': 1536416839610,
      'values': {
        'power': 505790
      }
    },
    {
      'time': 1536416841614,
      'values': {
        'power': 508100
      }
    },
    {
      'time': 1536416843613,
      'values': {
        'power': 510120
      }
    },
    {
      'time': 1536416845616,
      'values': {
        'power': 508230
      }
    },
    {
      'time': 1536416847618,
      'values': {
        'power': 506640
      }
    },
    {
      'time': 1536416849620,
      'values': {
        'power': 508080
      }
    },
    {
      'time': 1536416851622,
      'values': {
        'power': 510970
      }
    },
    {
      'time': 1536416853623,
      'values': {
        'power': 508930
      }
    },
    {
      'time': 1536416855625,
      'values': {
        'power': 502240
      }
    },
    {
      'time': 1536416857628,
      'values': {
        'power': 499170
      }
    },
    {
      'time': 1536416859630,
      'values': {
        'power': 501580
      }
    },
    {
      'time': 1536416861631,
      'values': {
        'power': 505950
      }
    },
    {
      'time': 1536416863633,
      'values': {
        'power': 505810
      }
    },
    {
      'time': 1536416865636,
      'values': {
        'power': 505880
      }
    },
    {
      'time': 1536416867638,
      'values': {
        'power': 507120
      }
    },
    {
      'time': 1536416869639,
      'values': {
        'power': 504880
      }
    },
    {
      'time': 1536416871641,
      'values': {
        'power': 500980
      }
    },
    {
      'time': 1536416873644,
      'values': {
        'power': 494170
      }
    },
    {
      'time': 1536416875645,
      'values': {
        'power': 477570
      }
    },
    {
      'time': 1536416877647,
      'values': {
        'power': 468280
      }
    },
    {
      'time': 1536416879649,
      'values': {
        'power': 468920
      }
    },
    {
      'time': 1536416881651,
      'values': {
        'power': 467800
      }
    },
    {
      'time': 1536416883653,
      'values': {
        'power': 469530
      }
    },
    {
      'time': 1536416885658,
      'values': {
        'power': 470600
      }
    },
    {
      'time': 1536416887656,
      'values': {
        'power': 470120
      }
    },
    {
      'time': 1536416889658,
      'values': {
        'power': 470020
      }
    },
    {
      'time': 1536416891661,
      'values': {
        'power': 466540
      }
    },
    {
      'time': 1536416893663,
      'values': {
        'power': 464460
      }
    },
    {
      'time': 1536416895665,
      'values': {
        'power': 467350
      }
    },
    {
      'time': 1536416897666,
      'values': {
        'power': 470570
      }
    },
    {
      'time': 1536416899668,
      'values': {
        'power': 471510
      }
    },
    {
      'time': 1536416901671,
      'values': {
        'power': 470280
      }
    },
    {
      'time': 1536416903673,
      'values': {
        'power': 469920
      }
    },
    {
      'time': 1536416905675,
      'values': {
        'power': 468380
      }
    },
    {
      'time': 1536416907677,
      'values': {
        'power': 466330
      }
    },
    {
      'time': 1536416909679,
      'values': {
        'power': 466630
      }
    },
    {
      'time': 1536416911681,
      'values': {
        'power': 467540
      }
    },
    {
      'time': 1536416913682,
      'values': {
        'power': 465010
      }
    },
    {
      'time': 1536416915684,
      'values': {
        'power': 460150
      }
    },
    {
      'time': 1536416917687,
      'values': {
        'power': 459490
      }
    },
    {
      'time': 1536416919690,
      'values': {
        'power': 460340
      }
    },
    {
      'time': 1536416921690,
      'values': {
        'power': 460160
      }
    },
    {
      'time': 1536416923693,
      'values': {
        'power': 461330
      }
    },
    {
      'time': 1536416925694,
      'values': {
        'power': 464490
      }
    },
    {
      'time': 1536416927696,
      'values': {
        'power': 466730
      }
    },
    {
      'time': 1536416929698,
      'values': {
        'power': 466900
      }
    },
    {
      'time': 1536416931700,
      'values': {
        'power': 470070
      }
    },
    {
      'time': 1536416933702,
      'values': {
        'power': 472080
      }
    },
    {
      'time': 1536416935704,
      'values': {
        'power': 470580
      }
    },
    {
      'time': 1536416937707,
      'values': {
        'power': 469630
      }
    },
    {
      'time': 1536416939708,
      'values': {
        'power': 466320
      }
    },
    {
      'time': 1536416941710,
      'values': {
        'power': 465610
      }
    },
    {
      'time': 1536416943712,
      'values': {
        'power': 467830
      }
    },
    {
      'time': 1536416945714,
      'values': {
        'power': 469710
      }
    },
    {
      'time': 1536416947716,
      'values': {
        'power': 462550
      }
    },
    {
      'time': 1536416949718,
      'values': {
        'power': 436540
      }
    },
    {
      'time': 1536416951720,
      'values': {
        'power': 417260
      }
    },
    {
      'time': 1536416953721,
      'values': {
        'power': 416740
      }
    },
    {
      'time': 1536416955723,
      'values': {
        'power': 420400
      }
    },
    {
      'time': 1536416957726,
      'values': {
        'power': 424840
      }
    },
    {
      'time': 1536416959728,
      'values': {
        'power': 426480
      }
    },
    {
      'time': 1536416961730,
      'values': {
        'power': 424100
      }
    },
    {
      'time': 1536416963731,
      'values': {
        'power': 419440
      }
    },
    {
      'time': 1536416965734,
      'values': {
        'power': 416870
      }
    },
    {
      'time': 1536416967736,
      'values': {
        'power': 418350
      }
    },
    {
      'time': 1536416969737,
      'values': {
        'power': 422860
      }
    },
    {
      'time': 1536416971739,
      'values': {
        'power': 425740
      }
    },
    {
      'time': 1536416973741,
      'values': {
        'power': 425430
      }
    },
    {
      'time': 1536416975743,
      'values': {
        'power': 424640
      }
    },
    {
      'time': 1536416977745,
      'values': {
        'power': 424610
      }
    },
    {
      'time': 1536416979746,
      'values': {
        'power': 424210
      }
    },
    {
      'time': 1536416981748,
      'values': {
        'power': 421510
      }
    },
    {
      'time': 1536416983751,
      'values': {
        'power': 418400
      }
    },
    {
      'time': 1536416985753,
      'values': {
        'power': 417520
      }
    },
    {
      'time': 1536416987755,
      'values': {
        'power': 420590
      }
    },
    {
      'time': 1536416989756,
      'values': {
        'power': 425280
      }
    },
    {
      'time': 1536416991758,
      'values': {
        'power': 428270
      }
    },
    {
      'time': 1536416993761,
      'values': {
        'power': 425680
      }
    },
    {
      'time': 1536416995763,
      'values': {
        'power': 420930
      }
    },
    {
      'time': 1536416997765,
      'values': {
        'power': 421610
      }
    },
    {
      'time': 1536416999767,
      'values': {
        'power': 423090
      }
    },
    {
      'time': 1536417001769,
      'values': {
        'power': 418960
      }
    },
    {
      'time': 1536417003771,
      'values': {
        'power': 416820
      }
    },
    {
      'time': 1536417005772,
      'values': {
        'power': 419490
      }
    },
    {
      'time': 1536417007774,
      'values': {
        'power': 423020
      }
    },
    {
      'time': 1536417009777,
      'values': {
        'power': 424940
      }
    },
    {
      'time': 1536417011779,
      'values': {
        'power': 424420
      }
    },
    {
      'time': 1536417013781,
      'values': {
        'power': 411180
      }
    },
    {
      'time': 1536417015782,
      'values': {
        'power': 394000
      }
    },
    {
      'time': 1536417017784,
      'values': {
        'power': 389260
      }
    },
    {
      'time': 1536417019786,
      'values': {
        'power': 388260
      }
    },
    {
      'time': 1536417021788,
      'values': {
        'power': 392730
      }
    },
    {
      'time': 1536417023790,
      'values': {
        'power': 400070
      }
    },
    {
      'time': 1536417025792,
      'values': {
        'power': 410420
      }
    },
    {
      'time': 1536417027794,
      'values': {
        'power': 424190
      }
    },
    {
      'time': 1536417029796,
      'values': {
        'power': 433010
      }
    },
    {
      'time': 1536417031798,
      'values': {
        'power': 433780
      }
    },
    {
      'time': 1536417033799,
      'values': {
        'power': 432770
      }
    },
    {
      'time': 1536417035801,
      'values': {
        'power': 428980
      }
    },
    {
      'time': 1536417037804,
      'values': {
        'power': 424890
      }
    },
    {
      'time': 1536417039806,
      'values': {
        'power': 421670
      }
    },
    {
      'time': 1536417041807,
      'values': {
        'power': 419920
      }
    },
    {
      'time': 1536417043809,
      'values': {
        'power': 423730
      }
    },
    {
      'time': 1536417045812,
      'values': {
        'power': 428710
      }
    },
    {
      'time': 1536417047814,
      'values': {
        'power': 430150
      }
    },
    {
      'time': 1536417049816,
      'values': {
        'power': 422620
      }
    },
    {
      'time': 1536417051818,
      'values': {
        'power': 407000
      }
    },
    {
      'time': 1536417053820,
      'values': {
        'power': 398330
      }
    },
    {
      'time': 1536417055821,
      'values': {
        'power': 397490
      }
    },
    {
      'time': 1536417057824,
      'values': {
        'power': 393190
      }
    },
    {
      'time': 1536417059826,
      'values': {
        'power': 391830
      }
    },
    {
      'time': 1536417061827,
      'values': {
        'power': 406160
      }
    },
    {
      'time': 1536417063830,
      'values': {
        'power': 423690
      }
    },
    {
      'time': 1536417065833,
      'values': {
        'power': 429380
      }
    },
    {
      'time': 1536417067833,
      'values': {
        'power': 430310
      }
    },
    {
      'time': 1536417069835,
      'values': {
        'power': 432400
      }
    },
    {
      'time': 1536417071837,
      'values': {
        'power': 434430
      }
    },
    {
      'time': 1536417073839,
      'values': {
        'power': 434330
      }
    },
    {
      'time': 1536417075841,
      'values': {
        'power': 431970
      }
    },
    {
      'time': 1536417077843,
      'values': {
        'power': 428710
      }
    },
    {
      'time': 1536417079845,
      'values': {
        'power': 426580
      }
    },
    {
      'time': 1536417081848,
      'values': {
        'power': 430260
      }
    },
    {
      'time': 1536417083849,
      'values': {
        'power': 434040
      }
    },
    {
      'time': 1536417085852,
      'values': {
        'power': 434490
      }
    },
    {
      'time': 1536417087853,
      'values': {
        'power': 449170
      }
    },
    {
      'time': 1536417089855,
      'values': {
        'power': 469110
      }
    },
    {
      'time': 1536417091856,
      'values': {
        'power': 476790
      }
    },
    {
      'time': 1536417093858,
      'values': {
        'power': 472000
      }
    },
    {
      'time': 1536417095861,
      'values': {
        'power': 462390
      }
    },
    {
      'time': 1536417097863,
      'values': {
        'power': 456300
      }
    },
    {
      'time': 1536417099865,
      'values': {
        'power': 456630
      }
    },
    {
      'time': 1536417101867,
      'values': {
        'power': 460760
      }
    },
    {
      'time': 1536417103869,
      'values': {
        'power': 463330
      }
    },
    {
      'time': 1536417105871,
      'values': {
        'power': 463070
      }
    },
    {
      'time': 1536417107873,
      'values': {
        'power': 464240
      }
    },
    {
      'time': 1536417109875,
      'values': {
        'power': 467380
      }
    },
    {
      'time': 1536417111876,
      'values': {
        'power': 472140
      }
    },
    {
      'time': 1536417113878,
      'values': {
        'power': 476150
      }
    },
    {
      'time': 1536417115880,
      'values': {
        'power': 481890
      }
    },
    {
      'time': 1536417117882,
      'values': {
        'power': 475300
      }
    },
    {
      'time': 1536417119884,
      'values': {
        'power': 461680
      }
    },
    {
      'time': 1536417121886,
      'values': {
        'power': 460850
      }
    },
    {
      'time': 1536417123888,
      'values': {
        'power': 461100
      }
    },
    {
      'time': 1536417125889,
      'values': {
        'power': 456910
      }
    },
    {
      'time': 1536417127892,
      'values': {
        'power': 456240
      }
    },
    {
      'time': 1536417129894,
      'values': {
        'power': 458360
      }
    },
    {
      'time': 1536417131896,
      'values': {
        'power': 460550
      }
    },
    {
      'time': 1536417133898,
      'values': {
        'power': 461330
      }
    },
    {
      'time': 1536417135900,
      'values': {
        'power': 458560
      }
    },
    {
      'time': 1536417137902,
      'values': {
        'power': 454410
      }
    },
    {
      'time': 1536417139904,
      'values': {
        'power': 452830
      }
    },
    {
      'time': 1536417141909,
      'values': {
        'power': 453740
      }
    },
    {
      'time': 1536417143907,
      'values': {
        'power': 457940
      }
    },
    {
      'time': 1536417145909,
      'values': {
        'power': 461010
      }
    },
    {
      'time': 1536417147912,
      'values': {
        'power': 466120
      }
    },
    {
      'time': 1536417149914,
      'values': {
        'power': 470430
      }
    },
    {
      'time': 1536417151916,
      'values': {
        'power': 465640
      }
    },
    {
      'time': 1536417153918,
      'values': {
        'power': 458980
      }
    },
    {
      'time': 1536417155919,
      'values': {
        'power': 453830
      }
    },
    {
      'time': 1536417157921,
      'values': {
        'power': 450200
      }
    },
    {
      'time': 1536417159923,
      'values': {
        'power': 448590
      }
    },
    {
      'time': 1536417161925,
      'values': {
        'power': 450170
      }
    },
    {
      'time': 1536417163927,
      'values': {
        'power': 453780
      }
    },
    {
      'time': 1536417165929,
      'values': {
        'power': 458330
      }
    },
    {
      'time': 1536417167932,
      'values': {
        'power': 459580
      }
    },
    {
      'time': 1536417169933,
      'values': {
        'power': 459050
      }
    },
    {
      'time': 1536417171934,
      'values': {
        'power': 459390
      }
    },
    {
      'time': 1536417173937,
      'values': {
        'power': 459420
      }
    },
    {
      'time': 1536417175939,
      'values': {
        'power': 458970
      }
    },
    {
      'time': 1536417177941,
      'values': {
        'power': 455720
      }
    },
    {
      'time': 1536417179943,
      'values': {
        'power': 450970
      }
    },
    {
      'time': 1536417181945,
      'values': {
        'power': 450820
      }
    },
    {
      'time': 1536417183947,
      'values': {
        'power': 455890
      }
    },
    {
      'time': 1536417185949,
      'values': {
        'power': 460940
      }
    },
    {
      'time': 1536417187951,
      'values': {
        'power': 465620
      }
    },
    {
      'time': 1536417189954,
      'values': {
        'power': 467510
      }
    },
    {
      'time': 1536417191955,
      'values': {
        'power': 467390
      }
    },
    {
      'time': 1536417193958,
      'values': {
        'power': 464540
      }
    },
    {
      'time': 1536417195959,
      'values': {
        'power': 463970
      }
    },
    {
      'time': 1536417197960,
      'values': {
        'power': 462270
      }
    },
    {
      'time': 1536417199962,
      'values': {
        'power': 458880
      }
    },
    {
      'time': 1536417201965,
      'values': {
        'power': 459690
      }
    },
    {
      'time': 1536417203967,
      'values': {
        'power': 460820
      }
    },
    {
      'time': 1536417205968,
      'values': {
        'power': 459510
      }
    },
    {
      'time': 1536417207970,
      'values': {
        'power': 456200
      }
    },
    {
      'time': 1536417209972,
      'values': {
        'power': 456000
      }
    },
    {
      'time': 1536417211974,
      'values': {
        'power': 456610
      }
    },
    {
      'time': 1536417213976,
      'values': {
        'power': 453740
      }
    },
    {
      'time': 1536417215978,
      'values': {
        'power': 451960
      }
    },
    {
      'time': 1536417217980,
      'values': {
        'power': 453760
      }
    },
    {
      'time': 1536417219983,
      'values': {
        'power': 452800
      }
    },
    {
      'time': 1536417221985,
      'values': {
        'power': 448730
      }
    },
    {
      'time': 1536417223986,
      'values': {
        'power': 445780
      }
    },
    {
      'time': 1536417225987,
      'values': {
        'power': 447180
      }
    },
    {
      'time': 1536417227990,
      'values': {
        'power': 450510
      }
    },
    {
      'time': 1536417229992,
      'values': {
        'power': 452650
      }
    },
    {
      'time': 1536417231994,
      'values': {
        'power': 457050
      }
    },
    {
      'time': 1536417233996,
      'values': {
        'power': 457790
      }
    },
    {
      'time': 1536417235998,
      'values': {
        'power': 454770
      }
    },
    {
      'time': 1536417238000,
      'values': {
        'power': 453370
      }
    },
    {
      'time': 1536417240002,
      'values': {
        'power': 450540
      }
    },
    {
      'time': 1536417242004,
      'values': {
        'power': 446930
      }
    },
    {
      'time': 1536417244006,
      'values': {
        'power': 446170
      }
    },
    {
      'time': 1536417246007,
      'values': {
        'power': 447790
      }
    },
    {
      'time': 1536417248009,
      'values': {
        'power': 451910
      }
    },
    {
      'time': 1536417250012,
      'values': {
        'power': 455970
      }
    },
    {
      'time': 1536417252013,
      'values': {
        'power': 456310
      }
    },
    {
      'time': 1536417254015,
      'values': {
        'power': 453830
      }
    },
    {
      'time': 1536417256017,
      'values': {
        'power': 451820
      }
    },
    {
      'time': 1536417258019,
      'values': {
        'power': 453010
      }
    },
    {
      'time': 1536417260021,
      'values': {
        'power': 453210
      }
    },
    {
      'time': 1536417262023,
      'values': {
        'power': 450940
      }
    },
    {
      'time': 1536417264025,
      'values': {
        'power': 450790
      }
    },
    {
      'time': 1536417266027,
      'values': {
        'power': 458850
      }
    },
    {
      'time': 1536417268029,
      'values': {
        'power': 468740
      }
    },
    {
      'time': 1536417270031,
      'values': {
        'power': 470820
      }
    },
    {
      'time': 1536417272032,
      'values': {
        'power': 468040
      }
    },
    {
      'time': 1536417274034,
      'values': {
        'power': 465910
      }
    },
    {
      'time': 1536417276037,
      'values': {
        'power': 475030
      }
    },
    {
      'time': 1536417278039,
      'values': {
        'power': 485980
      }
    },
    {
      'time': 1536417280040,
      'values': {
        'power': 483890
      }
    },
    {
      'time': 1536417282042,
      'values': {
        'power': 476030
      }
    },
    {
      'time': 1536417284045,
      'values': {
        'power': 470510
      }
    },
    {
      'time': 1536417286047,
      'values': {
        'power': 473800
      }
    },
    {
      'time': 1536417288049,
      'values': {
        'power': 478060
      }
    },
    {
      'time': 1536417290051,
      'values': {
        'power': 479710
      }
    },
    {
      'time': 1536417292052,
      'values': {
        'power': 484540
      }
    },
    {
      'time': 1536417294054,
      'values': {
        'power': 479940
      }
    },
    {
      'time': 1536417296057,
      'values': {
        'power': 472900
      }
    },
    {
      'time': 1536417298058,
      'values': {
        'power': 469390
      }
    },
    {
      'time': 1536417300060,
      'values': {
        'power': 465420
      }
    },
    {
      'time': 1536417302062,
      'values': {
        'power': 464640
      }
    },
    {
      'time': 1536417304064,
      'values': {
        'power': 467670
      }
    },
    {
      'time': 1536417306066,
      'values': {
        'power': 472260
      }
    },
    {
      'time': 1536417308068,
      'values': {
        'power': 480080
      }
    },
    {
      'time': 1536417310070,
      'values': {
        'power': 486620
      }
    },
    {
      'time': 1536417312072,
      'values': {
        'power': 480480
      }
    },
    {
      'time': 1536417314074,
      'values': {
        'power': 473000
      }
    },
    {
      'time': 1536417316076,
      'values': {
        'power': 475960
      }
    },
    {
      'time': 1536417318078,
      'values': {
        'power': 480100
      }
    },
    {
      'time': 1536417320080,
      'values': {
        'power': 477620
      }
    },
    {
      'time': 1536417322083,
      'values': {
        'power': 474950
      }
    },
    {
      'time': 1536417324084,
      'values': {
        'power': 474700
      }
    },
    {
      'time': 1536417326085,
      'values': {
        'power': 476300
      }
    },
    {
      'time': 1536417328087,
      'values': {
        'power': 480980
      }
    },
    {
      'time': 1536417330090,
      'values': {
        'power': 484100
      }
    },
    {
      'time': 1536417332092,
      'values': {
        'power': 485500
      }
    },
    {
      'time': 1536417334093,
      'values': {
        'power': 483670
      }
    },
    {
      'time': 1536417336095,
      'values': {
        'power': 483440
      }
    },
    {
      'time': 1536417338098,
      'values': {
        'power': 484590
      }
    },
    {
      'time': 1536417340100,
      'values': {
        'power': 478070
      }
    },
    {
      'time': 1536417342102,
      'values': {
        'power': 469760
      }
    },
    {
      'time': 1536417344104,
      'values': {
        'power': 467590
      }
    },
    {
      'time': 1536417346106,
      'values': {
        'power': 467400
      }
    },
    {
      'time': 1536417348108,
      'values': {
        'power': 470710
      }
    },
    {
      'time': 1536417350109,
      'values': {
        'power': 474820
      }
    },
    {
      'time': 1536417352111,
      'values': {
        'power': 477010
      }
    },
    {
      'time': 1536417354113,
      'values': {
        'power': 475240
      }
    },
    {
      'time': 1536417356115,
      'values': {
        'power': 471640
      }
    },
    {
      'time': 1536417358120,
      'values': {
        'power': 470230
      }
    },
    {
      'time': 1536417360121,
      'values': {
        'power': 466630
      }
    },
    {
      'time': 1536417362120,
      'values': {
        'power': 460920
      }
    },
    {
      'time': 1536417364123,
      'values': {
        'power': 561800
      }
    },
    {
      'time': 1536417366125,
      'values': {
        'power': 629820
      }
    },
    {
      'time': 1536417368127,
      'values': {
        'power': 557980
      }
    },
    {
      'time': 1536417370129,
      'values': {
        'power': 518990
      }
    },
    {
      'time': 1536417372131,
      'values': {
        'power': 513880
      }
    },
    {
      'time': 1536417374132,
      'values': {
        'power': 510640
      }
    },
    {
      'time': 1536417376134,
      'values': {
        'power': 515540
      }
    },
    {
      'time': 1536417378137,
      'values': {
        'power': 524380
      }
    },
    {
      'time': 1536417380139,
      'values': {
        'power': 525520
      }
    },
    {
      'time': 1536417382141,
      'values': {
        'power': 517850
      }
    },
    {
      'time': 1536417384143,
      'values': {
        'power': 513520
      }
    },
    {
      'time': 1536417386145,
      'values': {
        'power': 513900
      }
    },
    {
      'time': 1536417388146,
      'values': {
        'power': 513630
      }
    },
    {
      'time': 1536417390149,
      'values': {
        'power': 515910
      }
    },
    {
      'time': 1536417392150,
      'values': {
        'power': 516990
      }
    },
    {
      'time': 1536417394152,
      'values': {
        'power': 513390
      }
    },
    {
      'time': 1536417396154,
      'values': {
        'power': 513070
      }
    },
    {
      'time': 1536417398156,
      'values': {
        'power': 516350
      }
    },
    {
      'time': 1536417400158,
      'values': {
        'power': 521570
      }
    },
    {
      'time': 1536417402160,
      'values': {
        'power': 522510
      }
    },
    {
      'time': 1536417404162,
      'values': {
        'power': 517660
      }
    },
    {
      'time': 1536417406164,
      'values': {
        'power': 513500
      }
    },
    {
      'time': 1536417408166,
      'values': {
        'power': 509610
      }
    },
    {
      'time': 1536417410168,
      'values': {
        'power': 507790
      }
    },
    {
      'time': 1536417412170,
      'values': {
        'power': 507370
      }
    },
    {
      'time': 1536417414172,
      'values': {
        'power': 507480
      }
    },
    {
      'time': 1536417416173,
      'values': {
        'power': 510570
      }
    },
    {
      'time': 1536417418175,
      'values': {
        'power': 515280
      }
    },
    {
      'time': 1536417420178,
      'values': {
        'power': 518120
      }
    },
    {
      'time': 1536417422180,
      'values': {
        'power': 514850
      }
    },
    {
      'time': 1536417424183,
      'values': {
        'power': 510840
      }
    },
    {
      'time': 1536417426183,
      'values': {
        'power': 506100
      }
    },
    {
      'time': 1536417428185,
      'values': {
        'power': 502940
      }
    },
    {
      'time': 1536417430188,
      'values': {
        'power': 506150
      }
    },
    {
      'time': 1536417432190,
      'values': {
        'power': 513640
      }
    },
    {
      'time': 1536417434192,
      'values': {
        'power': 520850
      }
    },
    {
      'time': 1536417436194,
      'values': {
        'power': 523260
      }
    },
    {
      'time': 1536417438196,
      'values': {
        'power': 527190
      }
    },
    {
      'time': 1536417440198,
      'values': {
        'power': 530600
      }
    },
    {
      'time': 1536417442199,
      'values': {
        'power': 528070
      }
    },
    {
      'time': 1536417444201,
      'values': {
        'power': 524960
      }
    },
    {
      'time': 1536417446203,
      'values': {
        'power': 525040
      }
    },
    {
      'time': 1536417448205,
      'values': {
        'power': 526240
      }
    },
    {
      'time': 1536417450207,
      'values': {
        'power': 528760
      }
    },
    {
      'time': 1536417452209,
      'values': {
        'power': 529670
      }
    },
    {
      'time': 1536417454210,
      'values': {
        'power': 527840
      }
    },
    {
      'time': 1536417456213,
      'values': {
        'power': 530030
      }
    },
    {
      'time': 1536417458215,
      'values': {
        'power': 533250
      }
    },
    {
      'time': 1536417460216,
      'values': {
        'power': 529050
      }
    },
    {
      'time': 1536417462218,
      'values': {
        'power': 520850
      }
    },
    {
      'time': 1536417464221,
      'values': {
        'power': 516230
      }
    },
    {
      'time': 1536417466223,
      'values': {
        'power': 514410
      }
    },
    {
      'time': 1536417468225,
      'values': {
        'power': 520310
      }
    },
    {
      'time': 1536417470226,
      'values': {
        'power': 529640
      }
    },
    {
      'time': 1536417472228,
      'values': {
        'power': 529750
      }
    },
    {
      'time': 1536417474231,
      'values': {
        'power': 524230
      }
    },
    {
      'time': 1536417476234,
      'values': {
        'power': 522930
      }
    },
    {
      'time': 1536417478234,
      'values': {
        'power': 524610
      }
    },
    {
      'time': 1536417480237,
      'values': {
        'power': 522840
      }
    },
    {
      'time': 1536417482239,
      'values': {
        'power': 516760
      }
    },
    {
      'time': 1536417484241,
      'values': {
        'power': 514140
      }
    },
    {
      'time': 1536417486242,
      'values': {
        'power': 518780
      }
    },
    {
      'time': 1536417488245,
      'values': {
        'power': 527880
      }
    },
    {
      'time': 1536417490246,
      'values': {
        'power': 529280
      }
    },
    {
      'time': 1536417492248,
      'values': {
        'power': 524240
      }
    },
    {
      'time': 1536417494250,
      'values': {
        'power': 522530
      }
    },
    {
      'time': 1536417496252,
      'values': {
        'power': 523470
      }
    },
    {
      'time': 1536417498253,
      'values': {
        'power': 525940
      }
    },
    {
      'time': 1536417500256,
      'values': {
        'power': 526970
      }
    },
    {
      'time': 1536417502258,
      'values': {
        'power': 524710
      }
    },
    {
      'time': 1536417504260,
      'values': {
        'power': 519270
      }
    },
    {
      'time': 1536417506262,
      'values': {
        'power': 515850
      }
    },
    {
      'time': 1536417508264,
      'values': {
        'power': 518050
      }
    },
    {
      'time': 1536417510266,
      'values': {
        'power': 522630
      }
    },
    {
      'time': 1536417512269,
      'values': {
        'power': 525100
      }
    },
    {
      'time': 1536417514270,
      'values': {
        'power': 524250
      }
    },
    {
      'time': 1536417516272,
      'values': {
        'power': 525450
      }
    },
    {
      'time': 1536417518274,
      'values': {
        'power': 528440
      }
    },
    {
      'time': 1536417520276,
      'values': {
        'power': 528180
      }
    },
    {
      'time': 1536417522278,
      'values': {
        'power': 526430
      }
    },
    {
      'time': 1536417524280,
      'values': {
        'power': 522550
      }
    },
    {
      'time': 1536417526283,
      'values': {
        'power': 519140
      }
    },
    {
      'time': 1536417528283,
      'values': {
        'power': 520200
      }
    },
    {
      'time': 1536417530285,
      'values': {
        'power': 524610
      }
    },
    {
      'time': 1536417532288,
      'values': {
        'power': 526720
      }
    },
    {
      'time': 1536417534289,
      'values': {
        'power': 525820
      }
    },
    {
      'time': 1536417536291,
      'values': {
        'power': 525220
      }
    },
    {
      'time': 1536417538293,
      'values': {
        'power': 527310
      }
    },
    {
      'time': 1536417540295,
      'values': {
        'power': 527610
      }
    },
    {
      'time': 1536417542297,
      'values': {
        'power': 523830
      }
    },
    {
      'time': 1536417544299,
      'values': {
        'power': 519460
      }
    },
    {
      'time': 1536417546301,
      'values': {
        'power': 517020
      }
    },
    {
      'time': 1536417548303,
      'values': {
        'power': 521350
      }
    },
    {
      'time': 1536417550305,
      'values': {
        'power': 526830
      }
    },
    {
      'time': 1536417552307,
      'values': {
        'power': 525590
      }
    },
    {
      'time': 1536417554308,
      'values': {
        'power': 523570
      }
    },
    {
      'time': 1536417556310,
      'values': {
        'power': 526530
      }
    },
    {
      'time': 1536417558313,
      'values': {
        'power': 530650
      }
    },
    {
      'time': 1536417560316,
      'values': {
        'power': 529010
      }
    },
    {
      'time': 1536417562316,
      'values': {
        'power': 519730
      }
    },
    {
      'time': 1536417564319,
      'values': {
        'power': 509760
      }
    },
    {
      'time': 1536417566321,
      'values': {
        'power': 509060
      }
    },
    {
      'time': 1536417568323,
      'values': {
        'power': 509960
      }
    },
    {
      'time': 1536417570325,
      'values': {
        'power': 509130
      }
    },
    {
      'time': 1536417572327,
      'values': {
        'power': 508150
      }
    },
    {
      'time': 1536417574329,
      'values': {
        'power': 510540
      }
    },
    {
      'time': 1536417576332,
      'values': {
        'power': 514910
      }
    },
    {
      'time': 1536417578336,
      'values': {
        'power': 519250
      }
    },
    {
      'time': 1536417580334,
      'values': {
        'power': 516980
      }
    },
    {
      'time': 1536417582336,
      'values': {
        'power': 507410
      }
    },
    {
      'time': 1536417584338,
      'values': {
        'power': 501290
      }
    },
    {
      'time': 1536417586340,
      'values': {
        'power': 503110
      }
    },
    {
      'time': 1536417588342,
      'values': {
        'power': 507140
      }
    },
    {
      'time': 1536417590344,
      'values': {
        'power': 506870
      }
    },
    {
      'time': 1536417592346,
      'values': {
        'power': 502950
      }
    },
    {
      'time': 1536417594348,
      'values': {
        'power': 500080
      }
    },
    {
      'time': 1536417596349,
      'values': {
        'power': 499860
      }
    },
    {
      'time': 1536417598352,
      'values': {
        'power': 501180
      }
    },
    {
      'time': 1536417600354,
      'values': {
        'power': 496550
      }
    },
    {
      'time': 1536417602356,
      'values': {
        'power': 488990
      }
    },
    {
      'time': 1536417604361,
      'values': {
        'power': 487340
      }
    },
    {
      'time': 1536417606359,
      'values': {
        'power': 491300
      }
    },
    {
      'time': 1536417608361,
      'values': {
        'power': 492670
      }
    },
    {
      'time': 1536417610364,
      'values': {
        'power': 489230
      }
    },
    {
      'time': 1536417612366,
      'values': {
        'power': 489730
      }
    },
    {
      'time': 1536417614368,
      'values': {
        'power': 493970
      }
    },
    {
      'time': 1536417616370,
      'values': {
        'power': 496930
      }
    },
    {
      'time': 1536417618372,
      'values': {
        'power': 495520
      }
    },
    {
      'time': 1536417620374,
      'values': {
        'power': 493360
      }
    },
    {
      'time': 1536417622376,
      'values': {
        'power': 494790
      }
    },
    {
      'time': 1536417624378,
      'values': {
        'power': 499580
      }
    },
    {
      'time': 1536417626380,
      'values': {
        'power': 502690
      }
    },
    {
      'time': 1536417628382,
      'values': {
        'power': 501120
      }
    },
    {
      'time': 1536417630383,
      'values': {
        'power': 498280
      }
    },
    {
      'time': 1536417632385,
      'values': {
        'power': 497630
      }
    },
    {
      'time': 1536417634387,
      'values': {
        'power': 496980
      }
    },
    {
      'time': 1536417636389,
      'values': {
        'power': 494740
      }
    },
    {
      'time': 1536417638391,
      'values': {
        'power': 491130
      }
    },
    {
      'time': 1536417640393,
      'values': {
        'power': 491490
      }
    },
    {
      'time': 1536417642395,
      'values': {
        'power': 491510
      }
    },
    {
      'time': 1536417644397,
      'values': {
        'power': 492790
      }
    },
    {
      'time': 1536417646399,
      'values': {
        'power': 496630
      }
    },
    {
      'time': 1536417648401,
      'values': {
        'power': 496000
      }
    },
    {
      'time': 1536417650403,
      'values': {
        'power': 493870
      }
    },
    {
      'time': 1536417652405,
      'values': {
        'power': 491930
      }
    },
    {
      'time': 1536417654407,
      'values': {
        'power': 491010
      }
    },
    {
      'time': 1536417656408,
      'values': {
        'power': 490550
      }
    },
    {
      'time': 1536417658412,
      'values': {
        'power': 489950
      }
    },
    {
      'time': 1536417660415,
      'values': {
        'power': 490860
      }
    },
    {
      'time': 1536417662414,
      'values': {
        'power': 493620
      }
    },
    {
      'time': 1536417664416,
      'values': {
        'power': 494720
      }
    },
    {
      'time': 1536417666419,
      'values': {
        'power': 493260
      }
    },
    {
      'time': 1536417668421,
      'values': {
        'power': 493370
      }
    },
    {
      'time': 1536417670423,
      'values': {
        'power': 495070
      }
    },
    {
      'time': 1536417672425,
      'values': {
        'power': 493690
      }
    },
    {
      'time': 1536417674427,
      'values': {
        'power': 490670
      }
    },
    {
      'time': 1536417676429,
      'values': {
        'power': 487980
      }
    },
    {
      'time': 1536417678430,
      'values': {
        'power': 486450
      }
    },
    {
      'time': 1536417680432,
      'values': {
        'power': 485930
      }
    },
    {
      'time': 1536417682434,
      'values': {
        'power': 488620
      }
    },
    {
      'time': 1536417684436,
      'values': {
        'power': 483620
      }
    },
    {
      'time': 1536417686438,
      'values': {
        'power': 469820
      }
    },
    {
      'time': 1536417688440,
      'values': {
        'power': 463370
      }
    },
    {
      'time': 1536417690441,
      'values': {
        'power': 459200
      }
    },
    {
      'time': 1536417692444,
      'values': {
        'power': 454350
      }
    },
    {
      'time': 1536417694447,
      'values': {
        'power': 453340
      }
    },
    {
      'time': 1536417696447,
      'values': {
        'power': 453880
      }
    },
    {
      'time': 1536417698450,
      'values': {
        'power': 450530
      }
    },
    {
      'time': 1536417700452,
      'values': {
        'power': 449400
      }
    },
    {
      'time': 1536417702454,
      'values': {
        'power': 452950
      }
    },
    {
      'time': 1536417704456,
      'values': {
        'power': 458000
      }
    },
    {
      'time': 1536417706458,
      'values': {
        'power': 459550
      }
    },
    {
      'time': 1536417708459,
      'values': {
        'power': 457350
      }
    },
    {
      'time': 1536417710461,
      'values': {
        'power': 455270
      }
    },
    {
      'time': 1536417712464,
      'values': {
        'power': 456950
      }
    },
    {
      'time': 1536417714466,
      'values': {
        'power': 458470
      }
    },
    {
      'time': 1536417716467,
      'values': {
        'power': 454600
      }
    },
    {
      'time': 1536417718469,
      'values': {
        'power': 448090
      }
    },
    {
      'time': 1536417720472,
      'values': {
        'power': 444070
      }
    },
    {
      'time': 1536417722474,
      'values': {
        'power': 446490
      }
    },
    {
      'time': 1536417724475,
      'values': {
        'power': 449650
      }
    },
    {
      'time': 1536417726477,
      'values': {
        'power': 451210
      }
    },
    {
      'time': 1536417728479,
      'values': {
        'power': 452480
      }
    },
    {
      'time': 1536417730481,
      'values': {
        'power': 452180
      }
    },
    {
      'time': 1536417732485,
      'values': {
        'power': 454650
      }
    },
    {
      'time': 1536417734484,
      'values': {
        'power': 457010
      }
    },
    {
      'time': 1536417736487,
      'values': {
        'power': 454640
      }
    },
    {
      'time': 1536417738489,
      'values': {
        'power': 453540
      }
    },
    {
      'time': 1536417740491,
      'values': {
        'power': 457340
      }
    },
    {
      'time': 1536417742492,
      'values': {
        'power': 461000
      }
    },
    {
      'time': 1536417744494,
      'values': {
        'power': 463960
      }
    },
    {
      'time': 1536417746497,
      'values': {
        'power': 464640
      }
    },
    {
      'time': 1536417748499,
      'values': {
        'power': 464020
      }
    },
    {
      'time': 1536417750501,
      'values': {
        'power': 461850
      }
    },
    {
      'time': 1536417752503,
      'values': {
        'power': 456620
      }
    },
    {
      'time': 1536417754505,
      'values': {
        'power': 452590
      }
    },
    {
      'time': 1536417756507,
      'values': {
        'power': 452760
      }
    },
    {
      'time': 1536417758509,
      'values': {
        'power': 454970
      }
    },
    {
      'time': 1536417760511,
      'values': {
        'power': 458370
      }
    },
    {
      'time': 1536417762512,
      'values': {
        'power': 459390
      }
    },
    {
      'time': 1536417764514,
      'values': {
        'power': 457410
      }
    },
    {
      'time': 1536417766517,
      'values': {
        'power': 457890
      }
    },
    {
      'time': 1536417768519,
      'values': {
        'power': 456820
      }
    },
    {
      'time': 1536417770520,
      'values': {
        'power': 454350
      }
    },
    {
      'time': 1536417772522,
      'values': {
        'power': 452020
      }
    },
    {
      'time': 1536417774524,
      'values': {
        'power': 450820
      }
    },
    {
      'time': 1536417776526,
      'values': {
        'power': 451520
      }
    },
    {
      'time': 1536417778528,
      'values': {
        'power': 453260
      }
    },
    {
      'time': 1536417780530,
      'values': {
        'power': 453960
      }
    },
    {
      'time': 1536417782532,
      'values': {
        'power': 455260
      }
    },
    {
      'time': 1536417784533,
      'values': {
        'power': 455200
      }
    },
    {
      'time': 1536417786535,
      'values': {
        'power': 452820
      }
    },
    {
      'time': 1536417788538,
      'values': {
        'power': 454930
      }
    },
    {
      'time': 1536417790540,
      'values': {
        'power': 454920
      }
    },
    {
      'time': 1536417792542,
      'values': {
        'power': 449900
      }
    },
    {
      'time': 1536417794545,
      'values': {
        'power': 450170
      }
    },
    {
      'time': 1536417796546,
      'values': {
        'power': 453250
      }
    },
    {
      'time': 1536417798548,
      'values': {
        'power': 457120
      }
    },
    {
      'time': 1536417800549,
      'values': {
        'power': 459380
      }
    },
    {
      'time': 1536417802552,
      'values': {
        'power': 457790
      }
    },
    {
      'time': 1536417804554,
      'values': {
        'power': 454660
      }
    },
    {
      'time': 1536417806556,
      'values': {
        'power': 451860
      }
    },
    {
      'time': 1536417808558,
      'values': {
        'power': 452300
      }
    },
    {
      'time': 1536417810559,
      'values': {
        'power': 452880
      }
    },
    {
      'time': 1536417812561,
      'values': {
        'power': 447300
      }
    },
    {
      'time': 1536417814564,
      'values': {
        'power': 449520
      }
    },
    {
      'time': 1536417816566,
      'values': {
        'power': 460850
      }
    },
    {
      'time': 1536417818568,
      'values': {
        'power': 464290
      }
    },
    {
      'time': 1536417820569,
      'values': {
        'power': 461010
      }
    },
    {
      'time': 1536417822571,
      'values': {
        'power': 456970
      }
    },
    {
      'time': 1536417824573,
      'values': {
        'power': 454160
      }
    },
    {
      'time': 1536417826575,
      'values': {
        'power': 442020
      }
    },
    {
      'time': 1536417828577,
      'values': {
        'power': 433590
      }
    },
    {
      'time': 1536417830579,
      'values': {
        'power': 439340
      }
    },
    {
      'time': 1536417832580,
      'values': {
        'power': 440380
      }
    },
    {
      'time': 1536417834583,
      'values': {
        'power': 436580
      }
    },
    {
      'time': 1536417836584,
      'values': {
        'power': 441830
      }
    },
    {
      'time': 1536417838586,
      'values': {
        'power': 460640
      }
    },
    {
      'time': 1536417840589,
      'values': {
        'power': 473980
      }
    },
    {
      'time': 1536417842591,
      'values': {
        'power': 475770
      }
    },
    {
      'time': 1536417844593,
      'values': {
        'power': 477160
      }
    },
    {
      'time': 1536417846595,
      'values': {
        'power': 474910
      }
    },
    {
      'time': 1536417848597,
      'values': {
        'power': 471110
      }
    },
    {
      'time': 1536417850599,
      'values': {
        'power': 466890
      }
    },
    {
      'time': 1536417852600,
      'values': {
        'power': 462270
      }
    },
    {
      'time': 1536417854602,
      'values': {
        'power': 465150
      }
    },
    {
      'time': 1536417856605,
      'values': {
        'power': 471830
      }
    },
    {
      'time': 1536417858607,
      'values': {
        'power': 472740
      }
    },
    {
      'time': 1536417860608,
      'values': {
        'power': 469890
      }
    },
    {
      'time': 1536417862612,
      'values': {
        'power': 468220
      }
    },
    {
      'time': 1536417864612,
      'values': {
        'power': 469220
      }
    },
    {
      'time': 1536417866614,
      'values': {
        'power': 469990
      }
    },
    {
      'time': 1536417868616,
      'values': {
        'power': 467240
      }
    },
    {
      'time': 1536417870618,
      'values': {
        'power': 463820
      }
    },
    {
      'time': 1536417872620,
      'values': {
        'power': 456740
      }
    },
    {
      'time': 1536417874622,
      'values': {
        'power': 442510
      }
    },
    {
      'time': 1536417876624,
      'values': {
        'power': 455600
      }
    },
    {
      'time': 1536417878626,
      'values': {
        'power': 618650
      }
    },
    {
      'time': 1536417880627,
      'values': {
        'power': 625350
      }
    },
    {
      'time': 1536417882629,
      'values': {
        'power': 489360
      }
    },
    {
      'time': 1536417884632,
      'values': {
        'power': 497370
      }
    },
    {
      'time': 1536417886633,
      'values': {
        'power': 509940
      }
    },
    {
      'time': 1536417888635,
      'values': {
        'power': 510040
      }
    },
    {
      'time': 1536417890638,
      'values': {
        'power': 505250
      }
    },
    {
      'time': 1536417892640,
      'values': {
        'power': 502140
      }
    },
    {
      'time': 1536417894642,
      'values': {
        'power': 504600
      }
    },
    {
      'time': 1536417896643,
      'values': {
        'power': 511410
      }
    },
    {
      'time': 1536417898645,
      'values': {
        'power': 513610
      }
    },
    {
      'time': 1536417900648,
      'values': {
        'power': 512090
      }
    },
    {
      'time': 1536417902650,
      'values': {
        'power': 512500
      }
    },
    {
      'time': 1536417904652,
      'values': {
        'power': 513230
      }
    },
    {
      'time': 1536417906653,
      'values': {
        'power': 513700
      }
    },
    {
      'time': 1536417908655,
      'values': {
        'power': 511420
      }
    },
    {
      'time': 1536417910657,
      'values': {
        'power': 508060
      }
    },
    {
      'time': 1536417912659,
      'values': {
        'power': 509100
      }
    },
    {
      'time': 1536417914661,
      'values': {
        'power': 513210
      }
    },
    {
      'time': 1536417916663,
      'values': {
        'power': 515870
      }
    },
    {
      'time': 1536417918665,
      'values': {
        'power': 515350
      }
    },
    {
      'time': 1536417920667,
      'values': {
        'power': 514230
      }
    },
    {
      'time': 1536417922669,
      'values': {
        'power': 513370
      }
    },
    {
      'time': 1536417924671,
      'values': {
        'power': 515910
      }
    },
    {
      'time': 1536417926673,
      'values': {
        'power': 522100
      }
    },
    {
      'time': 1536417928675,
      'values': {
        'power': 522480
      }
    },
    {
      'time': 1536417930677,
      'values': {
        'power': 521590
      }
    },
    {
      'time': 1536417932679,
      'values': {
        'power': 518600
      }
    },
    {
      'time': 1536417934680,
      'values': {
        'power': 513590
      }
    },
    {
      'time': 1536417936683,
      'values': {
        'power': 516660
      }
    },
    {
      'time': 1536417938684,
      'values': {
        'power': 520880
      }
    },
    {
      'time': 1536417940686,
      'values': {
        'power': 517140
      }
    },
    {
      'time': 1536417942689,
      'values': {
        'power': 511010
      }
    },
    {
      'time': 1536417944691,
      'values': {
        'power': 513730
      }
    },
    {
      'time': 1536417946693,
      'values': {
        'power': 517330
      }
    },
    {
      'time': 1536417948695,
      'values': {
        'power': 519260
      }
    },
    {
      'time': 1536417950697,
      'values': {
        'power': 522860
      }
    },
    {
      'time': 1536417952699,
      'values': {
        'power': 523220
      }
    },
    {
      'time': 1536417954701,
      'values': {
        'power': 523110
      }
    },
    {
      'time': 1536417956703,
      'values': {
        'power': 522960
      }
    },
    {
      'time': 1536417958705,
      'values': {
        'power': 524840
      }
    },
    {
      'time': 1536417960709,
      'values': {
        'power': 522960
      }
    },
    {
      'time': 1536417962709,
      'values': {
        'power': 517830
      }
    },
    {
      'time': 1536417964710,
      'values': {
        'power': 519010
      }
    },
    {
      'time': 1536417966712,
      'values': {
        'power': 524970
      }
    },
    {
      'time': 1536417968714,
      'values': {
        'power': 529460
      }
    },
    {
      'time': 1536417970716,
      'values': {
        'power': 531360
      }
    },
    {
      'time': 1536417972718,
      'values': {
        'power': 530520
      }
    },
    {
      'time': 1536417974720,
      'values': {
        'power': 532540
      }
    },
    {
      'time': 1536417976722,
      'values': {
        'power': 532990
      }
    },
    {
      'time': 1536417978724,
      'values': {
        'power': 529240
      }
    },
    {
      'time': 1536417980726,
      'values': {
        'power': 523830
      }
    },
    {
      'time': 1536417982728,
      'values': {
        'power': 518770
      }
    },
    {
      'time': 1536417984730,
      'values': {
        'power': 515220
      }
    },
    {
      'time': 1536417986733,
      'values': {
        'power': 514810
      }
    },
    {
      'time': 1536417988736,
      'values': {
        'power': 516570
      }
    },
    {
      'time': 1536417990735,
      'values': {
        'power': 516040
      }
    },
    {
      'time': 1536417992738,
      'values': {
        'power': 516450
      }
    },
    {
      'time': 1536417994740,
      'values': {
        'power': 518910
      }
    },
    {
      'time': 1536417996743,
      'values': {
        'power': 520990
      }
    },
    {
      'time': 1536417998743,
      'values': {
        'power': 519450
      }
    },
    {
      'time': 1536418000746,
      'values': {
        'power': 515610
      }
    },
    {
      'time': 1536418002748,
      'values': {
        'power': 515940
      }
    },
    {
      'time': 1536418004750,
      'values': {
        'power': 514710
      }
    },
    {
      'time': 1536418006752,
      'values': {
        'power': 512140
      }
    },
    {
      'time': 1536418008753,
      'values': {
        'power': 513160
      }
    },
    {
      'time': 1536418010755,
      'values': {
        'power': 518100
      }
    },
    {
      'time': 1536418012758,
      'values': {
        'power': 523120
      }
    },
    {
      'time': 1536418014759,
      'values': {
        'power': 524630
      }
    },
    {
      'time': 1536418016761,
      'values': {
        'power': 524820
      }
    },
    {
      'time': 1536418018762,
      'values': {
        'power': 523150
      }
    },
    {
      'time': 1536418020765,
      'values': {
        'power': 519690
      }
    },
    {
      'time': 1536418022767,
      'values': {
        'power': 516340
      }
    },
    {
      'time': 1536418024769,
      'values': {
        'power': 514490
      }
    },
    {
      'time': 1536418026771,
      'values': {
        'power': 513630
      }
    },
    {
      'time': 1536418028773,
      'values': {
        'power': 514010
      }
    },
    {
      'time': 1536418030774,
      'values': {
        'power': 514660
      }
    },
    {
      'time': 1536418032776,
      'values': {
        'power': 515180
      }
    },
    {
      'time': 1536418034779,
      'values': {
        'power': 517950
      }
    },
    {
      'time': 1536418036781,
      'values': {
        'power': 518410
      }
    },
    {
      'time': 1536418038783,
      'values': {
        'power': 517120
      }
    },
    {
      'time': 1536418040785,
      'values': {
        'power': 515840
      }
    },
    {
      'time': 1536418042786,
      'values': {
        'power': 518300
      }
    },
    {
      'time': 1536418044788,
      'values': {
        'power': 520980
      }
    },
    {
      'time': 1536418046791,
      'values': {
        'power': 520250
      }
    },
    {
      'time': 1536418048793,
      'values': {
        'power': 518890
      }
    },
    {
      'time': 1536418050795,
      'values': {
        'power': 518060
      }
    },
    {
      'time': 1536418052797,
      'values': {
        'power': 517800
      }
    },
    {
      'time': 1536418054798,
      'values': {
        'power': 516890
      }
    },
    {
      'time': 1536418056800,
      'values': {
        'power': 515130
      }
    },
    {
      'time': 1536418058802,
      'values': {
        'power': 514240
      }
    },
    {
      'time': 1536418060804,
      'values': {
        'power': 517290
      }
    },
    {
      'time': 1536418062806,
      'values': {
        'power': 519940
      }
    },
    {
      'time': 1536418064808,
      'values': {
        'power': 520430
      }
    },
    {
      'time': 1536418066809,
      'values': {
        'power': 520610
      }
    },
    {
      'time': 1536418068812,
      'values': {
        'power': 520350
      }
    },
    {
      'time': 1536418070813,
      'values': {
        'power': 521500
      }
    },
    {
      'time': 1536418072815,
      'values': {
        'power': 523070
      }
    },
    {
      'time': 1536418074818,
      'values': {
        'power': 522400
      }
    },
    {
      'time': 1536418076820,
      'values': {
        'power': 518490
      }
    },
    {
      'time': 1536418078822,
      'values': {
        'power': 515170
      }
    },
    {
      'time': 1536418080824,
      'values': {
        'power': 516220
      }
    },
    {
      'time': 1536418082826,
      'values': {
        'power': 519130
      }
    },
    {
      'time': 1536418084828,
      'values': {
        'power': 524000
      }
    },
    {
      'time': 1536418086830,
      'values': {
        'power': 524870
      }
    },
    {
      'time': 1536418088832,
      'values': {
        'power': 524670
      }
    },
    {
      'time': 1536418090834,
      'values': {
        'power': 525580
      }
    },
    {
      'time': 1536418092835,
      'values': {
        'power': 524150
      }
    },
    {
      'time': 1536418094839,
      'values': {
        'power': 521990
      }
    },
    {
      'time': 1536418096841,
      'values': {
        'power': 517890
      }
    },
    {
      'time': 1536418098841,
      'values': {
        'power': 513940
      }
    },
    {
      'time': 1536418100843,
      'values': {
        'power': 517470
      }
    },
    {
      'time': 1536418102845,
      'values': {
        'power': 526100
      }
    },
    {
      'time': 1536418104847,
      'values': {
        'power': 528110
      }
    },
    {
      'time': 1536418106849,
      'values': {
        'power': 525300
      }
    },
    {
      'time': 1536418108851,
      'values': {
        'power': 522940
      }
    },
    {
      'time': 1536418110853,
      'values': {
        'power': 521730
      }
    },
    {
      'time': 1536418112855,
      'values': {
        'power': 520620
      }
    },
    {
      'time': 1536418114857,
      'values': {
        'power': 516580
      }
    },
    {
      'time': 1536418116860,
      'values': {
        'power': 512910
      }
    },
    {
      'time': 1536418118860,
      'values': {
        'power': 512570
      }
    },
    {
      'time': 1536418120863,
      'values': {
        'power': 514210
      }
    },
    {
      'time': 1536418122865,
      'values': {
        'power': 518210
      }
    },
    {
      'time': 1536418124866,
      'values': {
        'power': 521800
      }
    },
    {
      'time': 1536418126868,
      'values': {
        'power': 520880
      }
    },
    {
      'time': 1536418128871,
      'values': {
        'power': 517770
      }
    },
    {
      'time': 1536418130873,
      'values': {
        'power': 521860
      }
    },
    {
      'time': 1536418132874,
      'values': {
        'power': 529070
      }
    },
    {
      'time': 1536418134876,
      'values': {
        'power': 526320
      }
    },
    {
      'time': 1536418136879,
      'values': {
        'power': 524930
      }
    },
    {
      'time': 1536418138881,
      'values': {
        'power': 525190
      }
    },
    {
      'time': 1536418140883,
      'values': {
        'power': 525800
      }
    },
    {
      'time': 1536418142884,
      'values': {
        'power': 527310
      }
    },
    {
      'time': 1536418144886,
      'values': {
        'power': 525490
      }
    },
    {
      'time': 1536418146889,
      'values': {
        'power': 524450
      }
    },
    {
      'time': 1536418148891,
      'values': {
        'power': 523360
      }
    },
    {
      'time': 1536418150892,
      'values': {
        'power': 522530
      }
    },
    {
      'time': 1536418152894,
      'values': {
        'power': 521280
      }
    },
    {
      'time': 1536418154896,
      'values': {
        'power': 519350
      }
    },
    {
      'time': 1536418156898,
      'values': {
        'power': 516680
      }
    },
    {
      'time': 1536418158900,
      'values': {
        'power': 515180
      }
    },
    {
      'time': 1536418160902,
      'values': {
        'power': 518920
      }
    },
    {
      'time': 1536418162904,
      'values': {
        'power': 526920
      }
    },
    {
      'time': 1536418164907,
      'values': {
        'power': 530400
      }
    },
    {
      'time': 1536418166908,
      'values': {
        'power': 527720
      }
    },
    {
      'time': 1536418168909,
      'values': {
        'power': 525150
      }
    },
    {
      'time': 1536418170911,
      'values': {
        'power': 525420
      }
    },
    {
      'time': 1536418172914,
      'values': {
        'power': 525090
      }
    },
    {
      'time': 1536418174916,
      'values': {
        'power': 520130
      }
    },
    {
      'time': 1536418176918,
      'values': {
        'power': 515010
      }
    },
    {
      'time': 1536418178920,
      'values': {
        'power': 514230
      }
    },
    {
      'time': 1536418180921,
      'values': {
        'power': 514690
      }
    },
    {
      'time': 1536418182923,
      'values': {
        'power': 516000
      }
    },
    {
      'time': 1536418184926,
      'values': {
        'power': 517120
      }
    },
    {
      'time': 1536418186928,
      'values': {
        'power': 518560
      }
    },
    {
      'time': 1536418188930,
      'values': {
        'power': 519540
      }
    },
    {
      'time': 1536418190932,
      'values': {
        'power': 518420
      }
    },
    {
      'time': 1536418192934,
      'values': {
        'power': 521470
      }
    },
    {
      'time': 1536418194935,
      'values': {
        'power': 528380
      }
    },
    {
      'time': 1536418196937,
      'values': {
        'power': 535740
      }
    },
    {
      'time': 1536418198939,
      'values': {
        'power': 534030
      }
    },
    {
      'time': 1536418200941,
      'values': {
        'power': 525300
      }
    },
    {
      'time': 1536418202943,
      'values': {
        'power': 522840
      }
    },
    {
      'time': 1536418204945,
      'values': {
        'power': 527120
      }
    },
    {
      'time': 1536418206947,
      'values': {
        'power': 526710
      }
    },
    {
      'time': 1536418208948,
      'values': {
        'power': 684430
      }
    },
    {
      'time': 1536418210951,
      'values': {
        'power': 721650
      }
    },
    {
      'time': 1536418212953,
      'values': {
        'power': 581510
      }
    },
    {
      'time': 1536418214955,
      'values': {
        'power': 566090
      }
    },
    {
      'time': 1536418216957,
      'values': {
        'power': 563350
      }
    },
    {
      'time': 1536418218959,
      'values': {
        'power': 561170
      }
    },
    {
      'time': 1536418220961,
      'values': {
        'power': 564020
      }
    },
    {
      'time': 1536418222962,
      'values': {
        'power': 568520
      }
    },
    {
      'time': 1536418224965,
      'values': {
        'power': 567600
      }
    },
    {
      'time': 1536418226967,
      'values': {
        'power': 563600
      }
    },
    {
      'time': 1536418228969,
      'values': {
        'power': 562640
      }
    },
    {
      'time': 1536418230971,
      'values': {
        'power': 563830
      }
    },
    {
      'time': 1536418232973,
      'values': {
        'power': 563970
      }
    },
    {
      'time': 1536418234974,
      'values': {
        'power': 560530
      }
    },
    {
      'time': 1536418236976,
      'values': {
        'power': 555900
      }
    },
    {
      'time': 1536418238979,
      'values': {
        'power': 553650
      }
    },
    {
      'time': 1536418240981,
      'values': {
        'power': 556170
      }
    },
    {
      'time': 1536418242983,
      'values': {
        'power': 560780
      }
    },
    {
      'time': 1536418244984,
      'values': {
        'power': 563710
      }
    },
    {
      'time': 1536418246986,
      'values': {
        'power': 562540
      }
    },
    {
      'time': 1536418248988,
      'values': {
        'power': 561930
      }
    },
    {
      'time': 1536418250990,
      'values': {
        'power': 562500
      }
    },
    {
      'time': 1536418252992,
      'values': {
        'power': 562980
      }
    },
    {
      'time': 1536418254994,
      'values': {
        'power': 557550
      }
    },
    {
      'time': 1536418256996,
      'values': {
        'power': 547960
      }
    },
    {
      'time': 1536418258998,
      'values': {
        'power': 544660
      }
    },
    {
      'time': 1536418261000,
      'values': {
        'power': 548140
      }
    },
    {
      'time': 1536418263002,
      'values': {
        'power': 552770
      }
    },
    {
      'time': 1536418265004,
      'values': {
        'power': 552660
      }
    },
    {
      'time': 1536418267005,
      'values': {
        'power': 550440
      }
    },
    {
      'time': 1536418269008,
      'values': {
        'power': 550220
      }
    },
    {
      'time': 1536418271009,
      'values': {
        'power': 548430
      }
    },
    {
      'time': 1536418273011,
      'values': {
        'power': 549430
      }
    },
    {
      'time': 1536418275014,
      'values': {
        'power': 551870
      }
    },
    {
      'time': 1536418277016,
      'values': {
        'power': 548220
      }
    },
    {
      'time': 1536418279018,
      'values': {
        'power': 541670
      }
    },
    {
      'time': 1536418281020,
      'values': {
        'power': 538070
      }
    },
    {
      'time': 1536418283022,
      'values': {
        'power': 540670
      }
    },
    {
      'time': 1536418285024,
      'values': {
        'power': 544180
      }
    },
    {
      'time': 1536418287026,
      'values': {
        'power': 541700
      }
    },
    {
      'time': 1536418289027,
      'values': {
        'power': 538060
      }
    },
    {
      'time': 1536418291029,
      'values': {
        'power': 538850
      }
    },
    {
      'time': 1536418293031,
      'values': {
        'power': 542300
      }
    },
    {
      'time': 1536418295033,
      'values': {
        'power': 542830
      }
    },
    {
      'time': 1536418297035,
      'values': {
        'power': 540710
      }
    },
    {
      'time': 1536418299038,
      'values': {
        'power': 537270
      }
    },
    {
      'time': 1536418301039,
      'values': {
        'power': 532510
      }
    },
    {
      'time': 1536418303041,
      'values': {
        'power': 531920
      }
    },
    {
      'time': 1536418305043,
      'values': {
        'power': 531270
      }
    },
    {
      'time': 1536418307045,
      'values': {
        'power': 510800
      }
    },
    {
      'time': 1536418309047,
      'values': {
        'power': 489210
      }
    },
    {
      'time': 1536418311049,
      'values': {
        'power': 486800
      }
    },
    {
      'time': 1536418313051,
      'values': {
        'power': 488780
      }
    },
    {
      'time': 1536418315053,
      'values': {
        'power': 489590
      }
    },
    {
      'time': 1536418317054,
      'values': {
        'power': 487610
      }
    },
    {
      'time': 1536418319057,
      'values': {
        'power': 482940
      }
    },
    {
      'time': 1536418321059,
      'values': {
        'power': 479320
      }
    },
    {
      'time': 1536418323060,
      'values': {
        'power': 483930
      }
    },
    {
      'time': 1536418325062,
      'values': {
        'power': 493390
      }
    },
    {
      'time': 1536418327065,
      'values': {
        'power': 496840
      }
    },
    {
      'time': 1536418329067,
      'values': {
        'power': 494240
      }
    },
    {
      'time': 1536418331069,
      'values': {
        'power': 493770
      }
    },
    {
      'time': 1536418333070,
      'values': {
        'power': 496610
      }
    },
    {
      'time': 1536418335072,
      'values': {
        'power': 497580
      }
    },
    {
      'time': 1536418337075,
      'values': {
        'power': 493410
      }
    },
    {
      'time': 1536418339076,
      'values': {
        'power': 489300
      }
    },
    {
      'time': 1536418341078,
      'values': {
        'power': 488070
      }
    },
    {
      'time': 1536418343082,
      'values': {
        'power': 491340
      }
    },
    {
      'time': 1536418345082,
      'values': {
        'power': 493810
      }
    },
    {
      'time': 1536418347086,
      'values': {
        'power': 491460
      }
    },
    {
      'time': 1536418349085,
      'values': {
        'power': 491430
      }
    },
    {
      'time': 1536418351088,
      'values': {
        'power': 494730
      }
    },
    {
      'time': 1536418353090,
      'values': {
        'power': 495870
      }
    },
    {
      'time': 1536418355092,
      'values': {
        'power': 496540
      }
    },
    {
      'time': 1536418357094,
      'values': {
        'power': 493760
      }
    },
    {
      'time': 1536418359096,
      'values': {
        'power': 488730
      }
    },
    {
      'time': 1536418361098,
      'values': {
        'power': 489380
      }
    },
    {
      'time': 1536418363100,
      'values': {
        'power': 492680
      }
    },
    {
      'time': 1536418365102,
      'values': {
        'power': 493500
      }
    },
    {
      'time': 1536418367103,
      'values': {
        'power': 493400
      }
    },
    {
      'time': 1536418369106,
      'values': {
        'power': 493100
      }
    },
    {
      'time': 1536418371108,
      'values': {
        'power': 491220
      }
    },
    {
      'time': 1536418373109,
      'values': {
        'power': 491710
      }
    },
    {
      'time': 1536418375111,
      'values': {
        'power': 492450
      }
    },
    {
      'time': 1536418377114,
      'values': {
        'power': 491900
      }
    },
    {
      'time': 1536418379116,
      'values': {
        'power': 489980
      }
    },
    {
      'time': 1536418381117,
      'values': {
        'power': 486830
      }
    },
    {
      'time': 1536418383120,
      'values': {
        'power': 486930
      }
    },
    {
      'time': 1536418385121,
      'values': {
        'power': 490230
      }
    },
    {
      'time': 1536418387123,
      'values': {
        'power': 493410
      }
    },
    {
      'time': 1536418389125,
      'values': {
        'power': 494530
      }
    },
    {
      'time': 1536418391127,
      'values': {
        'power': 493640
      }
    },
    {
      'time': 1536418393129,
      'values': {
        'power': 490820
      }
    },
    {
      'time': 1536418395131,
      'values': {
        'power': 490010
      }
    },
    {
      'time': 1536418397136,
      'values': {
        'power': 490110
      }
    },
    {
      'time': 1536418399135,
      'values': {
        'power': 484450
      }
    },
    {
      'time': 1536418401136,
      'values': {
        'power': 481550
      }
    },
    {
      'time': 1536418403138,
      'values': {
        'power': 483100
      }
    },
    {
      'time': 1536418405141,
      'values': {
        'power': 485890
      }
    },
    {
      'time': 1536418407144,
      'values': {
        'power': 487440
      }
    },
    {
      'time': 1536418409145,
      'values': {
        'power': 483450
      }
    },
    {
      'time': 1536418411147,
      'values': {
        'power': 480770
      }
    },
    {
      'time': 1536418413149,
      'values': {
        'power': 482060
      }
    },
    {
      'time': 1536418415151,
      'values': {
        'power': 481930
      }
    },
    {
      'time': 1536418417153,
      'values': {
        'power': 473740
      }
    },
    {
      'time': 1536418419155,
      'values': {
        'power': 470310
      }
    },
    {
      'time': 1536418421157,
      'values': {
        'power': 477120
      }
    },
    {
      'time': 1536418423161,
      'values': {
        'power': 482440
      }
    },
    {
      'time': 1536418425162,
      'values': {
        'power': 486180
      }
    },
    {
      'time': 1536418427162,
      'values': {
        'power': 486210
      }
    },
    {
      'time': 1536418429165,
      'values': {
        'power': 488980
      }
    },
    {
      'time': 1536418431167,
      'values': {
        'power': 496290
      }
    },
    {
      'time': 1536418433169,
      'values': {
        'power': 498400
      }
    },
    {
      'time': 1536418435170,
      'values': {
        'power': 494210
      }
    },
    {
      'time': 1536418437172,
      'values': {
        'power': 484150
      }
    },
    {
      'time': 1536418439174,
      'values': {
        'power': 478100
      }
    },
    {
      'time': 1536418441176,
      'values': {
        'power': 480100
      }
    },
    {
      'time': 1536418443178,
      'values': {
        'power': 485000
      }
    },
    {
      'time': 1536418445180,
      'values': {
        'power': 486440
      }
    },
    {
      'time': 1536418447182,
      'values': {
        'power': 485590
      }
    },
    {
      'time': 1536418449184,
      'values': {
        'power': 473030
      }
    },
    {
      'time': 1536418451186,
      'values': {
        'power': 460170
      }
    },
    {
      'time': 1536418453187,
      'values': {
        'power': 458450
      }
    },
    {
      'time': 1536418455189,
      'values': {
        'power': 456240
      }
    },
    {
      'time': 1536418457192,
      'values': {
        'power': 453800
      }
    },
    {
      'time': 1536418459194,
      'values': {
        'power': 457000
      }
    },
    {
      'time': 1536418461196,
      'values': {
        'power': 474240
      }
    },
    {
      'time': 1536418463198,
      'values': {
        'power': 491860
      }
    },
    {
      'time': 1536418465200,
      'values': {
        'power': 494610
      }
    },
    {
      'time': 1536418467203,
      'values': {
        'power': 491710
      }
    },
    {
      'time': 1536418469203,
      'values': {
        'power': 489220
      }
    },
    {
      'time': 1536418471206,
      'values': {
        'power': 490710
      }
    },
    {
      'time': 1536418473208,
      'values': {
        'power': 492240
      }
    },
    {
      'time': 1536418475209,
      'values': {
        'power': 490720
      }
    },
    {
      'time': 1536418477212,
      'values': {
        'power': 487530
      }
    },
    {
      'time': 1536418479214,
      'values': {
        'power': 486320
      }
    },
    {
      'time': 1536418481215,
      'values': {
        'power': 488100
      }
    },
    {
      'time': 1536418483217,
      'values': {
        'power': 490940
      }
    },
    {
      'time': 1536418485219,
      'values': {
        'power': 492910
      }
    },
    {
      'time': 1536418487221,
      'values': {
        'power': 483780
      }
    },
    {
      'time': 1536418489223,
      'values': {
        'power': 468740
      }
    },
    {
      'time': 1536418491225,
      'values': {
        'power': 463240
      }
    },
    {
      'time': 1536418493227,
      'values': {
        'power': 464270
      }
    },
    {
      'time': 1536418495229,
      'values': {
        'power': 459720
      }
    },
    {
      'time': 1536418497231,
      'values': {
        'power': 454880
      }
    },
    {
      'time': 1536418499234,
      'values': {
        'power': 468470
      }
    },
    {
      'time': 1536418501234,
      'values': {
        'power': 486840
      }
    },
    {
      'time': 1536418503236,
      'values': {
        'power': 492290
      }
    },
    {
      'time': 1536418505239,
      'values': {
        'power': 491280
      }
    },
    {
      'time': 1536418507241,
      'values': {
        'power': 490270
      }
    },
    {
      'time': 1536418509242,
      'values': {
        'power': 491170
      }
    },
    {
      'time': 1536418511245,
      'values': {
        'power': 492890
      }
    },
    {
      'time': 1536418513247,
      'values': {
        'power': 494540
      }
    },
    {
      'time': 1536418515249,
      'values': {
        'power': 493240
      }
    },
    {
      'time': 1536418517251,
      'values': {
        'power': 488470
      }
    },
    {
      'time': 1536418519253,
      'values': {
        'power': 486970
      }
    },
    {
      'time': 1536418521255,
      'values': {
        'power': 490540
      }
    },
    {
      'time': 1536418523257,
      'values': {
        'power': 487650
      }
    },
    {
      'time': 1536418525259,
      'values': {
        'power': 467500
      }
    },
    {
      'time': 1536418527260,
      'values': {
        'power': 451460
      }
    },
    {
      'time': 1536418529262,
      'values': {
        'power': 451550
      }
    },
    {
      'time': 1536418531264,
      'values': {
        'power': 457100
      }
    },
    {
      'time': 1536418533267,
      'values': {
        'power': 462590
      }
    },
    {
      'time': 1536418535268,
      'values': {
        'power': 460000
      }
    },
    {
      'time': 1536418537269,
      'values': {
        'power': 456030
      }
    },
    {
      'time': 1536418539272,
      'values': {
        'power': 458380
      }
    },
    {
      'time': 1536418541274,
      'values': {
        'power': 462560
      }
    },
    {
      'time': 1536418543276,
      'values': {
        'power': 464080
      }
    },
    {
      'time': 1536418545278,
      'values': {
        'power': 462330
      }
    },
    {
      'time': 1536418547280,
      'values': {
        'power': 461020
      }
    },
    {
      'time': 1536418549282,
      'values': {
        'power': 461300
      }
    },
    {
      'time': 1536418551284,
      'values': {
        'power': 462170
      }
    },
    {
      'time': 1536418553285,
      'values': {
        'power': 455060
      }
    },
    {
      'time': 1536418555287,
      'values': {
        'power': 435060
      }
    },
    {
      'time': 1536418557290,
      'values': {
        'power': 424190
      }
    },
    {
      'time': 1536418559292,
      'values': {
        'power': 430270
      }
    },
    {
      'time': 1536418561293,
      'values': {
        'power': 444050
      }
    },
    {
      'time': 1536418563295,
      'values': {
        'power': 455090
      }
    },
    {
      'time': 1536418565298,
      'values': {
        'power': 474210
      }
    },
    {
      'time': 1536418567300,
      'values': {
        'power': 494280
      }
    },
    {
      'time': 1536418569301,
      'values': {
        'power': 498520
      }
    },
    {
      'time': 1536418571303,
      'values': {
        'power': 494590
      }
    },
    {
      'time': 1536418573306,
      'values': {
        'power': 482560
      }
    },
    {
      'time': 1536418575308,
      'values': {
        'power': 476750
      }
    },
    {
      'time': 1536418577311,
      'values': {
        'power': 476780
      }
    },
    {
      'time': 1536418579311,
      'values': {
        'power': 476910
      }
    },
    {
      'time': 1536418581313,
      'values': {
        'power': 480650
      }
    },
    {
      'time': 1536418583315,
      'values': {
        'power': 482790
      }
    },
    {
      'time': 1536418585317,
      'values': {
        'power': 481550
      }
    },
    {
      'time': 1536418587319,
      'values': {
        'power': 479850
      }
    },
    {
      'time': 1536418589321,
      'values': {
        'power': 480400
      }
    },
    {
      'time': 1536418591322,
      'values': {
        'power': 481540
      }
    },
    {
      'time': 1536418593325,
      'values': {
        'power': 477410
      }
    },
    {
      'time': 1536418595327,
      'values': {
        'power': 473280
      }
    },
    {
      'time': 1536418597329,
      'values': {
        'power': 475650
      }
    },
    {
      'time': 1536418599331,
      'values': {
        'power': 478570
      }
    },
    {
      'time': 1536418601334,
      'values': {
        'power': 480090
      }
    },
    {
      'time': 1536418603334,
      'values': {
        'power': 480760
      }
    },
    {
      'time': 1536418605336,
      'values': {
        'power': 477790
      }
    },
    {
      'time': 1536418607339,
      'values': {
        'power': 475740
      }
    },
    {
      'time': 1536418609341,
      'values': {
        'power': 477370
      }
    },
    {
      'time': 1536418611343,
      'values': {
        'power': 476670
      }
    },
    {
      'time': 1536418613345,
      'values': {
        'power': 470450
      }
    },
    {
      'time': 1536418615347,
      'values': {
        'power': 464600
      }
    },
    {
      'time': 1536418617348,
      'values': {
        'power': 466440
      }
    },
    {
      'time': 1536418619350,
      'values': {
        'power': 474340
      }
    },
    {
      'time': 1536418621352,
      'values': {
        'power': 478170
      }
    },
    {
      'time': 1536418623354,
      'values': {
        'power': 475540
      }
    },
    {
      'time': 1536418625356,
      'values': {
        'power': 475990
      }
    },
    {
      'time': 1536418627358,
      'values': {
        'power': 478770
      }
    },
    {
      'time': 1536418629360,
      'values': {
        'power': 480580
      }
    },
    {
      'time': 1536418631361,
      'values': {
        'power': 479320
      }
    },
    {
      'time': 1536418633364,
      'values': {
        'power': 475350
      }
    },
    {
      'time': 1536418635367,
      'values': {
        'power': 473690
      }
    },
    {
      'time': 1536418637367,
      'values': {
        'power': 476700
      }
    },
    {
      'time': 1536418639370,
      'values': {
        'power': 481030
      }
    },
    {
      'time': 1536418641372,
      'values': {
        'power': 481510
      }
    },
    {
      'time': 1536418643375,
      'values': {
        'power': 482310
      }
    },
    {
      'time': 1536418645375,
      'values': {
        'power': 480300
      }
    },
    {
      'time': 1536418647378,
      'values': {
        'power': 478460
      }
    },
    {
      'time': 1536418649380,
      'values': {
        'power': 479510
      }
    },
    {
      'time': 1536418651382,
      'values': {
        'power': 476330
      }
    },
    {
      'time': 1536418653384,
      'values': {
        'power': 470550
      }
    },
    {
      'time': 1536418655385,
      'values': {
        'power': 638660
      }
    },
    {
      'time': 1536418657388,
      'values': {
        'power': 684150
      }
    },
    {
      'time': 1536418659390,
      'values': {
        'power': 549650
      }
    },
    {
      'time': 1536418661392,
      'values': {
        'power': 540970
      }
    },
    {
      'time': 1536418663394,
      'values': {
        'power': 541510
      }
    },
    {
      'time': 1536418665396,
      'values': {
        'power': 540160
      }
    },
    {
      'time': 1536418667398,
      'values': {
        'power': 542200
      }
    },
    {
      'time': 1536418669401,
      'values': {
        'power': 545330
      }
    },
    {
      'time': 1536418671401,
      'values': {
        'power': 543920
      }
    },
    {
      'time': 1536418673403,
      'values': {
        'power': 541070
      }
    },
    {
      'time': 1536418675405,
      'values': {
        'power': 543120
      }
    },
    {
      'time': 1536418677407,
      'values': {
        'power': 549630
      }
    },
    {
      'time': 1536418679409,
      'values': {
        'power': 553580
      }
    },
    {
      'time': 1536418681411,
      'values': {
        'power': 554940
      }
    },
    {
      'time': 1536418683412,
      'values': {
        'power': 555980
      }
    },
    {
      'time': 1536418685415,
      'values': {
        'power': 551040
      }
    },
    {
      'time': 1536418687417,
      'values': {
        'power': 548750
      }
    },
    {
      'time': 1536418689419,
      'values': {
        'power': 550990
      }
    },
    {
      'time': 1536418691421,
      'values': {
        'power': 550750
      }
    },
    {
      'time': 1536418693423,
      'values': {
        'power': 547570
      }
    },
    {
      'time': 1536418695425,
      'values': {
        'power': 543830
      }
    },
    {
      'time': 1536418697427,
      'values': {
        'power': 542010
      }
    },
    {
      'time': 1536418699428,
      'values': {
        'power': 543510
      }
    },
    {
      'time': 1536418701431,
      'values': {
        'power': 550480
      }
    },
    {
      'time': 1536418703433,
      'values': {
        'power': 551520
      }
    },
    {
      'time': 1536418705436,
      'values': {
        'power': 547340
      }
    },
    {
      'time': 1536418707436,
      'values': {
        'power': 546950
      }
    },
    {
      'time': 1536418709439,
      'values': {
        'power': 547330
      }
    },
    {
      'time': 1536418711441,
      'values': {
        'power': 547890
      }
    },
    {
      'time': 1536418713443,
      'values': {
        'power': 548490
      }
    },
    {
      'time': 1536418715444,
      'values': {
        'power': 545320
      }
    },
    {
      'time': 1536418717446,
      'values': {
        'power': 538970
      }
    },
    {
      'time': 1536418719448,
      'values': {
        'power': 537620
      }
    },
    {
      'time': 1536418721450,
      'values': {
        'power': 540720
      }
    },
    {
      'time': 1536418723453,
      'values': {
        'power': 545100
      }
    },
    {
      'time': 1536418725453,
      'values': {
        'power': 548560
      }
    },
    {
      'time': 1536418727455,
      'values': {
        'power': 551550
      }
    },
    {
      'time': 1536418729458,
      'values': {
        'power': 552220
      }
    },
    {
      'time': 1536418731459,
      'values': {
        'power': 550220
      }
    },
    {
      'time': 1536418733462,
      'values': {
        'power': 549090
      }
    },
    {
      'time': 1536418735464,
      'values': {
        'power': 548830
      }
    },
    {
      'time': 1536418737465,
      'values': {
        'power': 550430
      }
    },
    {
      'time': 1536418739467,
      'values': {
        'power': 549720
      }
    },
    {
      'time': 1536418741470,
      'values': {
        'power': 547860
      }
    },
    {
      'time': 1536418743472,
      'values': {
        'power': 547120
      }
    },
    {
      'time': 1536418745474,
      'values': {
        'power': 542100
      }
    },
    {
      'time': 1536418747476,
      'values': {
        'power': 542820
      }
    },
    {
      'time': 1536418749478,
      'values': {
        'power': 550870
      }
    },
    {
      'time': 1536418751480,
      'values': {
        'power': 548560
      }
    },
    {
      'time': 1536418753481,
      'values': {
        'power': 534750
      }
    },
    {
      'time': 1536418755484,
      'values': {
        'power': 524530
      }
    },
    {
      'time': 1536418757485,
      'values': {
        'power': 525000
      }
    },
    {
      'time': 1536418759487,
      'values': {
        'power': 523680
      }
    },
    {
      'time': 1536418761490,
      'values': {
        'power': 525750
      }
    },
    {
      'time': 1536418763491,
      'values': {
        'power': 538900
      }
    },
    {
      'time': 1536418765493,
      'values': {
        'power': 547920
      }
    },
    {
      'time': 1536418767495,
      'values': {
        'power': 550120
      }
    },
    {
      'time': 1536418769497,
      'values': {
        'power': 550930
      }
    },
    {
      'time': 1536418771498,
      'values': {
        'power': 549750
      }
    },
    {
      'time': 1536418773500,
      'values': {
        'power': 547460
      }
    },
    {
      'time': 1536418775503,
      'values': {
        'power': 547510
      }
    },
    {
      'time': 1536418777505,
      'values': {
        'power': 555180
      }
    },
    {
      'time': 1536418779507,
      'values': {
        'power': 559770
      }
    },
    {
      'time': 1536418781509,
      'values': {
        'power': 548110
      }
    },
    {
      'time': 1536418783510,
      'values': {
        'power': 541200
      }
    },
    {
      'time': 1536418785512,
      'values': {
        'power': 545920
      }
    },
    {
      'time': 1536418787515,
      'values': {
        'power': 550200
      }
    },
    {
      'time': 1536418789517,
      'values': {
        'power': 555110
      }
    },
    {
      'time': 1536418791519,
      'values': {
        'power': 561420
      }
    },
    {
      'time': 1536418793521,
      'values': {
        'power': 556350
      }
    },
    {
      'time': 1536418795523,
      'values': {
        'power': 548080
      }
    },
    {
      'time': 1536418797525,
      'values': {
        'power': 548840
      }
    },
    {
      'time': 1536418799527,
      'values': {
        'power': 551620
      }
    },
    {
      'time': 1536418801529,
      'values': {
        'power': 548220
      }
    },
    {
      'time': 1536418803532,
      'values': {
        'power': 543170
      }
    },
    {
      'time': 1536418805534,
      'values': {
        'power': 542470
      }
    },
    {
      'time': 1536418807535,
      'values': {
        'power': 539630
      }
    },
    {
      'time': 1536418809536,
      'values': {
        'power': 534430
      }
    },
    {
      'time': 1536418811538,
      'values': {
        'power': 532580
      }
    },
    {
      'time': 1536418813540,
      'values': {
        'power': 534820
      }
    },
    {
      'time': 1536418815542,
      'values': {
        'power': 534630
      }
    },
    {
      'time': 1536418817544,
      'values': {
        'power': 529350
      }
    },
    {
      'time': 1536418819546,
      'values': {
        'power': 529470
      }
    },
    {
      'time': 1536418821548,
      'values': {
        'power': 532210
      }
    },
    {
      'time': 1536418823550,
      'values': {
        'power': 532720
      }
    },
    {
      'time': 1536418825552,
      'values': {
        'power': 540630
      }
    },
    {
      'time': 1536418827554,
      'values': {
        'power': 545200
      }
    },
    {
      'time': 1536418829556,
      'values': {
        'power': 542050
      }
    },
    {
      'time': 1536418831558,
      'values': {
        'power': 531230
      }
    },
    {
      'time': 1536418833563,
      'values': {
        'power': 529550
      }
    },
    {
      'time': 1536418835562,
      'values': {
        'power': 531740
      }
    },
    {
      'time': 1536418837563,
      'values': {
        'power': 531950
      }
    },
    {
      'time': 1536418839565,
      'values': {
        'power': 538430
      }
    },
    {
      'time': 1536418841568,
      'values': {
        'power': 544020
      }
    },
    {
      'time': 1536418843570,
      'values': {
        'power': 545860
      }
    },
    {
      'time': 1536418845572,
      'values': {
        'power': 549790
      }
    },
    {
      'time': 1536418847574,
      'values': {
        'power': 549010
      }
    },
    {
      'time': 1536418849576,
      'values': {
        'power': 547080
      }
    },
    {
      'time': 1536418851578,
      'values': {
        'power': 546020
      }
    },
    {
      'time': 1536418853580,
      'values': {
        'power': 546960
      }
    },
    {
      'time': 1536418855582,
      'values': {
        'power': 547410
      }
    },
    {
      'time': 1536418857583,
      'values': {
        'power': 541820
      }
    },
    {
      'time': 1536418859585,
      'values': {
        'power': 537200
      }
    },
    {
      'time': 1536418861587,
      'values': {
        'power': 539840
      }
    },
    {
      'time': 1536418863589,
      'values': {
        'power': 536400
      }
    },
    {
      'time': 1536418865590,
      'values': {
        'power': 531740
      }
    },
    {
      'time': 1536418867593,
      'values': {
        'power': 531390
      }
    },
    {
      'time': 1536418869595,
      'values': {
        'power': 531220
      }
    },
    {
      'time': 1536418871597,
      'values': {
        'power': 533850
      }
    },
    {
      'time': 1536418873598,
      'values': {
        'power': 534900
      }
    },
    {
      'time': 1536418875601,
      'values': {
        'power': 530180
      }
    },
    {
      'time': 1536418877603,
      'values': {
        'power': 525300
      }
    },
    {
      'time': 1536418879605,
      'values': {
        'power': 522920
      }
    },
    {
      'time': 1536418881607,
      'values': {
        'power': 526640
      }
    },
    {
      'time': 1536418883609,
      'values': {
        'power': 538190
      }
    },
    {
      'time': 1536418885610,
      'values': {
        'power': 553370
      }
    },
    {
      'time': 1536418887613,
      'values': {
        'power': 560370
      }
    },
    {
      'time': 1536418889614,
      'values': {
        'power': 556880
      }
    },
    {
      'time': 1536418891616,
      'values': {
        'power': 554870
      }
    },
    {
      'time': 1536418893619,
      'values': {
        'power': 555150
      }
    },
    {
      'time': 1536418895621,
      'values': {
        'power': 557520
      }
    },
    {
      'time': 1536418897623,
      'values': {
        'power': 556180
      }
    },
    {
      'time': 1536418899625,
      'values': {
        'power': 554230
      }
    },
    {
      'time': 1536418901627,
      'values': {
        'power': 552200
      }
    },
    {
      'time': 1536418903629,
      'values': {
        'power': 547460
      }
    },
    {
      'time': 1536418905630,
      'values': {
        'power': 538880
      }
    },
    {
      'time': 1536418907632,
      'values': {
        'power': 533160
      }
    },
    {
      'time': 1536418909634,
      'values': {
        'power': 542100
      }
    },
    {
      'time': 1536418911635,
      'values': {
        'power': 551660
      }
    },
    {
      'time': 1536418913637,
      'values': {
        'power': 552660
      }
    },
    {
      'time': 1536418915640,
      'values': {
        'power': 548810
      }
    },
    {
      'time': 1536418917641,
      'values': {
        'power': 542740
      }
    },
    {
      'time': 1536418919643,
      'values': {
        'power': 538900
      }
    },
    {
      'time': 1536418921646,
      'values': {
        'power': 546070
      }
    },
    {
      'time': 1536418923648,
      'values': {
        'power': 555490
      }
    },
    {
      'time': 1536418925650,
      'values': {
        'power': 555260
      }
    },
    {
      'time': 1536418927652,
      'values': {
        'power': 551180
      }
    },
    {
      'time': 1536418929654,
      'values': {
        'power': 540990
      }
    },
    {
      'time': 1536418931656,
      'values': {
        'power': 530390
      }
    },
    {
      'time': 1536418933658,
      'values': {
        'power': 525780
      }
    },
    {
      'time': 1536418935661,
      'values': {
        'power': 525000
      }
    },
    {
      'time': 1536418937663,
      'values': {
        'power': 527550
      }
    },
    {
      'time': 1536418939663,
      'values': {
        'power': 533400
      }
    },
    {
      'time': 1536418941666,
      'values': {
        'power': 538380
      }
    },
    {
      'time': 1536418943670,
      'values': {
        'power': 538780
      }
    },
    {
      'time': 1536418945669,
      'values': {
        'power': 539120
      }
    },
    {
      'time': 1536418947672,
      'values': {
        'power': 537440
      }
    },
    {
      'time': 1536418949674,
      'values': {
        'power': 537430
      }
    },
    {
      'time': 1536418951675,
      'values': {
        'power': 535920
      }
    },
    {
      'time': 1536418953677,
      'values': {
        'power': 529230
      }
    },
    {
      'time': 1536418955679,
      'values': {
        'power': 525790
      }
    },
    {
      'time': 1536418957681,
      'values': {
        'power': 525350
      }
    },
    {
      'time': 1536418959683,
      'values': {
        'power': 529720
      }
    },
    {
      'time': 1536418961686,
      'values': {
        'power': 531590
      }
    },
    {
      'time': 1536418963686,
      'values': {
        'power': 526730
      }
    },
    {
      'time': 1536418965689,
      'values': {
        'power': 528620
      }
    },
    {
      'time': 1536418967691,
      'values': {
        'power': 533050
      }
    },
    {
      'time': 1536418969695,
      'values': {
        'power': 535590
      }
    },
    {
      'time': 1536418971694,
      'values': {
        'power': 535810
      }
    },
    {
      'time': 1536418973696,
      'values': {
        'power': 529350
      }
    },
    {
      'time': 1536418975699,
      'values': {
        'power': 529020
      }
    },
    {
      'time': 1536418977701,
      'values': {
        'power': 541480
      }
    },
    {
      'time': 1536418979703,
      'values': {
        'power': 553960
      }
    },
    {
      'time': 1536418981705,
      'values': {
        'power': 556880
      }
    },
    {
      'time': 1536418983707,
      'values': {
        'power': 557220
      }
    },
    {
      'time': 1536418985709,
      'values': {
        'power': 556810
      }
    },
    {
      'time': 1536418987710,
      'values': {
        'power': 555760
      }
    },
    {
      'time': 1536418989713,
      'values': {
        'power': 555520
      }
    },
    {
      'time': 1536418991715,
      'values': {
        'power': 553300
      }
    },
    {
      'time': 1536418993717,
      'values': {
        'power': 548960
      }
    },
    {
      'time': 1536418995719,
      'values': {
        'power': 545230
      }
    },
    {
      'time': 1536418997720,
      'values': {
        'power': 544610
      }
    },
    {
      'time': 1536418999722,
      'values': {
        'power': 550350
      }
    },
    {
      'time': 1536419001724,
      'values': {
        'power': 554190
      }
    },
    {
      'time': 1536419003726,
      'values': {
        'power': 553140
      }
    },
    {
      'time': 1536419005728,
      'values': {
        'power': 552900
      }
    },
    {
      'time': 1536419007730,
      'values': {
        'power': 551500
      }
    },
    {
      'time': 1536419009732,
      'values': {
        'power': 552620
      }
    },
    {
      'time': 1536419011734,
      'values': {
        'power': 553340
      }
    },
    {
      'time': 1536419013735,
      'values': {
        'power': 551970
      }
    },
    {
      'time': 1536419015737,
      'values': {
        'power': 549880
      }
    },
    {
      'time': 1536419017740,
      'values': {
        'power': 546450
      }
    },
    {
      'time': 1536419019742,
      'values': {
        'power': 542780
      }
    },
    {
      'time': 1536419021744,
      'values': {
        'power': 543490
      }
    },
    {
      'time': 1536419023746,
      'values': {
        'power': 547230
      }
    },
    {
      'time': 1536419025749,
      'values': {
        'power': 547880
      }
    },
    {
      'time': 1536419027749,
      'values': {
        'power': 547510
      }
    },
    {
      'time': 1536419029752,
      'values': {
        'power': 547560
      }
    },
    {
      'time': 1536419031754,
      'values': {
        'power': 546190
      }
    },
    {
      'time': 1536419033756,
      'values': {
        'power': 544810
      }
    },
    {
      'time': 1536419035758,
      'values': {
        'power': 544700
      }
    },
    {
      'time': 1536419037761,
      'values': {
        'power': 546680
      }
    },
    {
      'time': 1536419039761,
      'values': {
        'power': 548340
      }
    },
    {
      'time': 1536419041763,
      'values': {
        'power': 545430
      }
    },
    {
      'time': 1536419043766,
      'values': {
        'power': 544400
      }
    },
    {
      'time': 1536419045767,
      'values': {
        'power': 547280
      }
    },
    {
      'time': 1536419047769,
      'values': {
        'power': 548550
      }
    },
    {
      'time': 1536419049771,
      'values': {
        'power': 550870
      }
    },
    {
      'time': 1536419051773,
      'values': {
        'power': 555160
      }
    },
    {
      'time': 1536419053775,
      'values': {
        'power': 552810
      }
    },
    {
      'time': 1536419055776,
      'values': {
        'power': 575530
      }
    },
    {
      'time': 1536419057779,
      'values': {
        'power': 732790
      }
    },
    {
      'time': 1536419059781,
      'values': {
        'power': 725160
      }
    },
    {
      'time': 1536419061783,
      'values': {
        'power': 584430
      }
    },
    {
      'time': 1536419063785,
      'values': {
        'power': 588420
      }
    },
    {
      'time': 1536419065786,
      'values': {
        'power': 594020
      }
    },
    {
      'time': 1536419067788,
      'values': {
        'power': 590360
      }
    },
    {
      'time': 1536419069791,
      'values': {
        'power': 586650
      }
    },
    {
      'time': 1536419071794,
      'values': {
        'power': 588140
      }
    },
    {
      'time': 1536419073794,
      'values': {
        'power': 587840
      }
    },
    {
      'time': 1536419075797,
      'values': {
        'power': 586450
      }
    },
    {
      'time': 1536419077799,
      'values': {
        'power': 584950
      }
    },
    {
      'time': 1536419079801,
      'values': {
        'power': 577700
      }
    },
    {
      'time': 1536419081802,
      'values': {
        'power': 571560
      }
    },
    {
      'time': 1536419083804,
      'values': {
        'power': 569590
      }
    },
    {
      'time': 1536419085807,
      'values': {
        'power': 574370
      }
    },
    {
      'time': 1536419087809,
      'values': {
        'power': 589600
      }
    },
    {
      'time': 1536419089812,
      'values': {
        'power': 599910
      }
    },
    {
      'time': 1536419091812,
      'values': {
        'power': 599090
      }
    },
    {
      'time': 1536419093814,
      'values': {
        'power': 596430
      }
    },
    {
      'time': 1536419095816,
      'values': {
        'power': 594940
      }
    },
    {
      'time': 1536419097818,
      'values': {
        'power': 594120
      }
    },
    {
      'time': 1536419099820,
      'values': {
        'power': 588920
      }
    },
    {
      'time': 1536419101822,
      'values': {
        'power': 582820
      }
    },
    {
      'time': 1536419103824,
      'values': {
        'power': 585420
      }
    },
    {
      'time': 1536419105826,
      'values': {
        'power': 593940
      }
    },
    {
      'time': 1536419107827,
      'values': {
        'power': 597970
      }
    },
    {
      'time': 1536419109829,
      'values': {
        'power': 597210
      }
    },
    {
      'time': 1536419111832,
      'values': {
        'power': 596290
      }
    },
    {
      'time': 1536419113834,
      'values': {
        'power': 594870
      }
    },
    {
      'time': 1536419115835,
      'values': {
        'power': 592860
      }
    },
    {
      'time': 1536419117839,
      'values': {
        'power': 592030
      }
    },
    {
      'time': 1536419119840,
      'values': {
        'power': 590390
      }
    },
    {
      'time': 1536419121842,
      'values': {
        'power': 588990
      }
    },
    {
      'time': 1536419123844,
      'values': {
        'power': 590610
      }
    },
    {
      'time': 1536419125846,
      'values': {
        'power': 592440
      }
    },
    {
      'time': 1536419127848,
      'values': {
        'power': 596750
      }
    },
    {
      'time': 1536419129850,
      'values': {
        'power': 596910
      }
    },
    {
      'time': 1536419131852,
      'values': {
        'power': 585300
      }
    },
    {
      'time': 1536419133854,
      'values': {
        'power': 575800
      }
    },
    {
      'time': 1536419135856,
      'values': {
        'power': 578040
      }
    },
    {
      'time': 1536419137858,
      'values': {
        'power': 581800
      }
    },
    {
      'time': 1536419139859,
      'values': {
        'power': 576320
      }
    },
    {
      'time': 1536419141861,
      'values': {
        'power': 568000
      }
    },
    {
      'time': 1536419143863,
      'values': {
        'power': 573310
      }
    },
    {
      'time': 1536419145865,
      'values': {
        'power': 577830
      }
    },
    {
      'time': 1536419147867,
      'values': {
        'power': 576880
      }
    },
    {
      'time': 1536419149869,
      'values': {
        'power': 578400
      }
    },
    {
      'time': 1536419151871,
      'values': {
        'power': 580250
      }
    },
    {
      'time': 1536419153873,
      'values': {
        'power': 585730
      }
    },
    {
      'time': 1536419155875,
      'values': {
        'power': 599210
      }
    },
    {
      'time': 1536419157877,
      'values': {
        'power': 604910
      }
    },
    {
      'time': 1536419159879,
      'values': {
        'power': 594820
      }
    },
    {
      'time': 1536419161881,
      'values': {
        'power': 578650
      }
    },
    {
      'time': 1536419163882,
      'values': {
        'power': 567350
      }
    },
    {
      'time': 1536419165885,
      'values': {
        'power': 564950
      }
    },
    {
      'time': 1536419167886,
      'values': {
        'power': 564020
      }
    },
    {
      'time': 1536419169889,
      'values': {
        'power': 564530
      }
    },
    {
      'time': 1536419171891,
      'values': {
        'power': 564780
      }
    },
    {
      'time': 1536419173892,
      'values': {
        'power': 563500
      }
    },
    {
      'time': 1536419175894,
      'values': {
        'power': 565120
      }
    },
    {
      'time': 1536419177897,
      'values': {
        'power': 565800
      }
    },
    {
      'time': 1536419179899,
      'values': {
        'power': 565130
      }
    },
    {
      'time': 1536419181901,
      'values': {
        'power': 565770
      }
    },
    {
      'time': 1536419183903,
      'values': {
        'power': 564440
      }
    },
    {
      'time': 1536419185905,
      'values': {
        'power': 564380
      }
    },
    {
      'time': 1536419187906,
      'values': {
        'power': 578840
      }
    },
    {
      'time': 1536419189908,
      'values': {
        'power': 583480
      }
    },
    {
      'time': 1536419191910,
      'values': {
        'power': 580910
      }
    },
    {
      'time': 1536419193912,
      'values': {
        'power': 587000
      }
    },
    {
      'time': 1536419195913,
      'values': {
        'power': 584760
      }
    },
    {
      'time': 1536419197916,
      'values': {
        'power': 582700
      }
    },
    {
      'time': 1536419199918,
      'values': {
        'power': 583520
      }
    },
    {
      'time': 1536419201920,
      'values': {
        'power': 583610
      }
    },
    {
      'time': 1536419203922,
      'values': {
        'power': 578540
      }
    },
    {
      'time': 1536419205925,
      'values': {
        'power': 574270
      }
    },
    {
      'time': 1536419207925,
      'values': {
        'power': 576550
      }
    },
    {
      'time': 1536419209928,
      'values': {
        'power': 576100
      }
    },
    {
      'time': 1536419211930,
      'values': {
        'power': 570890
      }
    },
    {
      'time': 1536419213932,
      'values': {
        'power': 566060
      }
    },
    {
      'time': 1536419215935,
      'values': {
        'power': 564460
      }
    },
    {
      'time': 1536419217936,
      'values': {
        'power': 566210
      }
    },
    {
      'time': 1536419219937,
      'values': {
        'power': 572220
      }
    },
    {
      'time': 1536419221940,
      'values': {
        'power': 586670
      }
    },
    {
      'time': 1536419223942,
      'values': {
        'power': 594010
      }
    },
    {
      'time': 1536419225944,
      'values': {
        'power': 583900
      }
    },
    {
      'time': 1536419227946,
      'values': {
        'power': 578860
      }
    },
    {
      'time': 1536419229948,
      'values': {
        'power': 579800
      }
    },
    {
      'time': 1536419231950,
      'values': {
        'power': 579270
      }
    },
    {
      'time': 1536419233952,
      'values': {
        'power': 582510
      }
    },
    {
      'time': 1536419235953,
      'values': {
        'power': 584190
      }
    },
    {
      'time': 1536419237955,
      'values': {
        'power': 584670
      }
    },
    {
      'time': 1536419239957,
      'values': {
        'power': 585810
      }
    },
    {
      'time': 1536419241960,
      'values': {
        'power': 584680
      }
    },
    {
      'time': 1536419243961,
      'values': {
        'power': 582060
      }
    },
    {
      'time': 1536419245963,
      'values': {
        'power': 709750
      }
    },
    {
      'time': 1536419247964,
      'values': {
        'power': 806700
      }
    },
    {
      'time': 1536419249967,
      'values': {
        'power': 690450
      }
    },
    {
      'time': 1536419251969,
      'values': {
        'power': 627450
      }
    },
    {
      'time': 1536419253971,
      'values': {
        'power': 624370
      }
    },
    {
      'time': 1536419255973,
      'values': {
        'power': 622920
      }
    },
    {
      'time': 1536419257975,
      'values': {
        'power': 624170
      }
    },
    {
      'time': 1536419259977,
      'values': {
        'power': 629960
      }
    },
    {
      'time': 1536419261979,
      'values': {
        'power': 631550
      }
    },
    {
      'time': 1536419263981,
      'values': {
        'power': 634930
      }
    },
    {
      'time': 1536419265983,
      'values': {
        'power': 635860
      }
    },
    {
      'time': 1536419267985,
      'values': {
        'power': 636310
      }
    },
    {
      'time': 1536419269987,
      'values': {
        'power': 636400
      }
    },
    {
      'time': 1536419271989,
      'values': {
        'power': 622340
      }
    },
    {
      'time': 1536419273990,
      'values': {
        'power': 608970
      }
    },
    {
      'time': 1536419275992,
      'values': {
        'power': 605930
      }
    },
    {
      'time': 1536419277995,
      'values': {
        'power': 606330
      }
    },
    {
      'time': 1536419279997,
      'values': {
        'power': 610460
      }
    },
    {
      'time': 1536419281998,
      'values': {
        'power': 613180
      }
    },
    {
      'time': 1536419284000,
      'values': {
        'power': 611000
      }
    },
    {
      'time': 1536419286002,
      'values': {
        'power': 609620
      }
    },
    {
      'time': 1536419288004,
      'values': {
        'power': 613200
      }
    },
    {
      'time': 1536419290006,
      'values': {
        'power': 618990
      }
    },
    {
      'time': 1536419292008,
      'values': {
        'power': 618030
      }
    },
    {
      'time': 1536419294010,
      'values': {
        'power': 613420
      }
    },
    {
      'time': 1536419296012,
      'values': {
        'power': 611720
      }
    },
    {
      'time': 1536419298014,
      'values': {
        'power': 615340
      }
    },
    {
      'time': 1536419300015,
      'values': {
        'power': 630590
      }
    },
    {
      'time': 1536419302017,
      'values': {
        'power': 644360
      }
    },
    {
      'time': 1536419304020,
      'values': {
        'power': 642420
      }
    },
    {
      'time': 1536419306022,
      'values': {
        'power': 636230
      }
    },
    {
      'time': 1536419308023,
      'values': {
        'power': 634110
      }
    },
    {
      'time': 1536419310025,
      'values': {
        'power': 632170
      }
    },
    {
      'time': 1536419312028,
      'values': {
        'power': 632230
      }
    },
    {
      'time': 1536419314030,
      'values': {
        'power': 629600
      }
    },
    {
      'time': 1536419316032,
      'values': {
        'power': 626460
      }
    },
    {
      'time': 1536419318034,
      'values': {
        'power': 626580
      }
    },
    {
      'time': 1536419320036,
      'values': {
        'power': 627180
      }
    },
    {
      'time': 1536419322037,
      'values': {
        'power': 630100
      }
    },
    {
      'time': 1536419324040,
      'values': {
        'power': 632190
      }
    },
    {
      'time': 1536419326041,
      'values': {
        'power': 634850
      }
    },
    {
      'time': 1536419328043,
      'values': {
        'power': 637410
      }
    },
    {
      'time': 1536419330045,
      'values': {
        'power': 635590
      }
    },
    {
      'time': 1536419332047,
      'values': {
        'power': 634110
      }
    },
    {
      'time': 1536419334049,
      'values': {
        'power': 632120
      }
    },
    {
      'time': 1536419336051,
      'values': {
        'power': 628460
      }
    },
    {
      'time': 1536419338053,
      'values': {
        'power': 628960
      }
    },
    {
      'time': 1536419340055,
      'values': {
        'power': 633120
      }
    },
    {
      'time': 1536419342057,
      'values': {
        'power': 635440
      }
    },
    {
      'time': 1536419344059,
      'values': {
        'power': 634670
      }
    },
    {
      'time': 1536419346061,
      'values': {
        'power': 630490
      }
    },
    {
      'time': 1536419348062,
      'values': {
        'power': 627400
      }
    },
    {
      'time': 1536419350064,
      'values': {
        'power': 627750
      }
    },
    {
      'time': 1536419352067,
      'values': {
        'power': 625690
      }
    },
    {
      'time': 1536419354069,
      'values': {
        'power': 618530
      }
    },
    {
      'time': 1536419356070,
      'values': {
        'power': 612460
      }
    },
    {
      'time': 1536419358073,
      'values': {
        'power': 612380
      }
    },
    {
      'time': 1536419360075,
      'values': {
        'power': 611050
      }
    },
    {
      'time': 1536419362077,
      'values': {
        'power': 605330
      }
    },
    {
      'time': 1536419364079,
      'values': {
        'power': 603490
      }
    },
    {
      'time': 1536419366081,
      'values': {
        'power': 607650
      }
    },
    {
      'time': 1536419368083,
      'values': {
        'power': 612030
      }
    },
    {
      'time': 1536419370085,
      'values': {
        'power': 612930
      }
    },
    {
      'time': 1536419372086,
      'values': {
        'power': 609610
      }
    },
    {
      'time': 1536419374090,
      'values': {
        'power': 603530
      }
    },
    {
      'time': 1536419376090,
      'values': {
        'power': 590020
      }
    },
    {
      'time': 1536419378093,
      'values': {
        'power': 579480
      }
    },
    {
      'time': 1536419380094,
      'values': {
        'power': 581410
      }
    },
    {
      'time': 1536419382096,
      'values': {
        'power': 578340
      }
    },
    {
      'time': 1536419384097,
      'values': {
        'power': 573970
      }
    },
    {
      'time': 1536419386100,
      'values': {
        'power': 574010
      }
    },
    {
      'time': 1536419388102,
      'values': {
        'power': 578860
      }
    },
    {
      'time': 1536419390104,
      'values': {
        'power': 581960
      }
    },
    {
      'time': 1536419392106,
      'values': {
        'power': 579680
      }
    },
    {
      'time': 1536419394108,
      'values': {
        'power': 575770
      }
    },
    {
      'time': 1536419396110,
      'values': {
        'power': 582580
      }
    },
    {
      'time': 1536419398111,
      'values': {
        'power': 592850
      }
    },
    {
      'time': 1536419400113,
      'values': {
        'power': 595040
      }
    },
    {
      'time': 1536419402116,
      'values': {
        'power': 595260
      }
    },
    {
      'time': 1536419404118,
      'values': {
        'power': 596530
      }
    },
    {
      'time': 1536419406123,
      'values': {
        'power': 601940
      }
    },
    {
      'time': 1536419408121,
      'values': {
        'power': 603080
      }
    },
    {
      'time': 1536419410123,
      'values': {
        'power': 599660
      }
    },
    {
      'time': 1536419412126,
      'values': {
        'power': 599130
      }
    },
    {
      'time': 1536419414128,
      'values': {
        'power': 599120
      }
    },
    {
      'time': 1536419416130,
      'values': {
        'power': 596720
      }
    },
    {
      'time': 1536419418132,
      'values': {
        'power': 595930
      }
    },
    {
      'time': 1536419420134,
      'values': {
        'power': 597550
      }
    },
    {
      'time': 1536419422136,
      'values': {
        'power': 598940
      }
    },
    {
      'time': 1536419424137,
      'values': {
        'power': 600730
      }
    },
    {
      'time': 1536419426139,
      'values': {
        'power': 602100
      }
    },
    {
      'time': 1536419428141,
      'values': {
        'power': 602190
      }
    },
    {
      'time': 1536419430143,
      'values': {
        'power': 603400
      }
    },
    {
      'time': 1536419432145,
      'values': {
        'power': 601510
      }
    },
    {
      'time': 1536419434147,
      'values': {
        'power': 597460
      }
    },
    {
      'time': 1536419436148,
      'values': {
        'power': 595100
      }
    },
    {
      'time': 1536419438151,
      'values': {
        'power': 590480
      }
    },
    {
      'time': 1536419440153,
      'values': {
        'power': 585940
      }
    },
    {
      'time': 1536419442154,
      'values': {
        'power': 586510
      }
    },
    {
      'time': 1536419444156,
      'values': {
        'power': 589920
      }
    },
    {
      'time': 1536419446159,
      'values': {
        'power': 591710
      }
    },
    {
      'time': 1536419448161,
      'values': {
        'power': 585520
      }
    },
    {
      'time': 1536419450162,
      'values': {
        'power': 576360
      }
    },
    {
      'time': 1536419452164,
      'values': {
        'power': 574060
      }
    },
    {
      'time': 1536419454167,
      'values': {
        'power': 573680
      }
    },
    {
      'time': 1536419456169,
      'values': {
        'power': 572220
      }
    },
    {
      'time': 1536419458171,
      'values': {
        'power': 569280
      }
    },
    {
      'time': 1536419460173,
      'values': {
        'power': 566670
      }
    },
    {
      'time': 1536419462175,
      'values': {
        'power': 566770
      }
    },
    {
      'time': 1536419464176,
      'values': {
        'power': 570130
      }
    },
    {
      'time': 1536419466179,
      'values': {
        'power': 575780
      }
    },
    {
      'time': 1536419468181,
      'values': {
        'power': 578200
      }
    },
    {
      'time': 1536419470182,
      'values': {
        'power': 576150
      }
    },
    {
      'time': 1536419472184,
      'values': {
        'power': 571670
      }
    },
    {
      'time': 1536419474188,
      'values': {
        'power': 574160
      }
    },
    {
      'time': 1536419476188,
      'values': {
        'power': 578030
      }
    },
    {
      'time': 1536419478189,
      'values': {
        'power': 578690
      }
    },
    {
      'time': 1536419480192,
      'values': {
        'power': 583580
      }
    },
    {
      'time': 1536419482194,
      'values': {
        'power': 583490
      }
    },
    {
      'time': 1536419484196,
      'values': {
        'power': 579450
      }
    },
    {
      'time': 1536419486198,
      'values': {
        'power': 580720
      }
    },
    {
      'time': 1536419488200,
      'values': {
        'power': 579560
      }
    },
    {
      'time': 1536419490201,
      'values': {
        'power': 578170
      }
    },
    {
      'time': 1536419492203,
      'values': {
        'power': 575780
      }
    },
    {
      'time': 1536419494206,
      'values': {
        'power': 570220
      }
    },
    {
      'time': 1536419496208,
      'values': {
        'power': 572310
      }
    },
    {
      'time': 1536419498210,
      'values': {
        'power': 582080
      }
    },
    {
      'time': 1536419500212,
      'values': {
        'power': 587090
      }
    },
    {
      'time': 1536419502213,
      'values': {
        'power': 588110
      }
    },
    {
      'time': 1536419504215,
      'values': {
        'power': 589820
      }
    },
    {
      'time': 1536419506218,
      'values': {
        'power': 592130
      }
    },
    {
      'time': 1536419508220,
      'values': {
        'power': 592840
      }
    },
    {
      'time': 1536419510221,
      'values': {
        'power': 589790
      }
    },
    {
      'time': 1536419512223,
      'values': {
        'power': 593390
      }
    },
    {
      'time': 1536419514226,
      'values': {
        'power': 593560
      }
    },
    {
      'time': 1536419516227,
      'values': {
        'power': 584300
      }
    },
    {
      'time': 1536419518229,
      'values': {
        'power': 572940
      }
    },
    {
      'time': 1536419520231,
      'values': {
        'power': 568310
      }
    },
    {
      'time': 1536419522233,
      'values': {
        'power': 578940
      }
    },
    {
      'time': 1536419524235,
      'values': {
        'power': 597700
      }
    },
    {
      'time': 1536419526239,
      'values': {
        'power': 604390
      }
    },
    {
      'time': 1536419528238,
      'values': {
        'power': 601590
      }
    },
    {
      'time': 1536419530241,
      'values': {
        'power': 601420
      }
    },
    {
      'time': 1536419532243,
      'values': {
        'power': 599230
      }
    },
    {
      'time': 1536419534245,
      'values': {
        'power': 594580
      }
    },
    {
      'time': 1536419536247,
      'values': {
        'power': 590240
      }
    },
    {
      'time': 1536419538249,
      'values': {
        'power': 587380
      }
    },
    {
      'time': 1536419540251,
      'values': {
        'power': 588100
      }
    },
    {
      'time': 1536419542255,
      'values': {
        'power': 587940
      }
    },
    {
      'time': 1536419544254,
      'values': {
        'power': 585460
      }
    },
    {
      'time': 1536419546256,
      'values': {
        'power': 585380
      }
    },
    {
      'time': 1536419548259,
      'values': {
        'power': 587290
      }
    },
    {
      'time': 1536419550261,
      'values': {
        'power': 591460
      }
    },
    {
      'time': 1536419552262,
      'values': {
        'power': 593970
      }
    },
    {
      'time': 1536419554264,
      'values': {
        'power': 590270
      }
    },
    {
      'time': 1536419556267,
      'values': {
        'power': 586460
      }
    },
    {
      'time': 1536419558269,
      'values': {
        'power': 586490
      }
    },
    {
      'time': 1536419560271,
      'values': {
        'power': 588180
      }
    },
    {
      'time': 1536419562273,
      'values': {
        'power': 591340
      }
    },
    {
      'time': 1536419564274,
      'values': {
        'power': 592410
      }
    },
    {
      'time': 1536419566276,
      'values': {
        'power': 591630
      }
    },
    {
      'time': 1536419568278,
      'values': {
        'power': 591710
      }
    },
    {
      'time': 1536419570280,
      'values': {
        'power': 592420
      }
    },
    {
      'time': 1536419572282,
      'values': {
        'power': 594540
      }
    },
    {
      'time': 1536419574284,
      'values': {
        'power': 591890
      }
    },
    {
      'time': 1536419576286,
      'values': {
        'power': 585150
      }
    },
    {
      'time': 1536419578287,
      'values': {
        'power': 581370
      }
    },
    {
      'time': 1536419580289,
      'values': {
        'power': 584790
      }
    },
    {
      'time': 1536419582292,
      'values': {
        'power': 592340
      }
    },
    {
      'time': 1536419584294,
      'values': {
        'power': 596430
      }
    },
    {
      'time': 1536419586296,
      'values': {
        'power': 596380
      }
    },
    {
      'time': 1536419588298,
      'values': {
        'power': 597510
      }
    },
    {
      'time': 1536419590300,
      'values': {
        'power': 600590
      }
    },
    {
      'time': 1536419592302,
      'values': {
        'power': 602130
      }
    },
    {
      'time': 1536419594304,
      'values': {
        'power': 600090
      }
    },
    {
      'time': 1536419596306,
      'values': {
        'power': 594170
      }
    },
    {
      'time': 1536419598309,
      'values': {
        'power': 590290
      }
    },
    {
      'time': 1536419600309,
      'values': {
        'power': 593800
      }
    },
    {
      'time': 1536419602312,
      'values': {
        'power': 599620
      }
    },
    {
      'time': 1536419604313,
      'values': {
        'power': 596780
      }
    },
    {
      'time': 1536419606316,
      'values': {
        'power': 588700
      }
    },
    {
      'time': 1536419608318,
      'values': {
        'power': 584120
      }
    },
    {
      'time': 1536419610319,
      'values': {
        'power': 581270
      }
    },
    {
      'time': 1536419612321,
      'values': {
        'power': 576500
      }
    },
    {
      'time': 1536419614323,
      'values': {
        'power': 567700
      }
    },
    {
      'time': 1536419616325,
      'values': {
        'power': 561270
      }
    },
    {
      'time': 1536419618327,
      'values': {
        'power': 567650
      }
    },
    {
      'time': 1536419620329,
      'values': {
        'power': 578400
      }
    },
    {
      'time': 1536419622331,
      'values': {
        'power': 583560
      }
    },
    {
      'time': 1536419624333,
      'values': {
        'power': 593390
      }
    },
    {
      'time': 1536419626334,
      'values': {
        'power': 607380
      }
    },
    {
      'time': 1536419628337,
      'values': {
        'power': 609370
      }
    },
    {
      'time': 1536419630338,
      'values': {
        'power': 605430
      }
    },
    {
      'time': 1536419632340,
      'values': {
        'power': 596900
      }
    },
    {
      'time': 1536419634343,
      'values': {
        'power': 584630
      }
    },
    {
      'time': 1536419636345,
      'values': {
        'power': 579090
      }
    },
    {
      'time': 1536419638347,
      'values': {
        'power': 581410
      }
    },
    {
      'time': 1536419640349,
      'values': {
        'power': 583810
      }
    },
    {
      'time': 1536419642351,
      'values': {
        'power': 584820
      }
    },
    {
      'time': 1536419644352,
      'values': {
        'power': 593600
      }
    },
    {
      'time': 1536419646354,
      'values': {
        'power': 604540
      }
    },
    {
      'time': 1536419648357,
      'values': {
        'power': 604010
      }
    },
    {
      'time': 1536419650359,
      'values': {
        'power': 598000
      }
    },
    {
      'time': 1536419652361,
      'values': {
        'power': 589920
      }
    },
    {
      'time': 1536419654363,
      'values': {
        'power': 586350
      }
    },
    {
      'time': 1536419656364,
      'values': {
        'power': 586670
      }
    },
    {
      'time': 1536419658366,
      'values': {
        'power': 585920
      }
    },
    {
      'time': 1536419660368,
      'values': {
        'power': 584750
      }
    },
    {
      'time': 1536419662370,
      'values': {
        'power': 581480
      }
    },
    {
      'time': 1536419664372,
      'values': {
        'power': 578670
      }
    },
    {
      'time': 1536419666374,
      'values': {
        'power': 581250
      }
    },
    {
      'time': 1536419668376,
      'values': {
        'power': 569240
      }
    },
    {
      'time': 1536419670378,
      'values': {
        'power': 546900
      }
    },
    {
      'time': 1536419672380,
      'values': {
        'power': 535750
      }
    },
    {
      'time': 1536419674382,
      'values': {
        'power': 532930
      }
    },
    {
      'time': 1536419676385,
      'values': {
        'power': 537570
      }
    },
    {
      'time': 1536419678387,
      'values': {
        'power': 542730
      }
    },
    {
      'time': 1536419680388,
      'values': {
        'power': 542890
      }
    },
    {
      'time': 1536419682389,
      'values': {
        'power': 541100
      }
    },
    {
      'time': 1536419684391,
      'values': {
        'power': 543020
      }
    },
    {
      'time': 1536419686394,
      'values': {
        'power': 546980
      }
    },
    {
      'time': 1536419688396,
      'values': {
        'power': 547860
      }
    },
    {
      'time': 1536419690398,
      'values': {
        'power': 546690
      }
    },
    {
      'time': 1536419692400,
      'values': {
        'power': 542790
      }
    },
    {
      'time': 1536419694403,
      'values': {
        'power': 537260
      }
    },
    {
      'time': 1536419696404,
      'values': {
        'power': 530200
      }
    },
    {
      'time': 1536419698406,
      'values': {
        'power': 526070
      }
    },
    {
      'time': 1536419700408,
      'values': {
        'power': 526040
      }
    },
    {
      'time': 1536419702410,
      'values': {
        'power': 528600
      }
    },
    {
      'time': 1536419704412,
      'values': {
        'power': 531520
      }
    },
    {
      'time': 1536419706416,
      'values': {
        'power': 519740
      }
    },
    {
      'time': 1536419708415,
      'values': {
        'power': 494410
      }
    },
    {
      'time': 1536419710417,
      'values': {
        'power': 476270
      }
    },
    {
      'time': 1536419712419,
      'values': {
        'power': 466600
      }
    },
    {
      'time': 1536419714421,
      'values': {
        'power': 459460
      }
    },
    {
      'time': 1536419716423,
      'values': {
        'power': 459920
      }
    },
    {
      'time': 1536419718425,
      'values': {
        'power': 460610
      }
    },
    {
      'time': 1536419720427,
      'values': {
        'power': 456300
      }
    },
    {
      'time': 1536419722429,
      'values': {
        'power': 463070
      }
    },
    {
      'time': 1536419724431,
      'values': {
        'power': 478750
      }
    },
    {
      'time': 1536419726433,
      'values': {
        'power': 489780
      }
    },
    {
      'time': 1536419728435,
      'values': {
        'power': 490580
      }
    },
    {
      'time': 1536419730437,
      'values': {
        'power': 485360
      }
    },
    {
      'time': 1536419732439,
      'values': {
        'power': 484140
      }
    },
    {
      'time': 1536419734442,
      'values': {
        'power': 481560
      }
    },
    {
      'time': 1536419736442,
      'values': {
        'power': 479720
      }
    },
    {
      'time': 1536419738445,
      'values': {
        'power': 480060
      }
    },
    {
      'time': 1536419740447,
      'values': {
        'power': 478440
      }
    },
    {
      'time': 1536419742449,
      'values': {
        'power': 478100
      }
    },
    {
      'time': 1536419744450,
      'values': {
        'power': 481170
      }
    },
    {
      'time': 1536419746452,
      'values': {
        'power': 478130
      }
    },
    {
      'time': 1536419748455,
      'values': {
        'power': 469260
      }
    },
    {
      'time': 1536419750457,
      'values': {
        'power': 465800
      }
    },
    {
      'time': 1536419752459,
      'values': {
        'power': 465480
      }
    },
    {
      'time': 1536419754460,
      'values': {
        'power': 466500
      }
    },
    {
      'time': 1536419756462,
      'values': {
        'power': 459650
      }
    },
    {
      'time': 1536419758464,
      'values': {
        'power': 448560
      }
    },
    {
      'time': 1536419760466,
      'values': {
        'power': 445190
      }
    },
    {
      'time': 1536419762468,
      'values': {
        'power': 446060
      }
    },
    {
      'time': 1536419764469,
      'values': {
        'power': 448000
      }
    },
    {
      'time': 1536419766472,
      'values': {
        'power': 450160
      }
    },
    {
      'time': 1536419768474,
      'values': {
        'power': 449900
      }
    },
    {
      'time': 1536419770476,
      'values': {
        'power': 447970
      }
    },
    {
      'time': 1536419772478,
      'values': {
        'power': 449250
      }
    },
    {
      'time': 1536419774480,
      'values': {
        'power': 450290
      }
    },
    {
      'time': 1536419776482,
      'values': {
        'power': 445370
      }
    },
    {
      'time': 1536419778483,
      'values': {
        'power': 441420
      }
    },
    {
      'time': 1536419780485,
      'values': {
        'power': 439500
      }
    },
    {
      'time': 1536419782488,
      'values': {
        'power': 440640
      }
    },
    {
      'time': 1536419784489,
      'values': {
        'power': 444380
      }
    },
    {
      'time': 1536419786492,
      'values': {
        'power': 446530
      }
    },
    {
      'time': 1536419788494,
      'values': {
        'power': 446520
      }
    },
    {
      'time': 1536419790495,
      'values': {
        'power': 443850
      }
    },
    {
      'time': 1536419792497,
      'values': {
        'power': 443830
      }
    },
    {
      'time': 1536419794500,
      'values': {
        'power': 445000
      }
    },
    {
      'time': 1536419796502,
      'values': {
        'power': 443780
      }
    },
    {
      'time': 1536419798504,
      'values': {
        'power': 442490
      }
    },
    {
      'time': 1536419800505,
      'values': {
        'power': 441380
      }
    },
    {
      'time': 1536419802507,
      'values': {
        'power': 443980
      }
    },
    {
      'time': 1536419804509,
      'values': {
        'power': 447840
      }
    },
    {
      'time': 1536419806511,
      'values': {
        'power': 448440
      }
    },
    {
      'time': 1536419808515,
      'values': {
        'power': 447240
      }
    },
    {
      'time': 1536419810515,
      'values': {
        'power': 444590
      }
    },
    {
      'time': 1536419812517,
      'values': {
        'power': 442590
      }
    },
    {
      'time': 1536419814519,
      'values': {
        'power': 443440
      }
    },
    {
      'time': 1536419816520,
      'values': {
        'power': 442540
      }
    },
    {
      'time': 1536419818522,
      'values': {
        'power': 438950
      }
    },
    {
      'time': 1536419820525,
      'values': {
        'power': 436800
      }
    },
    {
      'time': 1536419822527,
      'values': {
        'power': 438520
      }
    },
    {
      'time': 1536419824529,
      'values': {
        'power': 452010
      }
    },
    {
      'time': 1536419826531,
      'values': {
        'power': 468510
      }
    },
    {
      'time': 1536419828533,
      'values': {
        'power': 471710
      }
    },
    {
      'time': 1536419830535,
      'values': {
        'power': 467460
      }
    },
    {
      'time': 1536419832537,
      'values': {
        'power': 464610
      }
    },
    {
      'time': 1536419834539,
      'values': {
        'power': 464890
      }
    },
    {
      'time': 1536419836540,
      'values': {
        'power': 462750
      }
    },
    {
      'time': 1536419838542,
      'values': {
        'power': 458660
      }
    },
    {
      'time': 1536419840545,
      'values': {
        'power': 457640
      }
    },
    {
      'time': 1536419842549,
      'values': {
        'power': 461030
      }
    },
    {
      'time': 1536419844548,
      'values': {
        'power': 465090
      }
    },
    {
      'time': 1536419846550,
      'values': {
        'power': 464710
      }
    },
    {
      'time': 1536419848552,
      'values': {
        'power': 463100
      }
    },
    {
      'time': 1536419850554,
      'values': {
        'power': 461850
      }
    },
    {
      'time': 1536419852556,
      'values': {
        'power': 462740
      }
    },
    {
      'time': 1536419854558,
      'values': {
        'power': 464100
      }
    },
    {
      'time': 1536419856560,
      'values': {
        'power': 461190
      }
    },
    {
      'time': 1536419858562,
      'values': {
        'power': 453130
      }
    },
    {
      'time': 1536419860565,
      'values': {
        'power': 447560
      }
    },
    {
      'time': 1536419862566,
      'values': {
        'power': 448010
      }
    },
    {
      'time': 1536419864568,
      'values': {
        'power': 452930
      }
    },
    {
      'time': 1536419866570,
      'values': {
        'power': 461290
      }
    },
    {
      'time': 1536419868572,
      'values': {
        'power': 464010
      }
    },
    {
      'time': 1536419870576,
      'values': {
        'power': 469270
      }
    },
    {
      'time': 1536419872575,
      'values': {
        'power': 472120
      }
    },
    {
      'time': 1536419874578,
      'values': {
        'power': 461620
      }
    },
    {
      'time': 1536419876580,
      'values': {
        'power': 453200
      }
    },
    {
      'time': 1536419878583,
      'values': {
        'power': 450740
      }
    },
    {
      'time': 1536419880583,
      'values': {
        'power': 450350
      }
    },
    {
      'time': 1536419882586,
      'values': {
        'power': 452380
      }
    },
    {
      'time': 1536419884588,
      'values': {
        'power': 455130
      }
    },
    {
      'time': 1536419886590,
      'values': {
        'power': 456360
      }
    },
    {
      'time': 1536419888591,
      'values': {
        'power': 456440
      }
    },
    {
      'time': 1536419890594,
      'values': {
        'power': 456430
      }
    },
    {
      'time': 1536419892596,
      'values': {
        'power': 454080
      }
    },
    {
      'time': 1536419894597,
      'values': {
        'power': 450870
      }
    },
    {
      'time': 1536419896599,
      'values': {
        'power': 451280
      }
    },
    {
      'time': 1536419898601,
      'values': {
        'power': 450510
      }
    },
    {
      'time': 1536419900603,
      'values': {
        'power': 451680
      }
    },
    {
      'time': 1536419902605,
      'values': {
        'power': 456020
      }
    },
    {
      'time': 1536419904607,
      'values': {
        'power': 463850
      }
    },
    {
      'time': 1536419906609,
      'values': {
        'power': 466970
      }
    },
    {
      'time': 1536419908611,
      'values': {
        'power': 465610
      }
    },
    {
      'time': 1536419910614,
      'values': {
        'power': 468510
      }
    },
    {
      'time': 1536419912614,
      'values': {
        'power': 466570
      }
    },
    {
      'time': 1536419914616,
      'values': {
        'power': 463920
      }
    },
    {
      'time': 1536419916619,
      'values': {
        'power': 461840
      }
    },
    {
      'time': 1536419918621,
      'values': {
        'power': 462700
      }
    },
    {
      'time': 1536419920623,
      'values': {
        'power': 467560
      }
    },
    {
      'time': 1536419922625,
      'values': {
        'power': 467680
      }
    },
    {
      'time': 1536419924627,
      'values': {
        'power': 477440
      }
    },
    {
      'time': 1536419926628,
      'values': {
        'power': 496980
      }
    },
    {
      'time': 1536419928630,
      'values': {
        'power': 504120
      }
    },
    {
      'time': 1536419930633,
      'values': {
        'power': 503160
      }
    },
    {
      'time': 1536419932635,
      'values': {
        'power': 567930
      }
    },
    {
      'time': 1536419934637,
      'values': {
        'power': 698210
      }
    },
    {
      'time': 1536419936639,
      'values': {
        'power': 652730
      }
    },
    {
      'time': 1536419938640,
      'values': {
        'power': 543560
      }
    },
    {
      'time': 1536419940642,
      'values': {
        'power': 546340
      }
    },
    {
      'time': 1536419942644,
      'values': {
        'power': 548790
      }
    },
    {
      'time': 1536419944646,
      'values': {
        'power': 560090
      }
    },
    {
      'time': 1536419946648,
      'values': {
        'power': 574550
      }
    },
    {
      'time': 1536419948650,
      'values': {
        'power': 577780
      }
    },
    {
      'time': 1536419950653,
      'values': {
        'power': 573730
      }
    },
    {
      'time': 1536419952655,
      'values': {
        'power': 571240
      }
    },
    {
      'time': 1536419954655,
      'values': {
        'power': 573070
      }
    },
    {
      'time': 1536419956658,
      'values': {
        'power': 572030
      }
    },
    {
      'time': 1536419958660,
      'values': {
        'power': 568210
      }
    },
    {
      'time': 1536419960662,
      'values': {
        'power': 567490
      }
    },
    {
      'time': 1536419962664,
      'values': {
        'power': 567590
      }
    },
    {
      'time': 1536419964665,
      'values': {
        'power': 571620
      }
    },
    {
      'time': 1536419966667,
      'values': {
        'power': 575660
      }
    },
    {
      'time': 1536419968670,
      'values': {
        'power': 576040
      }
    },
    {
      'time': 1536419970672,
      'values': {
        'power': 577200
      }
    },
    {
      'time': 1536419972674,
      'values': {
        'power': 576190
      }
    },
    {
      'time': 1536419974676,
      'values': {
        'power': 573900
      }
    },
    {
      'time': 1536419976678,
      'values': {
        'power': 573070
      }
    },
    {
      'time': 1536419978682,
      'values': {
        'power': 569940
      }
    },
    {
      'time': 1536419980681,
      'values': {
        'power': 564840
      }
    },
    {
      'time': 1536419982683,
      'values': {
        'power': 651910
      }
    },
    {
      'time': 1536419984686,
      'values': {
        'power': 1408890
      }
    },
    {
      'time': 1536419986688,
      'values': {
        'power': 2244070
      }
    },
    {
      'time': 1536419988690,
      'values': {
        'power': 2389270
      }
    },
    {
      'time': 1536419990691,
      'values': {
        'power': 2386980
      }
    },
    {
      'time': 1536419992693,
      'values': {
        'power': 2383240
      }
    },
    {
      'time': 1536419994695,
      'values': {
        'power': 2383900
      }
    },
    {
      'time': 1536419996697,
      'values': {
        'power': 2389800
      }
    },
    {
      'time': 1536419998699,
      'values': {
        'power': 2387780
      }
    },
    {
      'time': 1536420000701,
      'values': {
        'power': 2382370
      }
    },
    {
      'time': 1536420002703,
      'values': {
        'power': 2380130
      }
    },
    {
      'time': 1536420004705,
      'values': {
        'power': 2380420
      }
    },
    {
      'time': 1536420006707,
      'values': {
        'power': 2381660
      }
    },
    {
      'time': 1536420008708,
      'values': {
        'power': 2382080
      }
    },
    {
      'time': 1536420010711,
      'values': {
        'power': 2383840
      }
    },
    {
      'time': 1536420012715,
      'values': {
        'power': 2384040
      }
    },
    {
      'time': 1536420014716,
      'values': {
        'power': 2382550
      }
    },
    {
      'time': 1536420016716,
      'values': {
        'power': 2381360
      }
    },
    {
      'time': 1536420018719,
      'values': {
        'power': 2383870
      }
    },
    {
      'time': 1536420020721,
      'values': {
        'power': 2379430
      }
    },
    {
      'time': 1536420022723,
      'values': {
        'power': 2371250
      }
    },
    {
      'time': 1536420024725,
      'values': {
        'power': 2370190
      }
    },
    {
      'time': 1536420026727,
      'values': {
        'power': 2376880
      }
    },
    {
      'time': 1536420028729,
      'values': {
        'power': 2384850
      }
    },
    {
      'time': 1536420030731,
      'values': {
        'power': 2385390
      }
    },
    {
      'time': 1536420032733,
      'values': {
        'power': 2382300
      }
    },
    {
      'time': 1536420034734,
      'values': {
        'power': 2382020
      }
    },
    {
      'time': 1536420036736,
      'values': {
        'power': 2384980
      }
    },
    {
      'time': 1536420038738,
      'values': {
        'power': 2386240
      }
    },
    {
      'time': 1536420040740,
      'values': {
        'power': 2383020
      }
    },
    {
      'time': 1536420042742,
      'values': {
        'power': 2380280
      }
    },
    {
      'time': 1536420044744,
      'values': {
        'power': 2382450
      }
    },
    {
      'time': 1536420046746,
      'values': {
        'power': 2385120
      }
    },
    {
      'time': 1536420048748,
      'values': {
        'power': 2387290
      }
    },
    {
      'time': 1536420050749,
      'values': {
        'power': 2388790
      }
    },
    {
      'time': 1536420052752,
      'values': {
        'power': 2386820
      }
    },
    {
      'time': 1536420054754,
      'values': {
        'power': 2385600
      }
    },
    {
      'time': 1536420056756,
      'values': {
        'power': 2387790
      }
    },
    {
      'time': 1536420058758,
      'values': {
        'power': 2386850
      }
    },
    {
      'time': 1536420060760,
      'values': {
        'power': 2119240
      }
    },
    {
      'time': 1536420062762,
      'values': {
        'power': 1223680
      }
    },
    {
      'time': 1536420064764,
      'values': {
        'power': 564630
      }
    },
    {
      'time': 1536420066765,
      'values': {
        'power': 536390
      }
    },
    {
      'time': 1536420068767,
      'values': {
        'power': 539900
      }
    },
    {
      'time': 1536420070770,
      'values': {
        'power': 543380
      }
    },
    {
      'time': 1536420072772,
      'values': {
        'power': 542000
      }
    },
    {
      'time': 1536420074774,
      'values': {
        'power': 541050
      }
    },
    {
      'time': 1536420076776,
      'values': {
        'power': 542000
      }
    },
    {
      'time': 1536420078778,
      'values': {
        'power': 540770
      }
    },
    {
      'time': 1536420080781,
      'values': {
        'power': 536580
      }
    },
    {
      'time': 1536420082781,
      'values': {
        'power': 533270
      }
    },
    {
      'time': 1536420084783,
      'values': {
        'power': 533840
      }
    },
    {
      'time': 1536420086785,
      'values': {
        'power': 536740
      }
    },
    {
      'time': 1536420088788,
      'values': {
        'power': 539410
      }
    },
    {
      'time': 1536420090789,
      'values': {
        'power': 538520
      }
    },
    {
      'time': 1536420092790,
      'values': {
        'power': 536170
      }
    },
    {
      'time': 1536420094792,
      'values': {
        'power': 537160
      }
    },
    {
      'time': 1536420096795,
      'values': {
        'power': 536210
      }
    },
    {
      'time': 1536420098797,
      'values': {
        'power': 533520
      }
    },
    {
      'time': 1536420100799,
      'values': {
        'power': 536820
      }
    },
    {
      'time': 1536420102801,
      'values': {
        'power': 533030
      }
    },
    {
      'time': 1536420104803,
      'values': {
        'power': 525010
      }
    },
    {
      'time': 1536420106805,
      'values': {
        'power': 523430
      }
    },
    {
      'time': 1536420108807,
      'values': {
        'power': 526960
      }
    },
    {
      'time': 1536420110809,
      'values': {
        'power': 676720
      }
    },
    {
      'time': 1536420112811,
      'values': {
        'power': 1029020
      }
    },
    {
      'time': 1536420114814,
      'values': {
        'power': 1023900
      }
    },
    {
      'time': 1536420116815,
      'values': {
        'power': 709200
      }
    },
    {
      'time': 1536420118816,
      'values': {
        'power': 600480
      }
    },
    {
      'time': 1536420120818,
      'values': {
        'power': 601550
      }
    },
    {
      'time': 1536420122822,
      'values': {
        'power': 608560
      }
    },
    {
      'time': 1536420124823,
      'values': {
        'power': 602960
      }
    },
    {
      'time': 1536420126824,
      'values': {
        'power': 596290
      }
    },
    {
      'time': 1536420128827,
      'values': {
        'power': 598850
      }
    },
    {
      'time': 1536420130828,
      'values': {
        'power': 602670
      }
    },
    {
      'time': 1536420132830,
      'values': {
        'power': 602170
      }
    },
    {
      'time': 1536420134832,
      'values': {
        'power': 601260
      }
    },
    {
      'time': 1536420136835,
      'values': {
        'power': 600460
      }
    },
    {
      'time': 1536420138836,
      'values': {
        'power': 601450
      }
    },
    {
      'time': 1536420140839,
      'values': {
        'power': 602880
      }
    },
    {
      'time': 1536420142843,
      'values': {
        'power': 600580
      }
    },
    {
      'time': 1536420144842,
      'values': {
        'power': 597440
      }
    },
    {
      'time': 1536420146844,
      'values': {
        'power': 599220
      }
    },
    {
      'time': 1536420148845,
      'values': {
        'power': 603000
      }
    },
    {
      'time': 1536420150848,
      'values': {
        'power': 604790
      }
    },
    {
      'time': 1536420152850,
      'values': {
        'power': 602360
      }
    },
    {
      'time': 1536420154852,
      'values': {
        'power': 602100
      }
    },
    {
      'time': 1536420156854,
      'values': {
        'power': 605980
      }
    },
    {
      'time': 1536420158856,
      'values': {
        'power': 608170
      }
    },
    {
      'time': 1536420160858,
      'values': {
        'power': 604770
      }
    },
    {
      'time': 1536420162860,
      'values': {
        'power': 599990
      }
    },
    {
      'time': 1536420164862,
      'values': {
        'power': 598180
      }
    },
    {
      'time': 1536420166864,
      'values': {
        'power': 601090
      }
    },
    {
      'time': 1536420168866,
      'values': {
        'power': 604960
      }
    },
    {
      'time': 1536420170867,
      'values': {
        'power': 605590
      }
    },
    {
      'time': 1536420172869,
      'values': {
        'power': 606300
      }
    },
    {
      'time': 1536420174872,
      'values': {
        'power': 607790
      }
    },
    {
      'time': 1536420176874,
      'values': {
        'power': 609530
      }
    },
    {
      'time': 1536420178875,
      'values': {
        'power': 610910
      }
    },
    {
      'time': 1536420180878,
      'values': {
        'power': 607280
      }
    },
    {
      'time': 1536420182879,
      'values': {
        'power': 602210
      }
    },
    {
      'time': 1536420184881,
      'values': {
        'power': 602740
      }
    },
    {
      'time': 1536420186883,
      'values': {
        'power': 606780
      }
    },
    {
      'time': 1536420188885,
      'values': {
        'power': 611230
      }
    },
    {
      'time': 1536420190887,
      'values': {
        'power': 612150
      }
    },
    {
      'time': 1536420192889,
      'values': {
        'power': 608350
      }
    },
    {
      'time': 1536420194890,
      'values': {
        'power': 607850
      }
    },
    {
      'time': 1536420196893,
      'values': {
        'power': 610590
      }
    },
    {
      'time': 1536420198894,
      'values': {
        'power': 609830
      }
    },
    {
      'time': 1536420200896,
      'values': {
        'power': 606840
      }
    },
    {
      'time': 1536420202899,
      'values': {
        'power': 602520
      }
    },
    {
      'time': 1536420204901,
      'values': {
        'power': 600490
      }
    },
    {
      'time': 1536420206903,
      'values': {
        'power': 603840
      }
    },
    {
      'time': 1536420208905,
      'values': {
        'power': 610280
      }
    },
    {
      'time': 1536420210907,
      'values': {
        'power': 610930
      }
    },
    {
      'time': 1536420212909,
      'values': {
        'power': 608770
      }
    },
    {
      'time': 1536420214911,
      'values': {
        'power': 610810
      }
    },
    {
      'time': 1536420216912,
      'values': {
        'power': 609250
      }
    },
    {
      'time': 1536420218915,
      'values': {
        'power': 607540
      }
    },
    {
      'time': 1536420220916,
      'values': {
        'power': 610480
      }
    },
    {
      'time': 1536420222919,
      'values': {
        'power': 609900
      }
    },
    {
      'time': 1536420224922,
      'values': {
        'power': 606580
      }
    },
    {
      'time': 1536420226922,
      'values': {
        'power': 611250
      }
    },
    {
      'time': 1536420228925,
      'values': {
        'power': 620580
      }
    },
    {
      'time': 1536420230926,
      'values': {
        'power': 624820
      }
    },
    {
      'time': 1536420232928,
      'values': {
        'power': 627080
      }
    },
    {
      'time': 1536420234931,
      'values': {
        'power': 629440
      }
    },
    {
      'time': 1536420236932,
      'values': {
        'power': 631120
      }
    },
    {
      'time': 1536420238934,
      'values': {
        'power': 633540
      }
    },
    {
      'time': 1536420240936,
      'values': {
        'power': 635150
      }
    },
    {
      'time': 1536420242938,
      'values': {
        'power': 634870
      }
    },
    {
      'time': 1536420244940,
      'values': {
        'power': 630210
      }
    },
    {
      'time': 1536420246942,
      'values': {
        'power': 609670
      }
    },
    {
      'time': 1536420248945,
      'values': {
        'power': 593320
      }
    },
    {
      'time': 1536420250946,
      'values': {
        'power': 594350
      }
    },
    {
      'time': 1536420252947,
      'values': {
        'power': 595230
      }
    },
    {
      'time': 1536420254949,
      'values': {
        'power': 596140
      }
    },
    {
      'time': 1536420256952,
      'values': {
        'power': 596710
      }
    },
    {
      'time': 1536420258954,
      'values': {
        'power': 594790
      }
    },
    {
      'time': 1536420260956,
      'values': {
        'power': 593390
      }
    },
    {
      'time': 1536420262958,
      'values': {
        'power': 592790
      }
    },
    {
      'time': 1536420264960,
      'values': {
        'power': 594660
      }
    },
    {
      'time': 1536420266962,
      'values': {
        'power': 592710
      }
    },
    {
      'time': 1536420268965,
      'values': {
        'power': 588150
      }
    },
    {
      'time': 1536420270965,
      'values': {
        'power': 588190
      }
    },
    {
      'time': 1536420272967,
      'values': {
        'power': 587240
      }
    },
    {
      'time': 1536420274969,
      'values': {
        'power': 581450
      }
    },
    {
      'time': 1536420276971,
      'values': {
        'power': 578670
      }
    },
    {
      'time': 1536420278973,
      'values': {
        'power': 582480
      }
    },
    {
      'time': 1536420280975,
      'values': {
        'power': 581910
      }
    },
    {
      'time': 1536420282976,
      'values': {
        'power': 579280
      }
    },
    {
      'time': 1536420284978,
      'values': {
        'power': 583350
      }
    },
    {
      'time': 1536420286981,
      'values': {
        'power': 590940
      }
    },
    {
      'time': 1536420288983,
      'values': {
        'power': 590980
      }
    },
    {
      'time': 1536420290985,
      'values': {
        'power': 587440
      }
    },
    {
      'time': 1536420292987,
      'values': {
        'power': 584990
      }
    },
    {
      'time': 1536420294989,
      'values': {
        'power': 586510
      }
    },
    {
      'time': 1536420296990,
      'values': {
        'power': 589730
      }
    },
    {
      'time': 1536420298992,
      'values': {
        'power': 592850
      }
    },
    {
      'time': 1536420300995,
      'values': {
        'power': 597170
      }
    },
    {
      'time': 1536420302997,
      'values': {
        'power': 597300
      }
    },
    {
      'time': 1536420304999,
      'values': {
        'power': 591910
      }
    },
    {
      'time': 1536420307000,
      'values': {
        'power': 589030
      }
    },
    {
      'time': 1536420309002,
      'values': {
        'power': 591330
      }
    },
    {
      'time': 1536420311005,
      'values': {
        'power': 591310
      }
    },
    {
      'time': 1536420313007,
      'values': {
        'power': 589500
      }
    },
    {
      'time': 1536420315009,
      'values': {
        'power': 591350
      }
    },
    {
      'time': 1536420317010,
      'values': {
        'power': 594090
      }
    },
    {
      'time': 1536420319012,
      'values': {
        'power': 596780
      }
    },
    {
      'time': 1536420321014,
      'values': {
        'power': 598000
      }
    },
    {
      'time': 1536420323016,
      'values': {
        'power': 596120
      }
    },
    {
      'time': 1536420325018,
      'values': {
        'power': 594190
      }
    },
    {
      'time': 1536420327020,
      'values': {
        'power': 593620
      }
    },
    {
      'time': 1536420329022,
      'values': {
        'power': 591470
      }
    },
    {
      'time': 1536420331024,
      'values': {
        'power': 591000
      }
    },
    {
      'time': 1536420333026,
      'values': {
        'power': 594980
      }
    },
    {
      'time': 1536420335027,
      'values': {
        'power': 598060
      }
    },
    {
      'time': 1536420337029,
      'values': {
        'power': 598870
      }
    },
    {
      'time': 1536420339032,
      'values': {
        'power': 599300
      }
    },
    {
      'time': 1536420341034,
      'values': {
        'power': 597180
      }
    },
    {
      'time': 1536420343036,
      'values': {
        'power': 593110
      }
    },
    {
      'time': 1536420345038,
      'values': {
        'power': 589100
      }
    },
    {
      'time': 1536420347041,
      'values': {
        'power': 587980
      }
    },
    {
      'time': 1536420349042,
      'values': {
        'power': 589040
      }
    },
    {
      'time': 1536420351043,
      'values': {
        'power': 591200
      }
    },
    {
      'time': 1536420353045,
      'values': {
        'power': 593270
      }
    },
    {
      'time': 1536420355048,
      'values': {
        'power': 593260
      }
    },
    {
      'time': 1536420357050,
      'values': {
        'power': 594070
      }
    },
    {
      'time': 1536420359052,
      'values': {
        'power': 594940
      }
    },
    {
      'time': 1536420361055,
      'values': {
        'power': 595250
      }
    },
    {
      'time': 1536420363056,
      'values': {
        'power': 595080
      }
    },
    {
      'time': 1536420365058,
      'values': {
        'power': 596950
      }
    },
    {
      'time': 1536420367059,
      'values': {
        'power': 594330
      }
    },
    {
      'time': 1536420369061,
      'values': {
        'power': 590410
      }
    },
    {
      'time': 1536420371063,
      'values': {
        'power': 590850
      }
    },
    {
      'time': 1536420373065,
      'values': {
        'power': 592590
      }
    },
    {
      'time': 1536420375067,
      'values': {
        'power': 596260
      }
    },
    {
      'time': 1536420377068,
      'values': {
        'power': 597460
      }
    },
    {
      'time': 1536420379071,
      'values': {
        'power': 597480
      }
    },
    {
      'time': 1536420381073,
      'values': {
        'power': 597700
      }
    },
    {
      'time': 1536420383076,
      'values': {
        'power': 596730
      }
    },
    {
      'time': 1536420385076,
      'values': {
        'power': 594900
      }
    },
    {
      'time': 1536420387079,
      'values': {
        'power': 591940
      }
    },
    {
      'time': 1536420389080,
      'values': {
        'power': 588850
      }
    },
    {
      'time': 1536420391083,
      'values': {
        'power': 589210
      }
    },
    {
      'time': 1536420393085,
      'values': {
        'power': 593290
      }
    },
    {
      'time': 1536420395087,
      'values': {
        'power': 597500
      }
    },
    {
      'time': 1536420397089,
      'values': {
        'power': 597940
      }
    },
    {
      'time': 1536420399091,
      'values': {
        'power': 595930
      }
    },
    {
      'time': 1536420401092,
      'values': {
        'power': 595340
      }
    },
    {
      'time': 1536420403094,
      'values': {
        'power': 594860
      }
    },
    {
      'time': 1536420405097,
      'values': {
        'power': 595080
      }
    },
    {
      'time': 1536420407099,
      'values': {
        'power': 591450
      }
    },
    {
      'time': 1536420409101,
      'values': {
        'power': 588530
      }
    },
    {
      'time': 1536420411103,
      'values': {
        'power': 589510
      }
    },
    {
      'time': 1536420413105,
      'values': {
        'power': 592600
      }
    },
    {
      'time': 1536420415107,
      'values': {
        'power': 595240
      }
    },
    {
      'time': 1536420417108,
      'values': {
        'power': 595090
      }
    },
    {
      'time': 1536420419110,
      'values': {
        'power': 595440
      }
    },
    {
      'time': 1536420421112,
      'values': {
        'power': 595480
      }
    },
    {
      'time': 1536420423114,
      'values': {
        'power': 596550
      }
    },
    {
      'time': 1536420425117,
      'values': {
        'power': 595220
      }
    },
    {
      'time': 1536420427117,
      'values': {
        'power': 591150
      }
    },
    {
      'time': 1536420429120,
      'values': {
        'power': 590710
      }
    },
    {
      'time': 1536420431122,
      'values': {
        'power': 590490
      }
    },
    {
      'time': 1536420433124,
      'values': {
        'power': 591530
      }
    },
    {
      'time': 1536420435126,
      'values': {
        'power': 594370
      }
    },
    {
      'time': 1536420437128,
      'values': {
        'power': 598200
      }
    },
    {
      'time': 1536420439130,
      'values': {
        'power': 599510
      }
    },
    {
      'time': 1536420441132,
      'values': {
        'power': 594010
      }
    },
    {
      'time': 1536420443133,
      'values': {
        'power': 588180
      }
    },
    {
      'time': 1536420445135,
      'values': {
        'power': 584010
      }
    },
    {
      'time': 1536420447138,
      'values': {
        'power': 579360
      }
    },
    {
      'time': 1536420449141,
      'values': {
        'power': 575430
      }
    },
    {
      'time': 1536420451141,
      'values': {
        'power': 574700
      }
    },
    {
      'time': 1536420453143,
      'values': {
        'power': 579190
      }
    },
    {
      'time': 1536420455146,
      'values': {
        'power': 584520
      }
    },
    {
      'time': 1536420457148,
      'values': {
        'power': 588450
      }
    },
    {
      'time': 1536420459150,
      'values': {
        'power': 597030
      }
    },
    {
      'time': 1536420461151,
      'values': {
        'power': 627290
      }
    },
    {
      'time': 1536420463153,
      'values': {
        'power': 650590
      }
    },
    {
      'time': 1536420465155,
      'values': {
        'power': 651310
      }
    },
    {
      'time': 1536420467157,
      'values': {
        'power': 641860
      }
    },
    {
      'time': 1536420469159,
      'values': {
        'power': 604170
      }
    },
    {
      'time': 1536420471160,
      'values': {
        'power': 573700
      }
    },
    {
      'time': 1536420473162,
      'values': {
        'power': 570300
      }
    },
    {
      'time': 1536420475165,
      'values': {
        'power': 576530
      }
    },
    {
      'time': 1536420477167,
      'values': {
        'power': 591300
      }
    },
    {
      'time': 1536420479168,
      'values': {
        'power': 597280
      }
    },
    {
      'time': 1536420481171,
      'values': {
        'power': 594820
      }
    },
    {
      'time': 1536420483173,
      'values': {
        'power': 593210
      }
    },
    {
      'time': 1536420485174,
      'values': {
        'power': 589920
      }
    },
    {
      'time': 1536420487176,
      'values': {
        'power': 591040
      }
    },
    {
      'time': 1536420489179,
      'values': {
        'power': 594770
      }
    },
    {
      'time': 1536420491181,
      'values': {
        'power': 590380
      }
    },
    {
      'time': 1536420493183,
      'values': {
        'power': 587080
      }
    },
    {
      'time': 1536420495185,
      'values': {
        'power': 589180
      }
    },
    {
      'time': 1536420497186,
      'values': {
        'power': 589760
      }
    },
    {
      'time': 1536420499188,
      'values': {
        'power': 589370
      }
    },
    {
      'time': 1536420501191,
      'values': {
        'power': 589220
      }
    },
    {
      'time': 1536420503192,
      'values': {
        'power': 590740
      }
    },
    {
      'time': 1536420505194,
      'values': {
        'power': 588610
      }
    },
    {
      'time': 1536420507197,
      'values': {
        'power': 586790
      }
    },
    {
      'time': 1536420509198,
      'values': {
        'power': 587660
      }
    },
    {
      'time': 1536420511200,
      'values': {
        'power': 585000
      }
    },
    {
      'time': 1536420513202,
      'values': {
        'power': 584330
      }
    },
    {
      'time': 1536420515204,
      'values': {
        'power': 587930
      }
    },
    {
      'time': 1536420517206,
      'values': {
        'power': 591410
      }
    },
    {
      'time': 1536420519207,
      'values': {
        'power': 592870
      }
    },
    {
      'time': 1536420521209,
      'values': {
        'power': 591630
      }
    },
    {
      'time': 1536420523212,
      'values': {
        'power': 590120
      }
    },
    {
      'time': 1536420525214,
      'values': {
        'power': 590410
      }
    },
    {
      'time': 1536420527216,
      'values': {
        'power': 592480
      }
    },
    {
      'time': 1536420529217,
      'values': {
        'power': 594250
      }
    },
    {
      'time': 1536420531219,
      'values': {
        'power': 593180
      }
    },
    {
      'time': 1536420533222,
      'values': {
        'power': 588830
      }
    },
    {
      'time': 1536420535224,
      'values': {
        'power': 586830
      }
    },
    {
      'time': 1536420537226,
      'values': {
        'power': 587130
      }
    },
    {
      'time': 1536420539228,
      'values': {
        'power': 589530
      }
    },
    {
      'time': 1536420541230,
      'values': {
        'power': 594190
      }
    },
    {
      'time': 1536420543232,
      'values': {
        'power': 595530
      }
    },
    {
      'time': 1536420545234,
      'values': {
        'power': 597770
      }
    },
    {
      'time': 1536420547236,
      'values': {
        'power': 598780
      }
    },
    {
      'time': 1536420549239,
      'values': {
        'power': 597330
      }
    },
    {
      'time': 1536420551245,
      'values': {
        'power': 594910
      }
    },
    {
      'time': 1536420553243,
      'values': {
        'power': 589640
      }
    },
    {
      'time': 1536420555243,
      'values': {
        'power': 585800
      }
    },
    {
      'time': 1536420557246,
      'values': {
        'power': 586060
      }
    },
    {
      'time': 1536420559247,
      'values': {
        'power': 589160
      }
    },
    {
      'time': 1536420561249,
      'values': {
        'power': 591330
      }
    },
    {
      'time': 1536420563251,
      'values': {
        'power': 592130
      }
    },
    {
      'time': 1536420565253,
      'values': {
        'power': 592920
      }
    },
    {
      'time': 1536420567255,
      'values': {
        'power': 592630
      }
    },
    {
      'time': 1536420569257,
      'values': {
        'power': 592320
      }
    },
    {
      'time': 1536420571259,
      'values': {
        'power': 591330
      }
    },
    {
      'time': 1536420573261,
      'values': {
        'power': 587690
      }
    },
    {
      'time': 1536420575263,
      'values': {
        'power': 586720
      }
    },
    {
      'time': 1536420577266,
      'values': {
        'power': 590090
      }
    },
    {
      'time': 1536420579266,
      'values': {
        'power': 594430
      }
    },
    {
      'time': 1536420581268,
      'values': {
        'power': 598020
      }
    },
    {
      'time': 1536420583271,
      'values': {
        'power': 597590
      }
    },
    {
      'time': 1536420585272,
      'values': {
        'power': 595600
      }
    },
    {
      'time': 1536420587274,
      'values': {
        'power': 595230
      }
    },
    {
      'time': 1536420589277,
      'values': {
        'power': 596310
      }
    },
    {
      'time': 1536420591280,
      'values': {
        'power': 596620
      }
    },
    {
      'time': 1536420593281,
      'values': {
        'power': 595140
      }
    },
    {
      'time': 1536420595283,
      'values': {
        'power': 589080
      }
    },
    {
      'time': 1536420597285,
      'values': {
        'power': 581090
      }
    },
    {
      'time': 1536420599287,
      'values': {
        'power': 581170
      }
    },
    {
      'time': 1536420601289,
      'values': {
        'power': 586330
      }
    },
    {
      'time': 1536420603292,
      'values': {
        'power': 655140
      }
    },
    {
      'time': 1536420605293,
      'values': {
        'power': 776020
      }
    },
    {
      'time': 1536420607294,
      'values': {
        'power': 748440
      }
    },
    {
      'time': 1536420609296,
      'values': {
        'power': 639100
      }
    },
    {
      'time': 1536420611298,
      'values': {
        'power': 631410
      }
    },
    {
      'time': 1536420613300,
      'values': {
        'power': 617540
      }
    },
    {
      'time': 1536420615302,
      'values': {
        'power': 610590
      }
    },
    {
      'time': 1536420617304,
      'values': {
        'power': 610360
      }
    },
    {
      'time': 1536420619305,
      'values': {
        'power': 613630
      }
    },
    {
      'time': 1536420621307,
      'values': {
        'power': 618130
      }
    },
    {
      'time': 1536420623310,
      'values': {
        'power': 619100
      }
    },
    {
      'time': 1536420625312,
      'values': {
        'power': 624010
      }
    },
    {
      'time': 1536420627314,
      'values': {
        'power': 625890
      }
    },
    {
      'time': 1536420629316,
      'values': {
        'power': 621290
      }
    },
    {
      'time': 1536420631319,
      'values': {
        'power': 617170
      }
    },
    {
      'time': 1536420633319,
      'values': {
        'power': 612800
      }
    },
    {
      'time': 1536420635321,
      'values': {
        'power': 610180
      }
    },
    {
      'time': 1536420637324,
      'values': {
        'power': 610540
      }
    },
    {
      'time': 1536420639326,
      'values': {
        'power': 615100
      }
    },
    {
      'time': 1536420641328,
      'values': {
        'power': 618510
      }
    },
    {
      'time': 1536420643330,
      'values': {
        'power': 617760
      }
    },
    {
      'time': 1536420645332,
      'values': {
        'power': 617390
      }
    },
    {
      'time': 1536420647334,
      'values': {
        'power': 617660
      }
    },
    {
      'time': 1536420649336,
      'values': {
        'power': 618080
      }
    },
    {
      'time': 1536420651337,
      'values': {
        'power': 614710
      }
    },
    {
      'time': 1536420653339,
      'values': {
        'power': 608280
      }
    },
    {
      'time': 1536420655341,
      'values': {
        'power': 605530
      }
    },
    {
      'time': 1536420657343,
      'values': {
        'power': 607930
      }
    },
    {
      'time': 1536420659345,
      'values': {
        'power': 611980
      }
    },
    {
      'time': 1536420661346,
      'values': {
        'power': 616190
      }
    },
    {
      'time': 1536420663349,
      'values': {
        'power': 616600
      }
    },
    {
      'time': 1536420665351,
      'values': {
        'power': 615120
      }
    },
    {
      'time': 1536420667353,
      'values': {
        'power': 615190
      }
    },
    {
      'time': 1536420669355,
      'values': {
        'power': 611020
      }
    },
    {
      'time': 1536420671357,
      'values': {
        'power': 601810
      }
    },
    {
      'time': 1536420673359,
      'values': {
        'power': 594540
      }
    },
    {
      'time': 1536420675361,
      'values': {
        'power': 592060
      }
    },
    {
      'time': 1536420677363,
      'values': {
        'power': 594600
      }
    },
    {
      'time': 1536420679365,
      'values': {
        'power': 601100
      }
    },
    {
      'time': 1536420681367,
      'values': {
        'power': 605270
      }
    },
    {
      'time': 1536420683369,
      'values': {
        'power': 603440
      }
    },
    {
      'time': 1536420685372,
      'values': {
        'power': 601200
      }
    },
    {
      'time': 1536420687372,
      'values': {
        'power': 599740
      }
    },
    {
      'time': 1536420689374,
      'values': {
        'power': 599420
      }
    },
    {
      'time': 1536420691377,
      'values': {
        'power': 599380
      }
    },
    {
      'time': 1536420693379,
      'values': {
        'power': 594770
      }
    },
    {
      'time': 1536420695381,
      'values': {
        'power': 592510
      }
    },
    {
      'time': 1536420697382,
      'values': {
        'power': 596130
      }
    },
    {
      'time': 1536420699384,
      'values': {
        'power': 600500
      }
    },
    {
      'time': 1536420701386,
      'values': {
        'power': 603710
      }
    },
    {
      'time': 1536420703388,
      'values': {
        'power': 604580
      }
    },
    {
      'time': 1536420705390,
      'values': {
        'power': 604780
      }
    },
    {
      'time': 1536420707393,
      'values': {
        'power': 603740
      }
    },
    {
      'time': 1536420709394,
      'values': {
        'power': 603290
      }
    },
    {
      'time': 1536420711396,
      'values': {
        'power': 604000
      }
    },
    {
      'time': 1536420713398,
      'values': {
        'power': 599080
      }
    },
    {
      'time': 1536420715399,
      'values': {
        'power': 592560
      }
    },
    {
      'time': 1536420717402,
      'values': {
        'power': 591430
      }
    },
    {
      'time': 1536420719405,
      'values': {
        'power': 595570
      }
    },
    {
      'time': 1536420721405,
      'values': {
        'power': 599750
      }
    },
    {
      'time': 1536420723408,
      'values': {
        'power': 605360
      }
    },
    {
      'time': 1536420725410,
      'values': {
        'power': 612210
      }
    },
    {
      'time': 1536420727412,
      'values': {
        'power': 615590
      }
    },
    {
      'time': 1536420729414,
      'values': {
        'power': 613090
      }
    },
    {
      'time': 1536420731416,
      'values': {
        'power': 608790
      }
    },
    {
      'time': 1536420733417,
      'values': {
        'power': 606200
      }
    },
    {
      'time': 1536420735419,
      'values': {
        'power': 604990
      }
    },
    {
      'time': 1536420737422,
      'values': {
        'power': 604780
      }
    },
    {
      'time': 1536420739424,
      'values': {
        'power': 607130
      }
    },
    {
      'time': 1536420741425,
      'values': {
        'power': 609710
      }
    },
    {
      'time': 1536420743427,
      'values': {
        'power': 610710
      }
    },
    {
      'time': 1536420745429,
      'values': {
        'power': 610650
      }
    },
    {
      'time': 1536420747431,
      'values': {
        'power': 608290
      }
    },
    {
      'time': 1536420749433,
      'values': {
        'power': 609950
      }
    },
    {
      'time': 1536420751435,
      'values': {
        'power': 613870
      }
    },
    {
      'time': 1536420753436,
      'values': {
        'power': 612770
      }
    },
    {
      'time': 1536420755438,
      'values': {
        'power': 607910
      }
    },
    {
      'time': 1536420757441,
      'values': {
        'power': 603390
      }
    },
    {
      'time': 1536420759442,
      'values': {
        'power': 602410
      }
    },
    {
      'time': 1536420761444,
      'values': {
        'power': 603450
      }
    },
    {
      'time': 1536420763447,
      'values': {
        'power': 607050
      }
    },
    {
      'time': 1536420765449,
      'values': {
        'power': 609510
      }
    },
    {
      'time': 1536420767451,
      'values': {
        'power': 611020
      }
    },
    {
      'time': 1536420769452,
      'values': {
        'power': 613020
      }
    },
    {
      'time': 1536420771454,
      'values': {
        'power': 617570
      }
    },
    {
      'time': 1536420773457,
      'values': {
        'power': 621860
      }
    },
    {
      'time': 1536420775459,
      'values': {
        'power': 618450
      }
    },
    {
      'time': 1536420777462,
      'values': {
        'power': 609920
      }
    },
    {
      'time': 1536420779463,
      'values': {
        'power': 605870
      }
    },
    {
      'time': 1536420781465,
      'values': {
        'power': 607200
      }
    },
    {
      'time': 1536420783468,
      'values': {
        'power': 608950
      }
    },
    {
      'time': 1536420785469,
      'values': {
        'power': 600170
      }
    },
    {
      'time': 1536420787470,
      'values': {
        'power': 563510
      }
    },
    {
      'time': 1536420789472,
      'values': {
        'power': 551240
      }
    },
    {
      'time': 1536420791474,
      'values': {
        'power': 554470
      }
    },
    {
      'time': 1536420793476,
      'values': {
        'power': 551340
      }
    },
    {
      'time': 1536420795479,
      'values': {
        'power': 548880
      }
    },
    {
      'time': 1536420797480,
      'values': {
        'power': 547110
      }
    },
    {
      'time': 1536420799482,
      'values': {
        'power': 546080
      }
    },
    {
      'time': 1536420801484,
      'values': {
        'power': 546640
      }
    },
    {
      'time': 1536420803486,
      'values': {
        'power': 546440
      }
    },
    {
      'time': 1536420805488,
      'values': {
        'power': 543120
      }
    },
    {
      'time': 1536420807490,
      'values': {
        'power': 539210
      }
    },
    {
      'time': 1536420809492,
      'values': {
        'power': 612230
      }
    },
    {
      'time': 1536420811494,
      'values': {
        'power': 742420
      }
    },
    {
      'time': 1536420813495,
      'values': {
        'power': 697750
      }
    },
    {
      'time': 1536420815498,
      'values': {
        'power': 595540
      }
    },
    {
      'time': 1536420817500,
      'values': {
        'power': 592790
      }
    },
    {
      'time': 1536420819502,
      'values': {
        'power': 590920
      }
    },
    {
      'time': 1536420821504,
      'values': {
        'power': 590780
      }
    },
    {
      'time': 1536420823505,
      'values': {
        'power': 587340
      }
    },
    {
      'time': 1536420825507,
      'values': {
        'power': 581400
      }
    },
    {
      'time': 1536420827510,
      'values': {
        'power': 577790
      }
    },
    {
      'time': 1536420829512,
      'values': {
        'power': 579590
      }
    },
    {
      'time': 1536420831514,
      'values': {
        'power': 587790
      }
    },
    {
      'time': 1536420833516,
      'values': {
        'power': 593940
      }
    },
    {
      'time': 1536420835518,
      'values': {
        'power': 599320
      }
    },
    {
      'time': 1536420837519,
      'values': {
        'power': 602310
      }
    },
    {
      'time': 1536420839521,
      'values': {
        'power': 596630
      }
    },
    {
      'time': 1536420841523,
      'values': {
        'power': 589230
      }
    },
    {
      'time': 1536420843525,
      'values': {
        'power': 581840
      }
    },
    {
      'time': 1536420845527,
      'values': {
        'power': 575900
      }
    },
    {
      'time': 1536420847529,
      'values': {
        'power': 572290
      }
    },
    {
      'time': 1536420849531,
      'values': {
        'power': 574630
      }
    },
    {
      'time': 1536420851533,
      'values': {
        'power': 580810
      }
    },
    {
      'time': 1536420853535,
      'values': {
        'power': 584110
      }
    },
    {
      'time': 1536420855536,
      'values': {
        'power': 584300
      }
    },
    {
      'time': 1536420857538,
      'values': {
        'power': 581730
      }
    },
    {
      'time': 1536420859541,
      'values': {
        'power': 580250
      }
    },
    {
      'time': 1536420861544,
      'values': {
        'power': 580950
      }
    },
    {
      'time': 1536420863544,
      'values': {
        'power': 578690
      }
    },
    {
      'time': 1536420865547,
      'values': {
        'power': 576590
      }
    },
    {
      'time': 1536420867549,
      'values': {
        'power': 576710
      }
    },
    {
      'time': 1536420869551,
      'values': {
        'power': 580020
      }
    },
    {
      'time': 1536420871553,
      'values': {
        'power': 586360
      }
    },
    {
      'time': 1536420873555,
      'values': {
        'power': 587380
      }
    },
    {
      'time': 1536420875557,
      'values': {
        'power': 585660
      }
    },
    {
      'time': 1536420877558,
      'values': {
        'power': 590350
      }
    },
    {
      'time': 1536420879560,
      'values': {
        'power': 591660
      }
    },
    {
      'time': 1536420881563,
      'values': {
        'power': 586340
      }
    },
    {
      'time': 1536420883565,
      'values': {
        'power': 580410
      }
    },
    {
      'time': 1536420885568,
      'values': {
        'power': 574860
      }
    },
    {
      'time': 1536420887569,
      'values': {
        'power': 576060
      }
    },
    {
      'time': 1536420889570,
      'values': {
        'power': 580120
      }
    },
    {
      'time': 1536420891572,
      'values': {
        'power': 582560
      }
    },
    {
      'time': 1536420893574,
      'values': {
        'power': 582520
      }
    },
    {
      'time': 1536420895576,
      'values': {
        'power': 581740
      }
    },
    {
      'time': 1536420897578,
      'values': {
        'power': 580700
      }
    },
    {
      'time': 1536420899580,
      'values': {
        'power': 581730
      }
    },
    {
      'time': 1536420901582,
      'values': {
        'power': 584160
      }
    },
    {
      'time': 1536420903584,
      'values': {
        'power': 582130
      }
    },
    {
      'time': 1536420905585,
      'values': {
        'power': 578880
      }
    },
    {
      'time': 1536420907587,
      'values': {
        'power': 582030
      }
    },
    {
      'time': 1536420909590,
      'values': {
        'power': 586270
      }
    },
    {
      'time': 1536420911592,
      'values': {
        'power': 586050
      }
    },
    {
      'time': 1536420913593,
      'values': {
        'power': 582160
      }
    },
    {
      'time': 1536420915595,
      'values': {
        'power': 578430
      }
    },
    {
      'time': 1536420917598,
      'values': {
        'power': 578130
      }
    },
    {
      'time': 1536420919600,
      'values': {
        'power': 578620
      }
    },
    {
      'time': 1536420921601,
      'values': {
        'power': 575830
      }
    },
    {
      'time': 1536420923603,
      'values': {
        'power': 572980
      }
    },
    {
      'time': 1536420925606,
      'values': {
        'power': 572220
      }
    },
    {
      'time': 1536420927608,
      'values': {
        'power': 574280
      }
    },
    {
      'time': 1536420929610,
      'values': {
        'power': 577480
      }
    },
    {
      'time': 1536420931611,
      'values': {
        'power': 580080
      }
    },
    {
      'time': 1536420933613,
      'values': {
        'power': 580890
      }
    },
    {
      'time': 1536420935615,
      'values': {
        'power': 579090
      }
    },
    {
      'time': 1536420937617,
      'values': {
        'power': 578840
      }
    },
    {
      'time': 1536420939619,
      'values': {
        'power': 579780
      }
    },
    {
      'time': 1536420941620,
      'values': {
        'power': 577480
      }
    },
    {
      'time': 1536420943623,
      'values': {
        'power': 573220
      }
    },
    {
      'time': 1536420945625,
      'values': {
        'power': 571470
      }
    },
    {
      'time': 1536420947627,
      'values': {
        'power': 572810
      }
    },
    {
      'time': 1536420949629,
      'values': {
        'power': 577180
      }
    },
    {
      'time': 1536420951631,
      'values': {
        'power': 579020
      }
    },
    {
      'time': 1536420953633,
      'values': {
        'power': 577130
      }
    },
    {
      'time': 1536420955634,
      'values': {
        'power': 575470
      }
    },
    {
      'time': 1536420957637,
      'values': {
        'power': 575600
      }
    },
    {
      'time': 1536420959638,
      'values': {
        'power': 577320
      }
    },
    {
      'time': 1536420961641,
      'values': {
        'power': 576590
      }
    },
    {
      'time': 1536420963644,
      'values': {
        'power': 573900
      }
    },
    {
      'time': 1536420965644,
      'values': {
        'power': 572640
      }
    },
    {
      'time': 1536420967646,
      'values': {
        'power': 575850
      }
    },
    {
      'time': 1536420969649,
      'values': {
        'power': 579570
      }
    },
    {
      'time': 1536420971651,
      'values': {
        'power': 579120
      }
    },
    {
      'time': 1536420973653,
      'values': {
        'power': 577790
      }
    },
    {
      'time': 1536420975655,
      'values': {
        'power': 577130
      }
    },
    {
      'time': 1536420977657,
      'values': {
        'power': 576680
      }
    },
    {
      'time': 1536420979659,
      'values': {
        'power': 575400
      }
    },
    {
      'time': 1536420981660,
      'values': {
        'power': 572620
      }
    },
    {
      'time': 1536420983662,
      'values': {
        'power': 569980
      }
    },
    {
      'time': 1536420985666,
      'values': {
        'power': 570090
      }
    },
    {
      'time': 1536420987667,
      'values': {
        'power': 573040
      }
    },
    {
      'time': 1536420989668,
      'values': {
        'power': 576480
      }
    },
    {
      'time': 1536420991669,
      'values': {
        'power': 578750
      }
    },
    {
      'time': 1536420993671,
      'values': {
        'power': 578760
      }
    },
    {
      'time': 1536420995674,
      'values': {
        'power': 578330
      }
    },
    {
      'time': 1536420997676,
      'values': {
        'power': 578300
      }
    },
    {
      'time': 1536420999678,
      'values': {
        'power': 578340
      }
    },
    {
      'time': 1536421001680,
      'values': {
        'power': 574320
      }
    },
    {
      'time': 1536421003682,
      'values': {
        'power': 569330
      }
    },
    {
      'time': 1536421005684,
      'values': {
        'power': 568930
      }
    },
    {
      'time': 1536421007686,
      'values': {
        'power': 572180
      }
    },
    {
      'time': 1536421009688,
      'values': {
        'power': 575750
      }
    },
    {
      'time': 1536421011690,
      'values': {
        'power': 576520
      }
    },
    {
      'time': 1536421013692,
      'values': {
        'power': 576050
      }
    },
    {
      'time': 1536421015695,
      'values': {
        'power': 575650
      }
    },
    {
      'time': 1536421017695,
      'values': {
        'power': 578170
      }
    },
    {
      'time': 1536421019698,
      'values': {
        'power': 583450
      }
    },
    {
      'time': 1536421021699,
      'values': {
        'power': 583360
      }
    },
    {
      'time': 1536421023702,
      'values': {
        'power': 579720
      }
    },
    {
      'time': 1536421025703,
      'values': {
        'power': 579080
      }
    },
    {
      'time': 1536421027705,
      'values': {
        'power': 580760
      }
    },
    {
      'time': 1536421029707,
      'values': {
        'power': 567440
      }
    },
    {
      'time': 1536421031709,
      'values': {
        'power': 545120
      }
    },
    {
      'time': 1536421033711,
      'values': {
        'power': 537590
      }
    },
    {
      'time': 1536421035713,
      'values': {
        'power': 537450
      }
    },
    {
      'time': 1536421037715,
      'values': {
        'power': 537650
      }
    },
    {
      'time': 1536421039718,
      'values': {
        'power': 536240
      }
    },
    {
      'time': 1536421041718,
      'values': {
        'power': 533700
      }
    },
    {
      'time': 1536421043721,
      'values': {
        'power': 531920
      }
    },
    {
      'time': 1536421045723,
      'values': {
        'power': 531600
      }
    },
    {
      'time': 1536421047725,
      'values': {
        'power': 532780
      }
    },
    {
      'time': 1536421049727,
      'values': {
        'power': 535480
      }
    },
    {
      'time': 1536421051729,
      'values': {
        'power': 537760
      }
    },
    {
      'time': 1536421053731,
      'values': {
        'power': 526760
      }
    },
    {
      'time': 1536421055732,
      'values': {
        'power': 499720
      }
    },
    {
      'time': 1536421057734,
      'values': {
        'power': 485780
      }
    },
    {
      'time': 1536421059737,
      'values': {
        'power': 487560
      }
    },
    {
      'time': 1536421061739,
      'values': {
        'power': 483490
      }
    },
    {
      'time': 1536421063741,
      'values': {
        'power': 478140
      }
    },
    {
      'time': 1536421065745,
      'values': {
        'power': 476370
      }
    },
    {
      'time': 1536421067744,
      'values': {
        'power': 478550
      }
    },
    {
      'time': 1536421069746,
      'values': {
        'power': 483750
      }
    },
    {
      'time': 1536421071749,
      'values': {
        'power': 485940
      }
    },
    {
      'time': 1536421073751,
      'values': {
        'power': 483870
      }
    },
    {
      'time': 1536421075752,
      'values': {
        'power': 482790
      }
    },
    {
      'time': 1536421077754,
      'values': {
        'power': 483360
      }
    },
    {
      'time': 1536421079756,
      'values': {
        'power': 486280
      }
    },
    {
      'time': 1536421081758,
      'values': {
        'power': 486100
      }
    },
    {
      'time': 1536421083760,
      'values': {
        'power': 479940
      }
    },
    {
      'time': 1536421085762,
      'values': {
        'power': 476950
      }
    },
    {
      'time': 1536421087764,
      'values': {
        'power': 480160
      }
    },
    {
      'time': 1536421089765,
      'values': {
        'power': 485640
      }
    },
    {
      'time': 1536421091769,
      'values': {
        'power': 488030
      }
    },
    {
      'time': 1536421093770,
      'values': {
        'power': 486220
      }
    },
    {
      'time': 1536421095771,
      'values': {
        'power': 485150
      }
    },
    {
      'time': 1536421097773,
      'values': {
        'power': 485510
      }
    },
    {
      'time': 1536421099776,
      'values': {
        'power': 486180
      }
    },
    {
      'time': 1536421101778,
      'values': {
        'power': 486510
      }
    },
    {
      'time': 1536421103780,
      'values': {
        'power': 484890
      }
    },
    {
      'time': 1536421105782,
      'values': {
        'power': 482340
      }
    },
    {
      'time': 1536421107784,
      'values': {
        'power': 480250
      }
    },
    {
      'time': 1536421109786,
      'values': {
        'power': 479910
      }
    },
    {
      'time': 1536421111788,
      'values': {
        'power': 483100
      }
    },
    {
      'time': 1536421113790,
      'values': {
        'power': 484840
      }
    },
    {
      'time': 1536421115792,
      'values': {
        'power': 484760
      }
    },
    {
      'time': 1536421117794,
      'values': {
        'power': 484300
      }
    },
    {
      'time': 1536421119797,
      'values': {
        'power': 470060
      }
    },
    {
      'time': 1536421121799,
      'values': {
        'power': 441510
      }
    },
    {
      'time': 1536421123799,
      'values': {
        'power': 417210
      }
    },
    {
      'time': 1536421125801,
      'values': {
        'power': 402260
      }
    },
    {
      'time': 1536421127804,
      'values': {
        'power': 400290
      }
    },
    {
      'time': 1536421129805,
      'values': {
        'power': 403640
      }
    },
    {
      'time': 1536421131807,
      'values': {
        'power': 408080
      }
    },
    {
      'time': 1536421133809,
      'values': {
        'power': 407750
      }
    },
    {
      'time': 1536421135811,
      'values': {
        'power': 405800
      }
    },
    {
      'time': 1536421137813,
      'values': {
        'power': 407020
      }
    },
    {
      'time': 1536421139815,
      'values': {
        'power': 409790
      }
    },
    {
      'time': 1536421141817,
      'values': {
        'power': 409860
      }
    },
    {
      'time': 1536421143821,
      'values': {
        'power': 405280
      }
    },
    {
      'time': 1536421145820,
      'values': {
        'power': 402750
      }
    },
    {
      'time': 1536421147823,
      'values': {
        'power': 403690
      }
    },
    {
      'time': 1536421149824,
      'values': {
        'power': 406730
      }
    },
    {
      'time': 1536421151826,
      'values': {
        'power': 408500
      }
    },
    {
      'time': 1536421153829,
      'values': {
        'power': 406430
      }
    },
    {
      'time': 1536421155831,
      'values': {
        'power': 406730
      }
    },
    {
      'time': 1536421157832,
      'values': {
        'power': 407990
      }
    },
    {
      'time': 1536421159834,
      'values': {
        'power': 408710
      }
    },
    {
      'time': 1536421161837,
      'values': {
        'power': 406900
      }
    },
    {
      'time': 1536421163839,
      'values': {
        'power': 400890
      }
    },
    {
      'time': 1536421165841,
      'values': {
        'power': 397540
      }
    },
    {
      'time': 1536421167843,
      'values': {
        'power': 399120
      }
    },
    {
      'time': 1536421169844,
      'values': {
        'power': 403170
      }
    },
    {
      'time': 1536421171846,
      'values': {
        'power': 405790
      }
    },
    {
      'time': 1536421173848,
      'values': {
        'power': 405060
      }
    },
    {
      'time': 1536421175850,
      'values': {
        'power': 405070
      }
    },
    {
      'time': 1536421177851,
      'values': {
        'power': 406210
      }
    },
    {
      'time': 1536421179853,
      'values': {
        'power': 407790
      }
    },
    {
      'time': 1536421181856,
      'values': {
        'power': 408610
      }
    },
    {
      'time': 1536421183858,
      'values': {
        'power': 407210
      }
    },
    {
      'time': 1536421185860,
      'values': {
        'power': 403070
      }
    },
    {
      'time': 1536421187862,
      'values': {
        'power': 400150
      }
    },
    {
      'time': 1536421189864,
      'values': {
        'power': 400600
      }
    },
    {
      'time': 1536421191865,
      'values': {
        'power': 402930
      }
    },
    {
      'time': 1536421193868,
      'values': {
        'power': 406180
      }
    },
    {
      'time': 1536421195869,
      'values': {
        'power': 405990
      }
    },
    {
      'time': 1536421197871,
      'values': {
        'power': 405130
      }
    },
    {
      'time': 1536421199874,
      'values': {
        'power': 406020
      }
    },
    {
      'time': 1536421201876,
      'values': {
        'power': 406620
      }
    },
    {
      'time': 1536421203878,
      'values': {
        'power': 405320
      }
    },
    {
      'time': 1536421205879,
      'values': {
        'power': 402100
      }
    },
    {
      'time': 1536421207882,
      'values': {
        'power': 400160
      }
    },
    {
      'time': 1536421209884,
      'values': {
        'power': 401920
      }
    },
    {
      'time': 1536421211886,
      'values': {
        'power': 406430
      }
    },
    {
      'time': 1536421213888,
      'values': {
        'power': 408260
      }
    },
    {
      'time': 1536421215889,
      'values': {
        'power': 407380
      }
    },
    {
      'time': 1536421217891,
      'values': {
        'power': 407820
      }
    },
    {
      'time': 1536421219893,
      'values': {
        'power': 408390
      }
    },
    {
      'time': 1536421221895,
      'values': {
        'power': 408220
      }
    },
    {
      'time': 1536421223896,
      'values': {
        'power': 406880
      }
    },
    {
      'time': 1536421225898,
      'values': {
        'power': 404140
      }
    },
    {
      'time': 1536421227901,
      'values': {
        'power': 401340
      }
    },
    {
      'time': 1536421229904,
      'values': {
        'power': 402720
      }
    },
    {
      'time': 1536421231904,
      'values': {
        'power': 406200
      }
    },
    {
      'time': 1536421233906,
      'values': {
        'power': 407180
      }
    },
    {
      'time': 1536421235909,
      'values': {
        'power': 406270
      }
    },
    {
      'time': 1536421237911,
      'values': {
        'power': 407500
      }
    },
    {
      'time': 1536421239913,
      'values': {
        'power': 408910
      }
    },
    {
      'time': 1536421241915,
      'values': {
        'power': 408630
      }
    },
    {
      'time': 1536421243917,
      'values': {
        'power': 405470
      }
    },
    {
      'time': 1536421245919,
      'values': {
        'power': 402720
      }
    },
    {
      'time': 1536421247920,
      'values': {
        'power': 400960
      }
    },
    {
      'time': 1536421249922,
      'values': {
        'power': 403100
      }
    },
    {
      'time': 1536421251925,
      'values': {
        'power': 407190
      }
    },
    {
      'time': 1536421253927,
      'values': {
        'power': 406710
      }
    },
    {
      'time': 1536421255930,
      'values': {
        'power': 405910
      }
    },
    {
      'time': 1536421257930,
      'values': {
        'power': 405700
      }
    },
    {
      'time': 1536421259932,
      'values': {
        'power': 406950
      }
    },
    {
      'time': 1536421261935,
      'values': {
        'power': 406680
      }
    },
    {
      'time': 1536421263937,
      'values': {
        'power': 401680
      }
    },
    {
      'time': 1536421265938,
      'values': {
        'power': 398060
      }
    },
    {
      'time': 1536421267940,
      'values': {
        'power': 399200
      }
    },
    {
      'time': 1536421269942,
      'values': {
        'power': 403210
      }
    },
    {
      'time': 1536421271944,
      'values': {
        'power': 406420
      }
    },
    {
      'time': 1536421273945,
      'values': {
        'power': 406500
      }
    },
    {
      'time': 1536421275947,
      'values': {
        'power': 407640
      }
    },
    {
      'time': 1536421277950,
      'values': {
        'power': 408930
      }
    },
    {
      'time': 1536421279952,
      'values': {
        'power': 408670
      }
    },
    {
      'time': 1536421281954,
      'values': {
        'power': 408450
      }
    },
    {
      'time': 1536421283956,
      'values': {
        'power': 404080
      }
    },
    {
      'time': 1536421285957,
      'values': {
        'power': 399600
      }
    },
    {
      'time': 1536421287960,
      'values': {
        'power': 399640
      }
    },
    {
      'time': 1536421289962,
      'values': {
        'power': 403340
      }
    },
    {
      'time': 1536421291963,
      'values': {
        'power': 407390
      }
    },
    {
      'time': 1536421293965,
      'values': {
        'power': 407590
      }
    },
    {
      'time': 1536421295968,
      'values': {
        'power': 406870
      }
    },
    {
      'time': 1536421297972,
      'values': {
        'power': 407530
      }
    },
    {
      'time': 1536421299971,
      'values': {
        'power': 408870
      }
    },
    {
      'time': 1536421301974,
      'values': {
        'power': 409350
      }
    },
    {
      'time': 1536421303976,
      'values': {
        'power': 407320
      }
    },
    {
      'time': 1536421305978,
      'values': {
        'power': 403060
      }
    },
    {
      'time': 1536421307980,
      'values': {
        'power': 400110
      }
    },
    {
      'time': 1536421309982,
      'values': {
        'power': 401950
      }
    },
    {
      'time': 1536421311983,
      'values': {
        'power': 405990
      }
    },
    {
      'time': 1536421313985,
      'values': {
        'power': 406980
      }
    },
    {
      'time': 1536421315987,
      'values': {
        'power': 405780
      }
    },
    {
      'time': 1536421317989,
      'values': {
        'power': 404640
      }
    },
    {
      'time': 1536421319991,
      'values': {
        'power': 406220
      }
    },
    {
      'time': 1536421321994,
      'values': {
        'power': 407290
      }
    },
    {
      'time': 1536421323995,
      'values': {
        'power': 402940
      }
    },
    {
      'time': 1536421325996,
      'values': {
        'power': 399520
      }
    },
    {
      'time': 1536421327998,
      'values': {
        'power': 400910
      }
    },
    {
      'time': 1536421330001,
      'values': {
        'power': 405330
      }
    },
    {
      'time': 1536421332003,
      'values': {
        'power': 409080
      }
    },
    {
      'time': 1536421334005,
      'values': {
        'power': 407950
      }
    },
    {
      'time': 1536421336007,
      'values': {
        'power': 407790
      }
    },
    {
      'time': 1536421338009,
      'values': {
        'power': 409980
      }
    },
    {
      'time': 1536421340010,
      'values': {
        'power': 410500
      }
    },
    {
      'time': 1536421342012,
      'values': {
        'power': 408480
      }
    },
    {
      'time': 1536421344015,
      'values': {
        'power': 402860
      }
    },
    {
      'time': 1536421346017,
      'values': {
        'power': 398480
      }
    },
    {
      'time': 1536421348019,
      'values': {
        'power': 398760
      }
    },
    {
      'time': 1536421350020,
      'values': {
        'power': 403740
      }
    },
    {
      'time': 1536421352022,
      'values': {
        'power': 408360
      }
    },
    {
      'time': 1536421354025,
      'values': {
        'power': 408690
      }
    },
    {
      'time': 1536421356027,
      'values': {
        'power': 407180
      }
    },
    {
      'time': 1536421358029,
      'values': {
        'power': 406990
      }
    },
    {
      'time': 1536421360030,
      'values': {
        'power': 408120
      }
    },
    {
      'time': 1536421362032,
      'values': {
        'power': 407850
      }
    },
    {
      'time': 1536421364034,
      'values': {
        'power': 404910
      }
    },
    {
      'time': 1536421366037,
      'values': {
        'power': 400940
      }
    },
    {
      'time': 1536421368037,
      'values': {
        'power': 399140
      }
    },
    {
      'time': 1536421370039,
      'values': {
        'power': 401450
      }
    },
    {
      'time': 1536421372042,
      'values': {
        'power': 406330
      }
    },
    {
      'time': 1536421374044,
      'values': {
        'power': 408330
      }
    },
    {
      'time': 1536421376045,
      'values': {
        'power': 407880
      }
    },
    {
      'time': 1536421378047,
      'values': {
        'power': 407800
      }
    },
    {
      'time': 1536421380050,
      'values': {
        'power': 407700
      }
    },
    {
      'time': 1536421382052,
      'values': {
        'power': 407810
      }
    },
    {
      'time': 1536421384054,
      'values': {
        'power': 404230
      }
    },
    {
      'time': 1536421386056,
      'values': {
        'power': 399370
      }
    },
    {
      'time': 1536421388058,
      'values': {
        'power': 398850
      }
    },
    {
      'time': 1536421390060,
      'values': {
        'power': 402330
      }
    },
    {
      'time': 1536421392062,
      'values': {
        'power': 406760
      }
    },
    {
      'time': 1536421394063,
      'values': {
        'power': 408060
      }
    },
    {
      'time': 1536421396065,
      'values': {
        'power': 407930
      }
    },
    {
      'time': 1536421398068,
      'values': {
        'power': 409310
      }
    },
    {
      'time': 1536421400070,
      'values': {
        'power': 410660
      }
    },
    {
      'time': 1536421402071,
      'values': {
        'power': 410400
      }
    },
    {
      'time': 1536421404073,
      'values': {
        'power': 409250
      }
    },
    {
      'time': 1536421406075,
      'values': {
        'power': 404420
      }
    },
    {
      'time': 1536421408077,
      'values': {
        'power': 401790
      }
    },
    {
      'time': 1536421410079,
      'values': {
        'power': 403870
      }
    },
    {
      'time': 1536421412081,
      'values': {
        'power': 409810
      }
    },
    {
      'time': 1536421414083,
      'values': {
        'power': 411590
      }
    },
    {
      'time': 1536421416085,
      'values': {
        'power': 409590
      }
    },
    {
      'time': 1536421418087,
      'values': {
        'power': 410050
      }
    },
    {
      'time': 1536421420089,
      'values': {
        'power': 411900
      }
    },
    {
      'time': 1536421422091,
      'values': {
        'power': 413100
      }
    },
    {
      'time': 1536421424094,
      'values': {
        'power': 410080
      }
    },
    {
      'time': 1536421426095,
      'values': {
        'power': 405100
      }
    },
    {
      'time': 1536421428096,
      'values': {
        'power': 404060
      }
    },
    {
      'time': 1536421430098,
      'values': {
        'power': 405750
      }
    },
    {
      'time': 1536421432101,
      'values': {
        'power': 409270
      }
    },
    {
      'time': 1536421434103,
      'values': {
        'power': 410910
      }
    },
    {
      'time': 1536421436105,
      'values': {
        'power': 409000
      }
    },
    {
      'time': 1536421438107,
      'values': {
        'power': 408680
      }
    },
    {
      'time': 1536421440109,
      'values': {
        'power': 408660
      }
    },
    {
      'time': 1536421442111,
      'values': {
        'power': 409280
      }
    },
    {
      'time': 1536421444113,
      'values': {
        'power': 408260
      }
    },
    {
      'time': 1536421446115,
      'values': {
        'power': 404230
      }
    },
    {
      'time': 1536421448117,
      'values': {
        'power': 402420
      }
    },
    {
      'time': 1536421450119,
      'values': {
        'power': 405920
      }
    },
    {
      'time': 1536421452122,
      'values': {
        'power': 409210
      }
    },
    {
      'time': 1536421454122,
      'values': {
        'power': 409510
      }
    },
    {
      'time': 1536421456124,
      'values': {
        'power': 409210
      }
    },
    {
      'time': 1536421458126,
      'values': {
        'power': 409660
      }
    },
    {
      'time': 1536421460127,
      'values': {
        'power': 409860
      }
    },
    {
      'time': 1536421462129,
      'values': {
        'power': 408650
      }
    },
    {
      'time': 1536421464132,
      'values': {
        'power': 404820
      }
    },
    {
      'time': 1536421466134,
      'values': {
        'power': 399550
      }
    },
    {
      'time': 1536421468136,
      'values': {
        'power': 398120
      }
    },
    {
      'time': 1536421470138,
      'values': {
        'power': 402880
      }
    },
    {
      'time': 1536421472140,
      'values': {
        'power': 408870
      }
    },
    {
      'time': 1536421474142,
      'values': {
        'power': 409560
      }
    },
    {
      'time': 1536421476144,
      'values': {
        'power': 409200
      }
    },
    {
      'time': 1536421478145,
      'values': {
        'power': 408780
      }
    },
    {
      'time': 1536421480147,
      'values': {
        'power': 407960
      }
    },
    {
      'time': 1536421482150,
      'values': {
        'power': 407150
      }
    },
    {
      'time': 1536421484152,
      'values': {
        'power': 403370
      }
    },
    {
      'time': 1536421486154,
      'values': {
        'power': 399640
      }
    },
    {
      'time': 1536421488156,
      'values': {
        'power': 400370
      }
    },
    {
      'time': 1536421490158,
      'values': {
        'power': 405520
      }
    },
    {
      'time': 1536421492160,
      'values': {
        'power': 409310
      }
    },
    {
      'time': 1536421494161,
      'values': {
        'power': 408540
      }
    },
    {
      'time': 1536421496164,
      'values': {
        'power': 406820
      }
    },
    {
      'time': 1536421498166,
      'values': {
        'power': 407370
      }
    },
    {
      'time': 1536421500167,
      'values': {
        'power': 408810
      }
    },
    {
      'time': 1536421502171,
      'values': {
        'power': 408050
      }
    },
    {
      'time': 1536421504171,
      'values': {
        'power': 404340
      }
    },
    {
      'time': 1536421506173,
      'values': {
        'power': 400430
      }
    },
    {
      'time': 1536421508175,
      'values': {
        'power': 400420
      }
    },
    {
      'time': 1536421510177,
      'values': {
        'power': 403330
      }
    },
    {
      'time': 1536421512179,
      'values': {
        'power': 406780
      }
    },
    {
      'time': 1536421514181,
      'values': {
        'power': 409200
      }
    },
    {
      'time': 1536421516183,
      'values': {
        'power': 409600
      }
    },
    {
      'time': 1536421518185,
      'values': {
        'power': 409260
      }
    },
    {
      'time': 1536421520187,
      'values': {
        'power': 409670
      }
    },
    {
      'time': 1536421522189,
      'values': {
        'power': 411150
      }
    },
    {
      'time': 1536421524191,
      'values': {
        'power': 406970
      }
    },
    {
      'time': 1536421526193,
      'values': {
        'power': 401200
      }
    },
    {
      'time': 1536421528197,
      'values': {
        'power': 400740
      }
    },
    {
      'time': 1536421530198,
      'values': {
        'power': 405260
      }
    },
    {
      'time': 1536421532198,
      'values': {
        'power': 408280
      }
    },
    {
      'time': 1536421534201,
      'values': {
        'power': 407880
      }
    },
    {
      'time': 1536421536203,
      'values': {
        'power': 406990
      }
    },
    {
      'time': 1536421538205,
      'values': {
        'power': 407080
      }
    },
    {
      'time': 1536421540207,
      'values': {
        'power': 407680
      }
    },
    {
      'time': 1536421542209,
      'values': {
        'power': 407720
      }
    },
    {
      'time': 1536421544211,
      'values': {
        'power': 404630
      }
    },
    {
      'time': 1536421546212,
      'values': {
        'power': 401190
      }
    },
    {
      'time': 1536421548214,
      'values': {
        'power': 402080
      }
    },
    {
      'time': 1536421550216,
      'values': {
        'power': 405850
      }
    },
    {
      'time': 1536421552218,
      'values': {
        'power': 409520
      }
    },
    {
      'time': 1536421554220,
      'values': {
        'power': 409580
      }
    },
    {
      'time': 1536421556222,
      'values': {
        'power': 407630
      }
    },
    {
      'time': 1536421558224,
      'values': {
        'power': 407700
      }
    },
    {
      'time': 1536421560227,
      'values': {
        'power': 409280
      }
    },
    {
      'time': 1536421562228,
      'values': {
        'power': 407830
      }
    },
    {
      'time': 1536421564230,
      'values': {
        'power': 403010
      }
    },
    {
      'time': 1536421566232,
      'values': {
        'power': 401580
      }
    },
    {
      'time': 1536421568234,
      'values': {
        'power': 404400
      }
    },
    {
      'time': 1536421570236,
      'values': {
        'power': 408050
      }
    },
    {
      'time': 1536421572238,
      'values': {
        'power': 408770
      }
    },
    {
      'time': 1536421574240,
      'values': {
        'power': 408950
      }
    },
    {
      'time': 1536421576242,
      'values': {
        'power': 408570
      }
    },
    {
      'time': 1536421578244,
      'values': {
        'power': 408170
      }
    },
    {
      'time': 1536421580246,
      'values': {
        'power': 408290
      }
    },
    {
      'time': 1536421582248,
      'values': {
        'power': 405540
      }
    },
    {
      'time': 1536421584330,
      'values': {
        'power': 400960
      }
    },
    {
      'time': 1536421586251,
      'values': {
        'power': 399000
      }
    },
    {
      'time': 1536421588253,
      'values': {
        'power': 401950
      }
    },
    {
      'time': 1536421590256,
      'values': {
        'power': 407270
      }
    },
    {
      'time': 1536421592257,
      'values': {
        'power': 409840
      }
    },
    {
      'time': 1536421594259,
      'values': {
        'power': 409160
      }
    },
    {
      'time': 1536421596261,
      'values': {
        'power': 407060
      }
    },
    {
      'time': 1536421598263,
      'values': {
        'power': 406850
      }
    },
    {
      'time': 1536421600265,
      'values': {
        'power': 406770
      }
    },
    {
      'time': 1536421602267,
      'values': {
        'power': 417130
      }
    },
    {
      'time': 1536421604269,
      'values': {
        'power': 433740
      }
    },
    {
      'time': 1536421606272,
      'values': {
        'power': 438300
      }
    },
    {
      'time': 1536421608272,
      'values': {
        'power': 439970
      }
    },
    {
      'time': 1536421610275,
      'values': {
        'power': 444230
      }
    },
    {
      'time': 1536421612276,
      'values': {
        'power': 447520
      }
    },
    {
      'time': 1536421614278,
      'values': {
        'power': 449490
      }
    },
    {
      'time': 1536421616281,
      'values': {
        'power': 448180
      }
    },
    {
      'time': 1536421618283,
      'values': {
        'power': 446040
      }
    },
    {
      'time': 1536421620285,
      'values': {
        'power': 446430
      }
    },
    {
      'time': 1536421622287,
      'values': {
        'power': 444480
      }
    },
    {
      'time': 1536421624289,
      'values': {
        'power': 440960
      }
    },
    {
      'time': 1536421626291,
      'values': {
        'power': 439750
      }
    },
    {
      'time': 1536421628292,
      'values': {
        'power': 442410
      }
    },
    {
      'time': 1536421630295,
      'values': {
        'power': 445920
      }
    },
    {
      'time': 1536421632296,
      'values': {
        'power': 447820
      }
    },
    {
      'time': 1536421634298,
      'values': {
        'power': 448420
      }
    },
    {
      'time': 1536421636301,
      'values': {
        'power': 447650
      }
    },
    {
      'time': 1536421638302,
      'values': {
        'power': 447260
      }
    },
    {
      'time': 1536421640304,
      'values': {
        'power': 445560
      }
    },
    {
      'time': 1536421642306,
      'values': {
        'power': 442220
      }
    },
    {
      'time': 1536421644308,
      'values': {
        'power': 440520
      }
    },
    {
      'time': 1536421646310,
      'values': {
        'power': 440360
      }
    },
    {
      'time': 1536421648312,
      'values': {
        'power': 442690
      }
    },
    {
      'time': 1536421650314,
      'values': {
        'power': 446600
      }
    },
    {
      'time': 1536421652316,
      'values': {
        'power': 447890
      }
    },
    {
      'time': 1536421654318,
      'values': {
        'power': 446020
      }
    },
    {
      'time': 1536421656320,
      'values': {
        'power': 440000
      }
    },
    {
      'time': 1536421658322,
      'values': {
        'power': 436460
      }
    },
    {
      'time': 1536421660324,
      'values': {
        'power': 437380
      }
    },
    {
      'time': 1536421662325,
      'values': {
        'power': 435890
      }
    },
    {
      'time': 1536421664328,
      'values': {
        'power': 432230
      }
    },
    {
      'time': 1536421666331,
      'values': {
        'power': 429930
      }
    },
    {
      'time': 1536421668331,
      'values': {
        'power': 430410
      }
    },
    {
      'time': 1536421670334,
      'values': {
        'power': 433190
      }
    },
    {
      'time': 1536421672336,
      'values': {
        'power': 434780
      }
    },
    {
      'time': 1536421674338,
      'values': {
        'power': 435810
      }
    },
    {
      'time': 1536421676340,
      'values': {
        'power': 434840
      }
    },
    {
      'time': 1536421678342,
      'values': {
        'power': 433170
      }
    },
    {
      'time': 1536421680344,
      'values': {
        'power': 431670
      }
    },
    {
      'time': 1536421682346,
      'values': {
        'power': 429360
      }
    },
    {
      'time': 1536421684348,
      'values': {
        'power': 428700
      }
    },
    {
      'time': 1536421686351,
      'values': {
        'power': 430950
      }
    },
    {
      'time': 1536421688351,
      'values': {
        'power': 434770
      }
    },
    {
      'time': 1536421690353,
      'values': {
        'power': 436530
      }
    },
    {
      'time': 1536421692356,
      'values': {
        'power': 436360
      }
    },
    {
      'time': 1536421694358,
      'values': {
        'power': 436070
      }
    },
    {
      'time': 1536421696359,
      'values': {
        'power': 435320
      }
    },
    {
      'time': 1536421698360,
      'values': {
        'power': 573540
      }
    },
    {
      'time': 1536421700363,
      'values': {
        'power': 609860
      }
    },
    {
      'time': 1536421702365,
      'values': {
        'power': 509300
      }
    },
    {
      'time': 1536421704367,
      'values': {
        'power': 476940
      }
    },
    {
      'time': 1536421706369,
      'values': {
        'power': 477550
      }
    },
    {
      'time': 1536421708371,
      'values': {
        'power': 478880
      }
    },
    {
      'time': 1536421710372,
      'values': {
        'power': 480940
      }
    },
    {
      'time': 1536421712374,
      'values': {
        'power': 483420
      }
    },
    {
      'time': 1536421714377,
      'values': {
        'power': 485840
      }
    },
    {
      'time': 1536421716379,
      'values': {
        'power': 484860
      }
    },
    {
      'time': 1536421718381,
      'values': {
        'power': 483350
      }
    },
    {
      'time': 1536421720382,
      'values': {
        'power': 479620
      }
    },
    {
      'time': 1536421722384,
      'values': {
        'power': 475250
      }
    },
    {
      'time': 1536421724386,
      'values': {
        'power': 474290
      }
    },
    {
      'time': 1536421726389,
      'values': {
        'power': 475110
      }
    },
    {
      'time': 1536421728391,
      'values': {
        'power': 476780
      }
    },
    {
      'time': 1536421730392,
      'values': {
        'power': 476540
      }
    },
    {
      'time': 1536421732395,
      'values': {
        'power': 465760
      }
    },
    {
      'time': 1536421734397,
      'values': {
        'power': 442640
      }
    },
    {
      'time': 1536421736398,
      'values': {
        'power': 420500
      }
    },
    {
      'time': 1536421738400,
      'values': {
        'power': 414530
      }
    },
    {
      'time': 1536421740402,
      'values': {
        'power': 414040
      }
    },
    {
      'time': 1536421742404,
      'values': {
        'power': 412740
      }
    },
    {
      'time': 1536421744406,
      'values': {
        'power': 409800
      }
    },
    {
      'time': 1536421746409,
      'values': {
        'power': 406320
      }
    },
    {
      'time': 1536421748409,
      'values': {
        'power': 406360
      }
    },
    {
      'time': 1536421750411,
      'values': {
        'power': 409950
      }
    },
    {
      'time': 1536421752414,
      'values': {
        'power': 413380
      }
    },
    {
      'time': 1536421754416,
      'values': {
        'power': 414880
      }
    },
    {
      'time': 1536421756418,
      'values': {
        'power': 414820
      }
    },
    {
      'time': 1536421758420,
      'values': {
        'power': 414140
      }
    },
    {
      'time': 1536421760424,
      'values': {
        'power': 415600
      }
    },
    {
      'time': 1536421762425,
      'values': {
        'power': 418540
      }
    },
    {
      'time': 1536421764425,
      'values': {
        'power': 418680
      }
    },
    {
      'time': 1536421766428,
      'values': {
        'power': 415970
      }
    },
    {
      'time': 1536421768430,
      'values': {
        'power': 417850
      }
    },
    {
      'time': 1536421770432,
      'values': {
        'power': 422390
      }
    },
    {
      'time': 1536421772434,
      'values': {
        'power': 425600
      }
    },
    {
      'time': 1536421774436,
      'values': {
        'power': 425860
      }
    },
    {
      'time': 1536421776437,
      'values': {
        'power': 424090
      }
    },
    {
      'time': 1536421778439,
      'values': {
        'power': 424470
      }
    },
    {
      'time': 1536421780442,
      'values': {
        'power': 423200
      }
    },
    {
      'time': 1536421782443,
      'values': {
        'power': 418910
      }
    },
    {
      'time': 1536421784446,
      'values': {
        'power': 416500
      }
    },
    {
      'time': 1536421786447,
      'values': {
        'power': 416510
      }
    },
    {
      'time': 1536421788449,
      'values': {
        'power': 419330
      }
    },
    {
      'time': 1536421790451,
      'values': {
        'power': 422840
      }
    },
    {
      'time': 1536421792453,
      'values': {
        'power': 424230
      }
    },
    {
      'time': 1536421794455,
      'values': {
        'power': 423270
      }
    },
    {
      'time': 1536421796456,
      'values': {
        'power': 422170
      }
    },
    {
      'time': 1536421798458,
      'values': {
        'power': 423370
      }
    },
    {
      'time': 1536421800461,
      'values': {
        'power': 421770
      }
    },
    {
      'time': 1536421802462,
      'values': {
        'power': 417710
      }
    },
    {
      'time': 1536421804465,
      'values': {
        'power': 415860
      }
    },
    {
      'time': 1536421806467,
      'values': {
        'power': 416320
      }
    },
    {
      'time': 1536421808469,
      'values': {
        'power': 420120
      }
    },
    {
      'time': 1536421810471,
      'values': {
        'power': 425460
      }
    },
    {
      'time': 1536421812472,
      'values': {
        'power': 425000
      }
    },
    {
      'time': 1536421814474,
      'values': {
        'power': 422380
      }
    },
    {
      'time': 1536421816477,
      'values': {
        'power': 422110
      }
    },
    {
      'time': 1536421818479,
      'values': {
        'power': 422090
      }
    },
    {
      'time': 1536421820481,
      'values': {
        'power': 421260
      }
    },
    {
      'time': 1536421822483,
      'values': {
        'power': 418460
      }
    },
    {
      'time': 1536421824485,
      'values': {
        'power': 415910
      }
    },
    {
      'time': 1536421826487,
      'values': {
        'power': 417810
      }
    },
    {
      'time': 1536421828491,
      'values': {
        'power': 423450
      }
    },
    {
      'time': 1536421830490,
      'values': {
        'power': 424550
      }
    },
    {
      'time': 1536421832492,
      'values': {
        'power': 423040
      }
    },
    {
      'time': 1536421834494,
      'values': {
        'power': 423470
      }
    },
    {
      'time': 1536421836496,
      'values': {
        'power': 422910
      }
    },
    {
      'time': 1536421838497,
      'values': {
        'power': 422940
      }
    },
    {
      'time': 1536421840499,
      'values': {
        'power': 419800
      }
    },
    {
      'time': 1536421842502,
      'values': {
        'power': 415390
      }
    },
    {
      'time': 1536421844504,
      'values': {
        'power': 413790
      }
    },
    {
      'time': 1536421846506,
      'values': {
        'power': 414430
      }
    },
    {
      'time': 1536421848508,
      'values': {
        'power': 417830
      }
    },
    {
      'time': 1536421850510,
      'values': {
        'power': 420910
      }
    },
    {
      'time': 1536421852512,
      'values': {
        'power': 421990
      }
    },
    {
      'time': 1536421854514,
      'values': {
        'power': 421820
      }
    },
    {
      'time': 1536421856517,
      'values': {
        'power': 420860
      }
    },
    {
      'time': 1536421858517,
      'values': {
        'power': 421870
      }
    },
    {
      'time': 1536421860520,
      'values': {
        'power': 421910
      }
    },
    {
      'time': 1536421862525,
      'values': {
        'power': 417530
      }
    },
    {
      'time': 1536421864523,
      'values': {
        'power': 414820
      }
    },
    {
      'time': 1536421866525,
      'values': {
        'power': 414980
      }
    },
    {
      'time': 1536421868528,
      'values': {
        'power': 417070
      }
    },
    {
      'time': 1536421870530,
      'values': {
        'power': 419480
      }
    },
    {
      'time': 1536421872532,
      'values': {
        'power': 419700
      }
    },
    {
      'time': 1536421874534,
      'values': {
        'power': 419990
      }
    },
    {
      'time': 1536421876535,
      'values': {
        'power': 420580
      }
    },
    {
      'time': 1536421878537,
      'values': {
        'power': 420550
      }
    },
    {
      'time': 1536421880539,
      'values': {
        'power': 418460
      }
    },
    {
      'time': 1536421882541,
      'values': {
        'power': 415310
      }
    },
    {
      'time': 1536421884543,
      'values': {
        'power': 414050
      }
    },
    {
      'time': 1536421886545,
      'values': {
        'power': 414560
      }
    },
    {
      'time': 1536421888547,
      'values': {
        'power': 417750
      }
    },
    {
      'time': 1536421890548,
      'values': {
        'power': 420570
      }
    },
    {
      'time': 1536421892550,
      'values': {
        'power': 421010
      }
    },
    {
      'time': 1536421894553,
      'values': {
        'power': 421620
      }
    },
    {
      'time': 1536421896555,
      'values': {
        'power': 420860
      }
    },
    {
      'time': 1536421898556,
      'values': {
        'power': 418950
      }
    },
    {
      'time': 1536421900558,
      'values': {
        'power': 410350
      }
    },
    {
      'time': 1536421902561,
      'values': {
        'power': 403620
      }
    },
    {
      'time': 1536421904563,
      'values': {
        'power': 402600
      }
    },
    {
      'time': 1536421906565,
      'values': {
        'power': 404730
      }
    },
    {
      'time': 1536421908567,
      'values': {
        'power': 407960
      }
    },
    {
      'time': 1536421910569,
      'values': {
        'power': 408580
      }
    },
    {
      'time': 1536421912571,
      'values': {
        'power': 408720
      }
    },
    {
      'time': 1536421914574,
      'values': {
        'power': 409120
      }
    },
    {
      'time': 1536421916574,
      'values': {
        'power': 408850
      }
    },
    {
      'time': 1536421918577,
      'values': {
        'power': 408450
      }
    },
    {
      'time': 1536421920579,
      'values': {
        'power': 405370
      }
    },
    {
      'time': 1536421922580,
      'values': {
        'power': 402240
      }
    },
    {
      'time': 1536421924582,
      'values': {
        'power': 403020
      }
    },
    {
      'time': 1536421926584,
      'values': {
        'power': 406330
      }
    },
    {
      'time': 1536421928586,
      'values': {
        'power': 407780
      }
    },
    {
      'time': 1536421930589,
      'values': {
        'power': 406310
      }
    },
    {
      'time': 1536421932589,
      'values': {
        'power': 406560
      }
    },
    {
      'time': 1536421934592,
      'values': {
        'power': 409170
      }
    },
    {
      'time': 1536421936594,
      'values': {
        'power': 410180
      }
    },
    {
      'time': 1536421938596,
      'values': {
        'power': 409660
      }
    },
    {
      'time': 1536421940597,
      'values': {
        'power': 406940
      }
    },
    {
      'time': 1536421942599,
      'values': {
        'power': 403960
      }
    },
    {
      'time': 1536421944602,
      'values': {
        'power': 402990
      }
    },
    {
      'time': 1536421946604,
      'values': {
        'power': 406210
      }
    },
    {
      'time': 1536421948606,
      'values': {
        'power': 410960
      }
    },
    {
      'time': 1536421950608,
      'values': {
        'power': 413060
      }
    },
    {
      'time': 1536421952610,
      'values': {
        'power': 412480
      }
    },
    {
      'time': 1536421954612,
      'values': {
        'power': 410810
      }
    },
    {
      'time': 1536421956614,
      'values': {
        'power': 409090
      }
    },
    {
      'time': 1536421958616,
      'values': {
        'power': 407610
      }
    },
    {
      'time': 1536421960618,
      'values': {
        'power': 405220
      }
    },
    {
      'time': 1536421962620,
      'values': {
        'power': 407370
      }
    },
    {
      'time': 1536421964626,
      'values': {
        'power': 412400
      }
    },
    {
      'time': 1536421966623,
      'values': {
        'power': 414560
      }
    },
    {
      'time': 1536421968625,
      'values': {
        'power': 417550
      }
    },
    {
      'time': 1536421970628,
      'values': {
        'power': 419720
      }
    },
    {
      'time': 1536421972630,
      'values': {
        'power': 424140
      }
    },
    {
      'time': 1536421974631,
      'values': {
        'power': 592730
      }
    },
    {
      'time': 1536421976633,
      'values': {
        'power': 632120
      }
    },
    {
      'time': 1536421978635,
      'values': {
        'power': 486820
      }
    },
    {
      'time': 1536421980637,
      'values': {
        'power': 465910
      }
    },
    {
      'time': 1536421982639,
      'values': {
        'power': 462750
      }
    },
    {
      'time': 1536421984641,
      'values': {
        'power': 462260
      }
    },
    {
      'time': 1536421986643,
      'values': {
        'power': 465030
      }
    },
    {
      'time': 1536421988645,
      'values': {
        'power': 467660
      }
    },
    {
      'time': 1536421990648,
      'values': {
        'power': 468130
      }
    },
    {
      'time': 1536421992650,
      'values': {
        'power': 468570
      }
    },
    {
      'time': 1536421994650,
      'values': {
        'power': 469990
      }
    },
    {
      'time': 1536421996653,
      'values': {
        'power': 470230
      }
    },
    {
      'time': 1536421998654,
      'values': {
        'power': 469120
      }
    },
    {
      'time': 1536422000657,
      'values': {
        'power': 467420
      }
    },
    {
      'time': 1536422002659,
      'values': {
        'power': 468850
      }
    },
    {
      'time': 1536422004661,
      'values': {
        'power': 468300
      }
    },
    {
      'time': 1536422006663,
      'values': {
        'power': 463680
      }
    },
    {
      'time': 1536422008665,
      'values': {
        'power': 447770
      }
    },
    {
      'time': 1536422010667,
      'values': {
        'power': 432790
      }
    },
    {
      'time': 1536422012669,
      'values': {
        'power': 432710
      }
    },
    {
      'time': 1536422014671,
      'values': {
        'power': 435270
      }
    },
    {
      'time': 1536422016673,
      'values': {
        'power': 435850
      }
    },
    {
      'time': 1536422018674,
      'values': {
        'power': 434020
      }
    },
    {
      'time': 1536422020676,
      'values': {
        'power': 429590
      }
    },
    {
      'time': 1536422022678,
      'values': {
        'power': 426580
      }
    },
    {
      'time': 1536422024680,
      'values': {
        'power': 427520
      }
    },
    {
      'time': 1536422026682,
      'values': {
        'power': 429600
      }
    },
    {
      'time': 1536422028684,
      'values': {
        'power': 432130
      }
    },
    {
      'time': 1536422030686,
      'values': {
        'power': 433700
      }
    },
    {
      'time': 1536422032687,
      'values': {
        'power': 435080
      }
    },
    {
      'time': 1536422034690,
      'values': {
        'power': 436100
      }
    },
    {
      'time': 1536422036692,
      'values': {
        'power': 434960
      }
    },
    {
      'time': 1536422038694,
      'values': {
        'power': 433090
      }
    },
    {
      'time': 1536422040696,
      'values': {
        'power': 434490
      }
    },
    {
      'time': 1536422042698,
      'values': {
        'power': 435830
      }
    },
    {
      'time': 1536422044700,
      'values': {
        'power': 435150
      }
    },
    {
      'time': 1536422046702,
      'values': {
        'power': 435430
      }
    },
    {
      'time': 1536422048703,
      'values': {
        'power': 439050
      }
    },
    {
      'time': 1536422050705,
      'values': {
        'power': 447540
      }
    },
    {
      'time': 1536422052708,
      'values': {
        'power': 452920
      }
    },
    {
      'time': 1536422054710,
      'values': {
        'power': 453610
      }
    },
    {
      'time': 1536422056712,
      'values': {
        'power': 454540
      }
    },
    {
      'time': 1536422058714,
      'values': {
        'power': 454210
      }
    },
    {
      'time': 1536422060716,
      'values': {
        'power': 451310
      }
    },
    {
      'time': 1536422062718,
      'values': {
        'power': 457020
      }
    },
    {
      'time': 1536422064720,
      'values': {
        'power': 484690
      }
    },
    {
      'time': 1536422066721,
      'values': {
        'power': 506130
      }
    },
    {
      'time': 1536422068723,
      'values': {
        'power': 508940
      }
    },
    {
      'time': 1536422070725,
      'values': {
        'power': 505150
      }
    },
    {
      'time': 1536422072727,
      'values': {
        'power': 501390
      }
    },
    {
      'time': 1536422074729,
      'values': {
        'power': 504630
      }
    },
    {
      'time': 1536422076731,
      'values': {
        'power': 511450
      }
    },
    {
      'time': 1536422078733,
      'values': {
        'power': 516880
      }
    },
    {
      'time': 1536422080735,
      'values': {
        'power': 516800
      }
    },
    {
      'time': 1536422082737,
      'values': {
        'power': 512940
      }
    },
    {
      'time': 1536422084739,
      'values': {
        'power': 506120
      }
    },
    {
      'time': 1536422086741,
      'values': {
        'power': 499100
      }
    },
    {
      'time': 1536422088743,
      'values': {
        'power': 497320
      }
    },
    {
      'time': 1536422090745,
      'values': {
        'power': 487080
      }
    },
    {
      'time': 1536422092747,
      'values': {
        'power': 457840
      }
    },
    {
      'time': 1536422094750,
      'values': {
        'power': 440240
      }
    },
    {
      'time': 1536422096751,
      'values': {
        'power': 440300
      }
    },
    {
      'time': 1536422098753,
      'values': {
        'power': 438950
      }
    },
    {
      'time': 1536422100755,
      'values': {
        'power': 437650
      }
    },
    {
      'time': 1536422102756,
      'values': {
        'power': 434280
      }
    },
    {
      'time': 1536422104759,
      'values': {
        'power': 432970
      }
    },
    {
      'time': 1536422106761,
      'values': {
        'power': 435300
      }
    },
    {
      'time': 1536422108763,
      'values': {
        'power': 437920
      }
    },
    {
      'time': 1536422110765,
      'values': {
        'power': 439010
      }
    },
    {
      'time': 1536422112766,
      'values': {
        'power': 438140
      }
    },
    {
      'time': 1536422114768,
      'values': {
        'power': 439260
      }
    },
    {
      'time': 1536422116770,
      'values': {
        'power': 441380
      }
    },
    {
      'time': 1536422118772,
      'values': {
        'power': 440600
      }
    },
    {
      'time': 1536422120773,
      'values': {
        'power': 435900
      }
    },
    {
      'time': 1536422122775,
      'values': {
        'power': 430960
      }
    },
    {
      'time': 1536422124778,
      'values': {
        'power': 431330
      }
    },
    {
      'time': 1536422126780,
      'values': {
        'power': 435340
      }
    },
    {
      'time': 1536422128783,
      'values': {
        'power': 438590
      }
    },
    {
      'time': 1536422130784,
      'values': {
        'power': 438470
      }
    },
    {
      'time': 1536422132787,
      'values': {
        'power': 438440
      }
    },
    {
      'time': 1536422134787,
      'values': {
        'power': 440390
      }
    },
    {
      'time': 1536422136790,
      'values': {
        'power': 442350
      }
    },
    {
      'time': 1536422138792,
      'values': {
        'power': 441950
      }
    },
    {
      'time': 1536422140794,
      'values': {
        'power': 437660
      }
    },
    {
      'time': 1536422142796,
      'values': {
        'power': 432400
      }
    },
    {
      'time': 1536422144798,
      'values': {
        'power': 432540
      }
    },
    {
      'time': 1536422146799,
      'values': {
        'power': 437340
      }
    },
    {
      'time': 1536422148801,
      'values': {
        'power': 440270
      }
    },
    {
      'time': 1536422150804,
      'values': {
        'power': 439880
      }
    },
    {
      'time': 1536422152806,
      'values': {
        'power': 439210
      }
    },
    {
      'time': 1536422154808,
      'values': {
        'power': 439460
      }
    },
    {
      'time': 1536422156809,
      'values': {
        'power': 439980
      }
    },
    {
      'time': 1536422158811,
      'values': {
        'power': 437180
      }
    },
    {
      'time': 1536422160813,
      'values': {
        'power': 433020
      }
    },
    {
      'time': 1536422162815,
      'values': {
        'power': 431380
      }
    },
    {
      'time': 1536422164817,
      'values': {
        'power': 434130
      }
    },
    {
      'time': 1536422166819,
      'values': {
        'power': 439270
      }
    },
    {
      'time': 1536422168821,
      'values': {
        'power': 441420
      }
    },
    {
      'time': 1536422170823,
      'values': {
        'power': 439360
      }
    },
    {
      'time': 1536422172825,
      'values': {
        'power': 438030
      }
    },
    {
      'time': 1536422174826,
      'values': {
        'power': 438720
      }
    },
    {
      'time': 1536422176829,
      'values': {
        'power': 433680
      }
    },
    {
      'time': 1536422178831,
      'values': {
        'power': 426420
      }
    },
    {
      'time': 1536422180833,
      'values': {
        'power': 423370
      }
    },
    {
      'time': 1536422182835,
      'values': {
        'power': 421790
      }
    },
    {
      'time': 1536422184836,
      'values': {
        'power': 422190
      }
    },
    {
      'time': 1536422186838,
      'values': {
        'power': 423240
      }
    },
    {
      'time': 1536422188841,
      'values': {
        'power': 423020
      }
    },
    {
      'time': 1536422190843,
      'values': {
        'power': 423120
      }
    },
    {
      'time': 1536422192845,
      'values': {
        'power': 423520
      }
    },
    {
      'time': 1536422194847,
      'values': {
        'power': 424300
      }
    },
    {
      'time': 1536422196850,
      'values': {
        'power': 426700
      }
    },
    {
      'time': 1536422198851,
      'values': {
        'power': 427030
      }
    },
    {
      'time': 1536422200852,
      'values': {
        'power': 425240
      }
    },
    {
      'time': 1536422202854,
      'values': {
        'power': 424240
      }
    },
    {
      'time': 1536422204857,
      'values': {
        'power': 424890
      }
    },
    {
      'time': 1536422206858,
      'values': {
        'power': 425110
      }
    },
    {
      'time': 1536422208860,
      'values': {
        'power': 424300
      }
    },
    {
      'time': 1536422210862,
      'values': {
        'power': 422920
      }
    },
    {
      'time': 1536422212864,
      'values': {
        'power': 421210
      }
    },
    {
      'time': 1536422214866,
      'values': {
        'power': 421740
      }
    },
    {
      'time': 1536422216868,
      'values': {
        'power': 424420
      }
    },
    {
      'time': 1536422218870,
      'values': {
        'power': 425790
      }
    },
    {
      'time': 1536422220872,
      'values': {
        'power': 425170
      }
    },
    {
      'time': 1536422222874,
      'values': {
        'power': 424210
      }
    },
    {
      'time': 1536422224876,
      'values': {
        'power': 424330
      }
    },
    {
      'time': 1536422226877,
      'values': {
        'power': 425150
      }
    },
    {
      'time': 1536422228880,
      'values': {
        'power': 425870
      }
    },
    {
      'time': 1536422230882,
      'values': {
        'power': 426320
      }
    },
    {
      'time': 1536422232884,
      'values': {
        'power': 425420
      }
    },
    {
      'time': 1536422234885,
      'values': {
        'power': 424530
      }
    },
    {
      'time': 1536422236888,
      'values': {
        'power': 425800
      }
    },
    {
      'time': 1536422238889,
      'values': {
        'power': 426470
      }
    },
    {
      'time': 1536422240891,
      'values': {
        'power': 425980
      }
    },
    {
      'time': 1536422242894,
      'values': {
        'power': 426290
      }
    },
    {
      'time': 1536422244896,
      'values': {
        'power': 426760
      }
    },
    {
      'time': 1536422246898,
      'values': {
        'power': 427610
      }
    },
    {
      'time': 1536422248901,
      'values': {
        'power': 428190
      }
    },
    {
      'time': 1536422250901,
      'values': {
        'power': 426880
      }
    },
    {
      'time': 1536422252904,
      'values': {
        'power': 425790
      }
    },
    {
      'time': 1536422254905,
      'values': {
        'power': 425810
      }
    },
    {
      'time': 1536422256907,
      'values': {
        'power': 426230
      }
    },
    {
      'time': 1536422258909,
      'values': {
        'power': 426610
      }
    },
    {
      'time': 1536422260911,
      'values': {
        'power': 426420
      }
    },
    {
      'time': 1536422262913,
      'values': {
        'power': 425750
      }
    },
    {
      'time': 1536422264915,
      'values': {
        'power': 425980
      }
    },
    {
      'time': 1536422266917,
      'values': {
        'power': 426180
      }
    },
    {
      'time': 1536422268918,
      'values': {
        'power': 424900
      }
    },
    {
      'time': 1536422270920,
      'values': {
        'power': 422550
      }
    },
    {
      'time': 1536422272923,
      'values': {
        'power': 421960
      }
    },
    {
      'time': 1536422274924,
      'values': {
        'power': 423520
      }
    },
    {
      'time': 1536422276926,
      'values': {
        'power': 425650
      }
    },
    {
      'time': 1536422278929,
      'values': {
        'power': 425590
      }
    },
    {
      'time': 1536422280931,
      'values': {
        'power': 423490
      }
    },
    {
      'time': 1536422282933,
      'values': {
        'power': 422450
      }
    },
    {
      'time': 1536422284935,
      'values': {
        'power': 423120
      }
    },
    {
      'time': 1536422286937,
      'values': {
        'power': 424490
      }
    },
    {
      'time': 1536422288939,
      'values': {
        'power': 425250
      }
    },
    {
      'time': 1536422290941,
      'values': {
        'power': 425190
      }
    },
    {
      'time': 1536422292942,
      'values': {
        'power': 423850
      }
    },
    {
      'time': 1536422294944,
      'values': {
        'power': 422140
      }
    },
    {
      'time': 1536422296947,
      'values': {
        'power': 422040
      }
    },
    {
      'time': 1536422298951,
      'values': {
        'power': 423030
      }
    },
    {
      'time': 1536422300952,
      'values': {
        'power': 422620
      }
    },
    {
      'time': 1536422302952,
      'values': {
        'power': 421530
      }
    },
    {
      'time': 1536422304954,
      'values': {
        'power': 419640
      }
    },
    {
      'time': 1536422306956,
      'values': {
        'power': 414660
      }
    },
    {
      'time': 1536422308958,
      'values': {
        'power': 410780
      }
    },
    {
      'time': 1536422310960,
      'values': {
        'power': 412250
      }
    },
    {
      'time': 1536422312962,
      'values': {
        'power': 412100
      }
    },
    {
      'time': 1536422314964,
      'values': {
        'power': 410090
      }
    },
    {
      'time': 1536422316966,
      'values': {
        'power': 411590
      }
    },
    {
      'time': 1536422318968,
      'values': {
        'power': 414390
      }
    },
    {
      'time': 1536422320969,
      'values': {
        'power': 415150
      }
    },
    {
      'time': 1536422322971,
      'values': {
        'power': 413910
      }
    },
    {
      'time': 1536422324974,
      'values': {
        'power': 412040
      }
    },
    {
      'time': 1536422326975,
      'values': {
        'power': 411270
      }
    },
    {
      'time': 1536422328977,
      'values': {
        'power': 411430
      }
    },
    {
      'time': 1536422330980,
      'values': {
        'power': 411040
      }
    },
    {
      'time': 1536422332982,
      'values': {
        'power': 410860
      }
    },
    {
      'time': 1536422334983,
      'values': {
        'power': 411260
      }
    },
    {
      'time': 1536422336985,
      'values': {
        'power': 412530
      }
    },
    {
      'time': 1536422338988,
      'values': {
        'power': 413430
      }
    },
    {
      'time': 1536422340990,
      'values': {
        'power': 413530
      }
    },
    {
      'time': 1536422342992,
      'values': {
        'power': 414210
      }
    },
    {
      'time': 1536422344994,
      'values': {
        'power': 412200
      }
    },
    {
      'time': 1536422346995,
      'values': {
        'power': 411120
      }
    },
    {
      'time': 1536422348997,
      'values': {
        'power': 412960
      }
    },
    {
      'time': 1536422350999,
      'values': {
        'power': 412730
      }
    },
    {
      'time': 1536422353001,
      'values': {
        'power': 411670
      }
    },
    {
      'time': 1536422355003,
      'values': {
        'power': 410840
      }
    },
    {
      'time': 1536422357005,
      'values': {
        'power': 411320
      }
    },
    {
      'time': 1536422359007,
      'values': {
        'power': 412890
      }
    },
    {
      'time': 1536422361009,
      'values': {
        'power': 413530
      }
    },
    {
      'time': 1536422363011,
      'values': {
        'power': 413030
      }
    },
    {
      'time': 1536422365013,
      'values': {
        'power': 412510
      }
    },
    {
      'time': 1536422367015,
      'values': {
        'power': 413790
      }
    },
    {
      'time': 1536422369016,
      'values': {
        'power': 414470
      }
    },
    {
      'time': 1536422371018,
      'values': {
        'power': 413690
      }
    },
    {
      'time': 1536422373021,
      'values': {
        'power': 411740
      }
    },
    {
      'time': 1536422375023,
      'values': {
        'power': 411170
      }
    },
    {
      'time': 1536422377025,
      'values': {
        'power': 412690
      }
    },
    {
      'time': 1536422379026,
      'values': {
        'power': 413360
      }
    },
    {
      'time': 1536422381028,
      'values': {
        'power': 412600
      }
    },
    {
      'time': 1536422383031,
      'values': {
        'power': 412210
      }
    },
    {
      'time': 1536422385033,
      'values': {
        'power': 410310
      }
    },
    {
      'time': 1536422387035,
      'values': {
        'power': 396150
      }
    },
    {
      'time': 1536422389037,
      'values': {
        'power': 381700
      }
    },
    {
      'time': 1536422391039,
      'values': {
        'power': 379050
      }
    },
    {
      'time': 1536422393041,
      'values': {
        'power': 378370
      }
    },
    {
      'time': 1536422395043,
      'values': {
        'power': 377610
      }
    },
    {
      'time': 1536422397044,
      'values': {
        'power': 375470
      }
    },
    {
      'time': 1536422399047,
      'values': {
        'power': 366770
      }
    },
    {
      'time': 1536422401051,
      'values': {
        'power': 358580
      }
    },
    {
      'time': 1536422403051,
      'values': {
        'power': 356540
      }
    },
    {
      'time': 1536422405052,
      'values': {
        'power': 355860
      }
    },
    {
      'time': 1536422407054,
      'values': {
        'power': 357860
      }
    },
    {
      'time': 1536422409056,
      'values': {
        'power': 359630
      }
    },
    {
      'time': 1536422411058,
      'values': {
        'power': 359500
      }
    },
    {
      'time': 1536422413060,
      'values': {
        'power': 359650
      }
    },
    {
      'time': 1536422415062,
      'values': {
        'power': 358310
      }
    },
    {
      'time': 1536422417064,
      'values': {
        'power': 358080
      }
    },
    {
      'time': 1536422419066,
      'values': {
        'power': 360150
      }
    },
    {
      'time': 1536422421068,
      'values': {
        'power': 359320
      }
    },
    {
      'time': 1536422423070,
      'values': {
        'power': 356590
      }
    },
    {
      'time': 1536422425072,
      'values': {
        'power': 354750
      }
    },
    {
      'time': 1536422427076,
      'values': {
        'power': 354960
      }
    },
    {
      'time': 1536422429075,
      'values': {
        'power': 356960
      }
    },
    {
      'time': 1536422431077,
      'values': {
        'power': 358650
      }
    },
    {
      'time': 1536422433080,
      'values': {
        'power': 358290
      }
    },
    {
      'time': 1536422435082,
      'values': {
        'power': 357450
      }
    },
    {
      'time': 1536422437083,
      'values': {
        'power': 358170
      }
    },
    {
      'time': 1536422439085,
      'values': {
        'power': 359970
      }
    },
    {
      'time': 1536422441088,
      'values': {
        'power': 359560
      }
    },
    {
      'time': 1536422443089,
      'values': {
        'power': 358910
      }
    },
    {
      'time': 1536422445091,
      'values': {
        'power': 358560
      }
    },
    {
      'time': 1536422447093,
      'values': {
        'power': 358240
      }
    },
    {
      'time': 1536422449095,
      'values': {
        'power': 359330
      }
    },
    {
      'time': 1536422451097,
      'values': {
        'power': 359300
      }
    },
    {
      'time': 1536422453099,
      'values': {
        'power': 358010
      }
    },
    {
      'time': 1536422455101,
      'values': {
        'power': 356900
      }
    },
    {
      'time': 1536422457102,
      'values': {
        'power': 356880
      }
    },
    {
      'time': 1536422459104,
      'values': {
        'power': 358200
      }
    },
    {
      'time': 1536422461107,
      'values': {
        'power': 359480
      }
    },
    {
      'time': 1536422463109,
      'values': {
        'power': 358650
      }
    },
    {
      'time': 1536422465111,
      'values': {
        'power': 357410
      }
    },
    {
      'time': 1536422467113,
      'values': {
        'power': 358070
      }
    },
    {
      'time': 1536422469116,
      'values': {
        'power': 359220
      }
    },
    {
      'time': 1536422471116,
      'values': {
        'power': 358960
      }
    },
    {
      'time': 1536422473119,
      'values': {
        'power': 357370
      }
    },
    {
      'time': 1536422475121,
      'values': {
        'power': 357240
      }
    },
    {
      'time': 1536422477123,
      'values': {
        'power': 358740
      }
    },
    {
      'time': 1536422479125,
      'values': {
        'power': 360230
      }
    },
    {
      'time': 1536422481127,
      'values': {
        'power': 359830
      }
    },
    {
      'time': 1536422483130,
      'values': {
        'power': 358540
      }
    },
    {
      'time': 1536422485130,
      'values': {
        'power': 357930
      }
    },
    {
      'time': 1536422487133,
      'values': {
        'power': 357990
      }
    },
    {
      'time': 1536422489135,
      'values': {
        'power': 359240
      }
    },
    {
      'time': 1536422491136,
      'values': {
        'power': 360280
      }
    },
    {
      'time': 1536422493138,
      'values': {
        'power': 361220
      }
    },
    {
      'time': 1536422495140,
      'values': {
        'power': 361420
      }
    },
    {
      'time': 1536422497142,
      'values': {
        'power': 359520
      }
    },
    {
      'time': 1536422499144,
      'values': {
        'power': 359060
      }
    },
    {
      'time': 1536422501146,
      'values': {
        'power': 359090
      }
    },
    {
      'time': 1536422503148,
      'values': {
        'power': 358120
      }
    },
    {
      'time': 1536422505150,
      'values': {
        'power': 357710
      }
    },
    {
      'time': 1536422507151,
      'values': {
        'power': 358470
      }
    },
    {
      'time': 1536422509154,
      'values': {
        'power': 359730
      }
    },
    {
      'time': 1536422511155,
      'values': {
        'power': 359780
      }
    },
    {
      'time': 1536422513157,
      'values': {
        'power': 358770
      }
    },
    {
      'time': 1536422515160,
      'values': {
        'power': 358720
      }
    },
    {
      'time': 1536422517162,
      'values': {
        'power': 359190
      }
    },
    {
      'time': 1536422519164,
      'values': {
        'power': 360890
      }
    },
    {
      'time': 1536422521166,
      'values': {
        'power': 362950
      }
    },
    {
      'time': 1536422523168,
      'values': {
        'power': 361630
      }
    },
    {
      'time': 1536422525170,
      'values': {
        'power': 359310
      }
    },
    {
      'time': 1536422527172,
      'values': {
        'power': 359990
      }
    },
    {
      'time': 1536422529174,
      'values': {
        'power': 361900
      }
    },
    {
      'time': 1536422531176,
      'values': {
        'power': 360740
      }
    },
    {
      'time': 1536422533178,
      'values': {
        'power': 358720
      }
    },
    {
      'time': 1536422535181,
      'values': {
        'power': 358660
      }
    },
    {
      'time': 1536422537181,
      'values': {
        'power': 360240
      }
    },
    {
      'time': 1536422539183,
      'values': {
        'power': 362690
      }
    },
    {
      'time': 1536422541185,
      'values': {
        'power': 361590
      }
    },
    {
      'time': 1536422543187,
      'values': {
        'power': 359690
      }
    },
    {
      'time': 1536422545189,
      'values': {
        'power': 358810
      }
    },
    {
      'time': 1536422547191,
      'values': {
        'power': 358340
      }
    },
    {
      'time': 1536422549193,
      'values': {
        'power': 358820
      }
    },
    {
      'time': 1536422551195,
      'values': {
        'power': 359580
      }
    },
    {
      'time': 1536422553197,
      'values': {
        'power': 362810
      }
    },
    {
      'time': 1536422555199,
      'values': {
        'power': 365530
      }
    },
    {
      'time': 1536422557203,
      'values': {
        'power': 363900
      }
    },
    {
      'time': 1536422559202,
      'values': {
        'power': 364080
      }
    },
    {
      'time': 1536422561205,
      'values': {
        'power': 364740
      }
    },
    {
      'time': 1536422563207,
      'values': {
        'power': 362900
      }
    },
    {
      'time': 1536422565208,
      'values': {
        'power': 362210
      }
    },
    {
      'time': 1536422567211,
      'values': {
        'power': 362670
      }
    },
    {
      'time': 1536422569213,
      'values': {
        'power': 363820
      }
    },
    {
      'time': 1536422571214,
      'values': {
        'power': 364500
      }
    },
    {
      'time': 1536422573216,
      'values': {
        'power': 362840
      }
    },
    {
      'time': 1536422575219,
      'values': {
        'power': 361040
      }
    },
    {
      'time': 1536422577221,
      'values': {
        'power': 360580
      }
    },
    {
      'time': 1536422579223,
      'values': {
        'power': 361200
      }
    },
    {
      'time': 1536422581225,
      'values': {
        'power': 362320
      }
    },
    {
      'time': 1536422583226,
      'values': {
        'power': 362450
      }
    },
    {
      'time': 1536422585228,
      'values': {
        'power': 426360
      }
    },
    {
      'time': 1536422587231,
      'values': {
        'power': 529490
      }
    },
    {
      'time': 1536422589232,
      'values': {
        'power': 489350
      }
    },
    {
      'time': 1536422591234,
      'values': {
        'power': 408610
      }
    },
    {
      'time': 1536422593235,
      'values': {
        'power': 406220
      }
    },
    {
      'time': 1536422595237,
      'values': {
        'power': 404850
      }
    },
    {
      'time': 1536422597240,
      'values': {
        'power': 404580
      }
    },
    {
      'time': 1536422599242,
      'values': {
        'power': 406120
      }
    },
    {
      'time': 1536422601244,
      'values': {
        'power': 406380
      }
    },
    {
      'time': 1536422603246,
      'values': {
        'power': 405150
      }
    },
    {
      'time': 1536422605247,
      'values': {
        'power': 404690
      }
    },
    {
      'time': 1536422607250,
      'values': {
        'power': 404950
      }
    },
    {
      'time': 1536422609251,
      'values': {
        'power': 405980
      }
    },
    {
      'time': 1536422611253,
      'values': {
        'power': 406880
      }
    },
    {
      'time': 1536422613256,
      'values': {
        'power': 405210
      }
    },
    {
      'time': 1536422615258,
      'values': {
        'power': 404830
      }
    },
    {
      'time': 1536422617261,
      'values': {
        'power': 406520
      }
    },
    {
      'time': 1536422619263,
      'values': {
        'power': 405170
      }
    },
    {
      'time': 1536422621263,
      'values': {
        'power': 403120
      }
    },
    {
      'time': 1536422623266,
      'values': {
        'power': 403240
      }
    },
    {
      'time': 1536422625268,
      'values': {
        'power': 403220
      }
    },
    {
      'time': 1536422627270,
      'values': {
        'power': 402780
      }
    },
    {
      'time': 1536422629272,
      'values': {
        'power': 403510
      }
    },
    {
      'time': 1536422631273,
      'values': {
        'power': 402080
      }
    },
    {
      'time': 1536422633276,
      'values': {
        'power': 398070
      }
    },
    {
      'time': 1536422635277,
      'values': {
        'power': 395200
      }
    },
    {
      'time': 1536422637280,
      'values': {
        'power': 394410
      }
    },
    {
      'time': 1536422639281,
      'values': {
        'power': 394310
      }
    },
    {
      'time': 1536422641283,
      'values': {
        'power': 394320
      }
    },
    {
      'time': 1536422643285,
      'values': {
        'power': 394640
      }
    },
    {
      'time': 1536422645287,
      'values': {
        'power': 393590
      }
    },
    {
      'time': 1536422647288,
      'values': {
        'power': 392940
      }
    },
    {
      'time': 1536422649290,
      'values': {
        'power': 394740
      }
    },
    {
      'time': 1536422651293,
      'values': {
        'power': 396390
      }
    },
    {
      'time': 1536422653295,
      'values': {
        'power': 396310
      }
    },
    {
      'time': 1536422655297,
      'values': {
        'power': 394740
      }
    },
    {
      'time': 1536422657299,
      'values': {
        'power': 394040
      }
    },
    {
      'time': 1536422659301,
      'values': {
        'power': 395390
      }
    },
    {
      'time': 1536422661302,
      'values': {
        'power': 395670
      }
    },
    {
      'time': 1536422663304,
      'values': {
        'power': 396200
      }
    },
    {
      'time': 1536422665307,
      'values': {
        'power': 398870
      }
    },
    {
      'time': 1536422667309,
      'values': {
        'power': 399090
      }
    },
    {
      'time': 1536422669311,
      'values': {
        'power': 398350
      }
    },
    {
      'time': 1536422671313,
      'values': {
        'power': 400220
      }
    },
    {
      'time': 1536422673315,
      'values': {
        'power': 401280
      }
    },
    {
      'time': 1536422675316,
      'values': {
        'power': 403130
      }
    },
    {
      'time': 1536422677318,
      'values': {
        'power': 408170
      }
    },
    {
      'time': 1536422679321,
      'values': {
        'power': 407820
      }
    },
    {
      'time': 1536422681322,
      'values': {
        'power': 402630
      }
    },
    {
      'time': 1536422683324,
      'values': {
        'power': 400200
      }
    },
    {
      'time': 1536422685326,
      'values': {
        'power': 420100
      }
    },
    {
      'time': 1536422687328,
      'values': {
        'power': 452190
      }
    },
    {
      'time': 1536422689329,
      'values': {
        'power': 464520
      }
    },
    {
      'time': 1536422691332,
      'values': {
        'power': 466690
      }
    },
    {
      'time': 1536422693334,
      'values': {
        'power': 467460
      }
    },
    {
      'time': 1536422695336,
      'values': {
        'power': 466000
      }
    },
    {
      'time': 1536422697338,
      'values': {
        'power': 464150
      }
    },
    {
      'time': 1536422699340,
      'values': {
        'power': 463270
      }
    },
    {
      'time': 1536422701342,
      'values': {
        'power': 464560
      }
    },
    {
      'time': 1536422703344,
      'values': {
        'power': 467370
      }
    },
    {
      'time': 1536422705346,
      'values': {
        'power': 467970
      }
    },
    {
      'time': 1536422707347,
      'values': {
        'power': 466060
      }
    },
    {
      'time': 1536422709350,
      'values': {
        'power': 463860
      }
    },
    {
      'time': 1536422711354,
      'values': {
        'power': 463700
      }
    },
    {
      'time': 1536422713353,
      'values': {
        'power': 463510
      }
    },
    {
      'time': 1536422715356,
      'values': {
        'power': 462870
      }
    },
    {
      'time': 1536422717358,
      'values': {
        'power': 461950
      }
    },
    {
      'time': 1536422719360,
      'values': {
        'power': 460860
      }
    },
    {
      'time': 1536422721362,
      'values': {
        'power': 461430
      }
    },
    {
      'time': 1536422723364,
      'values': {
        'power': 460590
      }
    },
    {
      'time': 1536422725366,
      'values': {
        'power': 458600
      }
    },
    {
      'time': 1536422727368,
      'values': {
        'power': 457510
      }
    },
    {
      'time': 1536422729369,
      'values': {
        'power': 456790
      }
    },
    {
      'time': 1536422731371,
      'values': {
        'power': 458590
      }
    },
    {
      'time': 1536422733374,
      'values': {
        'power': 459760
      }
    },
    {
      'time': 1536422735377,
      'values': {
        'power': 458270
      }
    },
    {
      'time': 1536422737377,
      'values': {
        'power': 457010
      }
    },
    {
      'time': 1536422739378,
      'values': {
        'power': 456270
      }
    },
    {
      'time': 1536422741380,
      'values': {
        'power': 456490
      }
    },
    {
      'time': 1536422743383,
      'values': {
        'power': 457380
      }
    },
    {
      'time': 1536422745385,
      'values': {
        'power': 456610
      }
    },
    {
      'time': 1536422747387,
      'values': {
        'power': 455170
      }
    },
    {
      'time': 1536422749389,
      'values': {
        'power': 455170
      }
    },
    {
      'time': 1536422751391,
      'values': {
        'power': 456080
      }
    },
    {
      'time': 1536422753393,
      'values': {
        'power': 457860
      }
    },
    {
      'time': 1536422755396,
      'values': {
        'power': 458590
      }
    },
    {
      'time': 1536422757396,
      'values': {
        'power': 456680
      }
    },
    {
      'time': 1536422759399,
      'values': {
        'power': 455700
      }
    },
    {
      'time': 1536422761401,
      'values': {
        'power': 457820
      }
    },
    {
      'time': 1536422763402,
      'values': {
        'power': 459300
      }
    },
    {
      'time': 1536422765405,
      'values': {
        'power': 451390
      }
    },
    {
      'time': 1536422767407,
      'values': {
        'power': 419030
      }
    },
    {
      'time': 1536422769409,
      'values': {
        'power': 391200
      }
    },
    {
      'time': 1536422771411,
      'values': {
        'power': 389230
      }
    },
    {
      'time': 1536422773412,
      'values': {
        'power': 391120
      }
    },
    {
      'time': 1536422775414,
      'values': {
        'power': 394400
      }
    },
    {
      'time': 1536422777416,
      'values': {
        'power': 396750
      }
    },
    {
      'time': 1536422779418,
      'values': {
        'power': 398110
      }
    },
    {
      'time': 1536422781420,
      'values': {
        'power': 398590
      }
    },
    {
      'time': 1536422783422,
      'values': {
        'power': 397100
      }
    },
    {
      'time': 1536422785424,
      'values': {
        'power': 396860
      }
    },
    {
      'time': 1536422787426,
      'values': {
        'power': 396590
      }
    },
    {
      'time': 1536422789427,
      'values': {
        'power': 396180
      }
    },
    {
      'time': 1536422791429,
      'values': {
        'power': 397340
      }
    },
    {
      'time': 1536422793432,
      'values': {
        'power': 397580
      }
    },
    {
      'time': 1536422795434,
      'values': {
        'power': 396840
      }
    },
    {
      'time': 1536422797436,
      'values': {
        'power': 396330
      }
    },
    {
      'time': 1536422799438,
      'values': {
        'power': 395930
      }
    },
    {
      'time': 1536422801440,
      'values': {
        'power': 396230
      }
    },
    {
      'time': 1536422803442,
      'values': {
        'power': 397590
      }
    },
    {
      'time': 1536422805443,
      'values': {
        'power': 386540
      }
    },
    {
      'time': 1536422807446,
      'values': {
        'power': 371190
      }
    },
    {
      'time': 1536422809448,
      'values': {
        'power': 366230
      }
    },
    {
      'time': 1536422811449,
      'values': {
        'power': 365660
      }
    },
    {
      'time': 1536422813452,
      'values': {
        'power': 366600
      }
    },
    {
      'time': 1536422815453,
      'values': {
        'power': 371350
      }
    },
    {
      'time': 1536422817455,
      'values': {
        'power': 384430
      }
    },
    {
      'time': 1536422819457,
      'values': {
        'power': 394220
      }
    },
    {
      'time': 1536422821459,
      'values': {
        'power': 392370
      }
    },
    {
      'time': 1536422823461,
      'values': {
        'power': 391830
      }
    },
    {
      'time': 1536422825463,
      'values': {
        'power': 392540
      }
    },
    {
      'time': 1536422827465,
      'values': {
        'power': 391140
      }
    },
    {
      'time': 1536422829467,
      'values': {
        'power': 390380
      }
    },
    {
      'time': 1536422831469,
      'values': {
        'power': 389940
      }
    },
    {
      'time': 1536422833471,
      'values': {
        'power': 391000
      }
    },
    {
      'time': 1536422835473,
      'values': {
        'power': 392800
      }
    },
    {
      'time': 1536422837476,
      'values': {
        'power': 392320
      }
    },
    {
      'time': 1536422839479,
      'values': {
        'power': 391380
      }
    },
    {
      'time': 1536422841478,
      'values': {
        'power': 392090
      }
    },
    {
      'time': 1536422843480,
      'values': {
        'power': 392750
      }
    },
    {
      'time': 1536422845483,
      'values': {
        'power': 392080
      }
    },
    {
      'time': 1536422847485,
      'values': {
        'power': 390780
      }
    },
    {
      'time': 1536422849487,
      'values': {
        'power': 390020
      }
    },
    {
      'time': 1536422851489,
      'values': {
        'power': 389630
      }
    },
    {
      'time': 1536422853491,
      'values': {
        'power': 389790
      }
    },
    {
      'time': 1536422855493,
      'values': {
        'power': 390110
      }
    },
    {
      'time': 1536422857495,
      'values': {
        'power': 388940
      }
    },
    {
      'time': 1536422859497,
      'values': {
        'power': 387350
      }
    },
    {
      'time': 1536422861499,
      'values': {
        'power': 388620
      }
    },
    {
      'time': 1536422863503,
      'values': {
        'power': 393400
      }
    },
    {
      'time': 1536422865504,
      'values': {
        'power': 395990
      }
    },
    {
      'time': 1536422867504,
      'values': {
        'power': 393360
      }
    },
    {
      'time': 1536422869506,
      'values': {
        'power': 389720
      }
    },
    {
      'time': 1536422871508,
      'values': {
        'power': 388820
      }
    },
    {
      'time': 1536422873510,
      'values': {
        'power': 389700
      }
    },
    {
      'time': 1536422875511,
      'values': {
        'power': 390640
      }
    },
    {
      'time': 1536422877514,
      'values': {
        'power': 390830
      }
    },
    {
      'time': 1536422879516,
      'values': {
        'power': 389710
      }
    },
    {
      'time': 1536422881518,
      'values': {
        'power': 388060
      }
    },
    {
      'time': 1536422883520,
      'values': {
        'power': 389070
      }
    },
    {
      'time': 1536422885523,
      'values': {
        'power': 392530
      }
    },
    {
      'time': 1536422887524,
      'values': {
        'power': 394460
      }
    },
    {
      'time': 1536422889528,
      'values': {
        'power': 393310
      }
    },
    {
      'time': 1536422891529,
      'values': {
        'power': 382460
      }
    },
    {
      'time': 1536422893529,
      'values': {
        'power': 361600
      }
    },
    {
      'time': 1536422895532,
      'values': {
        'power': 350830
      }
    },
    {
      'time': 1536422897534,
      'values': {
        'power': 348050
      }
    },
    {
      'time': 1536422899536,
      'values': {
        'power': 344330
      }
    },
    {
      'time': 1536422901538,
      'values': {
        'power': 345730
      }
    },
    {
      'time': 1536422903540,
      'values': {
        'power': 351080
      }
    },
    {
      'time': 1536422905542,
      'values': {
        'power': 354270
      }
    },
    {
      'time': 1536422907543,
      'values': {
        'power': 352860
      }
    },
    {
      'time': 1536422909545,
      'values': {
        'power': 351580
      }
    },
    {
      'time': 1536422911548,
      'values': {
        'power': 352180
      }
    },
    {
      'time': 1536422913550,
      'values': {
        'power': 354830
      }
    },
    {
      'time': 1536422915551,
      'values': {
        'power': 355940
      }
    },
    {
      'time': 1536422917553,
      'values': {
        'power': 354920
      }
    },
    {
      'time': 1536422919555,
      'values': {
        'power': 352530
      }
    },
    {
      'time': 1536422921557,
      'values': {
        'power': 351020
      }
    },
    {
      'time': 1536422923559,
      'values': {
        'power': 352590
      }
    },
    {
      'time': 1536422925561,
      'values': {
        'power': 354790
      }
    },
    {
      'time': 1536422927563,
      'values': {
        'power': 357380
      }
    },
    {
      'time': 1536422929565,
      'values': {
        'power': 356220
      }
    },
    {
      'time': 1536422931567,
      'values': {
        'power': 353470
      }
    },
    {
      'time': 1536422933569,
      'values': {
        'power': 353740
      }
    },
    {
      'time': 1536422935571,
      'values': {
        'power': 354640
      }
    },
    {
      'time': 1536422937573,
      'values': {
        'power': 354350
      }
    },
    {
      'time': 1536422939575,
      'values': {
        'power': 352550
      }
    },
    {
      'time': 1536422941577,
      'values': {
        'power': 351790
      }
    },
    {
      'time': 1536422943579,
      'values': {
        'power': 352610
      }
    },
    {
      'time': 1536422945581,
      'values': {
        'power': 352470
      }
    },
    {
      'time': 1536422947582,
      'values': {
        'power': 353560
      }
    },
    {
      'time': 1536422949584,
      'values': {
        'power': 353830
      }
    },
    {
      'time': 1536422951587,
      'values': {
        'power': 350800
      }
    },
    {
      'time': 1536422953589,
      'values': {
        'power': 350470
      }
    },
    {
      'time': 1536422955591,
      'values': {
        'power': 352860
      }
    },
    {
      'time': 1536422957593,
      'values': {
        'power': 355350
      }
    },
    {
      'time': 1536422959595,
      'values': {
        'power': 353810
      }
    },
    {
      'time': 1536422961597,
      'values': {
        'power': 350970
      }
    },
    {
      'time': 1536422963598,
      'values': {
        'power': 349590
      }
    },
    {
      'time': 1536422965600,
      'values': {
        'power': 350210
      }
    },
    {
      'time': 1536422967602,
      'values': {
        'power': 351520
      }
    },
    {
      'time': 1536422969604,
      'values': {
        'power': 351380
      }
    },
    {
      'time': 1536422971607,
      'values': {
        'power': 350940
      }
    },
    {
      'time': 1536422973608,
      'values': {
        'power': 351790
      }
    },
    {
      'time': 1536422975610,
      'values': {
        'power': 355380
      }
    },
    {
      'time': 1536422977611,
      'values': {
        'power': 358960
      }
    },
    {
      'time': 1536422979614,
      'values': {
        'power': 356510
      }
    },
    {
      'time': 1536422981616,
      'values': {
        'power': 352990
      }
    },
    {
      'time': 1536422983618,
      'values': {
        'power': 353950
      }
    },
    {
      'time': 1536422985620,
      'values': {
        'power': 356190
      }
    },
    {
      'time': 1536422987622,
      'values': {
        'power': 356260
      }
    },
    {
      'time': 1536422989624,
      'values': {
        'power': 353160
      }
    },
    {
      'time': 1536422991626,
      'values': {
        'power': 349540
      }
    },
    {
      'time': 1536422993630,
      'values': {
        'power': 351150
      }
    },
    {
      'time': 1536422995629,
      'values': {
        'power': 355190
      }
    },
    {
      'time': 1536422997632,
      'values': {
        'power': 355270
      }
    },
    {
      'time': 1536422999634,
      'values': {
        'power': 348040
      }
    },
    {
      'time': 1536423001635,
      'values': {
        'power': 331350
      }
    },
    {
      'time': 1536423003637,
      'values': {
        'power': 321360
      }
    },
    {
      'time': 1536423005640,
      'values': {
        'power': 324080
      }
    },
    {
      'time': 1536423007642,
      'values': {
        'power': 326990
      }
    },
    {
      'time': 1536423009643,
      'values': {
        'power': 325660
      }
    },
    {
      'time': 1536423011645,
      'values': {
        'power': 331110
      }
    },
    {
      'time': 1536423013647,
      'values': {
        'power': 344340
      }
    },
    {
      'time': 1536423015649,
      'values': {
        'power': 351240
      }
    },
    {
      'time': 1536423017651,
      'values': {
        'power': 351680
      }
    },
    {
      'time': 1536423019652,
      'values': {
        'power': 351670
      }
    },
    {
      'time': 1536423021654,
      'values': {
        'power': 350980
      }
    },
    {
      'time': 1536423023657,
      'values': {
        'power': 351270
      }
    },
    {
      'time': 1536423025659,
      'values': {
        'power': 352660
      }
    },
    {
      'time': 1536423027662,
      'values': {
        'power': 354160
      }
    },
    {
      'time': 1536423029662,
      'values': {
        'power': 353280
      }
    },
    {
      'time': 1536423031665,
      'values': {
        'power': 349810
      }
    },
    {
      'time': 1536423033667,
      'values': {
        'power': 337370
      }
    },
    {
      'time': 1536423035669,
      'values': {
        'power': 324950
      }
    },
    {
      'time': 1536423037671,
      'values': {
        'power': 324920
      }
    },
    {
      'time': 1536423039673,
      'values': {
        'power': 325670
      }
    },
    {
      'time': 1536423041676,
      'values': {
        'power': 332640
      }
    },
    {
      'time': 1536423043677,
      'values': {
        'power': 343090
      }
    },
    {
      'time': 1536423045678,
      'values': {
        'power': 348540
      }
    },
    {
      'time': 1536423047680,
      'values': {
        'power': 350570
      }
    },
    {
      'time': 1536423049683,
      'values': {
        'power': 350720
      }
    },
    {
      'time': 1536423051685,
      'values': {
        'power': 351000
      }
    },
    {
      'time': 1536423053687,
      'values': {
        'power': 350340
      }
    },
    {
      'time': 1536423055688,
      'values': {
        'power': 353520
      }
    },
    {
      'time': 1536423057690,
      'values': {
        'power': 358950
      }
    },
    {
      'time': 1536423059693,
      'values': {
        'power': 444410
      }
    },
    {
      'time': 1536423061694,
      'values': {
        'power': 555470
      }
    },
    {
      'time': 1536423063696,
      'values': {
        'power': 509250
      }
    },
    {
      'time': 1536423065698,
      'values': {
        'power': 416330
      }
    },
    {
      'time': 1536423067700,
      'values': {
        'power': 419710
      }
    },
    {
      'time': 1536423069702,
      'values': {
        'power': 714770
      }
    },
    {
      'time': 1536423071704,
      'values': {
        'power': 1028870
      }
    },
    {
      'time': 1536423073706,
      'values': {
        'power': 1055000
      }
    },
    {
      'time': 1536423075707,
      'values': {
        'power': 1053970
      }
    },
    {
      'time': 1536423077709,
      'values': {
        'power': 1054090
      }
    },
    {
      'time': 1536423079712,
      'values': {
        'power': 1055060
      }
    },
    {
      'time': 1536423081714,
      'values': {
        'power': 1055940
      }
    },
    {
      'time': 1536423083715,
      'values': {
        'power': 1056720
      }
    },
    {
      'time': 1536423085717,
      'values': {
        'power': 1057790
      }
    },
    {
      'time': 1536423087720,
      'values': {
        'power': 1058680
      }
    },
    {
      'time': 1536423089722,
      'values': {
        'power': 1057400
      }
    },
    {
      'time': 1536423091724,
      'values': {
        'power': 1055070
      }
    },
    {
      'time': 1536423093726,
      'values': {
        'power': 1052740
      }
    },
    {
      'time': 1536423095728,
      'values': {
        'power': 1052970
      }
    },
    {
      'time': 1536423097729,
      'values': {
        'power': 1053700
      }
    },
    {
      'time': 1536423099731,
      'values': {
        'power': 1051690
      }
    },
    {
      'time': 1536423101734,
      'values': {
        'power': 1050380
      }
    },
    {
      'time': 1536423103735,
      'values': {
        'power': 1046470
      }
    },
    {
      'time': 1536423105737,
      'values': {
        'power': 1042730
      }
    },
    {
      'time': 1536423107740,
      'values': {
        'power': 1042090
      }
    },
    {
      'time': 1536423109741,
      'values': {
        'power': 1040380
      }
    },
    {
      'time': 1536423111742,
      'values': {
        'power': 1037750
      }
    },
    {
      'time': 1536423113745,
      'values': {
        'power': 1036800
      }
    },
    {
      'time': 1536423115747,
      'values': {
        'power': 1038330
      }
    },
    {
      'time': 1536423117749,
      'values': {
        'power': 1040010
      }