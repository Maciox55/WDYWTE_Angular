import { Component, OnInit } from '@angular/core';
import {Result} from '../../models/Result';
import {MainServiceService} from '../../Services/main-service.service';
import { SearchDetails } from 'src/app/models/SearchDetails';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Geolocation } from 'src/app/models/geolocation';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
    public results: Result[];
    queryDetails: SearchDetails;
    ress: Result[];
    location: Geolocation;
    constructor(private mainService: MainServiceService) {
    }
    styles: any[] = [
    {
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            },
            {
                'color': '#f49f53'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'stylers': [
            {
                'color': '#f9ddc5'
            },
            {
                'lightness': -7
            }
        ]
    },
    {
        'featureType': 'road',
        'stylers': [
            {
                'color': '#813033'
            },
            {
                'lightness': 43
            }
        ]
    },
    {
        'featureType': 'poi.business',
        'stylers': [
            {
                'color': '#645c20'
            },
            {
                'lightness': 38
            }
        ]
    },
    {
        'featureType': 'water',
        'stylers': [
            {
                'color': '#1994bf'
            },
            {
                'saturation': -69
            },
            {
                'gamma': 0.99
            },
            {
                'lightness': 43
            }
        ]
    },
    {
        'featureType': 'road.local',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#f19f53'
            },
            {
                'weight': 1.3
            },
            {
                'visibility': 'on'
            },
            {
                'lightness': 16
            }
        ]
    },
    {
        'featureType': 'poi.business'
    },
    {
        'featureType': 'poi.park',
        'stylers': [
            {
                'color': '#645c20'
            },
            {
                'lightness': 39
            }
        ]
    },
    {
        'featureType': 'poi.school',
        'stylers': [
            {
                'color': '#a95521'
            },
            {
                'lightness': 35
            }
        ]
    },
    {},
    {
        'featureType': 'poi.medical',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#813033'
            },
            {
                'lightness': 38
            },
            {
                'visibility': 'off'
            }
        ]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
        'elementType': 'labels'
    },
    {
        'featureType': 'poi.sports_complex',
        'stylers': [
            {
                'color': '#9e5916'
            },
            {
                'lightness': 32
            }
        ]
    },
    {},
    {
        'featureType': 'poi.government',
        'stylers': [
            {
                'color': '#9e5916'
            },
            {
                'lightness': 46
            }
        ]
    },
    {
        'featureType': 'transit.station',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit.line',
        'stylers': [
            {
                'color': '#813033'
            },
            {
                'lightness': 22
            }
        ]
    },
    {
        'featureType': 'transit',
        'stylers': [
            {
                'lightness': 38
            }
        ]
    },
    {
        'featureType': 'road.local',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'color': '#f19f53'
            },
            {
                'lightness': -10
            }
        ]
    },
    {},
    {},
    {}
];
    ngOnInit() {
        this.location = new Geolocation();
        console.log(this.location);
        this.location.lat = 41.0;
        this.location.lon = -72.0;
        console.log(this.location);

    this.queryDetails = this.mainService.searchQuery;
   const obsrvr = this.mainService.getResults();
    obsrvr.subscribe((res: any) => {
        this.results = res.results;
        // this.results = res.results as Result[];
        this.location = res.geo;
    });
    console.log(this.queryDetails.zip + ' FROM RESULTS');
  }

}
