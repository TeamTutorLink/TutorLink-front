import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

interface CanvasProps {
  width: number;
  height: number;
}

interface Coordinate {
  x: number;
  y: number;
}

const ClassBoard = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined,
  );
  const [isPainting, setIsPainting] = useState(false);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    };
  };

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate,
  ) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      context.strokeStyle = 'red';
      context.lineJoin = 'round';
      context.lineWidth = 5;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const paint = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition],
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  // 지우는 기능 - onClick 이벤트에 바인딩해주기
  //   const clearCanvas = () => {
  //     if (!canvasRef.current) {
  //       return;
  //     }

  //     const canvas: HTMLCanvasElement = canvasRef.current;
  //     canvas.getContext('2d')!!.clearRect(0, 0, canvas.width, canvas.height);
  // }

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);

    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [startPaint, paint, exitPaint]);

  return (
    <StyledContainer>
      <StyledCanvasDiv>
        <canvas
          ref={canvasRef}
          height={height}
          width={width}
          className="canvas"
        />
      </StyledCanvasDiv>
    </StyledContainer>
  );
};

ClassBoard.defaultProps = {
  width: 800,
  height: 600,
};

const StyledContainer = styled.div`
  text-align: center;
`;
const StyledCanvasDiv = styled.div`
  border-radius: 15px;
  background: lightgrey;
`;
export default ClassBoard;
