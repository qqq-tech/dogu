// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.7
// source: inner/types/cf_gdc_da.proto

package types

import (
	outer "go-device-controller/types/protocol/generated/proto/outer"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type DataChannelProtocolDefault struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DataChannelProtocolDefault) Reset() {
	*x = DataChannelProtocolDefault{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_cf_gdc_da_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DataChannelProtocolDefault) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DataChannelProtocolDefault) ProtoMessage() {}

func (x *DataChannelProtocolDefault) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_cf_gdc_da_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DataChannelProtocolDefault.ProtoReflect.Descriptor instead.
func (*DataChannelProtocolDefault) Descriptor() ([]byte, []int) {
	return file_inner_types_cf_gdc_da_proto_rawDescGZIP(), []int{0}
}

type DataChannelProtocolRelayTcp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Port uint32 `protobuf:"varint,1,opt,name=port,proto3" json:"port,omitempty"`
}

func (x *DataChannelProtocolRelayTcp) Reset() {
	*x = DataChannelProtocolRelayTcp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_cf_gdc_da_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DataChannelProtocolRelayTcp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DataChannelProtocolRelayTcp) ProtoMessage() {}

func (x *DataChannelProtocolRelayTcp) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_cf_gdc_da_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DataChannelProtocolRelayTcp.ProtoReflect.Descriptor instead.
func (*DataChannelProtocolRelayTcp) Descriptor() ([]byte, []int) {
	return file_inner_types_cf_gdc_da_proto_rawDescGZIP(), []int{1}
}

func (x *DataChannelProtocolRelayTcp) GetPort() uint32 {
	if x != nil {
		return x.Port
	}
	return 0
}

type DataChannelProtocolDeviceHttp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DataChannelProtocolDeviceHttp) Reset() {
	*x = DataChannelProtocolDeviceHttp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_cf_gdc_da_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DataChannelProtocolDeviceHttp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DataChannelProtocolDeviceHttp) ProtoMessage() {}

func (x *DataChannelProtocolDeviceHttp) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_cf_gdc_da_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DataChannelProtocolDeviceHttp.ProtoReflect.Descriptor instead.
func (*DataChannelProtocolDeviceHttp) Descriptor() ([]byte, []int) {
	return file_inner_types_cf_gdc_da_proto_rawDescGZIP(), []int{2}
}

type DataChannelProtocolDeviceWebSocket struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Connection *outer.WebSocketConnection `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty"`
}

func (x *DataChannelProtocolDeviceWebSocket) Reset() {
	*x = DataChannelProtocolDeviceWebSocket{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_cf_gdc_da_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DataChannelProtocolDeviceWebSocket) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DataChannelProtocolDeviceWebSocket) ProtoMessage() {}

func (x *DataChannelProtocolDeviceWebSocket) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_cf_gdc_da_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DataChannelProtocolDeviceWebSocket.ProtoReflect.Descriptor instead.
func (*DataChannelProtocolDeviceWebSocket) Descriptor() ([]byte, []int) {
	return file_inner_types_cf_gdc_da_proto_rawDescGZIP(), []int{3}
}

func (x *DataChannelProtocolDeviceWebSocket) GetConnection() *outer.WebSocketConnection {
	if x != nil {
		return x.Connection
	}
	return nil
}

type DataChannelLabel struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Types that are assignable to Protocol:
	//	*DataChannelLabel_Default
	//	*DataChannelLabel_RelayTcp
	//	*DataChannelLabel_DeviceHttp
	//	*DataChannelLabel_DeviceWebSocket
	Protocol isDataChannelLabel_Protocol `protobuf_oneof:"protocol"`
}

