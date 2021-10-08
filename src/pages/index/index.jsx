import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import Example from "../../components/map";
const Index = () => {
  const [mapVis, setMapVis] = useState(false);
  const columns = [
    {
      title: "客户",
      dataIndex: "user",
      key: "user",
      align: "center",
    },
    {
      title: "经度",
      dataIndex: "lat",
      key: "lat",
      align: "center",
    },
    {
      title: "纬度",
      dataIndex: "lon",
      key: "lon",
      align: "center",
    },
    {
      title: "需求量",
      dataIndex: "needs",
      key: "needs",
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      user: "南京市",
      lat: 118.78,
      lon: 32.07,
      needs: 0.102,
    },
    {
      key: "2",
      user: "玄武区",
      lat: 118.8,
      lon: 32.05,
      needs: 0.113,
    },
    {
      key: "3",
      user: "秦淮区",
      lat: 118.8,
      lon: 32.05,
      needs: 0.113,
    },
    {
      key: "4",
      user: "徐州市鼓楼区",
      lat: 117.18,
      lon: 34.28,
      needs: 0.095,
    },
    {
      key: "5",
      user: "栖霞区",
      lat: 118.88,
      lon: 32.12,
      needs: 0.131,
    },
    {
      key: "6",
      user: "雨花台区",
      lat: 118.77,
      lon: 32,
      needs: 0.029,
    },

    {
      key: "7",
      user: "江宁区",
      lat: 118.85,
      lon: 31.95,
      needs: 0.306,
    },
    {
      key: "8",
      user: "六合区",
      lat: 118.83,
      lon: 32.35,
      needs: 0.532,
    },
    {
      key: "9",
      user: "下关区",
      lat: 118.73,
      lon: 32.08,
      needs: 0.617,
    },
    {
      key: "10",
      user: "建邺区",
      lat: 118.75,
      lon: 32.03,
      needs: 0.232,
    },
    {
      key: "11",
      user: "白下区",
      lat: 118.78,
      lon: 32.03,
      needs: 0.459,
    },
    {
      key: "2",
      user: "浦口区",
      lat: 118.62,
      lon: 32.05,
      needs: 0.121,
    },
  ];
  return (
    <div style={{ height: "100%" }}>
      {mapVis ? (
        <div style={{ height: "100%" }}>
          <Example></Example>
          <Button
            type="primary"
            onClick={() => {
              setMapVis(false);
            }}
          >
            关闭地图
          </Button>
        </div>
      ) : (
        <div>
          <Table columns={columns} dataSource={data}></Table>
          <Button
            type="primary"
            onClick={() => {
              setMapVis(true);
            }}
          >
            模型运算
          </Button>
        </div>
      )}
    </div>
  );
};
export default Index;
