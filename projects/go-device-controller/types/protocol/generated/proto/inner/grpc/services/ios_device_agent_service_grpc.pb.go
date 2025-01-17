// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.7
// source: inner/grpc/services/ios_device_agent_service.proto

package services

import (
	context "context"
	params "go-device-controller/types/protocol/generated/proto/inner/params"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// IosDeviceAgentServiceClient is the client API for IosDeviceAgentService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type IosDeviceAgentServiceClient interface {
	Relay(ctx context.Context, opts ...grpc.CallOption) (IosDeviceAgentService_RelayClient, error)
	CheckHealth(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Call(ctx context.Context, in *params.DcIdaParam, opts ...grpc.CallOption) (*params.DcIdaResult, error)
}

type iosDeviceAgentServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewIosDeviceAgentServiceClient(cc grpc.ClientConnInterface) IosDeviceAgentServiceClient {
	return &iosDeviceAgentServiceClient{cc}
}

func (c *iosDeviceAgentServiceClient) Relay(ctx context.Context, opts ...grpc.CallOption) (IosDeviceAgentService_RelayClient, error) {
	stream, err := c.cc.NewStream(ctx, &IosDeviceAgentService_ServiceDesc.Streams[0], "/inner.grpc.services.IosDeviceAgentService/Relay", opts...)
	if err != nil {
		return nil, err
	}
	x := &iosDeviceAgentServiceRelayClient{stream}
	return x, nil
}

type IosDeviceAgentService_RelayClient interface {
	Send(*params.CfGdcDaParamList) error
	Recv() (*params.CfGdcDaResultList, error)
	grpc.ClientStream
}

type iosDeviceAgentServiceRelayClient struct {
	grpc.ClientStream
}

func (x *iosDeviceAgentServiceRelayClient) Send(m *params.CfGdcDaParamList) error {
	return x.ClientStream.SendMsg(m)
}

func (x *iosDeviceAgentServiceRelayClient) Recv() (*params.CfGdcDaResultList, error) {
	m := new(params.CfGdcDaResultList)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *iosDeviceAgentServiceClient) CheckHealth(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/inner.grpc.services.IosDeviceAgentService/CheckHealth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *iosDeviceAgentServiceClient) Call(ctx context.Context, in *params.DcIdaParam, opts ...grpc.CallOption) (*params.DcIdaResult, error) {
	out := new(params.DcIdaResult)
	err := c.cc.Invoke(ctx, "/inner.grpc.services.IosDeviceAgentService/Call", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// IosDeviceAgentServiceServer is the server API for IosDeviceAgentService service.
// All implementations must embed UnimplementedIosDeviceAgentServiceServer
// for forward compatibility
type IosDeviceAgentServiceServer interface {
	Relay(IosDeviceAgentService_RelayServer) error
	CheckHealth(context.Context, *emptypb.Empty) (*emptypb.Empty, error)
	Call(context.Context, *params.DcIdaParam) (*params.DcIdaResult, error)
	mustEmbedUnimplementedIosDeviceAgentServiceServer()
}

// UnimplementedIosDeviceAgentServiceServer must be embedded to have forward compatible implementations.
type UnimplementedIosDeviceAgentServiceServer struct {
}

func (UnimplementedIosDeviceAgentServiceServer) Relay(IosDeviceAgentService_RelayServer) error {
	return status.Errorf(codes.Unimplemented, "method Relay not implemented")
}
func (UnimplementedIosDeviceAgentServiceServer) CheckHealth(context.Context, *emptypb.Empty) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckHealth not implemented")
}
func (UnimplementedIosDeviceAgentServiceServer) Call(context.Context, *params.DcIdaParam) (*params.DcIdaResult, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Call not implemented")
}
func (UnimplementedIosDeviceAgentServiceServer) mustEmbedUnimplementedIosDeviceAgentServiceServer() {}

// UnsafeIosDeviceAgentServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to IosDeviceAgentServiceServer will
// result in compilation errors.
type UnsafeIosDeviceAgentServiceServer interface {
	mustEmbedUnimplementedIosDeviceAgentServiceServer()
}

func RegisterIosDeviceAgentServiceServer(s grpc.ServiceRegistrar, srv IosDeviceAgentServiceServer) {
	s.RegisterService(&IosDeviceAgentService_ServiceDesc, srv)
}

func _IosDeviceAgentService_Relay_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(IosDeviceAgentServiceServer).Relay(&iosDeviceAgentServiceRelayServer{stream})
}

type IosDeviceAgentService_RelayServer interface {
	Send(*params.CfGdcDaResultList) error
	Recv() (*params.CfGdcDaParamList, error)
	grpc.ServerStream
}

type iosDeviceAgentServiceRelayServer struct {
	grpc.ServerStream
}

func (x *iosDeviceAgentServiceRelayServer) Send(m *params.CfGdcDaResultList) error {
	return x.ServerStream.SendMsg(m)
}

func (x *iosDeviceAgentServiceRelayServer) Recv() (*params.CfGdcDaParamList, error) {
	m := new(params.CfGdcDaParamList)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _IosDeviceAgentService_CheckHealth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IosDeviceAgentServiceServer).CheckHealth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/inner.grpc.services.IosDeviceAgentService/CheckHealth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IosDeviceAgentServiceServer).CheckHealth(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _IosDeviceAgentService_Call_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(params.DcIdaParam)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IosDeviceAgentServiceServer).Call(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/inner.grpc.services.IosDeviceAgentService/Call",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IosDeviceAgentServiceServer).Call(ctx, req.(*params.DcIdaParam))
	}
	return interceptor(ctx, in, info, handler)
}

// IosDeviceAgentService_ServiceDesc is the grpc.ServiceDesc for IosDeviceAgentService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var IosDeviceAgentService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "inner.grpc.services.IosDeviceAgentService",
	HandlerType: (*IosDeviceAgentServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CheckHealth",
			Handler:    _IosDeviceAgentService_CheckHealth_Handler,
		},
		{
			MethodName: "Call",
			Handler:    _IosDeviceAgentService_Call_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Relay",
			Handler:       _IosDeviceAgentService_Relay_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "inner/grpc/services/ios_device_agent_service.proto",
}