func (x *DataChannelLabel) Reset() {
	*x = DataChannelLabel{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_cf_gdc_da_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DataChannelLabel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DataChannelLabel) ProtoMessage() {}

func (x *DataChannelLabel) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_cf_gdc_da_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DataChannelLabel.ProtoReflect.Descriptor instead.
func (*DataChannelLabel) Descriptor() ([]byte, []int) {
	return file_inner_types_cf_gdc_da_proto_rawDescGZIP(), []int{4}
}

func (x *DataChannelLabel) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (m *DataChannelLabel) GetProtocol() isDataChannelLabel_Protocol {
	if m != nil {
		return m.Protocol
	}
	return nil
}

func (x *DataChannelLabel) GetDefault() *DataChannelProtocolDefault {
	if x, ok := x.GetProtocol().(*DataChannelLabel_Default); ok {
		return x.Default
	}
	return nil
}

func (x *DataChannelLabel) GetRelayTcp() *DataChannelProtocolRelayTcp {
	if x, ok := x.GetProtocol().(*DataChannelLabel_RelayTcp); ok {
		return x.RelayTcp
	}
	return nil
}

func (x *DataChannelLabel) GetDeviceHttp() *DataChannelProtocolDeviceHttp {
	if x, ok := x.GetProtocol().(*DataChannelLabel_DeviceHttp); ok {
		return x.DeviceHttp
	}
	return nil
}

func (x *DataChannelLabel) GetDeviceWebSocket() *DataChannelProtocolDeviceWebSocket {
	if x, ok := x.GetProtocol().(*DataChannelLabel_DeviceWebSocket); ok {
		return x.DeviceWebSocket
	}
	return nil
}

type isDataChannelLabel_Protocol interface {
	isDataChannelLabel_Protocol()
}

type DataChannelLabel_Default struct {
	Default *DataChannelProtocolDefault `protobuf:"bytes,2,opt,name=default,proto3,oneof"`
}

type DataChannelLabel_RelayTcp struct {
	RelayTcp *DataChannelProtocolRelayTcp `protobuf:"bytes,3,opt,name=relay_tcp,json=relayTcp,proto3,oneof"`
}

type DataChannelLabel_DeviceHttp struct {
	DeviceHttp *DataChannelProtocolDeviceHttp `protobuf:"bytes,4,opt,name=device_http,json=deviceHttp,proto3,oneof"`
}

type DataChannelLabel_DeviceWebSocket struct {
	DeviceWebSocket *DataChannelProtocolDeviceWebSocket `protobuf:"bytes,5,opt,name=device_web_socket,json=deviceWebSocket,proto3,oneof"`
}

func (*DataChannelLabel_Default) isDataChannelLabel_Protocol() {}

func (*DataChannelLabel_RelayTcp) isDataChannelLabel_Protocol() {}

func (*DataChannelLabel_DeviceHttp) isDataChannelLabel_Protocol() {}

func (*DataChannelLabel_DeviceWebSocket) isDataChannelLabel_Protocol() {}

type CfGdcDaControlParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Control *DeviceControl `protobuf:"bytes,1,opt,name=control,proto3" json:"control,omitempty"`
}

func (x *CfGdcDaControlParam) Reset() {
	*x = CfGdcDaControlParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_cf_gdc_da_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CfGdcDaControlParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CfGdcDaControlParam) ProtoMessage() {}

func (x *CfGdcDaControlParam) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_cf_gdc_da_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CfGdcDaControlParam.ProtoReflect.Descriptor instead.
func (*CfGdcDaControlParam) Descriptor() ([]byte, []int) {
	return file_inner_types_cf_gdc_da_proto_rawDescGZIP(), []int{5}
}

func (x *CfGdcDaControlParam) GetControl() *DeviceControl {
	if x != nil {
		return x.Control
	}
	return nil
}

