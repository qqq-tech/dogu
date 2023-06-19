// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.7
// source: inner/types/dc_da.proto

package types

import (
	profile "go-device-controller/types/protocol/generated/proto/outer/profile"
	streaming "go-device-controller/types/protocol/generated/proto/outer/streaming"
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

type DcDaConnectionParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Version  string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
	Nickname string `protobuf:"bytes,2,opt,name=nickname,proto3" json:"nickname,omitempty"`
}

func (x *DcDaConnectionParam) Reset() {
	*x = DcDaConnectionParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaConnectionParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaConnectionParam) ProtoMessage() {}

func (x *DcDaConnectionParam) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaConnectionParam.ProtoReflect.Descriptor instead.
func (*DcDaConnectionParam) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{0}
}

func (x *DcDaConnectionParam) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *DcDaConnectionParam) GetNickname() string {
	if x != nil {
		return x.Nickname
	}
	return ""
}

type DcDaConnectionReturn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DcDaConnectionReturn) Reset() {
	*x = DcDaConnectionReturn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaConnectionReturn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaConnectionReturn) ProtoMessage() {}

func (x *DcDaConnectionReturn) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaConnectionReturn.ProtoReflect.Descriptor instead.
func (*DcDaConnectionReturn) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{1}
}

type DcDaQueryProfileParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProfileMethods []*profile.ProfileMethod `protobuf:"bytes,1,rep,name=profile_methods,json=profileMethods,proto3" json:"profile_methods,omitempty"`
}

func (x *DcDaQueryProfileParam) Reset() {
	*x = DcDaQueryProfileParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaQueryProfileParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaQueryProfileParam) ProtoMessage() {}

func (x *DcDaQueryProfileParam) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaQueryProfileParam.ProtoReflect.Descriptor instead.
func (*DcDaQueryProfileParam) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{2}
}

func (x *DcDaQueryProfileParam) GetProfileMethods() []*profile.ProfileMethod {
	if x != nil {
		return x.ProfileMethods
	}
	return nil
}

