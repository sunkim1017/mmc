import { Handle, Position} from "react-flow-renderer";

export function TargetTwoTop() {
  //타겟이 두개 (일차함수와 그래프)
  return(
    <>
    <Handle type="source" position={Position.Left} />
    <Handle type="target" position={Position.Top} id="t"/>
    <Handle type="target" position={Position.Right} id="r" />
    </>
  )
};

export function SourceTwoBottom() {
  //타겟이 두개 (일차함수와 그래프)
  return(
    <>
    <Handle type="source" position={Position.Bottom} id="b"/>
    <Handle type="source" position={Position.Left} id="l"/>
    <Handle type="target" position={Position.Right} />
    </>
  )
}