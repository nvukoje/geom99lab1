# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJe3u5IUsvK4gR_PyyMgWDpoc&departure_time=now&mode=driving&avoid=tolls&traffic_model=pessimistic&alternatives=true&destination=place_id:ChIJsx1_uCg1K4gRc8IuteM42qU&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJe3u5IUsvK4gR_PyyMgWDpoc",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJsx1_uCg1K4gRc8IuteM42qU",
         "types" : [ "establishment", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.8422192,
               "lng" : -79.40977119999999
            },
            "southwest" : {
               "lat" : 43.6134451,
               "lng" : -79.57941630000001
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "43.1 km",
                  "value" : 43088
               },
               "duration" : {
                  "text" : "36 mins",
                  "value" : 2148
               },
               "duration_in_traffic" : {
                  "text" : "1 hour 30 mins",
                  "value" : 5377
               },
               "end_address" : "100 Princes' Blvd, Toronto, ON M6K 3C3, Canada",
               "end_location" : {
                  "lat" : 43.6359496,
                  "lng" : -79.4120705
               },
               "start_address" : "1 Canada's Wonderland Drive, Vaughan, ON L6A 1S6, Canada",
               "start_location" : {
                  "lat" : 43.8397931,
                  "lng" : -79.5350741
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 70
                     },
                     "end_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e",
                     "polyline" : {
                        "points" : "umqjGdemdNqDd@q@Jc@Jc@D_CZWBWBC@ABCD"
                     },
                     "start_location" : {
                        "lat" : 43.8397931,
                        "lng" : -79.5350741
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 126
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 43.8410999,
                        "lng" : -79.5354636
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "{|qjGxhmdN`@A\\EPCLA`@G^G@?\\CRAHA"
                     },
                     "start_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 129
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 43.8409134,
                        "lng" : -79.5370538
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{uqjGrgmdNd@|H"
                     },
                     "start_location" : {
                        "lat" : 43.8410999,
                        "lng" : -79.5354636
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 415
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 70
                     },
                     "end_location" : {
                        "lat" : 43.83758659999999,
                        "lng" : -79.5374154
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "utqjGpqmdNPCLA^G^E`@GFAVC^G\\E`@E^G^E`@GDATC`@GZEB?^G`@ELCH?H?J?JBJFNLHLHNFRHVDX@FNt@"
                     },
                     "start_location" : {
                        "lat" : 43.8409134,
                        "lng" : -79.5370538
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1605
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 138
                     },
                     "end_location" : {
                        "lat" : 43.8286586,
                        "lng" : -79.54305289999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCanada's Wonderland Drive\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}_qjGzsmdNP|Ab@tETpBHp@Hv@Lz@Jt@bA`HBTBXDf@Dj@@b@@f@?nA?fF?N?L@PBTBRDTDNDNFLFJFHHJLJLHJFNDLBN@J@L?L?NAzXoAXARCPCHCJCLEHEHEJGLKJKJIHKHMHMHMFKFODMj@gAHQ\\cAVi@DGBCDEDEDEDEBCNGTKt@SdAY"
                     },
                     "start_location" : {
                        "lat" : 43.83758659999999,
                        "lng" : -79.5374154
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 300
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 43.8281769,
                        "lng" : -79.54672909999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRutherford Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 73\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "chojG`wndNLjB^tFR|CNnB@FDr@Dr@"
                     },
                     "start_location" : {
                        "lat" : 43.8286586,
                        "lng" : -79.54305289999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.4 km",
                        "value" : 12376
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 437
                     },
                     "end_location" : {
                        "lat" : 43.7215822,
                        "lng" : -79.52268269999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eON-400 S\u003c/b\u003e via the ramp to \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ceojG`nodNCN?F@XDl@?D?F@R?V?DG`@ABIVKPKNYN_@DQ?IEA?ECGEGIEGEKGMEOAICU?OAC@SBUDSFODIDIHIJGBCJGJEJE`@I\\G~AQxAOZCFA@A@AJUj@C|BKb@CrBILAn@C~@ETAn@Eb@Ap@EVA`AEj@CbAElBKtAG|@ED?bAEPAdAEl@E`AEj@C~@EbAE^ChBIJAB?lBIvAG`AEj@Cl@El@CRAl@EvAKxAKRCtAObAKVEh@GHAZEVErASj@I~@MRCvAUtAS`AO|@Mh@I`AOtCc@~B]tCc@@?hFw@tEq@j@IBAnAQj@I~@O~@O~@MjBYjDi@j@I~B]`Em@tAS|@OvAStASh@INCn@KtAS`C]tAURCj@I~@OtCc@TCj@Kh@I`AMNCl@Kl@If@INCXEl@I~@ORCVE~@Oh@IfAO`@GjBYtASTE~B]TEh@Ij@Gh@I~@Mj@I|@MdC]f@Gj@IPClBWbC]RCHA^G`@GHAnBYpCc@D?pC_@d@Id@G\\EX@b@ARCPCTEt@KTE\\ETEVEXEz@MlASb@GXGlAS\\GREd@IxAUXGh@INCZGf@Ih@Kj@K|@Oj@Kj@Il@Kz@Oj@If@Il@Kh@If@I^G^G`AMVEZE^Gl@K`AOvAS~@OTCj@IdAQLAjBYl@KbBUl@KbAOpAQhBYTEj@ItASl@IJCRCr@KVEVE^Gt@K`@Gl@K|@M`AONC\\Ej@IRETEj@Ih@Ij@Ih@Ih@ITCj@Kj@Ih@Ih@ITCLC\\G~@Mj@ITE~@OTCRERCVERCVEj@If@ITCTEHA`@GRETC~@OTCREVE~@MTEh@I`AORC~@Ol@Ih@If@I@?`AOZELCXEx@Mj@Ij@IRCTEd@Gn@Kj@ITERCTETEh@Ij@IhAQv@MNCB?TEj@ITEh@I\\ELCh@Id@IXEf@Gj@IFA`@Gh@Ij@If@IxASTERCTETCTEh@I~@MTE~@M@Ah@Ij@Ih@Ih@Ij@I~@OTCj@KjAQHAj@IPCVERCRCVETERETCTETCn@KDAHATCBANCTETCTEh@ITCTERCTETCVERCVERERCTETCDANCTCTERE@?RCTERCTETCj@Ih@ITETETCRC@ARCTERCTEB?PCTETCREl@ITERCTERCVERCTETERCTETCTEVEPCTCVE~@OTCRERC@?REVCREHA`@GRCZGNCTCTEh@IRCVETE^Gt@K@?PCj@KHAJARCTETETCREHAPCnAQTETC^G^G`AORCJC^ETEREVCRED?PERCRCFAv@Mj@ILCr@KRCTE@?RCREVERCTETCDANCh@Ij@Ij@IRE\\Ej@IDANCJC`AMREj@IJAHA~@OTE^EJCj@ITERCTERCTCVE|@OXERCTETCRETCTERCTETCTETERCTETCTERCTETCTETCTETE~@Ml@K|Du@~@OdAOf@ItAU~@Sh@O|@[h@STId@Ud@U"
                     },
                     "start_location" : {
                        "lat" : 43.8281769,
                        "lng" : -79.54672909999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 358
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 43.7187039,
                        "lng" : -79.5206986
                     },
                     "html_instructions" : "Take the \u003cb\u003eOntario 401 E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOntario 401 W\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "{jziGvwjdNpHoEjCaB`CyA"
                     },
                     "start_location" : {
                        "lat" : 43.7215822,
                        "lng" : -79.52268269999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.4 km",
                        "value" : 6447
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 282
                     },
                     "end_location" : {
                        "lat" : 43.6825647,
                        "lng" : -79.57494969999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eOntario 401 O\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-401 W\u003c/b\u003e and merge onto \u003cb\u003eON-401 W\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "{xyiGjkjdNPC@?VOLIf@ULE^Md@GB?T?RDH@VF^PNJPPBB@@DDJNNXJR?BFPHT?BFVFT@BD\\BNBLFb@Df@H`A@@N^XxGN`CJxALbADb@JhAFf@Jt@BTBV|@pGVhB@D`@pCFl@Jl@JlAXpBDVRzADNBJ\\bCZxBt@hFFb@Jp@F`@`@dCZtBr@bFl@zD^dCBPZtBRpAPlAHj@Fb@Fb@Jx@DZHz@DZJbA@HDb@B\\BZB\\DZFz@BZB^JrAFt@Dd@DZD\\D\\DZD\\DZF\\Jv@F\\H`@DTFTNt@Jb@l@hCXjANl@DPBLLh@Nj@BNR|@Ln@Jf@Lr@Ln@Lt@Lt@BPJr@Lx@DTF`@Jt@FZF^Nt@FZ@Dj@zBDRNb@Vt@L\\Rj@Xn@Xn@JRNX\\j@\\l@^h@JNRVJLTXLNPPLNTVNNPPPPPPPNNJTTd@^VRJHd@^BB`@ZJHXTPNPNr@h@@@@?b@C|@v@l@f@VT^Zb@^b@^b@^f@b@JHb@`@JHZVb@^RP`@\\b@^`@\\TRb@^^\\@??@N\\f@`@XTFDb@^RPRPb@^dA|@b@\\d@`@b@\\d@`@BBv@p@NLvAlAHFz@t@BBzApAb@^PNlAbA|AtApAdAbA|@hA`A~DjD`Ax@p@l@v@p@bBvA`Ax@XRJHd@^v@j@f@\\d@\\RL\\Tl@`@TNh@Xx@f@z@d@h@V|@d@~@d@tBbAZPXLNHJFz@b@d@Th@Xz@d@h@VbBz@fAh@p@\\PHz@b@B@b@T|@b@z@`@vBfAxBdAf@VPHz@`@TJp@Zx@^^NbBt@"
                     },
                     "start_location" : {
                        "lat" : 43.7187039,
                        "lng" : -79.5206986
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1778
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 66
                     },
                     "end_location" : {
                        "lat" : 43.6685205,
                        "lng" : -79.57414279999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e352\u003c/b\u003e for \u003cb\u003eON-427 S\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "_wriGl~tdNZ`@@@lAl@z@b@NH`@TPH`@Tb@Vz@d@r@`@x@b@tAz@nAr@xCdBTL\\RZRRJb@VRLPJ@?d@Z\\RpAv@LHj@ZRHf@TPFTHPDTHRDRDTDRD`@DbAHn@@rBSTETEPCFALCTGZI`@ORKRIPIRKPMRKPMRMNOPMPOPQNOPQNSNQNQ^i@NUNSNSDIT[b@o@d@m@Ze@V_@DENUPWJM^i@\\a@Z_@PQPSPQPQPQPOPQPOPOPMPOTQPM`@YPA"
                     },
                     "start_location" : {
                        "lat" : 43.6825647,
                        "lng" : -79.57494969999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.9 km",
                        "value" : 5892
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 206
                     },
                     "end_location" : {
                        "lat" : 43.617943,
                        "lng" : -79.55246439999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-427 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "g_piGjytdN`@Yn@]|Au@HEj@Uf@QTIVKNEBAv@Wl@S`@MrBo@v@WhM{Dn@SlC{@nBm@jA]~@[pBm@^MRGTIRGRITGRIp@UrBs@r@WxAg@BARITIRIRITIRIx@[~@]TKZMJETIz@_@RIRINGDA\\Ot@[RI|Ao@HCRI`Aa@b@Q@Ax@]fBs@HCfAc@pAk@f@Sd@QXKd@SNGDCRIDANGRIVK\\MXMj@URGTKRIRGPGh@URGRKRGRIRId@QTINGTIRGd@QRITIjAc@~@[NGh@Q^OBARGRIPGRGRIRGRI@?d@Od@QTIPG@?RIbBi@d@Q@?hAa@r@UJCt@WXKh@QFALERGh@Q@ArAa@PGHCJETGRGj@SlA]XKLEXITGj@QRGRGTGrAa@TGTGRGTGBALEl@Qh@MRG@ARE`@KFC~@UHC^Kt@QHATGRGVGh@MjDw@f@Mj@MRGhBc@h@M`AUh@ONEn@Oh@MjBc@rA]rA]tA_@rA]TGfAYdD}@nBi@h@ORGHC`@KhDcArAa@j@OhA]lEsAz@Y~@Yh@QpAc@RGh@QTIRGfBk@RIzBu@|@[RI|Bu@p@Up@W~@[xDsAp@UlC_A^M~@[h@Qh@SPGh@QHC^MVIHCPE^M^Kh@Oh@Q"
                     },
                     "start_location" : {
                        "lat" : 43.6685205,
                        "lng" : -79.57414279999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1317
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 43.6150447,
                        "lng" : -79.5405066
                     },
                     "html_instructions" : "Take the \u003cb\u003eGardiner Expressway\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "ccfiGzqpdNHK|@WVGhA[jA[\\If@MVG^KLEREd@MRERETGNC\\KRGx@_@\\QLKZYXYJMLQJMHONW@CDIDGFQHQHUDOFSLi@DQDUBSDS@SBW@QBU?O@Y?i@?k@A]AYCm@Em@CWAIAMCWEWMaAKo@Km@Kk@QiAc@kCc@mC[uBYyBWaCEYEa@QqBU{C?AOS"
                     },
                     "start_location" : {
                        "lat" : 43.617943,
                        "lng" : -79.55246439999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.1 km",
                        "value" : 9059
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 368
                     },
                     "end_location" : {
                        "lat" : 43.6339775,
                        "lng" : -79.4372448
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eGardiner Expy E\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "_qeiGdgndNKwAUcCI_AYqCIo@Gu@Q}AQ{AUqBCW[iC}@yHCYE]s@aGOsAo@uFMgAMeA[kCm@eFaAwIg@gEq@cGuIuu@Ky@Iy@mAmKa@kDg@iEk@cF}@{Ha@kDOuAQuAIy@Kw@Ky@Ky@Iw@Kw@Iq@Ky@Kw@Ky@Ky@Kw@Ky@E[E[_@kCQuAE[WqBG[E[E]Kw@Mw@E[E[G]Ig@Ik@Mw@QoAi@mDO{@e@cDa@iCMw@SsAYmBg@gD[qB{@wFE[Mu@cB}KKo@Ks@Im@SmAu@_FOcAQeAU{AqAsIE[G]E[E[G[E[G[G]E[G[G[G[I[GYG[I[Us@IYK[IWKYKWMWWm@O[MUOUMUOUMUOUOSOSOUOSOSOSOSOUOS]e@AC_@g@OSc@m@a@k@Y_@OS_@i@OSOSOS_@i@OSOSOSMSA?OUOSOU{@uA]k@MUOUEKMUMUMWKQACMWKUKUMYKUc@aAWm@Sg@A?KWKWKWKWMWKWMYYm@OWYo@MUMUMWMWMUMUMWKQa@y@w@wAc@y@i@eAm@uAq@eBAE_@gAoAyDo@iBI[c@sA[cAUy@Ww@[kACI_@wA]wAOo@Kc@Ki@UgAOw@Ig@EQMw@Ks@Gc@Kq@Kq@Iw@Ku@Ee@Ge@KeAKcAGu@CWEk@Gq@Ci@Ew@CSCo@Cs@Ci@A_@A]AYA[Ak@Am@?GAo@?Q?a@?o@?[?Y@_A?[@m@?o@B_A?k@DsABcA@KFcBDaABs@Do@Bs@Fu@FgADc@Bg@Fk@HcAH}@Dc@De@P{AB]Fe@Js@D_@L_AF_@XmBDW@ERkA@E@IJg@Fc@Lk@TgAJe@DS@EBK?C@CDQFUDSBIDOH[@GBG@GFWHYTu@Po@@CHWTu@r@uB~@uCz@oCr@wBFQFQPi@Ne@L_@Ro@Ne@HUHWDOFSHSPi@Nc@Nc@La@j@gBh@aB"
                     },
                     "start_location" : {
                        "lat" : 43.6150447,
                        "lng" : -79.5405066
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 278
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.6323263,
                        "lng" : -79.43485269999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e149\u003c/b\u003e toward \u003cb\u003eLake Shore Blvd W\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "kgiiGvazcNPC?ABEP_@DKTk@?AHUDM`@iABKDGBIFGDGFGFGFGHCVKXKHEFCFEFEHIBEDGHQDKBKHWF[F["
                     },
                     "start_location" : {
                        "lat" : 43.6339775,
                        "lng" : -79.4372448
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2008
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 43.6323708,
                        "lng" : -79.4110001
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e and merge onto \u003cb\u003eLake Shore Blvd W\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "a}hiGxrycNPaAVsAFY@GBEHKB[NeBBUVqE@WLiBPwBDWFm@Hk@Dc@BML}@BQF[BO@GH]BKRaAR{@VgA^}AJ[p@uC`@}ABKLg@BMBK@KBOBQBQBS@M@a@@U?QAw@Cq@Cq@e@yNI{AAo@AQEkAAUCm@ACCq@ASMoAAS[qDS{BOwAIaAMyACWIaAG{@Gq@CWKkAGc@Im@Ie@EQAE]_Bi@_Cc@sBc@qBESg@cCSeA"
                     },
                     "start_location" : {
                        "lat" : 43.6323263,
                        "lng" : -79.43485269999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 221
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 43.634131,
                        "lng" : -79.4118709
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNewfoundland Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i}hiGv}tcNCMCMWNMVGBEBQHSJw@\\mAf@cBr@SH"
                     },
                     "start_location" : {
                        "lat" : 43.6323708,
                        "lng" : -79.4110001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 181
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 43.6347149,
                        "lng" : -79.40977119999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePrinces' Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ihiiGdcucNUqAAEG]Mq@Kg@y@sE"
                     },
                     "start_location" : {
                        "lat" : 43.634131,
                        "lng" : -79.4118709
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 150
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 43.6359947,
                        "lng" : -79.4101831
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCanada Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}kiiG`vtcNYHUJaA`@w@\\ODSDE?G?KACAEAECCACC"
                     },
                     "start_location" : {
                        "lat" : 43.6347149,
                        "lng" : -79.40977119999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "83 m",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.636302,
                        "lng" : -79.41111459999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eManitoba Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}siiGrxtcNITGPGRCLOt@GZG\\"
                     },
                     "start_location" : {
                        "lat" : 43.6359947,
                        "lng" : -79.4101831
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "90 m",
                        "value" : 90
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.6359496,
                        "lng" : -79.4120705
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{uiiGl~tcNTL@@@B?@TrATtA"
                     },
                     "start_location" : {
                        "lat" : 43.636302,
                        "lng" : -79.41111459999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "umqjGdemdNkHbAsDd@EH~@G`BU|@Gd@|HPCl@I`BS~AS~Di@xAQT?VJXZPb@`@nBtAvMfBjMRbCBjA?vHDdAThA`@n@ZTZLv@FrZsAz@Ol@Yn@m@d@u@bAwBt@mBHKVWRKjA_@dAYLjBr@rK\\~ECVFfA@x@Gf@KZW`@YN_@D[EGC[c@S}@B}@Rm@^_@b@S~@QxDa@f@IJUj@C`DOpFUzCOpMk@h[uA|CQzGk@bIeAjk@oIrfA_PnXaEfYyDxK}AjAQ\\EX@v@Ef@I~B]dJyAjHmAbUqDz[yEjg@qHt`@_Gl`@_Ghc@oGpi@aIvn@iJjr@cKjFaAdC_@|B_@hBc@bDoAvIeFlG{DRCVObBs@h@Gh@D`@Hn@\\\\\\f@`AXbARfAZzCP`@h@zKj@jGZjCxBrOx@zGXrBHZvBjOvEf[lB~Mn@`Ht@~Ix@dGf@bCbBfHxAzGzAdJb@rCdArEz@jCrA~CjB|C`AnAhCnCnIzGb@C|@v@dA|@jCzBxE`E~BpB`@\\N^lB|ApC`CvHpGfK|InTbRlCvBxCtBjC`B|EjChJtEzLhGlMlG|DhBbCdA\\b@zDpBrC|A|NpItFdDtBdAnA`@pAVdBNn@@rBSj@KXE`Be@lAk@jAu@dA_A`AgA~CoElD_F|AgBfAeAfA_AzAiAPApAw@zDcB|HgCl`@yLlEyAvI}CxMkFfUgJ`JkDzM}ExHmCjQ{FdNcE|KwCrV_G`U}FbOgElQuFpNyExY}JzBo@h@QHKjFwA|Bk@rD}@lAg@j@]t@s@X_@f@y@\\u@d@cBToAF}@DiBGqCM}Ac@aDmAoH_AcGq@{Fs@iI?AOSKwA_@cEc@aEaAaJaBuN_Fib@wRgdBgIur@yDqYiWucB}@aFo@eCk@gBaAyB{@wA}BeD_JaMoBoCwBmDo@oAqBkEkBmEgCkFaEyHwA{Cs@kBiDgKmBiG}AeG}@eEm@iDk@{Dc@yDc@wEW_EWuGEeEF_JJoEViGXuE^uEhA}JlAoHbAgFj@}BjAcEzGwSbBmFz@eCx@iCh@aBPC?Ap@}Ap@oBTe@\\_@dAa@`@YXk@T_Ax@kEDMHKB[R{BXiF^aFLeA`@{CfAmFlDwNLy@JuACqCu@wTMaDUyCgBoS_@qEa@iCmByIeBoIG[WNMVMFe@T}FbCm@gDeA{Fo@TyB~@c@J]CSK]hAWpAG\\TLBDTtATtA"
         },
         "summary" : "ON-400 S",
         "warnings" : [],
         "waypoint_order" : []
      },
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.8422192,
               "lng" : -79.40977119999999
            },
            "southwest" : {
               "lat" : 43.6116802,
               "lng" : -79.57941630000001
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "43.6 km",
                  "value" : 43617
               },
               "duration" : {
                  "text" : "37 mins",
                  "value" : 2192
               },
               "duration_in_traffic" : {
                  "text" : "1 hour 27 mins",
                  "value" : 5211
               },
               "end_address" : "100 Princes' Blvd, Toronto, ON M6K 3C3, Canada",
               "end_location" : {
                  "lat" : 43.6359496,
                  "lng" : -79.4120705
               },
               "start_address" : "1 Canada's Wonderland Drive, Vaughan, ON L6A 1S6, Canada",
               "start_location" : {
                  "lat" : 43.8397931,
                  "lng" : -79.5350741
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 70
                     },
                     "end_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e",
                     "polyline" : {
                        "points" : "umqjGdemdNqDd@q@Jc@Jc@D_CZWBWBC@ABCD"
                     },
                     "start_location" : {
                        "lat" : 43.8397931,
                        "lng" : -79.5350741
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 43.8414084,
                        "lng" : -79.53549989999999
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "{|qjGxhmdN`@A\\EPCLA`@G^G"
                     },
                     "start_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 131
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 43.8412331,
                        "lng" : -79.53711869999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ywqjGzgmdNb@bI"
                     },
                     "start_location" : {
                        "lat" : 43.8414084,
                        "lng" : -79.53549989999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 451
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 43.83758659999999,
                        "lng" : -79.5374154
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uvqjG~qmdNNANC^GPCLA^G^E`@GFAVC^G\\E`@E^G^E`@GDATC`@GZEB?^G`@ELCH?H?J?JBJFNLHLHNFRHVDX@FNt@"
                     },
                     "start_location" : {
                        "lat" : 43.8412331,
                        "lng" : -79.53711869999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1605
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 138
                     },
                     "end_location" : {
                        "lat" : 43.8286586,
                        "lng" : -79.54305289999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCanada's Wonderland Drive\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}_qjGzsmdNP|Ab@tETpBHp@Hv@Lz@Jt@bA`HBTBXDf@Dj@@b@@f@?nA?fF?N?L@PBTBRDTDNDNFLFJFHHJLJLHJFNDLBN@J@L?L?NAzXoAXARCPCHCJCLEHEHEJGLKJKJIHKHMHMHMFKFODMj@gAHQ\\cAVi@DGBCDEDEDEDEBCNGTKt@SdAY"
                     },
                     "start_location" : {
                        "lat" : 43.83758659999999,
                        "lng" : -79.5374154
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 300
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 43.8281769,
                        "lng" : -79.54672909999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRutherford Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 73\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "chojG`wndNLjB^tFR|CNnB@FDr@Dr@"
                     },
                     "start_location" : {
                        "lat" : 43.8286586,
                        "lng" : -79.54305289999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.4 km",
                        "value" : 12376
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 437
                     },
                     "end_location" : {
                        "lat" : 43.7215822,
                        "lng" : -79.52268269999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eON-400 S\u003c/b\u003e via the ramp to \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ceojG`nodNCN?F@XDl@?D?F@R?V?DG`@ABIVKPKNYN_@DQ?IEA?ECGEGIEGEKGMEOAICU?OAC@SBUDSFODIDIHIJGBCJGJEJE`@I\\G~AQxAOZCFA@A@AJUj@C|BKb@CrBILAn@C~@ETAn@Eb@Ap@EVA`AEj@CbAElBKtAG|@ED?bAEPAdAEl@E`AEj@C~@EbAE^ChBIJAB?lBIvAG`AEj@Cl@El@CRAl@EvAKxAKRCtAObAKVEh@GHAZEVErASj@I~@MRCvAUtAS`AO|@Mh@I`AOtCc@~B]tCc@@?hFw@tEq@j@IBAnAQj@I~@O~@O~@MjBYjDi@j@I~B]`Em@tAS|@OvAStASh@INCn@KtAS`C]tAURCj@I~@OtCc@TCj@Kh@I`AMNCl@Kl@If@INCXEl@I~@ORCVE~@Oh@IfAO`@GjBYtASTE~B]TEh@Ij@Gh@I~@Mj@I|@MdC]f@Gj@IPClBWbC]RCHA^G`@GHAnBYpCc@D?pC_@d@Id@G\\EX@b@ARCPCTEt@KTE\\ETEVEXEz@MlASb@GXGlAS\\GREd@IxAUXGh@INCZGf@Ih@Kj@K|@Oj@Kj@Il@Kz@Oj@If@Il@Kh@If@I^G^G`AMVEZE^Gl@K`AOvAS~@OTCj@IdAQLAjBYl@KbBUl@KbAOpAQhBYTEj@ItASl@IJCRCr@KVEVE^Gt@K`@Gl@K|@M`AONC\\Ej@IRETEj@Ih@Ij@Ih@Ih@ITCj@Kj@Ih@Ih@ITCLC\\G~@Mj@ITE~@OTCRERCVERCVEj@If@ITCTEHA`@GRETC~@OTCREVE~@MTEh@I`AORC~@Ol@Ih@If@I@?`AOZELCXEx@Mj@Ij@IRCTEd@Gn@Kj@ITERCTETEh@Ij@IhAQv@MNCB?TEj@ITEh@I\\ELCh@Id@IXEf@Gj@IFA`@Gh@Ij@If@IxASTERCTETCTEh@I~@MTE~@M@Ah@Ij@Ih@Ih@Ij@I~@OTCj@KjAQHAj@IPCVERCRCVETERETCTETCn@KDAHATCBANCTETCTEh@ITCTERCTETCVERCVERERCTETCDANCTCTERE@?RCTERCTETCj@Ih@ITETETCRC@ARCTERCTEB?PCTETCREl@ITERCTERCVERCTETERCTETCTEVEPCTCVE~@OTCRERC@?REVCREHA`@GRCZGNCTCTEh@IRCVETE^Gt@K@?PCj@KHAJARCTETETCREHAPCnAQTETC^G^G`AORCJC^ETEREVCRED?PERCRCFAv@Mj@ILCr@KRCTE@?RCREVERCTETCDANCh@Ij@Ij@IRE\\Ej@IDANCJC`AMREj@IJAHA~@OTE^EJCj@ITERCTERCTCVE|@OXERCTETCRETCTERCTETCTETERCTETCTERCTETCTETCTETE~@Ml@K|Du@~@OdAOf@ItAU~@Sh@O|@[h@STId@Ud@U"
                     },
                     "start_location" : {
                        "lat" : 43.8281769,
                        "lng" : -79.54672909999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 358
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 43.7187039,
                        "lng" : -79.5206986
                     },
                     "html_instructions" : "Take the \u003cb\u003eOntario 401 E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOntario 401 W\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "{jziGvwjdNpHoEjCaB`CyA"
                     },
                     "start_location" : {
                        "lat" : 43.7215822,
                        "lng" : -79.52268269999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.4 km",
                        "value" : 6447
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 282
                     },
                     "end_location" : {
                        "lat" : 43.6825647,
                        "lng" : -79.57494969999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eOntario 401 O\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-401 W\u003c/b\u003e and merge onto \u003cb\u003eON-401 W\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "{xyiGjkjdNPC@?VOLIf@ULE^Md@GB?T?RDH@VF^PNJPPBB@@DDJNNXJR?BFPHT?BFVFT@BD\\BNBLFb@Df@H`A@@N^XxGN`CJxALbADb@JhAFf@Jt@BTBV|@pGVhB@D`@pCFl@Jl@JlAXpBDVRzADNBJ\\bCZxBt@hFFb@Jp@F`@`@dCZtBr@bFl@zD^dCBPZtBRpAPlAHj@Fb@Fb@Jx@DZHz@DZJbA@HDb@B\\BZB\\DZFz@BZB^JrAFt@Dd@DZD\\D\\DZD\\DZF\\Jv@F\\H`@DTFTNt@Jb@l@hCXjANl@DPBLLh@Nj@BNR|@Ln@Jf@Lr@Ln@Lt@Lt@BPJr@Lx@DTF`@Jt@FZF^Nt@FZ@Dj@zBDRNb@Vt@L\\Rj@Xn@Xn@JRNX\\j@\\l@^h@JNRVJLTXLNPPLNTVNNPPPPPPPNNJTTd@^VRJHd@^BB`@ZJHXTPNPNr@h@@@@?b@C|@v@l@f@VT^Zb@^b@^b@^f@b@JHb@`@JHZVb@^RP`@\\b@^`@\\TRb@^^\\@??@N\\f@`@XTFDb@^RPRPb@^dA|@b@\\d@`@b@\\d@`@BBv@p@NLvAlAHFz@t@BBzApAb@^PNlAbA|AtApAdAbA|@hA`A~DjD`Ax@p@l@v@p@bBvA`Ax@XRJHd@^v@j@f@\\d@\\RL\\Tl@`@TNh@Xx@f@z@d@h@V|@d@~@d@tBbAZPXLNHJFz@b@d@Th@Xz@d@h@VbBz@fAh@p@\\PHz@b@B@b@T|@b@z@`@vBfAxBdAf@VPHz@`@TJp@Zx@^^NbBt@"
                     },
                     "start_location" : {
                        "lat" : 43.7187039,
                        "lng" : -79.5206986
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1778
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 66
                     },
                     "end_location" : {
                        "lat" : 43.6685205,
                        "lng" : -79.57414279999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e352\u003c/b\u003e for \u003cb\u003eON-427 S\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "_wriGl~tdNZ`@@@lAl@z@b@NH`@TPH`@Tb@Vz@d@r@`@x@b@tAz@nAr@xCdBTL\\RZRRJb@VRLPJ@?d@Z\\RpAv@LHj@ZRHf@TPFTHPDTHRDRDTDRD`@DbAHn@@rBSTETEPCFALCTGZI`@ORKRIPIRKPMRKPMRMNOPMPOPQNOPQNSNQNQ^i@NUNSNSDIT[b@o@d@m@Ze@V_@DENUPWJM^i@\\a@Z_@PQPSPQPQPQPOPQPOPOPMPOTQPM`@YPA"
                     },
                     "start_location" : {
                        "lat" : 43.6825647,
                        "lng" : -79.57494969999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.5 km",
                        "value" : 3477
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 123
                     },
                     "end_location" : {
                        "lat" : 43.63881629999999,
                        "lng" : -79.56071899999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-427 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "g_piGjytdN`@Yn@]|Au@HEj@Uf@QTIVKNEBAv@Wl@S`@MrBo@v@WhM{Dn@SlC{@nBm@jA]~@[pBm@^MRGTIRGRITGRIp@UrBs@r@WxAg@BARITIRIRITIRIx@[~@]TKZMJETIz@_@RIRINGDA\\Ot@[RI|Ao@HCRI`Aa@b@Q@Ax@]fBs@HCfAc@pAk@f@Sd@QXKd@SNGDCRIDANGRIVK\\MXMj@URGTKRIRGPGh@URGRKRGRIRId@QTINGTIRGd@QRITIjAc@~@[NGh@Q^OBARGRIPGRGRIRGRI@?d@Od@QTIPG@?RIbBi@d@Q@?hAa@r@UJCt@WXKh@QFALERGh@Q@ArAa@PGHCJETGRGj@SlA]XKLEXITGj@QRGRGTGrAa@TGTGRGTGBALEl@Qh@MRG@ARE`@KFC~@UHC"
                     },
                     "start_location" : {
                        "lat" : 43.6685205,
                        "lng" : -79.57414279999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2300
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 81
                     },
                     "end_location" : {
                        "lat" : 43.6189201,
                        "lng" : -79.55326479999999
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eSherway Gardens Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eThe Queensway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eEvans Avenue\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBrowns Line\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "sejiGnerdNd@DLCREHCRE^IFATEREhB[VGf@Kh@KTEVETGTEB?p@MZG^If@I@AJALCLCZGPCj@Ib@E^ETC^E`@EPAPC^C@?b@EB?j@GTCPCXEPCXGPEXGRGDANEVIRG@APGRIBAXKHEl@YJCZOBARKj@Ud@SVMh@Uh@Ux@]l@WFABA@@H@dAc@NENGNEZK^MJE\\IXILELEd@OTITIVGpAa@j@QjA_@XIDCTGdA]ZK@?HCLEZKNEREx@YFCbA_@lAa@dBm@VI`A]r@WdA]fA_@BAbA_@`@MfBm@@?PILERGJEpAc@^Ml@SDA~@YXIVGDCDAHC\\IPEPEBAnAW"
                     },
                     "start_location" : {
                        "lat" : 43.63881629999999,
                        "lng" : -79.56071899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.0 km",
                        "value" : 11017
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 464
                     },
                     "end_location" : {
                        "lat" : 43.6339775,
                        "lng" : -79.4372448
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e, follow signs for \u003cb\u003eGardiner Expwy\u003c/b\u003e and merge onto \u003cb\u003eGardiner Expy E\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "gifiGzvpdNHIFCHCf@KB?`@KRERGXI@?NGRIJEFCRMFEFEJIFIFELQZg@BE@?Ve@HOf@eABKP_@Rg@Re@P_@HOHKJSZg@RWV[V]NMXUHEHGb@[b@WXORKLEf@OH@ZGZCVALA`@AB?@?P?^A|@Bl@Bl@Bb@BNFPDRFRDH@JDHBHBJDFB@@B@B@BBHFDDFFHLHPDLBP@J@L?JAPAHAJAFEHAHEFCDIJEFIFGBIBGBC?K@IAIAGCCAICGEIIKOOUKSISWi@O]KUk@uAs@mBSi@GSk@gBQs@Ke@EOEQKm@AA?AMKGe@E[E]C]E[?ECUC]Iy@AUMqBOoBUmDWaE[oEYmEKwAUcCI_AYqCIo@Gu@Q}AQ{AUqBCW[iC}@yHCYE]s@aGOsAo@uFMgAMeA[kCm@eFaAwIg@gEq@cGuIuu@Ky@Iy@mAmKa@kDg@iEk@cF}@{Ha@kDOuAQuAIy@Kw@Ky@Ky@Iw@Kw@Iq@Ky@Kw@Ky@Ky@Kw@Ky@E[E[_@kCQuAE[WqBG[E[E]Kw@Mw@E[E[G]Ig@Ik@Mw@QoAi@mDO{@e@cDa@iCMw@SsAYmBg@gD[qB{@wFE[Mu@cB}KKo@Ks@Im@SmAu@_FOcAQeAU{AqAsIE[G]E[E[G[E[G[G]E[G[G[G[I[GYG[I[Us@IYK[IWKYKWMWWm@O[MUOUMUOUMUOUOSOSOUOSOSOSOSOUOS]e@AC_@g@OSc@m@a@k@Y_@OS_@i@OSOSOS_@i@OSOSOSMSA?OUOSOU{@uA]k@MUOUEKMUMUMWKQACMWKUKUMYKUc@aAWm@Sg@A?KWKWKWKWMWKWMYYm@OWYo@MUMUMWMWMUMUMWKQa@y@w@wAc@y@i@eAm@uAq@eBAE_@gAoAyDo@iBI[c@sA[cAUy@Ww@[kACI_@wA]wAOo@Kc@Ki@UgAOw@Ig@EQMw@Ks@Gc@Kq@Kq@Iw@Ku@Ee@Ge@KeAKcAGu@CWEk@Gq@Ci@Ew@CSCo@Cs@Ci@A_@A]AYA[Ak@Am@?GAo@?Q?a@?o@?[?Y@_A?[@m@?o@B_A?k@DsABcA@KFcBDaABs@Do@Bs@Fu@FgADc@Bg@Fk@HcAH}@Dc@De@P{AB]Fe@Js@D_@L_AF_@XmBDW@ERkA@E@IJg@Fc@Lk@TgAJe@DS@EBK?C@CDQFUDSBIDOH[@GBG@GFWHYTu@Po@@CHWTu@r@uB~@uCz@oCr@wBFQFQPi@Ne@L_@Ro@Ne@HUHWDOFSHSPi@Nc@Nc@La@j@gBh@aB"
                     },
                     "start_location" : {
                        "lat" : 43.6189201,
                        "lng" : -79.55326479999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 278
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.6323263,
                        "lng" : -79.43485269999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e149\u003c/b\u003e toward \u003cb\u003eLake Shore Blvd W\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "kgiiGvazcNPC?ABEP_@DKTk@?AHUDM`@iABKDGBIFGDGFGFGFGHCVKXKHEFCFEFEHIBEDGHQDKBKHWF[F["
                     },
                     "start_location" : {
                        "lat" : 43.6339775,
                        "lng" : -79.4372448
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2008
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 43.6323708,
                        "lng" : -79.4110001
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e and merge onto \u003cb\u003eLake Shore Blvd W\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "a}hiGxrycNPaAVsAFY@GBEHKB[NeBBUVqE@WLiBPwBDWFm@Hk@Dc@BML}@BQF[BO@GH]BKRaAR{@VgA^}AJ[p@uC`@}ABKLg@BMBK@KBOBQBQBS@M@a@@U?QAw@Cq@Cq@e@yNI{AAo@AQEkAAUCm@ACCq@ASMoAAS[qDS{BOwAIaAMyACWIaAG{@Gq@CWKkAGc@Im@Ie@EQAE]_Bi@_Cc@sBc@qBESg@cCSeA"
                     },
                     "start_location" : {
                        "lat" : 43.6323263,
                        "lng" : -79.43485269999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 221
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 43.634131,
                        "lng" : -79.4118709
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNewfoundland Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i}hiGv}tcNCMCMWNMVGBEBQHSJw@\\mAf@cBr@SH"
                     },
                     "start_location" : {
                        "lat" : 43.6323708,
                        "lng" : -79.4110001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 181
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 43.6347149,
                        "lng" : -79.40977119999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePrinces' Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ihiiGdcucNUqAAEG]Mq@Kg@y@sE"
                     },
                     "start_location" : {
                        "lat" : 43.634131,
                        "lng" : -79.4118709
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 150
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 43.6359947,
                        "lng" : -79.4101831
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCanada Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}kiiG`vtcNYHUJaA`@w@\\ODSDE?G?KACAEAECCACC"
                     },
                     "start_location" : {
                        "lat" : 43.6347149,
                        "lng" : -79.40977119999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "83 m",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.636302,
                        "lng" : -79.41111459999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eManitoba Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}siiGrxtcNITGPGRCLOt@GZG\\"
                     },
                     "start_location" : {
                        "lat" : 43.6359947,
                        "lng" : -79.4101831
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "90 m",
                        "value" : 90
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.6359496,
                        "lng" : -79.4120705
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{uiiGl~tcNTL@@@B?@TrATtA"
                     },
                     "start_location" : {
                        "lat" : 43.636302,
                        "lng" : -79.41111459999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "umqjGdemdNkHbAsDd@EH~@G`BUb@bINAn@K~AS`Ei@~Di@bAIVBZTd@hAF`@Nt@P|Ax@fIRhB`BhLPpC@nJHhAXbAf@l@XP\\Hv@BxZwAt@Ql@_@j@o@b@w@p@uAf@uAf@{@TUd@SzBm@pAnRFz@Dr@CN@`@Dr@@x@Id@Uh@e@^q@DYO[k@GYCe@?WHi@Rc@d@]x@UrFm@HCLW`I]pH]|No@rZuAfEWfGk@~HgAzk@sIrdAqOjYeEj[kEnImAbAM|@?pBY`BW`JyA`IsAtTkDh^mFnd@{Gna@eGfdAkO|yAoTlr@eK|FeAlBYtCi@fBk@jCiA|LqH`CyAPC@?d@Yt@[dAUv@Fv@X`@\\VZb@bAXfAN~@XnCN^XxGZzEf@xEpAtJbAnHv@dGz@zFdBxLfFj]v@nFb@tDj@`Gt@`J|@hGfCzK`B|HtArIj@fDz@pDhAbDnAlCfBrCbAnAlCnCzD~ChA~@t@j@d@CbDpCrCbCtE|DzBnB@@N\\f@`@`@Zv@p@`DlC|GzFnMzK~SvQbGhEfDrBbFhCrIhEtKpFdOlH`DvAbBt@Z`@nAn@~BlAtDtB|MzHnFbDxBbApA^~AVrBJhCY|@OfBm@jAm@hAw@dA_A`AiAtDkFdDsExC}CpCwBPA`@YlCsArBw@~IuCt_@oL`H_CxFsB`PqGnR{HnJsDfNaF|JgDpNuEpNgEhDaA|Bk@HCd@D~@SpAWvGoA|Ds@nEm@nD[lBUvAY|Bu@tCoAdHyCV?tBw@`EoAlH}B|DmAfL{DzRyGvDeATGnAWHIPGj@KbBc@p@Wj@]h@k@x@sAfAaCbA}BdA_Bn@y@h@c@zAaAl@[t@UxAKt@Cp@AjBFpAF`@L|@Tt@Z`@b@N^D\\At@Kf@Y`@c@Rc@A]OUY[i@q@{A_CcGs@{B]yAYqAMMMaAO}AScCkAqQwAyRsB{ReFoc@s[kqCsDmZoB}NuAiJwMe|@yGcc@a@mBq@eCm@eBcAwB{BkD_CcDoIiLkBuCaAcB}A}CcCwFcCoFmBqDgDqG_B{Da@mAmDsKeBaGqAiF}@mEi@eDi@_EcAeKUgDMmDIuD?eHDiERgGl@cL`@qEb@eE|AkKlAiG~AkGdKu[`BcFtAiEPCBGl@yAt@yBVa@`@[bAa@\\[Te@\\{Ar@wDLQRaCj@iJh@iFZaCVqAbAqE~BmJf@mCHyAImDaAkXUiDiAgMcAiL[kBoCeMeAkFCMWNUZcBv@qDzASHUqAIc@YyAy@sEYHwAl@gAb@YD]EIECCITOd@SbAOx@VNl@nD"
         },
         "summary" : "ON-400 S and Gardiner Expy E",
         "warnings" : [],
         "waypoint_order" : []
      },
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.8422192,
               "lng" : -79.40977119999999
            },
            "southwest" : {
               "lat" : 43.6134531,
               "lng" : -79.64798589999999
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "48.4 km",
                  "value" : 48378
               },
               "duration" : {
                  "text" : "44 mins",
                  "value" : 2659
               },
               "duration_in_traffic" : {
                  "text" : "1 hour 35 mins",
                  "value" : 5677
               },
               "end_address" : "100 Princes' Blvd, Toronto, ON M6K 3C3, Canada",
               "end_location" : {
                  "lat" : 43.6359496,
                  "lng" : -79.4120705
               },
               "start_address" : "1 Canada's Wonderland Drive, Vaughan, ON L6A 1S6, Canada",
               "start_location" : {
                  "lat" : 43.8397931,
                  "lng" : -79.5350741
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 70
                     },
                     "end_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e",
                     "polyline" : {
                        "points" : "umqjGdemdNqDd@q@Jc@Jc@D_CZWBWBC@ABCD"
                     },
                     "start_location" : {
                        "lat" : 43.8397931,
                        "lng" : -79.5350741
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 126
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 43.8410999,
                        "lng" : -79.5354636
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "{|qjGxhmdN`@A\\EPCLA`@G^G@?\\CRAHA"
                     },
                     "start_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 129
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 43.8409134,
                        "lng" : -79.5370538
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{uqjGrgmdNd@|H"
                     },
                     "start_location" : {
                        "lat" : 43.8410999,
                        "lng" : -79.5354636
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 415
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 70
                     },
                     "end_location" : {
                        "lat" : 43.83758659999999,
                        "lng" : -79.5374154
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "utqjGpqmdNPCLA^G^E`@GFAVC^G\\E`@E^G^E`@GDATC`@GZEB?^G`@ELCH?H?J?JBJFNLHLHNFRHVDX@FNt@"
                     },
                     "start_location" : {
                        "lat" : 43.8409134,
                        "lng" : -79.5370538
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1605
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 138
                     },
                     "end_location" : {
                        "lat" : 43.8286586,
                        "lng" : -79.54305289999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCanada's Wonderland Drive\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}_qjGzsmdNP|Ab@tETpBHp@Hv@Lz@Jt@bA`HBTBXDf@Dj@@b@@f@?nA?fF?N?L@PBTBRDTDNDNFLFJFHHJLJLHJFNDLBN@J@L?L?NAzXoAXARCPCHCJCLEHEHEJGLKJKJIHKHMHMHMFKFODMj@gAHQ\\cAVi@DGBCDEDEDEDEBCNGTKt@SdAY"
                     },
                     "start_location" : {
                        "lat" : 43.83758659999999,
                        "lng" : -79.5374154
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8.7 km",
                        "value" : 8733
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 697
                     },
                     "end_location" : {
                        "lat" : 43.8063307,
                        "lng" : -79.64656459999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRutherford Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 73\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "chojG`wndNLjB^tFR|CNnB@FDr@Dr@NhAPfA?Bf@hCz@jEv@vDD^VxBTpB\\vCDX\\~CDT@F\\tDNxCDd@@b@F|@HbB@b@NlA@DLZJdCDh@Bj@Dn@F~@@B?DDp@D\\@HNvABRXdC@L?r@?Fn@hFb@~D`C~R`@~CDX@L\\fDBZx@vGbDbXLhA^xCRbBh@lEr@pGZnC\\pCl@nFLbAF\\Pf@L`ARlAb@dCRnABLJn@?@H^@LFb@Jt@JlA@JDr@J|A?BBX@TDj@?DFl@?@BVLx@Jl@Lr@^~A@BZxANl@H`@DTDPDXDRJn@Hj@@@\\nCZxBT|AZxBVlBZjCPrA@V?Fj@nE`@bD^rCHj@Jt@Hh@TzANbARtAP|A@F@LPfABTZdCv@lFFd@Lr@PpADNDHLRFb@F`@Fb@N|@XnBC`@?DVfBv@lFJr@l@`Ez@pGRzARrAdAxHbA|GL`@`@pCBNZ|BTdBJn@Hn@XlB\\`CPpAl@nEt@zEN`A@LZ|BPfAJp@R|ADXHbADr@DhAAtAEd@CXCT[rDALKpAANC\\Ax@?J?V@j@Dr@Fd@Ff@Jh@HXVv@Tp@Tp@Ph@`@rAPp@Nd@?@L`@`AxDrAhFXdAFP@DDP@@FR?@DNL\\FN@@FPDHJPRXJNRXFJBXBBJR\\t@DJTn@FNFVDRBPJp@^lCL~@D^Jn@Hj@?BJl@\\~BZtBR|ADXHn@Jl@Hn@rAjJHn@@JFb@Jn@Hl@Hl@XnB@F\\`C@JPrADRBTBPb@dDDVR|AJt@p@dFR`BHl@Hn@Hn@@@\\lCHl@"
                     },
                     "start_location" : {
                        "lat" : 43.8286586,
                        "lng" : -79.54305289999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "17.4 km",
                        "value" : 17397
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 633
                     },
                     "end_location" : {
                        "lat" : 43.6709659,
                        "lng" : -79.5779282
                     },
                     "html_instructions" : "Take the ramp onto \u003cb\u003eON-427\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "q|jjG~}beNCZ@h@Dv@?d@CTETITKRKLMHSDWDCAU?YKQQCAISGO?AAMC[@i@B[B]@CBSJUFQBK@QZ]Z_@h@m@X_@JMFGFIV]Z_@Z_@Z_@X_@DEr@w@Z]Z_@Z]Z_@lBuBpAqAJKjAeAnA_AxAiAn@]^S`B}@`@STMhFiCvEyAFCz@WtBk@bD]`D]zBUfD[BAhGi@zAOLCrCYvASfAOdAOB?pEo@`@G|@KHC`AMf@Ib@GLARCJADARCPA\\EfAMxBWv@KjBS`@GfAKPCr@Ib@GjBSHAVEb@Eb@GXCbAMVCJAJAn@I^Ez@Kj@Gb@GRC^E`@ETCnBUnEg@v@INClCYh@GZEtEi@VCJAb@Gb@ENCRAdAMHA|@KB?`AMj@GB?VENAb@ETCLA\\CtBSnJq@hBMhBM`B]nAULCzAUdBYlEm@lBSrAO`CQ|AKl@Cd@CXCT?j@CTARA`CDT?L@pDMRA`AEnBGh@CzEO~IaAvGw@@A@AJIv@Q~AQHA@?JGTCrAOR@vJuAVChAO~ASNC|BYF?f@IdAKjDa@t@Kv@IdDc@vAOfBULCb@G`@Eh@Ij@G`@GPCDAp@Ip@I~Ca@@?NDlFq@JAr@Ir@Kt@KvAUhBUfAOdAMnC]hBUbBSbH}@ZE|BY^E`@GdCY`Eg@h@It@In@IZEZERCdAOTCx@KfAMnBWfBUjBUzAQ|B[xBWdBWlAQvB_@lB_@`Be@bAYrA_@|@[ZKn@Yp@Yb@SXOd@Sl@[p@[^Q`DyA~Aw@|As@h@WhAg@XMjCqApE{B^QrAo@PKTK~@c@NGt@_@jAi@|BgAzCwAXMtAm@fB{@`Ac@~BgA~FmCv@_@v@a@NIfB}@f@WnCwAzAu@~DoBhB{@|BiA`@SBA~C}Ab@QhJkEHQDGHGXOn@Yh@Wd@YtEcC|A{@z@g@fBaArAu@`LiGxBiAfAm@fAm@`Ak@|CcBxBkAjCyAVMbAk@XOLGzAy@b@W`@Ud@Yb@YvBkAjAo@^SHEb@W~@e@TM`@Sz@c@RIb@Uj@YXO\\Mb@Sh@Wj@WPIdAg@~@_@lAg@dAa@~@a@TKLGn@Yj@WFC`@Q|Am@fBs@@?dAc@r@YxAo@RKf@WlAm@VQXOLIj@]dAq@RO`BiAXSt@g@nA_AHGh@g@HKLO^c@JMHMJMFKDKR[f@cAz@kBHOZy@JQ\\_AJ]b@kAHQVq@LYXu@JQJWPc@L[FKJW~AmC^i@RWJMDEt@u@RSZWp@i@PMRMRKJGNIVMf@SvAc@^Gh@M~@O^EVE^GDA`@Et@IPCRCTAZENAvAMZE|@Id@EXCNA`@ETCb@Ev@IRCr@Id@EVEPCRCVGTETGNEbA[bAa@VMTSXSRMJGNKLGNKVSr@g@PQPMPQHGFGPQb@e@^a@LMV]NSDGJKFKT]JO@ANWT]HQHOLUFMDGL[LWPe@DMJYHYJ[FYFYJi@He@D]Fe@BWB_@@G@W@YB]@k@?]?[?YA]A[A_@Ce@Ce@CUE[E]EYG_@Io@Ko@_@{BCOa@cCEUKk@?A@UG[Ik@Ky@CMAMCOC[E[AOAMAOC[C]C]A]A]A]?]?]@]?]@UBg@@YB[Hu@?G"
                     },
                     "start_location" : {
                        "lat" : 43.8063307,
                        "lng" : -79.64656459999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 419
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 43.6685205,
                        "lng" : -79.57414279999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-427 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qnpiG`qudND[F[Fa@FW@ILi@H]Nc@DOJWL]JWLUJWNULU\\g@`@i@^e@PQNQt@s@PQPOPOROPMPMNWFO"
                     },
                     "start_location" : {
                        "lat" : 43.6709659,
                        "lng" : -79.5779282
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.9 km",
                        "value" : 5892
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 206
                     },
                     "end_location" : {
                        "lat" : 43.617943,
                        "lng" : -79.55246439999999
                     },
                     "html_instructions" : "\u003cb\u003eON-427 S\u003c/b\u003e turns slightly \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eON-427 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "g_piGjytdN`@Yn@]|Au@HEj@Uf@QTIVKNEBAv@Wl@S`@MrBo@v@WhM{Dn@SlC{@nBm@jA]~@[pBm@^MRGTIRGRITGRIp@UrBs@r@WxAg@BARITIRIRITIRIx@[~@]TKZMJETIz@_@RIRINGDA\\Ot@[RI|Ao@HCRI`Aa@b@Q@Ax@]fBs@HCfAc@pAk@f@Sd@QXKd@SNGDCRIDANGRIVK\\MXMj@URGTKRIRGPGh@URGRKRGRIRId@QTINGTIRGd@QRITIjAc@~@[NGh@Q^OBARGRIPGRGRIRGRI@?d@Od@QTIPG@?RIbBi@d@Q@?hAa@r@UJCt@WXKh@QFALERGh@Q@ArAa@PGHCJETGRGj@SlA]XKLEXITGj@QRGRGTGrAa@TGTGRGTGBALEl@Qh@MRG@ARE`@KFC~@UHC^Kt@QHATGRGVGh@MjDw@f@Mj@MRGhBc@h@M`AUh@ONEn@Oh@MjBc@rA]rA]tA_@rA]TGfAYdD}@nBi@h@ORGHC`@KhDcArAa@j@OhA]lEsAz@Y~@Yh@QpAc@RGh@QTIRGfBk@RIzBu@|@[RI|Bu@p@Up@W~@[xDsAp@UlC_A^M~@[h@Qh@SPGh@QHC^MVIHCPE^M^Kh@Oh@Q"
                     },
                     "start_location" : {
                        "lat" : 43.6685205,
                        "lng" : -79.57414279999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1317
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 43.6150447,
                        "lng" : -79.5405066
                     },
                     "html_instructions" : "Take the \u003cb\u003eGardiner Expressway\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "ccfiGzqpdNHK|@WVGhA[jA[\\If@MVG^KLEREd@MRERETGNC\\KRGx@_@\\QLKZYXYJMLQJMHONW@CDIDGFQHQHUDOFSLi@DQDUBSDS@SBW@QBU?O@Y?i@?k@A]AYCm@Em@CWAIAMCWEWMaAKo@Km@Kk@QiAc@kCc@mC[uBYyBWaCEYEa@QqBU{C?AOS"
                     },
                     "start_location" : {
                        "lat" : 43.617943,
                        "lng" : -79.55246439999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.1 km",
                        "value" : 9059
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 368
                     },
                     "end_location" : {
                        "lat" : 43.6339775,
                        "lng" : -79.4372448
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eGardiner Expy E\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "_qeiGdgndNKwAUcCI_AYqCIo@Gu@Q}AQ{AUqBCW[iC}@yHCYE]s@aGOsAo@uFMgAMeA[kCm@eFaAwIg@gEq@cGuIuu@Ky@Iy@mAmKa@kDg@iEk@cF}@{Ha@kDOuAQuAIy@Kw@Ky@Ky@Iw@Kw@Iq@Ky@Kw@Ky@Ky@Kw@Ky@E[E[_@kCQuAE[WqBG[E[E]Kw@Mw@E[E[G]Ig@Ik@Mw@QoAi@mDO{@e@cDa@iCMw@SsAYmBg@gD[qB{@wFE[Mu@cB}KKo@Ks@Im@SmAu@_FOcAQeAU{AqAsIE[G]E[E[G[E[G[G]E[G[G[G[I[GYG[I[Us@IYK[IWKYKWMWWm@O[MUOUMUOUMUOUOSOSOUOSOSOSOSOUOS]e@AC_@g@OSc@m@a@k@Y_@OS_@i@OSOSOS_@i@OSOSOSMSA?OUOSOU{@uA]k@MUOUEKMUMUMWKQACMWKUKUMYKUc@aAWm@Sg@A?KWKWKWKWMWKWMYYm@OWYo@MUMUMWMWMUMUMWKQa@y@w@wAc@y@i@eAm@uAq@eBAE_@gAoAyDo@iBI[c@sA[cAUy@Ww@[kACI_@wA]wAOo@Kc@Ki@UgAOw@Ig@EQMw@Ks@Gc@Kq@Kq@Iw@Ku@Ee@Ge@KeAKcAGu@CWEk@Gq@Ci@Ew@CSCo@Cs@Ci@A_@A]AYA[Ak@Am@?GAo@?Q?a@?o@?[?Y@_A?[@m@?o@B_A?k@DsABcA@KFcBDaABs@Do@Bs@Fu@FgADc@Bg@Fk@HcAH}@Dc@De@P{AB]Fe@Js@D_@L_AF_@XmBDW@ERkA@E@IJg@Fc@Lk@TgAJe@DS@EBK?C@CDQFUDSBIDOH[@GBG@GFWHYTu@Po@@CHWTu@r@uB~@uCz@oCr@wBFQFQPi@Ne@L_@Ro@Ne@HUHWDOFSHSPi@Nc@Nc@La@j@gBh@aB"
                     },
                     "start_location" : {
                        "lat" : 43.6150447,
                        "lng" : -79.5405066
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 278
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.6323263,
                        "lng" : -79.43485269999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e149\u003c/b\u003e toward \u003cb\u003eLake Shore Blvd W\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "kgiiGvazcNPC?ABEP_@DKTk@?AHUDM`@iABKDGBIFGDGFGFGFGHCVKXKHEFCFEFEHIBEDGHQDKBKHWF[F["
                     },
                     "start_location" : {
                        "lat" : 43.6339775,
                        "lng" : -79.4372448
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2008
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 43.6323708,
                        "lng" : -79.4110001
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e and merge onto \u003cb\u003eLake Shore Blvd W\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "a}hiGxrycNPaAVsAFY@GBEHKB[NeBBUVqE@WLiBPwBDWFm@Hk@Dc@BML}@BQF[BO@GH]BKRaAR{@VgA^}AJ[p@uC`@}ABKLg@BMBK@KBOBQBQBS@M@a@@U?QAw@Cq@Cq@e@yNI{AAo@AQEkAAUCm@ACCq@ASMoAAS[qDS{BOwAIaAMyACWIaAG{@Gq@CWKkAGc@Im@Ie@EQAE]_Bi@_Cc@sBc@qBESg@cCSeA"
                     },
                     "start_location" : {
                        "lat" : 43.6323263,
                        "lng" : -79.43485269999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 221
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 43.634131,
                        "lng" : -79.4118709
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNewfoundland Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i}hiGv}tcNCMCMWNMVGBEBQHSJw@\\mAf@cBr@SH"
                     },
                     "start_location" : {
                        "lat" : 43.6323708,
                        "lng" : -79.4110001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 181
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 43.6347149,
                        "lng" : -79.40977119999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePrinces' Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ihiiGdcucNUqAAEG]Mq@Kg@y@sE"
                     },
                     "start_location" : {
                        "lat" : 43.634131,
                        "lng" : -79.4118709
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 150
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 43.6359947,
                        "lng" : -79.4101831
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCanada Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}kiiG`vtcNYHUJaA`@w@\\ODSDE?G?KACAEAECCACC"
                     },
                     "start_location" : {
                        "lat" : 43.6347149,
                        "lng" : -79.40977119999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "83 m",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.636302,
                        "lng" : -79.41111459999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eManitoba Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}siiGrxtcNITGPGRCLOt@GZG\\"
                     },
                     "start_location" : {
                        "lat" : 43.6359947,
                        "lng" : -79.4101831
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "90 m",
                        "value" : 90
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.6359496,
                        "lng" : -79.4120705
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{uiiGl~tcNTL@@@B?@TrATtA"
                     },
                     "start_location" : {
                        "lat" : 43.636302,
                        "lng" : -79.41111459999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "umqjGdemdN_NhBEH~@G`BU|@Gd@|HPCl@I`BS~AS~Di@xAQl@JXZPb@`@nBtAvMfBjMRbCBbKDdAThA`@n@v@b@v@FrZsAz@Ol@Yn@m@d@u@bCqFVW~Ak@dAYLjBr@rK\\~EhA~GrBbK\\xCvAbMt@lJXjFPpBN`@ZjGNzBZrCZrC?z@vFhe@h@jFxKr~@`BbN^hBv@rEb@nC^fCj@jIJlAfAzFnAbGzClTn@~FvBrPdBhMvClSR\\NdAV`BXnBC`@VlBbA`HpCbShCvQn@rD`AbHhElZlAtITpCB~CI~@m@hHGrBN|CRpA`@pA~A`FfFvRl@lBvA~BF\\h@hAj@bB~A`LfGdc@~Flc@r@lFBbDIj@Uh@YVk@JYAk@]Ug@?oBTkAJ]\\o@jB{BzCuDbJ{J`G{ErEcC~FwC~E}ApDcAdI{@pP}AtIaAnOuBdDa@fYcDpq@wH|D_@xTaBzGmArHgA`Ec@rHe@pBIxDDvJ]dGSvRyBfA_@vB[hBSjKsApEk@rTkCjKqAzBY`Da@ND`JiA~HgA`[yDfb@iFxL}AdEq@nEeApFaB~CwAnP{H|Q}IzQqIhPuHfFiC`VqLlP{HNYb@WtIoEtI{Epc@eVvUoM|GcD`MmFnJ}DtEmB`DcB~I_GlC{BbAoAl@aAhCyFbDoIv@iBrC{EzAaBrBcBbAk@~@a@vBk@`Di@|BYxGo@vFi@zEs@nDqAnA}@nDmC|CiDbBeC|AgDf@}Ad@cC^sE@_CI_Cw@oGkAeHIcAq@eFUaEFmFl@uEl@{Br@cBfAkBbBsBrDiDh@i@lCsArBw@~IuCvh@oPvOaGl`@{OjXyJr]aLhLeDfRqEtM_DdUcG|M{DxOaFbc@_ObEsArC{@fAc@xHqBxD_AvAq@h@e@~@gAbAwB`@_BPqAH_A@_CY{EqCgQsAkKm@oHOUa@{Eu@wHaD_Y{Gcl@mX}`CoE{]yTuyAoCyQ_A_F_BkFcAwB{@wA_CcDuDiFeIiLwByD}BgF_BwDiCkF}EgJaCiGmDsKeBaGqAiFgBsJoAgKs@eJSaGEuFF{If@aNz@{KjAyJlAsH|@gEjCsJrJcZ~@sCtAiEPCBGl@yAlA{C`@[bAa@\\[Te@pAsGLQRaCj@iJdAkJzAcHxC{LVyC}@eYc@}HmBwT{@eHuEqTCMWNUZcBv@qDzASHUqAIc@YyAy@sEYHwAl@aBh@]EIEMPc@hBOx@VNl@nD"
         },
         "summary" : "ON-427",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
