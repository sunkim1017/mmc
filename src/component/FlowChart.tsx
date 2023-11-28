'use client'

import React from 'react';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  Position
} from 'react-flow-renderer';
import { SourceTwoBottom, TargetTwoTop } from './CostomNode';

const initialNodes: Node[] = [
  { id: 'mid1', position: { x: 100, y: 0 }, data: { label: '중1' }, style:{width: 260, backgroundColor: 'gray', color: 'white'}  },
  { id: 'mid2', position: { x:365, y: 0 }, data: { label: '중2' }, style:{width: 260, backgroundColor: 'gray', color: 'white'} },
  { id: 'mid3', position: { x: 630, y: 0 }, data: { label: '중3' }, style:{width: 210, backgroundColor: 'gray', color: 'white'}  },
  { id: 'high', position: { x: 845, y: 0 }, data: { label: '수학 상' }, style:{width: 230, backgroundColor: 'gray', color: 'white'}  },
  { id: 'low', position: { x: 1080, y: 0 }, data: { label: '수학 하' }, style:{width: 230, backgroundColor: 'gray', color: 'white'}  },
  { id: 'one', position: { x: 1315, y: 0 }, data: { label: '수학1' }, style:{width: 230, backgroundColor: 'gray', color: 'white'}  },


  { id: '1', position: { x: 10, y: 90 }, sourcePosition: Position.Right, targetPosition: Position.Right, 
    data: { label: `수와 연산` }, style:{width: 50, backgroundColor: 'gray', color: 'white'} },
  { id: '2', position: { x: 10, y: 194 }, sourcePosition: Position.Right, targetPosition: Position.Right,
    data: { label: '문자와 식' },style:{width: 60, backgroundColor: 'gray', color: 'white'} },
  { id: '3', position: { x: 10, y: 325 }, sourcePosition: Position.Right, targetPosition: Position.Right,
    data: { label: '함수' },style:{width: 60, backgroundColor: 'gray', color: 'white'} },
  { id: '4', position: { x: 10, y: 430 }, sourcePosition: Position.Right, targetPosition: Position.Right,
    data: { label: '기하' },style:{width: 60, backgroundColor: 'gray', color: 'white'} },
  { id: '5', position: { x: 10, y: 525 }, sourcePosition: Position.Right, targetPosition: Position.Right,
    data: { label: '확률과 통계' }, style:{width: 60, backgroundColor: 'gray', color: 'white'} },
  


  { id: '1-1', position: { x: 120, y: 80 }, targetPosition: Position.Left, sourcePosition: Position.Right, 
    data: { label: '소인수분해' }, style: {width: 80, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',
    } },
  { id: '1-1-1', position: { x: 220, y: 66 }, targetPosition: Position.Left, sourcePosition: Position.Left, 
    data: { label: '최대공약수와 최소공배수' }, style: {width: 90, height: 50, display: 'flex', justifyContent: 'center',alignItems: 'center',} },
  { id: '1-2', position: { x: 120, y: 130 }, targetPosition: Position.Left, sourcePosition: Position.Right, 
    data: { label: '정수와 유리수' }, style: {width: 90, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',} },
  { id: '1-2-1', position: { x: 460, y: 130 }, targetPosition: Position.Left, sourcePosition: Position.Right, 
    data: { label: '유리수와 순환소수' }, style: {width: 110, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',} },

  { id: '2-1', position: {x: 120, y: 208}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '문자와 식'}, style: {width: 80, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '2-1-1', position: {x: 430, y: 160}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: `  단항식과  다항식의 계산`}, style: {width: 80, height: 40, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '2-1-1-1', position: {x: 520, y: 169}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '지수법칙'}, style: {width: 70, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '2-1-2', position: {x: 460, y: 210}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '일차부등식'}, style: {width: 80, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '2-1-3', position: {x: 220, y: 270}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '일차방정식'}, style: {width: 80, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '2-1-3-1', position: {x: 450, y: 240}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '연립일차방정식'}, style: {width: 100, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},  
  { id: '2-1-3-2', position: {x: 700, y: 270}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '이차방정식'}, style: {width: 80, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},  
  { id: '2-1-3-3', position: {x: 480, y: 290}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '일차함수와 일차방정식의 관계'}, style: {width: 140, height: 40, display: 'flex', justifyContent: 'center',alignItems: 'center'},
    type: 'SourceTwoBottom'
  },  

  { id: '3-1', position: {x: 150, y: 335}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '정비례와 반비례'}, style: {width: 120, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '3-1-1', position: {x: 400, y: 335}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '함수'}, style: {width: 60, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '3-1-1-1', position: {x: 490, y: 350}, targetPosition: Position.Left , sourcePosition: Position.Right,
    data: {label: '일차함수와 그래프'}, style: {width: 110, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',},
    type: 'TargetTwoTop'
  },
  { id: '3-1-1-1-1', position: {x: 680, y: 350}, targetPosition: Position.Left , sourcePosition: Position.Right,
    data: {label: '이차함수와 그래프'}, style: {width: 110, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',},
  },  
  { id: '3-1-1-1-1-1', position: {x: 880, y: 300}, targetPosition: Position.Left , sourcePosition: Position.Right,
    data: {label: '이차함수와 이차방정식의 관계'}, style: {width: 110, height: 40, display: 'flex', justifyContent: 'center',alignItems: 'center',},
  },  
    
  { id: '4-1', position: {x: 100, y: 400}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '순서쌍과 좌표, 그래프'}, style: {width: 140, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '4-2', position: {x: 100, y: 470}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '기본도형'}, style: {width: 70, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '4-2-1', position: {x: 200, y: 450}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '평면도형'}, style: {width: 70, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},
  { id: '4-2-2', position: {x: 200, y: 490}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '입체도형'}, style: {width: 70, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},



  { id: '5-1', position: {x: 430, y: 530}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '경우의 수'}, style: {width: 70, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},    
  { id: '5-2', position: {x: 100, y: 570}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '상대도수'}, style: {width: 70, height: 20, display: 'flex', justifyContent: 'center',alignItems: 'center',}},   
  { id: '5-2-1', position: {x: 180, y: 560}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '히스토그램과  도수분포다각형'}, style: {width: 95, height: 50, display: 'flex', justifyContent: 'center',alignItems: 'center',}},   
  { id: '5-2-1-1', position: {x: 280, y: 560}, targetPosition: Position.Left, sourcePosition: Position.Right,
    data: {label: '줄기와 잎그림과 도수분표표'}, style: {width: 100, height: 50, display: 'flex', justifyContent: 'center',alignItems: 'center',}},   
];

const initialEdges = [
  { id: 'm1-e-1-1', source: '1', target: '1-1', type: 'straight' },
  { id: 'm1-e-1-2', source: '1', target: '1-2', type: 'straight' },
  { id: 'm1-e-1-2-1', source: '1-2', target: '1-2-1', type: 'straight' },
  { id: 'm1-e-1-1-1', source: '1-1', target: '1-1-1', type: 'straight' },

  { id: 'm1-e-2-1', source: '2', target: '2-1', type: 'straight' },
  { id: 'm1-e-2-1-1', source: '2-1', target: '2-1-1', type: 'straight' },
  { id: 'm1-e-2-1-1-1', source: '2-1-1', target: '2-1-1-1', type: 'straight' },
  { id: 'm1-e-2-1-2', source: '2-1', target: '2-1-2', type: 'straight' },
  { id: 'm1-e-2-1-3', source: '2-1', target: '2-1-3', type: 'straight' },
  { id: 'm1-e-2-1-3-1', source: '2-1-3', target: '2-1-3-1', type: 'straight' },
  { id: 'm1-e-2-1-3-2', source: '2-1-3', target: '2-1-3-2', type: 'straight' },
  { id: 'm1-e-2-1-3-3', source: '2-1-3', target: '2-1-3-3', type: 'straight' },

  // {
  //   id: '3111-2133',
  //   source: '3-1-1-1',
  //   sourceHandle: 't', // 출발점을 위쪽으로 지정
  //   target: '2-1-3-3',
  // },

  { id: 'm1-e-3-1', source: '3', target: '3-1', type: 'straight' },
  { id: 'm1-e-3-1-1', source: '3-1', target: '3-1-1', type: 'straight' },
  { id: 'm1-e-3-1-1-1', source: '3-1-1', target: '3-1-1-1', type: 'straight' },
  { id: 'm1-e-3-1-1-1-1', source: '3-1-1-1', target: '3-1-1-1-1', type: 'straight' },
  { id: 'm1-e-3-1-1-1-1-1', source: '3-1-1-1-1', target: '3-1-1-1-1-1', type: 'straight' },

  { id: 'm1-e-(4-1)-(3-1-1-1)', source: '4-1', target: '3-1-1-1', type: 'straight' }, // 순서상-일차함수그래프

  { id: 'm1-e-4-1', source: '4', target: '4-1', type: 'straight' },
  { id: 'm1-e-4-2', source: '4', target: '4-2', type: 'straight' },
  { id: 'm1-e-4-2-1', source: '4-2', target: '4-2-1', type: 'straight' },
  { id: 'm1-e-4-2-2', source: '4-2', target: '4-2-2', type: 'straight' },

  { id: 'm1-e-5-1', source: '5', target: '5-1', type: 'straight' },
  { id: 'm1-e-5-2', source: '5', target: '5-2', type: 'straight' },
  { id: 'm1-e-5-2-1', source: '5-2', target: '5-2-1', type: 'straight' },
  { id: 'm1-e-5-2-1-1', source: '5-2-1', target: '5-2-1-1', type: 'straight' },
];

 
export default function FlowChart() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges} 
      />
    </div>
  );
}