type CfGdcDaControlResult struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Error *outer.ErrorResult `protobuf:"bytes,1,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *CfGdcDaControlResult) Reset() {
	*x = CfGdcDaControlResult{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_cf_gdc_da_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CfGdcDaControlResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CfGdcDaControlResult) ProtoMessage() {}

func (x *CfGdcDaControlResult) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_cf_gdc_da_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CfGdcDaControlResult.ProtoReflect.Descriptor instead.
func (*CfGdcDaControlResult) Descriptor() ([]byte, []int) {
	return file_inner_types_cf_gdc_da_proto_rawDescGZIP(), []int{6}
}

func (x *CfGdcDaControlResult) GetError() *outer.ErrorResult {
	if x != nil {
		return x.Error
	}
	return nil
}

var File_inner_types_cf_gdc_da_proto protoreflect.FileDescriptor

var file_inner_types_cf_gdc_da_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x63, 0x66,
	0x5f, 0x67, 0x64, 0x63, 0x5f, 0x64, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x69,
	0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x1a, 0x20, 0x69, 0x6e, 0x6e, 0x65,
	0x72, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x63,
	0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x6f, 0x75,
	0x74, 0x65, 0x72, 0x2f, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x13, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x2f, 0x68, 0x74, 0x74, 0x70, 0x5f, 0x77, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x1c, 0x0a, 0x1a, 0x44, 0x61, 0x74, 0x61, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x44, 0x65, 0x66, 0x61,
	0x75, 0x6c, 0x74, 0x22, 0x31, 0x0a, 0x1b, 0x44, 0x61, 0x74, 0x61, 0x43, 0x68, 0x61, 0x6e, 0x6e,
	0x65, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x52, 0x65, 0x6c, 0x61, 0x79, 0x54,
	0x63, 0x70, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x22, 0x1f, 0x0a, 0x1d, 0x44, 0x61, 0x74, 0x61, 0x43, 0x68,
	0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x44, 0x65, 0x76,
	0x69, 0x63, 0x65, 0x48, 0x74, 0x74, 0x70, 0x22, 0x60, 0x0a, 0x22, 0x44, 0x61, 0x74, 0x61, 0x43,
	0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x44, 0x65,
	0x76, 0x69, 0x63, 0x65, 0x57, 0x65, 0x62, 0x53, 0x6f, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x3a, 0x0a,
	0x0a, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x2e, 0x57, 0x65, 0x62, 0x53, 0x6f, 0x63,
	0x6b, 0x65, 0x74, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x63,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0xee, 0x02, 0x0a, 0x10, 0x44, 0x61,
	0x74, 0x61, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x43, 0x0a, 0x07, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x48, 0x00, 0x52, 0x07,
	0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x12, 0x47, 0x0a, 0x09, 0x72, 0x65, 0x6c, 0x61, 0x79,
	0x5f, 0x74, 0x63, 0x70, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x69, 0x6e, 0x6e,
	0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x52, 0x65, 0x6c, 0x61,
	0x79, 0x54, 0x63, 0x70, 0x48, 0x00, 0x52, 0x08, 0x72, 0x65, 0x6c, 0x61, 0x79, 0x54, 0x63, 0x70,
	0x12, 0x4d, 0x0a, 0x0b, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x68, 0x74, 0x74, 0x70, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x48, 0x74, 0x74,
	0x70, 0x48, 0x00, 0x52, 0x0a, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x48, 0x74, 0x74, 0x70, 0x12,
	0x5d, 0x0a, 0x11, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x77, 0x65, 0x62, 0x5f, 0x73, 0x6f,
	0x63, 0x6b, 0x65, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x69, 0x6e, 0x6e,
	0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x44, 0x65, 0x76, 0x69,
	0x63, 0x65, 0x57, 0x65, 0x62, 0x53, 0x6f, 0x63, 0x6b, 0x65, 0x74, 0x48, 0x00, 0x52, 0x0f, 0x64,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x57, 0x65, 0x62, 0x53, 0x6f, 0x63, 0x6b, 0x65, 0x74, 0x42, 0x0a,
	0x0a, 0x08, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x22, 0x4b, 0x0a, 0x13, 0x43, 0x66,
	0x47, 0x64, 0x63, 0x44, 0x61, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x50, 0x61, 0x72, 0x61,
	0x6d, 0x12, 0x34, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x52, 0x07,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x22, 0x40, 0x0a, 0x14, 0x43, 0x66, 0x47, 0x64, 0x63,
	0x44, 0x61, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12,
	0x28, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12,
	0x2e, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x52, 0x65, 0x73, 0x75,
	0x6c, 0x74, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x42, 0x6a, 0x0a, 0x27, 0x63, 0x6f, 0x6d,
	0x2e, 0x64, 0x6f, 0x67, 0x75, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2e, 0x67,
	0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x5a, 0x3f, 0x67, 0x6f, 0x2d, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2d,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x65, 0x64, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_inner_types_cf_gdc_da_proto_rawDescOnce sync.Once
	file_inner_types_cf_gdc_da_proto_rawDescData = file_inner_types_cf_gdc_da_proto_rawDesc
)

func file_inner_types_cf_gdc_da_proto_rawDescGZIP() []byte {
	file_inner_types_cf_gdc_da_proto_rawDescOnce.Do(func() {
		file_inner_types_cf_gdc_da_proto_rawDescData = protoimpl.X.CompressGZIP(file_inner_types_cf_gdc_da_proto_rawDescData)
	})
	return file_inner_types_cf_gdc_da_proto_rawDescData
}

var file_inner_types_cf_gdc_da_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_inner_types_cf_gdc_da_proto_goTypes = []interface{}{
	(*DataChannelProtocolDefault)(nil),         // 0: inner.types.DataChannelProtocolDefault
	(*DataChannelProtocolRelayTcp)(nil),        // 1: inner.types.DataChannelProtocolRelayTcp
	(*DataChannelProtocolDeviceHttp)(nil),      // 2: inner.types.DataChannelProtocolDeviceHttp
	(*DataChannelProtocolDeviceWebSocket)(nil), // 3: inner.types.DataChannelProtocolDeviceWebSocket
	(*DataChannelLabel)(nil),                   // 4: inner.types.DataChannelLabel
	(*CfGdcDaControlParam)(nil),                // 5: inner.types.CfGdcDaControlParam
	(*CfGdcDaControlResult)(nil),               // 6: inner.types.CfGdcDaControlResult
	(*outer.WebSocketConnection)(nil),          // 7: outer.WebSocketConnection
	(*DeviceControl)(nil),                      // 8: inner.types.DeviceControl
	(*outer.ErrorResult)(nil),                  // 9: outer.ErrorResult
}
var file_inner_types_cf_gdc_da_proto_depIdxs = []int32{
	7, // 0: inner.types.DataChannelProtocolDeviceWebSocket.connection:type_name -> outer.WebSocketConnection
	0, // 1: inner.types.DataChannelLabel.default:type_name -> inner.types.DataChannelProtocolDefault
	1, // 2: inner.types.DataChannelLabel.relay_tcp:type_name -> inner.types.DataChannelProtocolRelayTcp
	2, // 3: inner.types.DataChannelLabel.device_http:type_name -> inner.types.DataChannelProtocolDeviceHttp
	3, // 4: inner.types.DataChannelLabel.device_web_socket:type_name -> inner.types.DataChannelProtocolDeviceWebSocket
	8, // 5: inner.types.CfGdcDaControlParam.control:type_name -> inner.types.DeviceControl
	9, // 6: inner.types.CfGdcDaControlResult.error:type_name -> outer.ErrorResult
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_inner_types_cf_gdc_da_proto_init() }
func file_inner_types_cf_gdc_da_proto_init() {
	if File_inner_types_cf_gdc_da_proto != nil {
		return
	}
	file_inner_types_device_control_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_inner_types_cf_gdc_da_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DataChannelProtocolDefault); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_cf_gdc_da_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DataChannelProtocolRelayTcp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_cf_gdc_da_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DataChannelProtocolDeviceHttp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_cf_gdc_da_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DataChannelProtocolDeviceWebSocket); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_cf_gdc_da_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DataChannelLabel); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_cf_gdc_da_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CfGdcDaControlParam); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_cf_gdc_da_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CfGdcDaControlResult); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_inner_types_cf_gdc_da_proto_msgTypes[4].OneofWrappers = []interface{}{
		(*DataChannelLabel_Default)(nil),
		(*DataChannelLabel_RelayTcp)(nil),
		(*DataChannelLabel_DeviceHttp)(nil),
		(*DataChannelLabel_DeviceWebSocket)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_inner_types_cf_gdc_da_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_inner_types_cf_gdc_da_proto_goTypes,
		DependencyIndexes: file_inner_types_cf_gdc_da_proto_depIdxs,
		MessageInfos:      file_inner_types_cf_gdc_da_proto_msgTypes,
	}.Build()
	File_inner_types_cf_gdc_da_proto = out.File
	file_inner_types_cf_gdc_da_proto_rawDesc = nil
	file_inner_types_cf_gdc_da_proto_goTypes = nil
	file_inner_types_cf_gdc_da_proto_depIdxs = nil
}