type DcDaQueryProfileReturn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info *profile.RuntimeInfo `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
}

func (x *DcDaQueryProfileReturn) Reset() {
	*x = DcDaQueryProfileReturn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaQueryProfileReturn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaQueryProfileReturn) ProtoMessage() {}

func (x *DcDaQueryProfileReturn) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaQueryProfileReturn.ProtoReflect.Descriptor instead.
func (*DcDaQueryProfileReturn) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{3}
}

func (x *DcDaQueryProfileReturn) GetInfo() *profile.RuntimeInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

type DcDaApplyStreamingOptionParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Option *streaming.StreamingOption `protobuf:"bytes,1,opt,name=option,proto3" json:"option,omitempty"`
}

func (x *DcDaApplyStreamingOptionParam) Reset() {
	*x = DcDaApplyStreamingOptionParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaApplyStreamingOptionParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaApplyStreamingOptionParam) ProtoMessage() {}

func (x *DcDaApplyStreamingOptionParam) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaApplyStreamingOptionParam.ProtoReflect.Descriptor instead.
func (*DcDaApplyStreamingOptionParam) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{4}
}

func (x *DcDaApplyStreamingOptionParam) GetOption() *streaming.StreamingOption {
	if x != nil {
		return x.Option
	}
	return nil
}

type DcDaApplyStreamingOptionReturn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DcDaApplyStreamingOptionReturn) Reset() {
	*x = DcDaApplyStreamingOptionReturn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaApplyStreamingOptionReturn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaApplyStreamingOptionReturn) ProtoMessage() {}

func (x *DcDaApplyStreamingOptionReturn) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaApplyStreamingOptionReturn.ProtoReflect.Descriptor instead.
func (*DcDaApplyStreamingOptionReturn) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{5}
}

type DcDaControlParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Control *DeviceControl `protobuf:"bytes,1,opt,name=control,proto3" json:"control,omitempty"`
}

func (x *DcDaControlParam) Reset() {
	*x = DcDaControlParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaControlParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaControlParam) ProtoMessage() {}

func (x *DcDaControlParam) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaControlParam.ProtoReflect.Descriptor instead.
func (*DcDaControlParam) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{6}
}

func (x *DcDaControlParam) GetControl() *DeviceControl {
	if x != nil {
		return x.Control
	}
	return nil
}

type DcDaControlReturn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DcDaControlReturn) Reset() {
	*x = DcDaControlReturn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_da_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcDaControlReturn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcDaControlReturn) ProtoMessage() {}

func (x *DcDaControlReturn) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_da_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcDaControlReturn.ProtoReflect.Descriptor instead.
func (*DcDaControlReturn) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_da_proto_rawDescGZIP(), []int{7}
}

var File_inner_types_dc_da_proto protoreflect.FileDescriptor

var file_inner_types_dc_da_proto_rawDesc = []byte{
	0x0a, 0x17, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x64, 0x63,
	0x5f, 0x64, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x69, 0x6e, 0x6e, 0x65, 0x72,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x1a, 0x20, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2f, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x72,
	0x6f, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x22, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x2f,
	0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x5f,
	0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x20, 0x6f, 0x75,
	0x74, 0x65, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x72, 0x75, 0x6e, 0x74,
	0x69, 0x6d, 0x65, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f,
	0x6f, 0x75, 0x74, 0x65, 0x72, 0x2f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x2f,
	0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x4b, 0x0a, 0x13, 0x44, 0x63, 0x44, 0x61, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f,
	0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x12, 0x1a, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x16, 0x0a, 0x14,
	0x44, 0x63, 0x44, 0x61, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x74, 0x75, 0x72, 0x6e, 0x22, 0x5e, 0x0a, 0x15, 0x44, 0x63, 0x44, 0x61, 0x51, 0x75, 0x65, 0x72,
	0x79, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x12, 0x45, 0x0a,
	0x0f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x2e, 0x70,
	0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x4d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x52, 0x0e, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x4d, 0x65, 0x74,
	0x68, 0x6f, 0x64, 0x73, 0x22, 0x48, 0x0a, 0x16, 0x44, 0x63, 0x44, 0x61, 0x51, 0x75, 0x65, 0x72,
	0x79, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x12, 0x2e,
	0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x6f,
	0x75, 0x74, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x52, 0x75, 0x6e,
	0x74, 0x69, 0x6d, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x22, 0x59,
	0x0a, 0x1d, 0x44, 0x63, 0x44, 0x61, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x53, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x69, 0x6e, 0x67, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x12,
	0x38, 0x0a, 0x06, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x20, 0x2e, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x2e, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e,
	0x67, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x4f, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x06, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x20, 0x0a, 0x1e, 0x44, 0x63, 0x44,
	0x61, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x4f,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x22, 0x48, 0x0a, 0x10, 0x44,
	0x63, 0x44, 0x61, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x12,
	0x34, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x44,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x52, 0x07, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x22, 0x13, 0x0a, 0x11, 0x44, 0x63, 0x44, 0x61, 0x43, 0x6f, 0x6e,
	0x74, 0x72, 0x6f, 0x6c, 0x52, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x42, 0x6a, 0x0a, 0x27, 0x63, 0x6f,
	0x6d, 0x2e, 0x64, 0x6f, 0x67, 0x75, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2e,
	0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x5a, 0x3f, 0x67, 0x6f, 0x2d, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65,
	0x2d, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72,
	0x61, 0x74, 0x65, 0x64, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x69, 0x6e, 0x6e, 0x65, 0x72,
	0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_inner_types_dc_da_proto_rawDescOnce sync.Once
	file_inner_types_dc_da_proto_rawDescData = file_inner_types_dc_da_proto_rawDesc
)

func file_inner_types_dc_da_proto_rawDescGZIP() []byte {
	file_inner_types_dc_da_proto_rawDescOnce.Do(func() {
		file_inner_types_dc_da_proto_rawDescData = protoimpl.X.CompressGZIP(file_inner_types_dc_da_proto_rawDescData)
	})
	return file_inner_types_dc_da_proto_rawDescData
}

var file_inner_types_dc_da_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_inner_types_dc_da_proto_goTypes = []interface{}{
	(*DcDaConnectionParam)(nil),            // 0: inner.types.DcDaConnectionParam
	(*DcDaConnectionReturn)(nil),           // 1: inner.types.DcDaConnectionReturn
	(*DcDaQueryProfileParam)(nil),          // 2: inner.types.DcDaQueryProfileParam
	(*DcDaQueryProfileReturn)(nil),         // 3: inner.types.DcDaQueryProfileReturn
	(*DcDaApplyStreamingOptionParam)(nil),  // 4: inner.types.DcDaApplyStreamingOptionParam
	(*DcDaApplyStreamingOptionReturn)(nil), // 5: inner.types.DcDaApplyStreamingOptionReturn
	(*DcDaControlParam)(nil),               // 6: inner.types.DcDaControlParam
	(*DcDaControlReturn)(nil),              // 7: inner.types.DcDaControlReturn
	(*profile.ProfileMethod)(nil),          // 8: outer.profile.ProfileMethod
	(*profile.RuntimeInfo)(nil),            // 9: outer.profile.RuntimeInfo
	(*streaming.StreamingOption)(nil),      // 10: outer.streaming.StreamingOption
	(*DeviceControl)(nil),                  // 11: inner.types.DeviceControl
}
var file_inner_types_dc_da_proto_depIdxs = []int32{
	8,  // 0: inner.types.DcDaQueryProfileParam.profile_methods:type_name -> outer.profile.ProfileMethod
	9,  // 1: inner.types.DcDaQueryProfileReturn.info:type_name -> outer.profile.RuntimeInfo
	10, // 2: inner.types.DcDaApplyStreamingOptionParam.option:type_name -> outer.streaming.StreamingOption
	11, // 3: inner.types.DcDaControlParam.control:type_name -> inner.types.DeviceControl
	4,  // [4:4] is the sub-list for method output_type
	4,  // [4:4] is the sub-list for method input_type
	4,  // [4:4] is the sub-list for extension type_name
	4,  // [4:4] is the sub-list for extension extendee
	0,  // [0:4] is the sub-list for field type_name
}

func init() { file_inner_types_dc_da_proto_init() }
func file_inner_types_dc_da_proto_init() {
	if File_inner_types_dc_da_proto != nil {
		return
	}
	file_inner_types_device_control_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_inner_types_dc_da_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaConnectionParam); i {
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
		file_inner_types_dc_da_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaConnectionReturn); i {
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
		file_inner_types_dc_da_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaQueryProfileParam); i {
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
		file_inner_types_dc_da_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaQueryProfileReturn); i {
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
		file_inner_types_dc_da_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaApplyStreamingOptionParam); i {
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
		file_inner_types_dc_da_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaApplyStreamingOptionReturn); i {
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
		file_inner_types_dc_da_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaControlParam); i {
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
		file_inner_types_dc_da_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcDaControlReturn); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_inner_types_dc_da_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_inner_types_dc_da_proto_goTypes,
		DependencyIndexes: file_inner_types_dc_da_proto_depIdxs,
		MessageInfos:      file_inner_types_dc_da_proto_msgTypes,
	}.Build()
	File_inner_types_dc_da_proto = out.File
	file_inner_types_dc_da_proto_rawDesc = nil
	file_inner_types_dc_da_proto_goTypes = nil
	file_inner_types_dc_da_proto_depIdxs = nil
}
