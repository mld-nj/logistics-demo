import Map from "react-bmapgl/Map";
import Arc from "react-bmapgl/Custom/Arc";
import React from "react";
class Example extends React.Component {
  render() {
    return (
      <Map
        center={new window.BMapGL.Point(118.78, 32.07)}
        zoom={10}
        enableScrollWheelZoom
        style={{ height: "100%", width: "100%" }}
        // mapStyleV2={{ styleJson: whitestyle }}
      >
        <Arc
          autoViewport
          showStartPoint
          showEndPoint
          enableAnimation
          data={[
            {
              from: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              to: {
                name: "白下区",
                point: {
                  lng: 118.78,
                  lat: 32.03,
                },
              },
            },
            {
              to: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              from: {
                name: "白下区",
                point: {
                  lng: 118.78,
                  lat: 32.03,
                },
              },
            },
            {
              from: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              to: {
                name: "玄武区",
                point: {
                  lng: 118.8,
                  lat: 32.05,
                },
              },
            },
            {
              to: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              from: {
                name: "玄武区",
                point: {
                  lng: 118.8,
                  lat: 32.05,
                },
              },
            },
            {
              from: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              to: {
                name: "建邺区",
                point: {
                  lng: 118.75,
                  lat: 32.03,
                },
              },
            },
            {
              to: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              from: {
                name: "建邺区",
                point: {
                  lng: 118.75,
                  lat: 32.03,
                },
              },
            },
            {
              from: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              to: {
                name: "下关区",
                point: {
                  lng: 118.73,
                  lat: 32.08,
                },
              },
            },
            {
              to: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              from: {
                name: "下关区",
                point: {
                  lng: 118.73,
                  lat: 32.08,
                },
              },
            },
            {
              from: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              to: {
                name: "栖霞区",
                point: {
                  lng: 118.88,
                  lat: 32.12,
                },
              },
            },
            {
              to: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              from: {
                name: "栖霞区",
                point: {
                  lng: 118.88,
                  lat: 32.12,
                },
              },
            },
            {
              from: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              to: {
                name: "江宁区",
                point: {
                  lng: 118.85,
                  lat: 31.95,
                },
              },
            },
            {
              to: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              from: {
                name: "江宁区",
                point: {
                  lng: 118.85,
                  lat: 31.95,
                },
              },
            },
            {
              from: {
                name: "玄武区",
                point: {
                  lng: 118.8,
                  lat: 32.05,
                },
              },

              to: {
                name: "白下区",
                point: {
                  lng: 118.78,
                  lat: 32.03,
                },
              },
            },
            {
              to: {
                name: "玄武区",
                point: {
                  lng: 118.8,
                  lat: 32.05,
                },
              },

              from: {
                name: "白下区",
                point: {
                  lng: 118.78,
                  lat: 32.03,
                },
              },
            },
            {
              to: {
                name: "秦淮区",
                point: {
                  lng: 118.8,
                  lat: 32.02,
                },
              },

              from: {
                name: "白下区",
                point: {
                  lng: 118.78,
                  lat: 32.03,
                },
              },
            },
            {
              from: {
                name: "秦淮区",
                point: {
                  lng: 118.8,
                  lat: 32.02,
                },
              },

              to: {
                name: "白下区",
                point: {
                  lng: 118.78,
                  lat: 32.03,
                },
              },
            },
            {
              from: {
                name: "秦淮区",
                point: {
                  lng: 118.8,
                  lat: 32.02,
                },
              },

              to: {
                name: "雨花台区",
                point: {
                  lng: 118.77,
                  lat: 32,
                },
              },
            },
            {
              to: {
                name: "秦淮区",
                point: {
                  lng: 118.8,
                  lat: 32.02,
                },
              },

              from: {
                name: "雨花台区",
                point: {
                  lng: 118.77,
                  lat: 32,
                },
              },
            },
            {
              from: {
                name: "建邺区",
                point: {
                  lng: 118.75,
                  lat: 32.03,
                },
              },

              to: {
                name: "雨花台区",
                point: {
                  lng: 118.77,
                  lat: 32,
                },
              },
            },
            {
              to: {
                name: "建邺区",
                point: {
                  lng: 118.75,
                  lat: 32.03,
                },
              },

              from: {
                name: "雨花台区",
                point: {
                  lng: 118.77,
                  lat: 32,
                },
              },
            },
            {
              from: {
                name: "下关区",
                point: {
                  lng: 118.73,
                  lat: 32.08,
                },
              },

              to: {
                name: "江宁区",
                point: {
                  lng: 118.85,
                  lat: 31.95,
                },
              },
            },
            {
              to: {
                name: "下关区",
                point: {
                  lng: 118.73,
                  lat: 32.08,
                },
              },

              from: {
                name: "江宁区",
                point: {
                  lng: 118.85,
                  lat: 31.95,
                },
              },
            },
            {
              from: {
                name: "栖霞区",
                point: {
                  lng: 118.88,
                  lat: 32.12,
                },
              },

              to: {
                name: "六合区",
                point: {
                  lng: 118.83,
                  lat: 32.35,
                },
              },
            },
            {
              to: {
                name: "栖霞区",
                point: {
                  lng: 118.88,
                  lat: 32.12,
                },
              },

              from: {
                name: "六合区",
                point: {
                  lng: 118.83,
                  lat: 32.35,
                },
              },
            },
            {
              from: {
                name: "鼓楼区",
                point: {
                  lng: 117.18,
                  lat: 34.28,
                },
              },

              to: {
                name: "六合区",
                point: {
                  lng: 118.83,
                  lat: 32.35,
                },
              },
            },
            {
              to: {
                name: "鼓楼区",
                point: {
                  lng: 117.18,
                  lat: 34.28,
                },
              },

              from: {
                name: "六合区",
                point: {
                  lng: 118.83,
                  lat: 32.35,
                },
              },
            },
            {
              from: {
                name: "鼓楼区",
                point: {
                  lng: 117.18,
                  lat: 34.28,
                },
              },

              to: {
                name: "浦口区",
                point: {
                  lng: 118.62,
                  lat: 32.05,
                },
              },
            },
            {
              to: {
                name: "鼓楼区",
                point: {
                  lng: 117.18,
                  lat: 34.28,
                },
              },

              from: {
                name: "浦口区",
                point: {
                  lng: 118.62,
                  lat: 32.05,
                },
              },
            },
            {
              to: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              from: {
                name: "浦口区",
                point: {
                  lng: 118.62,
                  lat: 32.05,
                },
              },
            },
            {
              from: {
                name: "南京市",
                point: {
                  lng: 118.78,
                  lat: 32.07,
                },
              },

              to: {
                name: "浦口区",
                point: {
                  lng: 118.62,
                  lat: 32.05,
                },
              },
            },
          ]}
        />
      </Map>
    );
  }
}

export default Example;
